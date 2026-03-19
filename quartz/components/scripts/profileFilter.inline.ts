const PROFILE_KEY = "gematik-brain-profile"
const ONBOARDING_KEY = "gematik-brain-onboarding"
const EXPANDED_KEY = "gematik-brain-expanded-callouts"

interface Profile {
  cards: number[]
  sectors: string[]
  interests: string[]
  audience: string
}

function getProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as Profile
  } catch {
    return null
  }
}

function getURLOverrides(): Partial<Profile> | null {
  const params = new URLSearchParams(location.search)
  const sector = params.get("sector")
  const interests = params.get("interests")
  if (!sector && !interests) return null
  return {
    sectors: sector ? sector.split(",") : [],
    interests: interests ? interests.split(",") : [],
    audience: params.get("audience") ?? "non-technical",
  }
}

// Apply immediately to prevent flash
const profile = getProfile()
const skipped = localStorage.getItem(ONBOARDING_KEY) === "skipped"
document.documentElement.dataset.hasProfile = String(!!profile || skipped)
if (profile) {
  document.documentElement.dataset.audience = profile.audience ?? "all"
}

const sectorLabels: Record<string, string> = {
  arztpraxis: "Arztpraxis",
  krankenhaus: "Krankenhaus",
  zahnarzt: "Zahnmedizin",
  psychotherapie: "Psychotherapie",
  apotheke: "Apotheke",
  pflege: "Pflege",
  therapie: "Therapie",
  hebamme: "Hebamme",
  startup: "Startup",
  hersteller: "Hersteller",
  "it-dienstleister": "IT-Dienst",
  "ti-infrastruktur": "TI-Infra",
  kasse: "Kostenträger",
  regulierung: "Regulierung",
  verband: "Verband",
  forschung: "Forschung",
  patient: "Patient",
  arbeitgeber: "Arbeitgeber",
}

const interestLabels: Record<string, string> = {
  compliance: "Compliance",
  technik: "Technik",
  business: "Business",
  patient: "Patientensicht",
}

function scoreRelevance(
  articleRelevance: { sectors?: string[]; interests?: string[] } | undefined,
  profileSectors: string[],
  profileInterests: string[],
): number {
  if (!articleRelevance) return 0.5
  let score = 0
  const artSectors = articleRelevance.sectors ?? []
  const artInterests = articleRelevance.interests ?? []

  if (artSectors.length > 0) {
    const overlap = artSectors.filter((s) => profileSectors.includes(s)).length
    score += (overlap / artSectors.length) * 0.6
  } else {
    score += 0.3
  }

  if (artInterests.length > 0) {
    const overlap = artInterests.filter((i) => profileInterests.includes(i)).length
    score += (overlap / artInterests.length) * 0.4
  } else {
    score += 0.2
  }

  return score
}

document.addEventListener("nav", async () => {
  const urlOverrides = getURLOverrides()
  const stored = getProfile()
  const active: Profile | null = urlOverrides
    ? {
        cards: [],
        sectors: urlOverrides.sectors ?? [],
        interests: urlOverrides.interests ?? [],
        audience: urlOverrides.audience ?? "non-technical",
      }
    : stored

  const emptyEl = document.getElementById("profile-empty")
  const activeEl = document.getElementById("profile-active")
  const pillsEl = document.getElementById("profile-pills")

  if (!active) {
    if (emptyEl) emptyEl.style.display = ""
    if (activeEl) activeEl.style.display = "none"
    document
      .querySelectorAll(".profile-dimmed")
      .forEach((el) => el.classList.remove("profile-dimmed"))
    document
      .querySelectorAll(".audience-hidden")
      .forEach((el) => el.classList.remove("audience-hidden"))
    return
  }

  // Show profile pills
  if (emptyEl) emptyEl.style.display = "none"
  if (activeEl) activeEl.style.display = ""
  document.documentElement.dataset.audience = active.audience

  if (pillsEl) {
    while (pillsEl.firstChild) {
      pillsEl.removeChild(pillsEl.firstChild)
    }
    for (const s of active.sectors.slice(0, 3)) {
      const pill = document.createElement("span")
      pill.className = "profile-pill sector-pill"
      pill.textContent = sectorLabels[s] ?? s
      pillsEl.appendChild(pill)
    }
    for (const i of active.interests.slice(0, 2)) {
      const pill = document.createElement("span")
      pill.className = "profile-pill interest-pill"
      pill.dataset.interest = i
      pill.textContent = interestLabels[i] ?? i
      pillsEl.appendChild(pill)
    }
  }

  // Reset button (clone to avoid duplicate listeners on SPA nav)
  const resetBtn = document.getElementById("profile-reset")
  if (resetBtn) {
    const newBtn = resetBtn.cloneNode(true) as HTMLElement
    resetBtn.parentNode?.replaceChild(newBtn, resetBtn)
    newBtn.addEventListener("click", () => {
      localStorage.removeItem(PROFILE_KEY)
      localStorage.removeItem(ONBOARDING_KEY)
      document.documentElement.dataset.hasProfile = "false"
      location.reload()
    })
  }

  // Edit button
  const editBtn = document.getElementById("profile-edit")
  if (editBtn) {
    const newBtn = editBtn.cloneNode(true) as HTMLElement
    editBtn.parentNode?.replaceChild(newBtn, editBtn)
    newBtn.addEventListener("click", () => {
      localStorage.removeItem(PROFILE_KEY)
      localStorage.removeItem(ONBOARDING_KEY)
      document.documentElement.dataset.hasProfile = "false"
      window.location.href = "/"
    })
  }

  // Apply relevance scoring to explorer and page listings
  const data = await fetchData

  function applyDimming(link: HTMLAnchorElement, slug: string) {
    const li = link.closest("li")
    if (!li) return

    const details = (data as Record<string, any>)[slug]
    if (!details) return

    // Audience filter (hide)
    const pageAudience: string[] = details.audience ?? ["technical", "non-technical"]
    if (active.audience !== "all" && !pageAudience.includes(active.audience)) {
      li.classList.add("audience-hidden")
    } else {
      li.classList.remove("audience-hidden")
    }

    // Relevance dimming
    const rel = details.relevance as { sectors?: string[]; interests?: string[] } | undefined
    const score = scoreRelevance(rel, active.sectors, active.interests)
    if (score < 0.3) {
      li.classList.add("profile-dimmed")
    } else {
      li.classList.remove("profile-dimmed")
    }
  }

  // Explorer links
  document.querySelectorAll<HTMLAnchorElement>(".explorer-ul a[data-for]").forEach((link) => {
    applyDimming(link, link.dataset.for ?? "")
  })

  // Page listing links
  document.querySelectorAll<HTMLAnchorElement>(".section-li a.internal").forEach((link) => {
    const href = link.getAttribute("href") ?? ""
    try {
      const url = new URL(href, location.origin)
      const slug = url.pathname.replace(/\/$/, "").replace(/^\//, "")
      applyDimming(link, slug)
    } catch {
      // ignore malformed URLs
    }
  })

  // Interest callout visibility
  const interesseCallouts = document.querySelectorAll<HTMLElement>(
    '.callout[data-callout^="interesse"]',
  )

  // Load user-expanded callouts from sessionStorage
  let expandedSet: Set<string>
  try {
    const raw = sessionStorage.getItem(EXPANDED_KEY)
    expandedSet = raw ? new Set(JSON.parse(raw) as string[]) : new Set()
  } catch {
    expandedSet = new Set()
  }
  const pagePath = location.pathname

  function saveExpanded() {
    try {
      sessionStorage.setItem(EXPANDED_KEY, JSON.stringify([...expandedSet]))
    } catch {
      // ignore
    }
  }

  function expandCallout(callout: HTMLElement) {
    const interest = (callout.dataset.callout ?? "").replace("interesse-", "")
    callout.classList.remove("interesse-collapsed")
    callout.style.opacity = ""
    callout.style.borderBottom = ""
    // Remove the hint span
    const hint = callout.querySelector(".interesse-hint")
    if (hint) hint.remove()
    // Restore callout content
    const content = callout.querySelector(".callout-content") as HTMLElement | null
    if (content) {
      content.style.maxHeight = ""
      content.style.paddingBottom = ""
    }
    // Persist in sessionStorage
    expandedSet.add(pagePath + "#" + interest)
    saveExpanded()
  }

  function injectHint(callout: HTMLElement) {
    const titleRow = callout.querySelector(".callout-title")
    if (!titleRow || titleRow.querySelector(".interesse-hint")) return
    const hint = document.createElement("span")
    hint.className = "interesse-hint"
    hint.textContent = "\u25B8 Einblenden"
    hint.addEventListener("click", (e) => {
      e.stopPropagation()
      expandCallout(callout)
    })
    titleRow.appendChild(hint)
  }

  interesseCallouts.forEach((callout) => {
    const type = callout.dataset.callout ?? ""
    const interest = type.replace("interesse-", "")
    const wasExpanded = expandedSet.has(pagePath + "#" + interest)

    if (interest && !active.interests.includes(interest) && !wasExpanded) {
      callout.classList.add("interesse-collapsed")
      // Enable fold behavior on the callout
      callout.dataset.calloutFold = ""
      injectHint(callout)
      // Also handle click on the callout title to expand
      const titleRow = callout.querySelector(".callout-title")
      if (titleRow) {
        titleRow.addEventListener("click", () => {
          if (callout.classList.contains("interesse-collapsed")) {
            expandCallout(callout)
          }
        })
      }
    } else {
      callout.classList.remove("interesse-collapsed")
    }
  })

  // Build interesse navigator in the right sidebar
  const existingNav = document.querySelector(".interesse-nav")
  if (existingNav) existingNav.remove()

  if (interesseCallouts.length > 0) {
    const navTypeLabels: Record<string, string> = {
      compliance: "Compliance",
      technik: "Technik",
      business: "Business",
      patient: "Patientensicht",
    }

    // Find the right sidebar (TableOfContents area)
    const tocBlock = document.querySelector(".toc.desktop-only")
    if (tocBlock) {
      const nav = document.createElement("div")
      nav.className = "interesse-nav"

      const heading = document.createElement("div")
      heading.className = "interesse-nav-heading"
      heading.textContent = "Perspektiven"
      nav.appendChild(heading)

      interesseCallouts.forEach((callout) => {
        const type = callout.dataset.callout ?? ""
        const interest = type.replace("interesse-", "")
        const titleEl = callout.querySelector(".callout-title-inner")
        const label =
          titleEl?.textContent?.trim() ?? navTypeLabels[interest] ?? interest

        const btn = document.createElement("button")
        btn.className = "interesse-nav-item"
        btn.dataset.type = interest
        if (!active.interests.includes(interest)) {
          btn.classList.add("interesse-nav-dimmed")
        }

        const dot = document.createElement("span")
        dot.className = "interesse-nav-dot"
        btn.appendChild(dot)

        const text = document.createElement("span")
        text.textContent = label
        btn.appendChild(text)

        btn.addEventListener("click", () => {
          callout.scrollIntoView({ behavior: "smooth", block: "center" })
          if (callout.classList.contains("interesse-collapsed")) {
            expandCallout(callout)
          }
        })

        nav.appendChild(btn)
      })

      // Color legend
      const legend = document.createElement("div")
      legend.className = "interesse-nav-legend"
      const legendItems: [string, string][] = [
        ["compliance", "Compliance"],
        ["technik", "Technik"],
        ["business", "Business"],
        ["patient", "Patient"],
      ]
      for (const [type, label] of legendItems) {
        const item = document.createElement("span")
        item.className = "interesse-nav-legend-item"
        item.dataset.type = type
        const dot = document.createElement("span")
        dot.className = "legend-dot"
        item.appendChild(dot)
        const text = document.createTextNode(label)
        item.appendChild(text)
        legend.appendChild(item)
      }
      nav.appendChild(legend)

      tocBlock.parentElement?.insertBefore(nav, tocBlock)
    }
  }
})
