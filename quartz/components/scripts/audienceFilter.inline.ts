const STORAGE_KEY = "gematik-brain-audience"

type AudienceIndex = Map<string, string[]>

let audienceIndex: AudienceIndex | null = null

async function loadAudienceIndex(): Promise<AudienceIndex> {
  if (audienceIndex) return audienceIndex
  const data = await fetchData
  audienceIndex = new Map()
  for (const [slug, details] of Object.entries(data)) {
    const d = details as { audience?: string[] }
    audienceIndex.set(slug, d.audience ?? ["technical", "non-technical"])
  }
  return audienceIndex
}

function slugFromHref(href: string): string {
  try {
    const url = new URL(href, location.origin)
    let path = url.pathname
    // Remove trailing slash and leading base path
    path = path.replace(/\/$/, "").replace(/^\//, "")
    return path
  } catch {
    return href.replace(/^\//, "").replace(/\/$/, "")
  }
}

function matchesAudience(pageAudience: string[], selected: string): boolean {
  if (selected === "all") return true
  if (pageAudience.includes("all")) return true
  return pageAudience.includes(selected)
}

async function applyAudienceFilter(audience: string) {
  document.documentElement.dataset.audience = audience
  const index = await loadAudienceIndex()

  // Filter explorer links
  const explorerLinks = document.querySelectorAll<HTMLAnchorElement>(".explorer-ul a[data-for]")
  let shown = 0
  let total = 0

  explorerLinks.forEach((link) => {
    const slug = link.dataset.for ?? ""
    const li = link.closest("li")
    if (!li) return
    const pageAudience = index.get(slug) ?? ["technical", "non-technical"]
    total++
    if (matchesAudience(pageAudience, audience)) {
      li.classList.remove("audience-hidden")
      shown++
    } else {
      li.classList.add("audience-hidden")
    }
  })

  // Filter page listing items (folder/tag pages)
  document.querySelectorAll<HTMLAnchorElement>(".section-li a.internal").forEach((link) => {
    const href = link.getAttribute("href") ?? ""
    const slug = slugFromHref(href)
    const li = link.closest("li")
    if (!li) return
    const pageAudience = index.get(slug) ?? ["technical", "non-technical"]
    total++
    if (matchesAudience(pageAudience, audience)) {
      li.classList.remove("audience-hidden")
      shown++
    } else {
      li.classList.add("audience-hidden")
    }
  })

  // Update status region
  const status = document.getElementById("audience-status")
  if (status && total > 0) {
    status.textContent = `${shown} von ${total} Einträgen angezeigt`
  }
}

// Apply saved preference immediately to avoid flash
const saved = localStorage.getItem(STORAGE_KEY) ?? "all"
document.documentElement.dataset.audience = saved

document.addEventListener("nav", () => {
  // Reset cache on navigation (new page may have different explorer)
  audienceIndex = null

  const group = document.querySelector(".audience-toggle") as HTMLElement | null
  if (!group) return

  const buttons = group.querySelectorAll<HTMLButtonElement>(".audience-btn")
  const stored = localStorage.getItem(STORAGE_KEY) ?? "all"

  function activate(value: string) {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.audienceValue === value
      btn.classList.toggle("active", isActive)
      btn.setAttribute("aria-checked", String(isActive))
      btn.tabIndex = isActive ? 0 : -1
    })
    localStorage.setItem(STORAGE_KEY, value)
    applyAudienceFilter(value)
  }

  activate(stored)

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activate(btn.dataset.audienceValue ?? "all")
    })

    btn.addEventListener("keydown", (e: KeyboardEvent) => {
      const idx = Array.from(buttons).indexOf(btn)
      let next = -1
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        next = (idx + 1) % buttons.length
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        next = (idx - 1 + buttons.length) % buttons.length
      }
      if (next >= 0) {
        e.preventDefault()
        buttons[next].focus()
        activate(buttons[next].dataset.audienceValue ?? "all")
      }
    })
  })
})
