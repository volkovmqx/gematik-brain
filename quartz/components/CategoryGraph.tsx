import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/categoryGraph.scss"

export default (() => {
  const CategoryGraph: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // Extract folder from the current slug (e.g., "technologies/" → "technologies")
    const slug = fileData.slug ?? ""
    const folder = slug.replace(/\/index$/, "").replace(/\/$/, "")

    if (!folder || folder === "index") return null

    const graphCfg = {
      drag: true,
      zoom: true,
      depth: -1,
      scale: 1.0,
      repelForce: 0.6,
      centerForce: 0.5,
      linkDistance: 25,
      fontSize: 0.55,
      opacityScale: 1,
      showTags: false,
      removeTags: [],
      focusOnHover: true,
      enableRadial: false,
    }

    const globalCfg = {
      ...graphCfg,
      scale: 0.9,
      centerForce: 0.2,
      enableRadial: true,
    }

    return (
      <div class="category-graph graph">
        <div class="category-graph-inner">
          <div
            class="category-graph-container graph-container"
            data-cfg={JSON.stringify(graphCfg)}
            data-folder={folder}
          />
          <button class="global-graph-icon category-graph-expand" aria-label="Vollbild">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>
        <div class="global-graph-outer">
          <div class="global-graph-controls">
            <input
              type="text"
              class="global-graph-search"
              placeholder="Suchen..."
              autocomplete="off"
              spellcheck={false}
            />
            <button class="global-graph-close" aria-label="Graph schließen">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div
            class="global-graph-container"
            data-cfg={JSON.stringify(globalCfg)}
            data-folder={folder}
          />
          <div class="global-graph-timeline">
            <button class="timeline-play" aria-label="Abspielen">{"\u25B6"}</button>
            <input type="range" class="timeline-slider" min="0" max="100" value="100" />
            <span class="timeline-date">Alle</span>
          </div>
        </div>
      </div>
    )
  }

  CategoryGraph.css = style
  return CategoryGraph
}) satisfies QuartzComponentConstructor
