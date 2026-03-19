const PROFILE_KEY = "gematik-brain-profile"
const ONBOARDING_KEY = "gematik-brain-onboarding"

interface CardData {
  id: number
  sectors: string[]
  interests: string[]
  audience: string
}

document.addEventListener("nav", () => {
  const grid = document.querySelector<HTMLElement>(".scenario-grid")
  if (!grid) return

  const cardsData: CardData[] = JSON.parse(grid.dataset.cards ?? "[]")
  const cardButtons = grid.querySelectorAll<HTMLButtonElement>(".scenario-card")
  const confirmBtn = document.getElementById("scenario-confirm") as HTMLButtonElement | null
  const moreBtn = document.getElementById("scenario-more") as HTMLButtonElement | null
  const skipBtn = document.getElementById("scenario-skip") as HTMLButtonElement | null

  const selected = new Set<number>()

  function updateUI() {
    cardButtons.forEach((btn) => {
      const id = parseInt(btn.dataset.cardId ?? "0", 10)
      btn.classList.toggle("selected", selected.has(id))
    })
    if (confirmBtn) {
      confirmBtn.disabled = selected.size === 0
    }
  }

  // Card selection
  cardButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.cardId ?? "0", 10)
      if (selected.has(id)) {
        selected.delete(id)
      } else {
        selected.add(id)
      }
      updateUI()
    })
  })

  // Show more cards
  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      grid.classList.add("expanded")
      moreBtn.style.display = "none"
    })
  }

  // Skip onboarding
  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      localStorage.setItem(ONBOARDING_KEY, "skipped")
      document.documentElement.dataset.hasProfile = "true"
      location.reload()
    })
  }

  // Confirm selection → compute and save profile
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      if (selected.size === 0) return

      const selectedCards = cardsData.filter((c) => selected.has(c.id))
      const sectors = [...new Set(selectedCards.flatMap((c) => c.sectors))]
      const interests = [...new Set(selectedCards.flatMap((c) => c.interests))]
      const hasTechnical = selectedCards.some((c) => c.audience === "technical")
      const audience = hasTechnical ? "technical" : "non-technical"

      const profile = {
        cards: [...selected],
        sectors,
        interests,
        audience,
      }

      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
      localStorage.removeItem(ONBOARDING_KEY)
      document.documentElement.dataset.hasProfile = "true"
      location.reload()
    })
  }
})
