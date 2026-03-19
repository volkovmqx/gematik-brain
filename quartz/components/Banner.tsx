import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Banner: QuartzComponent = (_props: QuartzComponentProps) => {
    return (
      <div class="site-banner" id="site-banner">
        <span class="site-banner-text">
          Dieses Projekt ist eine private, nicht-offizielle Zusammenstellung.
          Die Inhalte wurden mit Hilfe von KI auf Basis öffentlich zugänglicher Quellen
          (<a href="https://fachportal.gematik.de" target="_blank" rel="noopener">fachportal.gematik.de</a>,{" "}
          <a href="https://www.gematik.de" target="_blank" rel="noopener">gematik.de</a>) erstellt.
          Keine Verbindung zur gematik GmbH. Fehler möglich.{" "}
          <a href="https://github.com/volkovmqx/gematik-brain" target="_blank" rel="noopener">Beiträge willkommen.</a>
        </span>
        <button class="site-banner-close" id="site-banner-close" aria-label="Schließen">&times;</button>
      </div>
    )
  }

  Banner.css = `
.site-banner {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  line-height: 1.4;
  color: var(--gray);
  background: var(--light);
  border-bottom: 1px solid var(--lightgray);
  padding: 0.35rem 2rem 0.35rem 1rem;
  text-align: center;
  box-sizing: border-box;
}

.site-banner-text {
  flex: 1;
  min-width: 0;
}

.site-banner a {
  color: var(--secondary);
  text-decoration: underline;
}

.site-banner-close {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  appearance: none;
  border: none;
  background: transparent;
  color: var(--gray);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  flex-shrink: 0;
}

.site-banner-close:hover {
  color: var(--dark);
  background: var(--lightgray);
}

.site-banner-hidden {
  display: none !important;
}

@media all and (max-width: 800px) {
  body {
    overflow-x: hidden;
  }
  .page {
    max-width: 100vw;
    overflow-x: hidden;
  }
  .page > #quartz-body {
    grid-template-columns: minmax(0, 1fr) !important;
  }
}

@media all and (max-width: 600px) {
  .site-banner {
    font-size: 0.65rem;
    padding: 0.3rem 2rem 0.3rem 0.75rem;
  }
}
`

  Banner.afterDOMLoaded = `
(function() {
  var BANNER_KEY = "gematik-brain-banner-dismissed";
  var banner = document.getElementById("site-banner");
  var closeBtn = document.getElementById("site-banner-close");
  if (!banner) return;

  if (sessionStorage.getItem(BANNER_KEY) === "1") {
    banner.classList.add("site-banner-hidden");
    return;
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      banner.classList.add("site-banner-hidden");
      sessionStorage.setItem(BANNER_KEY, "1");
    });
  }
})();
`

  return Banner
}) satisfies QuartzComponentConstructor
