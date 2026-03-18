import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import { simplifySlug } from "../util/path"
import style from "./styles/contentMeta.scss"
import growthStageStyle from "./styles/growthStage.scss"

// Growth stage logic (merged from GrowthStage component)
type Stage = "setzling" | "wachsend" | "immergruen"

const stageConfig: Record<Stage, { label: string; tooltip: string }> = {
  setzling: {
    label: "Setzling",
    tooltip: "Dieser Artikel ist noch jung und wird weiter ausgebaut",
  },
  wachsend: {
    label: "Wachsend",
    tooltip: "Dieser Artikel ist solide, aber noch in Entwicklung",
  },
  immergruen: {
    label: "Immergrün",
    tooltip: "Dieser Artikel ist gut recherchiert und regelmäßig aktualisiert",
  },
}

function SetzlingIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22V12" />
      <path d="M8 12c0-3 2-6 4-8 2 2 4 5 4 8" />
    </svg>
  )
}

function WachsendIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22V8" />
      <path d="M8 12c0-3 2-5 4-7 2 2 4 4 4 7" />
      <path d="M6 16c0-2 3-4 6-4s6 2 6 4" />
    </svg>
  )
}

function ImmergruenIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22V6" />
      <path d="M9 10c0-2 1.5-4 3-5.5C13.5 6 15 8 15 10" />
      <path d="M6 14c0-2.5 3-4.5 6-4.5s6 2 6 4.5" />
      <path d="M4 18c0-2.5 3.5-4.5 8-4.5s8 2 8 4.5" />
    </svg>
  )
}

const stageIcons: Record<Stage, () => JSX.Element> = {
  setzling: SetzlingIcon,
  wachsend: WachsendIcon,
  immergruen: ImmergruenIcon,
}

function deriveStage(frontmatter: Record<string, unknown>, text: string, linkCount: number): Stage {
  const maturity = frontmatter?.maturity as string | undefined
  if (maturity && maturity in stageConfig) {
    return maturity as Stage
  }

  const wordCount = text?.split(/\s+/).length ?? 0
  const score = wordCount / 50 + linkCount * 3

  if (score >= 20) return "immergruen"
  if (score >= 10) return "wachsend"
  return "setzling"
}

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

function getDepthLabel(linkCount: number): { dots: string; label: string } {
  if (linkCount >= 9) return { dots: "···", label: `${linkCount} Verknüpfungen` }
  if (linkCount >= 4) return { dots: "··", label: `${linkCount} Verknüpfungen` }
  return { dots: "·", label: `${linkCount} Verknüpfungen` }
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, allFiles, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(<Date date={getDate(cfg, fileData)!} locale={cfg.locale} />)
      }

      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      // Depth indicator: outgoing links + incoming backlinks
      const slug = fileData.slug!
      const simpleSlug = simplifySlug(slug)
      const outgoing = fileData.links?.length ?? 0
      const incoming = allFiles.filter(
        (f) => f.links?.some((link) => simplifySlug(link as any) === simpleSlug),
      ).length
      const totalLinks = outgoing + incoming
      if (totalLinks > 0) {
        const { dots, label } = getDepthLabel(totalLinks)
        segments.push(
          <span class="depth-indicator" title={label}>
            <span class="depth-dots" aria-hidden="true">{dots}</span>
            {" "}{label}
          </span>,
        )
      }

      // Growth stage badge
      const frontmatter = fileData.frontmatter ?? {}
      const stage = deriveStage(frontmatter, text, fileData.links?.length ?? 0)
      const stageConf = stageConfig[stage]
      const Icon = stageIcons[stage]
      segments.push(
        <span class="growth-stage" data-stage={stage}>
          <span class="growth-icon"><Icon /></span>
          <span class="growth-label">{stageConf.label}</span>
          <span class="growth-explanation">{stageConf.tooltip}</span>
        </span>,
      )

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style + growthStageStyle

  return ContentMetadata
}) satisfies QuartzComponentConstructor
