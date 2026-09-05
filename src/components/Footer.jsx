import { Link } from 'react-router-dom'

const links = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'For owners', to: '/for-owners' },
  { label: 'For advisers', to: '/for-advisers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '#contact' },
  { label: 'Privacy', to: '#privacy' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-4 px-6 py-4 lg:flex-row lg:items-center lg:px-10">
        <div>
          <p className="text-[16px] tracking-tight">TransitionMemory</p>
          <p className="mt-1 text-[10.5px] leading-snug text-white/85">
            Make your business transferable—
            <br />
            not founder-dependent.
          </p>
          <p className="mt-1 text-[10.5px] text-white/85">© 2026 TransitionMemory.</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-9 gap-y-3 text-[11.5px]">
          {links.map((l) =>
            l.to.startsWith('#') ? (
              <a key={l.label} href={l.to} className="hover:underline">
                {l.label}
              </a>
            ) : (
              <Link key={l.label} to={l.to} className="hover:underline">
                {l.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  )
}
