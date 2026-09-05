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
        <Link
          to="/"
          className="group font-sans text-[22px] tracking-tight text-[#1f2a28] transition-colors duration-200 hover:text-brand"
        >
          Transition<span className="text-brand">Memory</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
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
                  {/* underline: solid for the active page, slides in from the left on hover for the rest */}
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

        <div className="flex items-center gap-3">
          <NavLink
            to="/refer-an-owner"
            className={({ isActive }) =>
              `rounded-md border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                isActive
                  ? 'border-brand bg-brand text-white'
                  : 'border-brand text-brand hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:shadow-md'
              }`
            }
          >
            Refer an owner
          </NavLink>
          <Link
            to="/book-a-founder-scan"
            className="rounded-md bg-brand px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0b5a50] hover:shadow-md active:translate-y-0"
          >
            Book a founder scan
          </Link>
        </div>
      </div>
    </header>
  )
}
