import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/audienceFilter.inline"
import style from "./styles/audienceFilter.scss"
import { classNames } from "../util/lang"

const audiences = [
  { value: "all", label: "Alle Inhalte" },
  { value: "non-technical", label: "Management & Strategie" },
  { value: "technical", label: "Technik & Entwicklung" },
] as const

const AudienceFilter: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "audience-filter")} aria-label="Zielgruppe">
      <span class="audience-label">Perspektive:</span>
      <div class="audience-toggle" role="radiogroup" aria-label="Zielgruppe wechseln">
        {audiences.map(({ value, label }) => (
          <button
            role="radio"
            aria-checked={value === "all" ? "true" : "false"}
            data-audience-value={value}
            class={`audience-btn${value === "all" ? " active" : ""}`}
            tabindex={value === "all" ? 0 : -1}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

AudienceFilter.css = style
AudienceFilter.beforeDOMLoaded = script

export default (() => AudienceFilter) satisfies QuartzComponentConstructor
