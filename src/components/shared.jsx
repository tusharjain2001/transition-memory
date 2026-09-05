import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSm, CheckCircle, Check, ChevronDown, Person, Brain, DottedArrow } from './Icons'

/* ---------- Text helpers ---------- */
export const Eyebrow = ({ children, className = '' }) => (
  <p className={`text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand ${className}`}>
    {children}
  </p>
)

export const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-center font-serif text-[27px] leading-[1.25] text-ink ${className}`}>
    {children}
  </h2>
)

export const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-[1180px] px-6 lg:px-10 ${className}`}>{children}</div>
)

/* ---------- Buttons ---------- */
export const BOOK_PATH = '/book-a-founder-scan'

export const PrimaryButton = ({ children, href = BOOK_PATH, className = '', ...rest }) => {
  const cls = `inline-block rounded-md bg-brand px-6 py-3 text-center text-[14px] font-semibold text-white shadow-sm transition hover:bg-brand-dark ${className}`
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  )
}

export const ArrowLink = ({ children, to, href, className = '', light = false }) => {
  const cls = `inline-flex items-center gap-2.5 text-[14px] font-semibold hover:underline ${
    light ? 'text-white' : 'text-brand'
  } ${className}`
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children} <ArrowSm />
      </Link>
    )
  }
  return (
    <a href={href || '#'} className={cls}>
      {children} <ArrowSm />
    </a>
  )
}

/* ---------- Lists ---------- */
export const CheckList = ({ items, light = false, plain = false, size = 'md', className = '' }) => (
  <ul className={`space-y-3 ${className}`}>
    {items.map((t) => (
      <li
        key={t}
        className={`flex items-start gap-3.5 ${size === 'sm' ? 'text-[13px]' : 'text-[13.5px]'} ${
          light ? 'text-white' : 'text-body'
        }`}
      >
        {plain ? (
          <Check size={14} className="mt-1 flex-shrink-0 text-brand" />
        ) : (
          <CheckCircle
            size={size === 'sm' ? 17 : 20}
            className={`flex-shrink-0 ${light ? 'text-white' : 'text-brand'}`}
          />
        )}
        <span className="leading-snug">{t}</span>
      </li>
    ))}
  </ul>
)

/* ---------- Cards ---------- */
export const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-line bg-white ${className}`}>{children}</div>
)

export const IconCard = ({ icon, title, body, center = false, className = '' }) => (
  <Card className={`px-7 pb-7 pt-7 ${center ? 'text-center' : ''} ${className}`}>
    <div className={`text-brand ${center ? 'flex justify-center' : ''}`}>{icon}</div>
    <h3 className="mt-5 whitespace-pre-line font-serif text-[20px] leading-[1.25] text-ink-soft">{title}</h3>
    {body && <p className="mt-3 text-[13.5px] leading-[1.7] text-body">{body}</p>}
  </Card>
)

/* ---------- Numbered timeline ---------- */
export const NumberedSteps = ({ steps, colsClass = 'lg:grid-cols-4' }) => (
  <div className={`grid gap-8 md:grid-cols-2 ${colsClass}`}>
    {steps.map((s, i) => (
      <div key={s.title} className="relative">
        <div className="flex items-center gap-4">
          <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-cream font-serif text-[20px] text-ink">
            {s.n}
          </div>
          <div className="text-brand">{s.icon}</div>
          {i < steps.length - 1 && (
            <DottedArrow className="hidden h-4 flex-1 text-brand lg:block" />
          )}
        </div>
        <h3 className="mt-5 whitespace-pre-line font-serif text-[20px] leading-[1.25] text-ink-soft">
          {s.title}
        </h3>
        <p className="mt-2.5 max-w-[250px] text-[13.5px] leading-[1.7] text-body">{s.body}</p>
      </div>
    ))}
  </div>
)

/* ---------- FAQ ---------- */
export const FAQ = ({ items }) => {
  const [open, setOpen] = useState(() => items.map(() => true))
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      {items.map((q, i) => (
        <button
          key={q.q}
          type="button"
          onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))}
          className={`grid w-full grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 text-left md:grid-cols-[38%_1fr_auto] ${
            i > 0 ? 'border-t border-line' : ''
          }`}
        >
          <span className="text-[14px] text-brand md:border-r md:border-line md:pr-6">{q.q}</span>
          <span
            className={`hidden text-[13px] leading-snug text-body md:block ${open[i] ? '' : 'md:invisible'}`}
          >
            {q.a}
          </span>
          <ChevronDown
            size={16}
            className={`text-brand transition-transform ${open[i] ? '' : '-rotate-90'}`}
          />
          {open[i] && <span className="col-span-2 text-[13px] leading-snug text-body md:hidden">{q.a}</span>}
        </button>
      ))}
    </div>
  )
}

/* ---------- Dependency heat table (dark band) ---------- */
export const HeatTable = ({ rows, title }) => (
  <div className="rounded-xl border border-white/70 p-4">
    {title && <p className="mb-3 font-serif text-[20px] text-white">{title}</p>}
    <div className="overflow-hidden rounded-lg border border-white/70">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex items-center gap-4 px-4 py-2.5 ${i > 0 ? 'border-t border-white/60' : ''}`}
        >
          <span className="text-white">{r.icon}</span>
          <span className="flex-1 text-[14px] text-white">{r.label}</span>
          <span
            className={`rounded-md px-4 py-1 text-[12.5px] font-semibold text-brand ${
              r.level === 'Medium' ? 'bg-[#f3dc9a]' : 'bg-[#f6b8ac]'
            }`}
          >
            {r.level}
          </span>
        </div>
      ))}
    </div>
  </div>
)

/* ---------- Hero flow diagram (owner -> areas -> memory -> successor) ---------- */
const Dots = ({ w = 'w-5' }) => <span className={`${w} border-t border-dotted border-brand`} />

const Node = ({ icon, label, big = false }) => (
  <div className="flex flex-col items-center">
    <div
      className={`flex items-center justify-center rounded-full border border-line bg-cream text-brand ${
        big ? 'h-[104px] w-[104px]' : 'h-[64px] w-[64px]'
      }`}
    >
      {big ? (
        <div className="flex flex-col items-center">
          {icon}
          <span className="mt-1 text-[11px] font-semibold leading-tight text-[#1f2a28]">
            Business
            <br />
            Memory
          </span>
        </div>
      ) : (
        icon
      )}
    </div>
    {label && (
      <p className="mt-3 whitespace-pre-line text-center text-[12px] font-semibold leading-tight text-[#1f2a28]">
        {label}
      </p>
    )}
  </div>
)

export const FlowDiagram = ({ chips, first }) => (
  <div className="flex items-center justify-center text-brand">
    {first && (
      <>
        <Node icon={first.icon} label={first.label} />
        <Dots />
      </>
    )}
    <Node icon={<Person size={34} />} label={'Experienced\nowner'} />
    <Dots />
    <div className="relative -mt-9 py-2">
      <span className="absolute bottom-[16%] left-0 top-[16%] border-l border-dotted border-brand" />
      <span className="absolute bottom-[16%] right-0 top-[16%] border-r border-dotted border-brand" />
      <div className="flex flex-col gap-2 px-4">
        {chips.map((c) => (
          <div key={c.label} className="relative">
            <span className="absolute -left-4 top-1/2 w-4 border-t border-dotted border-brand" />
            <span className="absolute -right-4 top-1/2 w-4 border-t border-dotted border-brand" />
            <div className="flex items-center gap-3 rounded-lg border border-line bg-cream px-4 py-2.5">
              <span className="text-brand">{c.icon}</span>
              <span className="text-[12.5px] font-semibold text-[#1f2a28]">{c.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Dots />
    <Node icon={<Brain size={30} />} big />
    <Dots />
    <Node icon={<Person size={34} />} label={'Prepared\nsuccessor'} />
  </div>
)

/* ---------- Bottom CTA band ---------- */
export const CtaBand = ({ icon, title, body, primary = 'Book a founder scan', primaryHref = BOOK_PATH }) => (
  <section className="bg-cream">
    <Container className="flex flex-col gap-8 py-9 lg:flex-row lg:items-center">
      {icon && (
        <div className="flex h-[104px] w-[104px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand lg:ml-4">
          {icon}
        </div>
      )}
      <div className="flex-1 lg:pl-2">
        <h2 className="max-w-[720px] font-serif text-[28px] leading-[1.2] text-ink sm:text-[30px]">{title}</h2>
        <p className="mt-3 max-w-[600px] text-[14.5px] leading-[1.55] text-body">{body}</p>
      </div>
      <div className="flex flex-shrink-0 flex-col items-center gap-4 lg:pr-8">
        <PrimaryButton href={primaryHref} className="px-10 py-2.5">
          {primary}
        </PrimaryButton>
        <ArrowLink href="#contact">Talk to us</ArrowLink>
      </div>
    </Container>
  </section>
)
