import { useState, cloneElement } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSm, CheckCircle, Check, ChevronDown, Person, Brain, DottedArrow } from './Icons'

/* ---------- Text helpers ---------- */
export const Eyebrow = ({ children, className = '' }) => (
  <p className={`text-[12.5px] font-bold uppercase tracking-[0.14em] text-brand ${className}`}>
    {children}
  </p>
)

export const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-center font-serif text-[30px] leading-[1.25] text-ink ${className}`}>
    {children}
  </h2>
)

export const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-[1260px] px-6 lg:px-10 ${className}`}>{children}</div>
)

/* ---------- Buttons ---------- */
export const BOOK_PATH = '/book-a-founder-scan'

export const PrimaryButton = ({ children, href = BOOK_PATH, className = '', ...rest }) => {
  const cls = `inline-block rounded-md bg-brand px-6 py-3 text-center text-[15px] font-semibold text-white shadow-sm transition hover:bg-brand-dark ${className}`
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
  const cls = `inline-flex items-center gap-2.5 text-[15px] font-semibold hover:underline ${
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
        className={`flex items-start gap-3.5 ${size === 'sm' ? 'text-[14px]' : 'text-[14.5px]'} ${
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
    <h3 className="mt-5 whitespace-pre-line font-serif text-[22px] leading-[1.25] text-ink-soft">{title}</h3>
    {body && <p className="mt-3 text-[14.5px] leading-[1.7] text-body">{body}</p>}
  </Card>
)

/* ---------- Numbered timeline ---------- */
export const NumberedSteps = ({ steps, colsClass = 'lg:grid-cols-4' }) => (
  <div className={`grid gap-8 md:grid-cols-2 ${colsClass}`}>
    {steps.map((s, i) => (
      <div key={s.title} className="relative">
        <div className="flex items-center gap-4">
          <div className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-cream font-serif text-[24px] text-ink">
            {s.n}
          </div>
          <div className="text-brand">{s.icon}</div>
          {i < steps.length - 1 && (
            <span className="hidden flex-1 border-t-2 border-dotted border-brand/70 lg:block" />
          )}
        </div>
        <h3 className="mt-5 whitespace-pre-line font-serif text-[22px] leading-[1.25] text-ink-soft">
          {s.title}
        </h3>
        <p className="mt-2.5 max-w-[250px] text-[14.5px] leading-[1.7] text-body">{s.body}</p>
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
          <span className="text-[15px] text-brand md:border-r md:border-line md:pr-6">{q.q}</span>
          <span
            className={`hidden text-[14px] leading-snug text-body md:block ${open[i] ? '' : 'md:invisible'}`}
          >
            {q.a}
          </span>
          <ChevronDown
            size={16}
            className={`text-brand transition-transform ${open[i] ? '' : '-rotate-90'}`}
          />
          {open[i] && <span className="col-span-2 text-[14px] leading-snug text-body md:hidden">{q.a}</span>}
        </button>
      ))}
    </div>
  )
}

/* ---------- Dependency heat table (dark band) ---------- */
export const HeatTable = ({ rows, title }) => (
  <div className="rounded-xl border border-white/70 p-4">
    {title && <p className="mb-3 font-serif text-[22px] text-white">{title}</p>}
    <div className="overflow-hidden rounded-lg border border-white/70">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex items-center gap-4 px-4 py-2.5 ${i > 0 ? 'border-t border-white/60' : ''}`}
        >
          <span className="text-white">{r.icon}</span>
          <span className="flex-1 text-[15px] text-white">{r.label}</span>
          <span
            className={`rounded-md px-4 py-1 text-[13.5px] font-semibold text-brand ${
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
const FD = {
  ownerR: 48, chipW: 201, chipH: 75, chipGap: 90, memR: 84, succR: 49, cy: 180,
  dotted: { fill: 'none', stroke: '#08463e', strokeWidth: 1.6, strokeDasharray: '2 4', strokeLinecap: 'round' },
  label: { fill: '#1f2a28', fontSize: 14, fontWeight: 600, textAnchor: 'middle' },
  node: { fill: '#f7f5f0', stroke: '#e6e1d8' },
}

const Dot = ({ x, y }) => <circle cx={x} cy={y} r="2.6" fill="#08463e" />

const NodeCircle = ({ cx, cy, r, icon, lines }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} {...FD.node} />
    <g transform={`translate(${cx - 21} ${cy - 21})`} className="text-brand">{cloneElement(icon, { size: 42, strokeWidth: 2 })}</g>
    {lines.map((t, i) => (
      <text key={t} x={cx} y={cy + r + 24 + i * 18} {...FD.label}>{t}</text>
    ))}
  </g>
)

export const FlowDiagram = ({ chips, first }) => {
  const { ownerR, chipW, chipH, chipGap, memR, succR, cy } = FD
  const x0 = first ? 110 : 0
  const owner = { cx: x0 + 50, r: ownerR }
  const ownerRight = owner.cx + ownerR
  const LX = ownerRight + 40
  const chipX = LX + 37
  const RX = chipX + chipW + 38
  const mem = { cx: RX + 30 + memR, r: memR }
  const memRight = mem.cx + memR
  const succ = { cx: memRight + 50 + succR, r: succR }
  const width = succ.cx + succR + 10
  const chipCy = chips.map((_, i) => cy + (i - (chips.length - 1) / 2) * chipGap)
  const corner = (x, y, toX, dir) => `Q${x} ${y} ${x + 8 * dir} ${y}`

  return (
    <svg viewBox={`0 0 ${width} 360`} className="h-auto w-full font-sans" role="img" aria-label="Owner knowledge flows into the Business Memory and on to a prepared successor">
      {first && (
        <>
          <path d={`M${50 + ownerR} ${cy} H${owner.cx - ownerR}`} {...FD.dotted} />
          <Dot x={50 + ownerR + 7} y={cy} />
          <Dot x={owner.cx - ownerR - 7} y={cy} />
          <NodeCircle cx={50} cy={cy} r={ownerR} icon={first.icon} lines={first.label.split('\n')} />
        </>
      )}

      {/* owner -> bracket -> chips */}
      <path d={`M${ownerRight} ${cy} H${LX}`} {...FD.dotted} />
      <Dot x={ownerRight + 7} y={cy} />
      {chipCy.map((c) => {
        const dir = c < cy ? 1 : c > cy ? -1 : 0
        const d = dir === 0
          ? `M${LX} ${cy} H${chipX}`
          : `M${LX} ${cy} V${c + 8 * dir} ${corner(LX, c, chipX, 1)} H${chipX}`
        return <path key={`l${c}`} d={d} {...FD.dotted} />
      })}

      {/* chips -> bracket -> memory */}
      {chipCy.map((c) => {
        const dir = c < cy ? 1 : c > cy ? -1 : 0
        const d = dir === 0
          ? `M${chipX + chipW} ${c} H${RX}`
          : `M${chipX + chipW} ${c} H${RX - 8} Q${RX} ${c} ${RX} ${c + 8 * dir} V${cy}`
        return <path key={`r${c}`} d={d} {...FD.dotted} />
      })}
      <path d={`M${RX} ${cy} H${mem.cx - memR}`} {...FD.dotted} />
      <Dot x={mem.cx - memR - 7} y={cy} />

      {/* memory -> successor */}
      <path d={`M${memRight} ${cy} H${succ.cx - succR}`} {...FD.dotted} />
      <Dot x={memRight + 7} y={cy} />
      <Dot x={succ.cx - succR - 7} y={cy} />

      {/* nodes */}
      <NodeCircle cx={owner.cx} cy={cy} r={ownerR} icon={<Person />} lines={['Experienced', 'owner']} />

      {chips.map((c, i) => (
        <g key={c.label}>
          <rect x={chipX} y={chipCy[i] - chipH / 2} width={chipW} height={chipH} rx="10" {...FD.node} />
          <g transform={`translate(${chipX + 22} ${chipCy[i] - 17})`} className="text-brand">{cloneElement(c.icon, { size: 34, strokeWidth: 2 })}</g>
          <text x={chipX + 72} y={chipCy[i] + 5.5} fill="#1f2a28" fontSize="15.5" fontWeight="600">{c.label}</text>
        </g>
      ))}

      <circle cx={mem.cx} cy={cy} r={memR + 7} fill="none" stroke="#f0ece5" strokeWidth="6" />
      <circle cx={mem.cx} cy={cy} r={memR} {...FD.node} />
      <g transform={`translate(${mem.cx - 26} ${cy - 56})`} className="text-brand"><Brain size={52} strokeWidth={2} /></g>
      <text x={mem.cx} y={cy + 24} {...FD.label} fontSize="15">Business</text>
      <text x={mem.cx} y={cy + 43} {...FD.label} fontSize="15">Memory</text>

      <NodeCircle cx={succ.cx} cy={cy} r={succR} icon={<Person />} lines={['Prepared', 'successor']} />
    </svg>
  )
}

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
        <h2 className="max-w-[720px] font-serif text-[30px] leading-[1.2] text-ink sm:text-[32px]">{title}</h2>
        <p className="mt-3 max-w-[600px] text-[15.5px] leading-[1.55] text-body">{body}</p>
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
