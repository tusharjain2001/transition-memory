import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'For owners', to: '/for-owners' },
  { label: 'For advisers', to: '/for-advisers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
]

const referCls = ({ isActive }) =>
  `whitespace-nowrap rounded-md border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
    isActive
      ? 'border-brand bg-brand text-white'
      : 'border-brand text-brand hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-md'
  }`

const bookCls =
  'whitespace-nowrap rounded-md bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0b5a50] hover:shadow-md active:translate-y-0'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname])

  // lock page scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="relative z-40 bg-page">
      <div className="mx-auto flex max-w-[1260px] items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="font-sans text-[21px] tracking-tight text-[#1f2a28] transition-colors duration-200 hover:text-brand sm:text-[22px]"
        >
          Transition<span className="text-brand">Memory</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end
              className={({ isActive }) =>
                `group relative pb-1 text-[13.5px] transition-colors duration-200 hover:text-brand ${
                  isActive ? 'font-semibold text-brand' : 'text-body'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded bg-brand transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <NavLink to="/refer-an-owner" className={referCls}>Refer an owner</NavLink>
          <Link to="/book-a-founder-scan" className={bookCls}>Book a founder scan</Link>
        </div>

        {/* Mobile: compact book button + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/book-a-founder-scan" className={`${bookCls} hidden sm:inline-block`}>
            Book a founder scan
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-brand transition hover:bg-mint-soft"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-[72px] z-30 bg-black/20 lg:hidden"
          />
          <div className="absolute inset-x-0 top-full z-40 border-t border-line bg-page shadow-lg lg:hidden">
            <nav className="mx-auto flex max-w-[1260px] flex-col px-5 py-3 sm:px-6">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end
                  className={({ isActive }) =>
                    `border-b border-line py-3.5 text-[15.5px] transition-colors ${
                      isActive ? 'font-semibold text-brand' : 'text-[#1f2a28] hover:text-brand'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 py-4">
                <NavLink
                  to="/refer-an-owner"
                  className={({ isActive }) =>
                    `rounded-md border border-brand px-4 py-3 text-center text-[14.5px] font-semibold ${
                      isActive ? 'bg-brand text-white' : 'text-brand'
                    }`
                  }
                >
                  Refer an owner
                </NavLink>
                <Link
                  to="/book-a-founder-scan"
                  className="rounded-md bg-brand px-4 py-3 text-center text-[14.5px] font-semibold text-white shadow-sm"
                >
                  Book a founder scan
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
