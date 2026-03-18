import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { getDate } from "./Date"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/homepage.scss"

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

    const totalArticles = allFiles.filter(
      (f) => !f.slug?.endsWith("/index") && f.slug !== "index",
    ).length
    const totalLinks = allFiles.reduce((sum, f) => sum + (f.links?.length ?? 0), 0)

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

        {/* Graph Teaser */}
        <section class="homepage-graph-teaser">
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
                showTags: true,
                removeTags: [],
                focusOnHover: true,
                enableRadial: true,
              })}
            ></div>
          </div>
          <button class="graph-teaser-btn global-graph-icon" aria-label="Vollständigen Graphen anzeigen">
            Vollständigen Graphen anzeigen
          </button>
        </section>
      </div>
    )
  }

  Homepage.css = style
  return Homepage
}) satisfies QuartzComponentConstructor
