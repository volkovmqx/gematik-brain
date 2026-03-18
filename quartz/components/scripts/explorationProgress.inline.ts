// Reads visited pages from graph localStorage and updates progress rings
const localStorageKey = "graph-visited"

function getVisited(): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"))
  } catch {
    return new Set()
  }
}

document.addEventListener("nav", () => {
  const visited = getVisited()
  const rings = document.querySelectorAll<HTMLElement>(".category-progress")

  for (const ring of rings) {
    const folder = ring.getAttribute("data-folder")
    const total = parseInt(ring.getAttribute("data-total") ?? "0", 10)
    if (!folder || total === 0) continue

    // Count visited slugs that belong to this folder (exclude index pages)
    let count = 0
    for (const slug of visited) {
      if (slug.startsWith(folder + "/") && slug !== folder + "/") {
        const afterFolder = slug.slice(folder.length + 1)
        if (afterFolder && !afterFolder.endsWith("/")) count++
      }
    }

    const fraction = Math.min(count / total, 1)
    const circumference = 2 * Math.PI * 10 // radius=10
    const offset = circumference * (1 - fraction)

    const fillEl = ring.querySelector<SVGCircleElement>(".progress-ring-fill")
    const textEl = ring.querySelector<HTMLElement>(".progress-text")

    if (fillEl) {
      fillEl.style.strokeDasharray = `${circumference}`
      fillEl.style.strokeDashoffset = `${offset}`
    }

    if (textEl) {
      if (count >= total) {
        textEl.className = "progress-complete"
        textEl.textContent = "Alle gelesen!"
      } else {
        textEl.textContent = `${count}/${total} gelesen`
      }
    }
  }
})
