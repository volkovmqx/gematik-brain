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

    return (
      <div class="category-graph">
        <div
          class="category-graph-container graph-container"
          data-cfg={JSON.stringify(graphCfg)}
          data-folder={folder}
        />
      </div>
    )
  }

  CategoryGraph.css = style
  return CategoryGraph
}) satisfies QuartzComponentConstructor
