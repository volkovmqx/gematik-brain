const container = document.querySelector(".daily-fact") as HTMLElement | null
if (container) {
  const factsRaw = container.getAttribute("data-facts")
  if (factsRaw) {
    try {
      const facts: { text: string; title: string; slug: string }[] = JSON.parse(factsRaw)
      if (facts.length > 0) {
        // Deterministic daily pick: hash the date string
        const dateStr = new Date().toDateString()
        let hash = 0
        for (let i = 0; i < dateStr.length; i++) {
          hash = (hash + dateStr.charCodeAt(i)) * 31
          hash = hash & hash // keep as 32-bit int
        }
        const index = Math.abs(hash) % facts.length
        const fact = facts[index]

        const textEl = container.querySelector(".daily-fact-text")
        const linkEl = container.querySelector(".daily-fact-link") as HTMLAnchorElement | null
        if (textEl) textEl.textContent = fact.text
        if (linkEl) {
          linkEl.textContent = `→ ${fact.title}`
          linkEl.href = fact.slug
        }
      }
    } catch {
      // silently fail
    }
  }
}
