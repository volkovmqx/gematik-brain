import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? {}
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <span>KI-gepflegt</span>
          <span aria-hidden="true"> · </span>
          <span>Open Source</span>
          {Object.entries(links).map(([text, link]) => (
            <>
              <span aria-hidden="true"> · </span>
              <a href={link}>{text}</a>
            </>
          ))}
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
