import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'How it works', to: '/how-it-works' },
  { label: 'For owners', to: '/for-owners' },
  { label: 'For advisers', to: '/for-advisers' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  return (
    <header className="bg-page">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="font-sans text-[22px] tracking-tight text-[#1f2a28]">
          Transition<span className="text-brand">Memory</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end
              className={({ isActive }) =>
                `relative pb-1 text-[13.5px] transition-colors hover:text-brand ${
                  isActive ? 'font-semibold text-brand' : 'text-body'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded bg-brand" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/refer-an-owner"
            className={({ isActive }) =>
              `rounded-md border px-4 py-2 text-[13px] font-semibold transition ${
                isActive
                  ? 'border-brand bg-brand text-white'
                  : 'border-brand text-brand hover:bg-mint-soft'
              }`
            }
          >
            Refer an owner
          </NavLink>
          <Link
            to="/book-a-founder-scan"
            className="rounded-md bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Book a founder scan
          </Link>
        </div>
      </div>
    </header>
  )
}
