import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "gematik Brain",
    pageTitleSuffix: " | gematik Brain",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "de-DE",
    baseUrl: "gematik-brain.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        title: "Instrument Serif",
        header: "Manrope",
        body: { name: "Newsreader", weights: [400, 600], includeItalic: true },
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf8",
          lightgray: "#e6e4e0",
          gray: "#9a9790",
          darkgray: "#3d3a36",
          dark: "#1c1917",
          secondary: "#c41832",
          tertiary: "#1a6fb5",
          highlight: "rgba(196,24,50,0.06)",
          textHighlight: "rgba(196,24,50,0.12)",
        },
        darkMode: {
          light: "#161514",
          lightgray: "#2c2926",
          gray: "#6b6560",
          darkgray: "#d4d0cc",
          dark: "#ede9e4",
          secondary: "#f04d66",
          tertiary: "#5aadff",
          highlight: "rgba(240,77,102,0.08)",
          textHighlight: "rgba(240,77,102,0.14)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
