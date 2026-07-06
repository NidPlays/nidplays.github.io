export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          <span className="prompt">~$</span> echo "© {new Date().getFullYear()} Nidish ·
          blog by{' '}
          <a href="https://zensical.org" rel="noopener">
            zensical
          </a>{' '}
          · built with{' '}
          <a href="https://vite.dev" rel="noopener">
            vite
          </a>
          "
        </p>
      </div>
    </footer>
  )
}
