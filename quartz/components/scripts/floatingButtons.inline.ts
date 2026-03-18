import { getFullSlug } from "../../util/path"

document.addEventListener("nav", () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".floating-button[data-action]")

  for (const btn of buttons) {
    const action = btn.dataset.action
    if (!action || action === "graph") continue

    const handler = () => {
      switch (action) {
        case "scrollTop":
          window.scrollTo({ top: 0, behavior: "smooth" })
          break
        case "scrollBottom":
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          break
        case "random": {
          const slug = getFullSlug(window)
          fetch(`${document.location.origin}/static/contentIndex.json`)
            .then((res) => res.json())
            .then((data) => {
              const pages = Object.keys(data).filter(
                (k) => !k.endsWith("/index") && k !== "index" && k !== slug,
              )
              if (pages.length > 0) {
                const target = pages[Math.floor(Math.random() * pages.length)]
                window.spaNavigate(new URL(`/${target}`, window.location.origin))
              }
            })
          break
        }
      }
    }

    btn.addEventListener("click", handler)
    window.addCleanup(() => btn.removeEventListener("click", handler))
  }
})
