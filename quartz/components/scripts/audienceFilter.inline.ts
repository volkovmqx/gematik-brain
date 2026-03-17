const STORAGE_KEY = "gematik-brain-audience"

function applyAudienceFilter(audience: string) {
  document.documentElement.dataset.audience = audience

  document.querySelectorAll("[data-audience]").forEach((el) => {
    if (el instanceof HTMLElement && !el.closest(".audience-toggle")) {
      const elAudience = el.dataset.audience ?? "all"
      if (audience === "all" || elAudience === "all" || elAudience.includes(audience)) {
        el.classList.remove("audience-hidden")
      } else {
        el.classList.add("audience-hidden")
      }
    }
  })
}

// Apply saved preference immediately to avoid flash
const saved = localStorage.getItem(STORAGE_KEY) ?? "all"
document.documentElement.dataset.audience = saved

document.addEventListener("nav", () => {
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
