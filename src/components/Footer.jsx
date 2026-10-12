import { profile } from '../profile.js'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {YEAR} {profile.name} · {profile.affiliation}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
