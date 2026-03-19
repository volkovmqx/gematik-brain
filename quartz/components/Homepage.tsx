import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { getDate } from "./Date"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/homepage.scss"
import dailyFactStyle from "./styles/dailyFact.scss"
import heatmapStyle from "./styles/heatmap.scss"
import explorationStyle from "./styles/explorationProgress.scss"
import scenarioStyle from "./styles/scenarioCards.scss"
// @ts-ignore
import explorationScript from "./scripts/explorationProgress.inline"
// @ts-ignore
import dailyFactScript from "./scripts/dailyFact.inline"
// @ts-ignore
import scenarioScript from "./scripts/scenarioCards.inline"

interface ScenarioCard {
  id: number
  icon: string
  title: string
  description: string
  sectors: string[]
  interests: string[]
  audience: string
  primary: boolean
}

const scenarioCards: ScenarioCard[] = [
  // Largest audiences first: citizens, employers, common healthcare
  { id: 13, icon: "\u{1F464}", title: "Meine Gesundheitsdaten", description: "", sectors: ["patient"], interests: ["patient"], audience: "non-technical", primary: true },
  { id: 14, icon: "\u{1F3E2}", title: "eAU f\u00FCr Arbeitgeber", description: "", sectors: ["arbeitgeber"], interests: ["compliance"], audience: "non-technical", primary: true },
  { id: 1, icon: "\u{1FA7A}", title: "ePA in meiner Praxis", description: "", sectors: ["arztpraxis"], interests: ["compliance"], audience: "non-technical", primary: true },
  { id: 5, icon: "\u{1F48A}", title: "E-Rezept in der Apotheke", description: "", sectors: ["apotheke"], interests: ["compliance"], audience: "non-technical", primary: true },
  { id: 3, icon: "\u{1F3E5}", title: "Krankenhaus-IT", description: "", sectors: ["krankenhaus"], interests: ["compliance", "technik"], audience: "non-technical", primary: true },
  { id: 7, icon: "\u{1F932}", title: "Pflege digitalisieren", description: "", sectors: ["pflege"], interests: ["compliance"], audience: "non-technical", primary: true },
  { id: 2, icon: "\u{1F9B7}", title: "Digitale Zahnmedizin", description: "", sectors: ["zahnarzt"], interests: ["compliance"], audience: "non-technical", primary: true },
  { id: 4, icon: "\u{1F9E0}", title: "Psychotherapie digital", description: "", sectors: ["psychotherapie"], interests: ["compliance"], audience: "non-technical", primary: true },
  // Smaller/specialized audiences
  { id: 8, icon: "\u{1F3C3}", title: "TI f\u00FCr Therapeuten", description: "", sectors: ["therapie"], interests: ["compliance"], audience: "non-technical", primary: false },
  { id: 9, icon: "\u{1F930}", title: "Hebammenversorgung", description: "", sectors: ["hebamme"], interests: ["compliance", "patient"], audience: "non-technical", primary: false },
  { id: 15, icon: "\u{1F3E6}", title: "Kassen-Digitalisierung", description: "", sectors: ["kasse"], interests: ["business", "technik"], audience: "non-technical", primary: false },
  { id: 16, icon: "\u{1F3DB}\u{FE0F}", title: "Regulierung und Politik", description: "", sectors: ["regulierung", "verband"], interests: ["compliance", "business"], audience: "non-technical", primary: false },
  { id: 6, icon: "\u{1F4F1}", title: "CardLink und Online-Rezepte", description: "", sectors: ["apotheke", "startup"], interests: ["compliance", "business"], audience: "non-technical", primary: false },
  // Technical / developer audiences
  { id: 10, icon: "\u{1F4BB}", title: "App oder DiGA bauen", description: "", sectors: ["startup"], interests: ["technik", "business"], audience: "technical", primary: false },
  { id: 11, icon: "\u{1F527}", title: "FHIR und TI-APIs", description: "", sectors: ["hersteller", "it-dienstleister"], interests: ["technik"], audience: "technical", primary: false },
  { id: 12, icon: "\u{1F510}", title: "TI-Sicherheit", description: "", sectors: ["it-dienstleister"], interests: ["technik", "compliance"], audience: "technical", primary: false },
]

const categories = [
  {
    title: "Anwendungen",
    folder: "technologies",
    icon: "📱",
    description: "ePA, E-Rezept, KIM, TI-Messenger",
  },
  {
    title: "Infrastruktur",
    folder: "infrastructure",
    icon: "🔧",
    description: "TI, Konnektoren, eGK, SMC-B",
  },
  {
    title: "Standards",
    folder: "standards",
    icon: "📐",
    description: "FHIR, HL7, IHE, XDS",
  },
  {
    title: "Prozesse",
    folder: "processes",
    icon: "🔄",
    description: "VSDM, NFDM, Workflows",
  },
  {
    title: "Organisationen",
    folder: "organization",
    icon: "🏛️",
    description: "gematik, BSI, BfArM",
  },
  {
    title: "Konzepte",
    folder: "concepts",
    icon: "💡",
    description: "Kryptografie, Sicherheit, IT-Grundlagen",
  },
] as const

export default (() => {
  const Homepage: QuartzComponent = ({
    fileData,
    allFiles,
    cfg,
    displayClass,
  }: QuartzComponentProps) => {
    const slug = fileData.slug!
    const sortFn = byDateAndAlphabetical(cfg)

    // Count articles per category
    const categoryCounts = categories.map((cat) => {
      const files = allFiles.filter(
        (f) => f.relativePath?.startsWith(cat.folder + "/") && !f.slug?.endsWith("/index"),
      )
      const topLinks = files
        .sort(sortFn)
        .slice(0, 3)
        .map((f) => ({
          title: f.frontmatter?.title ?? f.slug!,
          href: resolveRelative(slug, f.slug!),
        }))
      return { ...cat, count: files.length, topLinks }
    })

    const contentFiles = allFiles.filter(
      (f) => !f.slug?.endsWith("/index") && f.slug !== "index",
    )
    const totalArticles = contentFiles.length
    const totalLinks = allFiles.reduce((sum, f) => sum + (f.links?.length ?? 0), 0)

    // Daily fact data
    const facts = contentFiles
      .filter((f) => f.text)
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

    // Heatmap: count articles modified per day over last 13 weeks
    const now = new Date()
    const activityMap = new Map<string, number>()
    for (const f of contentFiles) {
      const date = getDate(cfg, f)
      if (!date) continue
      const key = date.toISOString().slice(0, 10)
      activityMap.set(key, (activityMap.get(key) ?? 0) + 1)
    }

    // Build grid: 13 weeks x 7 days, always including today
    // Find this week's Monday
    const currentDay = now.getDay()
    const currentMonday = new Date(now)
    currentMonday.setDate(now.getDate() - ((currentDay + 6) % 7))
    // Go back 12 more weeks (13 total columns)
    const startDate = new Date(currentMonday)
    startDate.setDate(currentMonday.getDate() - 12 * 7)

    const heatmapCells: { date: Date; count: number }[] = []
    for (let i = 0; i < 91; i++) {
      const d = new Date(startDate)
      d.setDate(d.getDate() + i)
      const key = d.toISOString().slice(0, 10)
      heatmapCells.push({ date: d, count: activityMap.get(key) ?? 0 })
    }

    function heatLevel(count: number): number {
      if (count === 0) return 0
      if (count === 1) return 1
      if (count <= 3) return 2
      return 3
    }

    // Recent updates
    const recentPages = allFiles
      .filter((f) => !f.slug?.endsWith("/index") && f.slug !== "index" && f.dates)
      .sort(sortFn)
      .slice(0, 5)

    return (
      <div class="homepage">
        {/* Hero */}
        <section class="homepage-hero">
          <h1 class="homepage-title">gematik Brain</h1>
          <p class="homepage-tagline">Wissensgraph der digitalen Gesundheitsinfrastruktur</p>
        </section>

        {/* About */}
        <section class="homepage-about">
          <p class="about-text">
            Die Telematikinfrastruktur betrifft alle im Gesundheitswesen, aber die
            Dokumentation ist verstreut und oft schwer zugänglich. Dieses Projekt
            sammelt das Wissen an einem Ort und erklärt es so, dass man es auch
            ohne Informatikstudium versteht.
          </p>
          <div class="about-meta">
            <span>KI-gepflegt</span>
            <span aria-hidden="true">·</span>
            <span>Open Source</span>
            <span aria-hidden="true">·</span>
            <a href="https://github.com/volkovmqx/gematik-brain">GitHub</a>
          </div>
        </section>

        {/* Scenario onboarding (first visit) */}
        <section id="scenario-onboarding" class="scenario-onboarding">
          <h2 class="scenario-heading">Wie nutzen Sie die Telematikinfrastruktur?</h2>
          <p class="scenario-subheading">
            Wählen Sie 1-3 Szenarien. Wir passen die Inhalte an Ihre Perspektive an.
          </p>
          <div class="scenario-grid" data-cards={JSON.stringify(scenarioCards)}>
            {scenarioCards.map((card) => (
              <button
                class={`scenario-card${card.primary ? "" : " scenario-extra"}`}
                data-card-id={card.id}
              >
                <span class="scenario-icon" aria-hidden="true">{card.icon}</span>
                <span class="scenario-title">{card.title}</span>
              </button>
            ))}
          </div>
          <div class="scenario-actions">
            <button class="scenario-more" id="scenario-more">Mehr Szenarien anzeigen</button>
            <button class="scenario-confirm" id="scenario-confirm" disabled>Los geht's</button>
            <button class="scenario-skip" id="scenario-skip">Überspringen</button>
          </div>
        </section>

        {/* Main content (return visits) */}
        <div id="homepage-main" class="homepage-main">

        {/* Stats */}
        <div class="homepage-stats" role="list">
          <div class="homepage-stat" role="listitem">
            <span class="stat-number" data-stat="articles">
              {totalArticles}
            </span>
            <span class="stat-label">Artikel</span>
          </div>
          <span class="stat-separator" aria-hidden="true">
            ·
          </span>
          <div class="homepage-stat" role="listitem">
            <span class="stat-number" data-stat="links">
              {totalLinks}
            </span>
            <span class="stat-label">Verknüpfungen</span>
          </div>
          <span class="stat-separator" aria-hidden="true">
            ·
          </span>
          <div class="homepage-stat" role="listitem">
            <span class="stat-number" data-stat="categories">
              {categories.length}
            </span>
            <span class="stat-label">Kategorien</span>
          </div>
        </div>

        {/* Daily Fact */}
        <div class="daily-fact" data-facts={JSON.stringify(facts)}>
          <div class="daily-fact-header">Wusstest du schon?</div>
          <p class="daily-fact-text">Lade...</p>
          <a class="daily-fact-link" href="#">→ Zum Artikel</a>
        </div>

        {/* Category Cards */}
        <section class="homepage-categories">
          {categoryCounts.map((cat) => (
            <a
              href={resolveRelative(slug, `${cat.folder}/` as any)}
              class="category-card"
            >
              <div class="category-header">
                <span class="category-icon" aria-hidden="true">
                  {cat.icon}
                </span>
                <span class="category-count">{cat.count}</span>
              </div>
              <h3 class="category-title">{cat.title}</h3>
              <p class="category-desc">{cat.description}</p>
              {cat.topLinks.length > 0 && (
                <ul class="category-links">
                  {cat.topLinks.map((link) => (
                    <li>{link.title}</li>
                  ))}
                </ul>
              )}
              <div class="category-progress" data-folder={cat.folder} data-total={cat.count}>
                <svg class="progress-ring" viewBox="0 0 24 24">
                  <circle class="progress-ring-bg" cx="12" cy="12" r="10" />
                  <circle class="progress-ring-fill" cx="12" cy="12" r="10"
                    style="stroke-dasharray: 62.83; stroke-dashoffset: 62.83" />
                </svg>
                <span class="progress-text">0/{cat.count} gelesen</span>
              </div>
            </a>
          ))}
        </section>

        {/* Recent Updates */}
        <section class="homepage-recent">
          <h2 class="section-heading">Letzte Änderungen</h2>
          <ul class="recent-list">
            {recentPages.map((page) => {
              const date = getDate(cfg, page)
              const title = page.frontmatter?.title ?? page.slug!
              return (
                <li class="recent-item">
                  <a href={resolveRelative(slug, page.slug!)} class="internal">
                    {title}
                  </a>
                  {date && (
                    <time datetime={date.toISOString()}>
                      {date.toLocaleDateString("de-DE", {
                        day: "2-digit",
                        month: "short",
                      })}
                    </time>
                  )}
                </li>
              )
            })}
          </ul>
        </section>

        {/* Heatmap */}
        <section class="homepage-heatmap">
          <h2 class="section-heading">Aktivität</h2>
          <div class="heatmap-grid">
            {heatmapCells.map((cell) => {
              const level = heatLevel(cell.count)
              const dateStr = cell.date.toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
              const title =
                cell.count === 0
                  ? dateStr
                  : `${cell.count} Artikel am ${dateStr}`
              return (
                <div
                  class="heatmap-cell"
                  data-level={level}
                  title={title}
                />
              )
            })}
          </div>
        </section>

        {/* Graph Teaser */}
        <section class="homepage-graph-teaser graph">
          <h2 class="section-heading">Wissensgraph</h2>
          <div
            class="graph-container"
            data-cfg={JSON.stringify({
              drag: true,
              zoom: true,
              depth: -1,
              scale: 0.9,
              repelForce: 0.5,
              centerForce: 0.3,
              linkDistance: 30,
              fontSize: 0.6,
              opacityScale: 1,
              showTags: false,
              removeTags: [],
              focusOnHover: true,
              enableRadial: true,
            })}
          ></div>
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
              data-cfg={JSON.stringify({
                drag: true,
                zoom: true,
                depth: -1,
                scale: 0.9,
                repelForce: 0.5,
                centerForce: 0.2,
                linkDistance: 30,
                fontSize: 0.6,
                opacityScale: 1,
                showTags: false,
                removeTags: [],
                focusOnHover: true,
                enableRadial: true,
              })}
            ></div>
            <div class="global-graph-timeline">
              <button class="timeline-play" aria-label="Abspielen">{"\u25B6"}</button>
              <input type="range" class="timeline-slider" min="0" max="100" value="100" />
              <span class="timeline-date">Alle</span>
            </div>
          </div>
          <button class="graph-teaser-btn global-graph-icon" aria-label="Vollständigen Graphen anzeigen">
            Vollständigen Graphen anzeigen
          </button>
        </section>

        </div>{/* /homepage-main */}
      </div>
    )
  }

  Homepage.css = style + dailyFactStyle + heatmapStyle + explorationStyle + scenarioStyle
  Homepage.afterDOMLoaded = dailyFactScript + explorationScript + scenarioScript
  return Homepage
}) satisfies QuartzComponentConstructor
