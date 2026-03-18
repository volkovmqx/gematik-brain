import { getFullSlug, resolveRelative } from "../../util/path"

document.addEventListener("nav", () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".floating-button[data-action]")

  for (const btn of buttons) {
    const action = btn.dataset.action
    if (!action || action === "graph") continue

    const handler = async () => {
      switch (action) {
        case "scrollTop":
          window.scrollTo({ top: 0, behavior: "smooth" })
          break
        case "scrollBottom":
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          break
        case "random": {
          const currentSlug = getFullSlug(window)
          const data = await fetchData
          const pages = Object.keys(data).filter(
            (k) => !k.endsWith("/index") && k !== "index" && k !== currentSlug,
          )
          if (pages.length > 0) {
            const target = pages[Math.floor(Math.random() * pages.length)]
            const url = new URL(resolveRelative(currentSlug, target), window.location.toString())
            window.spaNavigate(url)
          }
          break
        }
      }
    }

    btn.addEventListener("click", handler)
    window.addCleanup(() => btn.removeEventListener("click", handler))
  }
})
