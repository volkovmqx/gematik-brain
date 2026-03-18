import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import style from "./styles/dailyFact.scss"
// @ts-ignore
import script from "./scripts/dailyFact.inline"

export default (() => {
  const DailyFact: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    const slug = fileData.slug!

    // Extract first sentence from each article at build time
    const facts = allFiles
      .filter((f) => !f.slug?.endsWith("/index") && f.slug !== "index" && f.text)
      .map((f) => {
        const text = f.text ?? ""
        const title = f.frontmatter?.title ?? ""
        const lines = text.split("\n").filter((l) => l.trim() && !l.startsWith("#"))
        // Skip lines matching the article title (plain text heading)
        const contentLines = lines.filter((l) => l.trim() !== title.trim())
        const firstLine = contentLines[0]?.trim() ?? ""
        const firstSentence = firstLine.includes(".")
          ? firstLine.slice(0, firstLine.indexOf(".") + 1)
          : ""
        return {
          text: firstSentence,
          title,
          slug: resolveRelative(slug, f.slug!),
        }
      })
      .filter((f) => f.text.length > 20 && f.text.includes("."))

    return (
      <div class="daily-fact" data-facts={JSON.stringify(facts)}>
        <div class="daily-fact-header">Wusstest du schon?</div>
        <p class="daily-fact-text">Lade...</p>
        <a class="daily-fact-link" href="#">→ Zum Artikel</a>
      </div>
    )
  }

  DailyFact.css = style
  DailyFact.afterDOMLoaded = script
  return DailyFact
}) satisfies QuartzComponentConstructor
