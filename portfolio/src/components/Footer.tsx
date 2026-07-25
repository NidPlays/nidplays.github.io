export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p className="meta">© {new Date().getFullYear()} Nidish G</p>
        <p className="meta">
          Blog by{' '}
          <a href="https://zensical.org" rel="noopener">
            Zensical
          </a>{' '}
          · Built with{' '}
          <a href="https://vite.dev" rel="noopener">
            Vite
          </a>
        </p>
      </div>
    </footer>
  )
}
