import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { submitForm } from '../lib/api'
import { Eyebrow, SectionTitle, Container, CheckList, Card } from '../components/shared'
import {
  Person, SpeechBubble, DocLines, CheckCircle, Warning, ArrowSm, Tag, TwoPeople, Handshake, Stairs,
  Search, Calendar, Clipboard, DocCheckSearch, Truck, Scales, Gear, XCircle, ShieldCheck, ChevronDown,
  TwoPeopleCheck,
} from '../components/Icons'

const highlights = [
  { icon: <Person size={30} />, text: 'Owner\nquestionnaire' },
  { icon: <SpeechBubble size={30} />, text: '60-minute\nscoping interview' },
  { icon: <DocLines size={30} />, text: 'Dependency map\nand priority plan' },
]

const before = [
  'You own or lead an established SME',
  'You are considering retirement, sale, succession or stepping back',
  'You want to understand where knowledge remains concentrated',
  'You can take part in a 60-minute guided interview',
]

const plans = [
  { icon: <Person size={30} />, label: 'Retirement' },
  { icon: <Tag size={30} />, label: 'Business sale' },
  { icon: <TwoPeople size={32} />, label: 'Family\nsuccession' },
  { icon: <Handshake size={30} />, label: 'Management\nhandover' },
  { icon: <Stairs size={30} />, label: 'Gradually\nstepping back' },
]

const after = [
  { n: '01', icon: <Search size={30} />, title: 'We review your request', body: 'Confirm that the scan appears suitable.' },
  { n: '02', icon: <Calendar size={30} />, title: 'We arrange the interview', body: 'Agree participants, scope and practical details.' },
  { n: '03', icon: <Clipboard size={30} />, title: 'We complete the scan', body: 'Questionnaire and guided 60-minute founder interview.' },
  { n: '04', icon: <DocCheckSearch size={30} />, title: 'You receive the findings', body: 'Dependency map, priorities and fixed-price recommendation.' },
]

const examines = [
  { icon: <TwoPeople size={44} />, title: 'Customers', body: 'Personal relationships, history, promises and special terms.' },
  { icon: <Truck size={44} />, title: 'Suppliers', body: 'Leverage, alternatives and escalation routes.' },
  { icon: <Scales size={44} />, title: 'Decisions', body: 'Pricing, hiring, priorities and unusual approvals.' },
  { icon: <Gear size={44} />, title: 'Operations', body: 'Workarounds, warning signs and undocumented routines.' },
]

const heat = [
  ['Key customers', 'High'],
  ['Pricing decisions', 'High'],
  ['Supplier escalation', 'Medium'],
  ['Operational exceptions', 'High'],
]
const plan = ['Document top customer commitments', 'Assign pricing authority', 'Capture supplier escalation route']

const includes = ['Owner questionnaire', '60-minute guided interview', 'Founder Dependency Map', 'Dependency heat map', 'Priority transfer plan']
const excludes = ['Detailed document review', 'Full Business Memory', 'Successor testing', 'Owner Memory Agent setup']

const faqLeft = [
  { q: 'Am I committing to the full transfer?', a: 'No. You decide whether to continue after receiving the scan.' },
  { q: 'Is the £500 deducted if I proceed?', a: 'Yes. It is credited against a full TransitionMemory engagement.' },
  { q: 'Do I need a buyer or successor already?', a: 'No. The scan can identify what should be captured before one is appointed.' },
]
const faqRight = [
  { q: 'Should I prepare documents?', a: 'Not initially. Relevant evidence is discussed after the scan where appropriate.' },
  { q: 'What if I plan to stay involved?', a: 'The transfer can be staged as your responsibilities change.' },
]

const inputCls =
  'w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-[14.5px] text-[#1f2a28] placeholder:text-muted focus:border-brand focus:outline-none'
const labelCls = 'mb-1.5 block text-[14px] text-[#1f2a28]'
const groupCls = 'text-[15.5px] font-bold text-brand'

function Field({ label, children }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  )
}

function Select({ placeholder, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`${inputCls} appearance-none pr-9 ${value ? '' : 'text-muted'}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1f2a28]" />
    </div>
  )
}

function FaqCard({ items }) {
  const [open, setOpen] = useState(items.map(() => true))
  return (
    <Card className="divide-y divide-line">
      {items.map((f, i) => (
        <button
          key={f.q}
          type="button"
          onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))}
          className="flex w-full items-start justify-between gap-4 px-5 py-3.5 text-left"
        >
          <div>
            <p className="text-[14.5px] font-semibold text-[#1f2a28]">{f.q}</p>
            {open[i] && <p className="mt-1 text-[13.5px] text-body">{f.a}</p>}
          </div>
          <ChevronDown size={16} className={`mt-1 flex-shrink-0 text-brand transition-transform ${open[i] ? '' : '-rotate-90'}`} />
        </button>
      ))}
    </Card>
  )
}

const initialForm = {
  name: '', email: '', company: '', role: '', website: '', employees: '', sector: '',
  plans: [], timeframe: '', successor: '', depends: '', agree: false,
}

export default function BookScan() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const togglePlan = (label) =>
    setForm((f) => ({ ...f, plans: f.plans.includes(label) ? f.plans.filter((p) => p !== label) : [...f.plans, label] }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setError('')
    setSending(true)
    try {
      await submitForm('founder-scan', { ...form, website_url: honeypot })
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-page">
          <Container className="pb-8 pt-8 text-center">
            <Eyebrow>Founder Dependency Scan</Eyebrow>
            <h1 className="mx-auto mt-3 max-w-[640px] font-serif text-[36px] leading-[1.15] text-ink sm:text-[42px]">
              Find out where the business still depends on you.
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] text-[15.5px] leading-[1.7] text-body">
              The scan identifies the customers, suppliers, decisions and operations that may be
              difficult to transfer before retirement, sale or handover.
            </p>
            <p className="mt-5 font-serif text-ink">
              <span className="text-[50px] leading-none">£500</span>
              <span className="ml-2 text-[24px]">+ VAT</span>
            </p>
            <p className="mt-2 text-[14px] text-body">Credited against a full TransitionMemory engagement if you proceed.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-10">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-4">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-brand/70 text-brand">{h.icon}</span>
                  <span className="whitespace-pre-line text-left text-[14px] leading-snug text-body">{h.text}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Before you book + form */}
        <section className="bg-page">
          <Container className="grid gap-6 pb-8 lg:grid-cols-[1fr_2.1fr]">
            <div className="rounded-xl border border-line bg-[#f2f5f3] px-6 pb-7 pt-7">
              <h2 className="font-serif text-[30px] text-ink">Before you book</h2>
              <CheckList items={before} size="sm" className="mt-6 space-y-5" />
              <div className="mt-8 flex gap-4 rounded-lg border border-[#f0dfc6] bg-[#fbf3e8] px-4 py-4">
                <Warning size={30} className="flex-shrink-0 text-[#8a6a3a]" />
                <div className="text-[13.5px] leading-[1.6] text-[#1f2a28]">
                  <p>Please do not send confidential documents yet.</p>
                  <p className="mt-3">We agree information scope and handling separately if further evidence is needed.</p>
                </div>
              </div>
              <Link to="/how-it-works" className="mt-10 inline-flex items-center gap-2.5 border-b-2 border-brand pb-0.5 text-[14.5px] font-semibold text-brand">
                See how the scan works <ArrowSm />
              </Link>
            </div>

            <Card className="px-7 pb-7 pt-6">
              <Eyebrow>Scan application</Eyebrow>
              <h2 className="mt-1 font-serif text-[30px] text-ink">Tell us about your business</h2>
              <p className="mt-1 text-[14px] text-body">This should take around three minutes.</p>

              {submitted ? (
                <div className="mt-8 rounded-lg bg-mint-soft px-6 py-8 text-center">
                  <CheckCircle size={40} className="mx-auto text-brand" />
                  <h3 className="mt-4 font-serif text-[24px] text-ink">Request received</h3>
                  <p className="mt-2 text-[14.5px] text-body">Thank you. Your request has been sent to our team and a confirmation is on its way to {form.email || 'your work email'}.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-5">
                  {/* honeypot: hidden from people, filled by bots */}
                  <input type="text" name="website_url" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div>
                    <p className={groupCls}>About you</p>
                    <div className="mt-2 grid gap-4 sm:grid-cols-2">
                      <Field label="Full name"><input className={inputCls} placeholder="Your name" value={form.name} onChange={set('name')} required /></Field>
                      <Field label="Work email"><input type="email" className={inputCls} placeholder="name@organisation.com" value={form.email} onChange={set('email')} required /></Field>
                      <Field label="Company"><input className={inputCls} placeholder="Organisation" value={form.company} onChange={set('company')} /></Field>
                      <Field label="Your role"><input className={inputCls} placeholder="Your role" value={form.role} onChange={set('role')} /></Field>
                    </div>
                  </div>

                  <div>
                    <p className={groupCls}>Your business</p>
                    <div className="mt-2 grid gap-4 sm:grid-cols-2">
                      <Field label="Company website (optional)"><input className={inputCls} placeholder="www.company.com" value={form.website} onChange={set('website')} /></Field>
                      <Field label="Approximate number of employees">
                        <Select placeholder="Select a range" value={form.employees} onChange={set('employees')} options={['1–9', '10–49', '50–249', '250+']} />
                      </Field>
                      <Field label="Business sector">
                        <Select placeholder="Select or describe" value={form.sector} onChange={set('sector')} options={['Manufacturing', 'Professional services', 'Retail and wholesale', 'Construction', 'Technology', 'Other']} />
                      </Field>
                    </div>
                  </div>

                  <div>
                    <p className={groupCls}>Your plans</p>
                    <label className={`${labelCls} mt-2`}>What are you considering?</label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                      {plans.map((p) => {
                        const active = form.plans.includes(p.label)
                        return (
                          <button
                            key={p.label}
                            type="button"
                            onClick={() => togglePlan(p.label)}
                            className={`flex min-h-[96px] flex-col items-center justify-center gap-2 rounded-lg border px-2 py-3 text-center transition ${
                              active ? 'border-brand bg-mint-soft' : 'border-line bg-white hover:border-brand/50'
                            }`}
                          >
                            <span className="text-brand">{p.icon}</span>
                            <span className="whitespace-pre-line text-[13px] leading-tight text-[#1f2a28]">{p.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <Field label="Expected timeframe">
                    <Select placeholder="Select a timeframe" value={form.timeframe} onChange={set('timeframe')} options={['Within 6 months', '6–12 months', '1–2 years', 'More than 2 years', 'Not yet decided']} />
                  </Field>

                  <div>
                    <label className={labelCls}>Has a successor or buyer been identified?</label>
                    <div className="flex flex-wrap gap-8">
                      {['Yes', 'No', 'Not yet confirmed'].map((o) => (
                        <label key={o} className="inline-flex items-center gap-2.5 text-[14.5px] text-[#1f2a28]">
                          <input type="radio" name="successor" value={o} checked={form.successor === o} onChange={set('successor')} className="h-[18px] w-[18px] accent-brand" />
                          {o}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelCls}>Where do you think the business depends on you most?</label>
                    <textarea
                      rows={3}
                      className={inputCls}
                      placeholder="For example: key customers, pricing, suppliers, staff decisions or operational exceptions."
                      value={form.depends}
                      onChange={set('depends')}
                    />
                    <p className="mt-1.5 text-[13px] text-muted">Do not include personal, sensitive or confidential information.</p>
                  </div>

                  <label className="flex items-start gap-3 text-[14px] leading-snug text-[#1f2a28]">
                    <input type="checkbox" checked={form.agree} onChange={set('agree')} required className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 rounded border-line accent-brand" />
                    I understand that the Founder Dependency Scan costs £500 plus VAT and that no work begins until the scope is confirmed.
                  </label>

                  {error && (
                    <p role="alert" className="rounded-md border border-[#f0c9c2] bg-[#fdf1ee] px-4 py-3 text-[14px] text-[#8a2f22]">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-md bg-brand py-3 text-[16px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Request a founder scan'}
                  </button>
                  <p className="text-[13.5px] leading-[1.7] text-body">
                    We will use these details only to review and respond to your request.
                    <br />
                    Read our <Link to="/privacy" className="border-b-2 border-brand font-semibold text-brand">Privacy notice</Link>.
                  </p>
                </form>
              )}
            </Card>
          </Container>
        </section>

        {/* After you apply */}
        <section className="bg-page">
          <Container className="pb-8">
            <div className="rounded-xl border border-line bg-mint px-8 pb-8 pt-6">
              <SectionTitle>What happens after you apply</SectionTitle>
              <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {after.map((s, i) => (
                  <div key={s.n}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-full border border-brand/60 bg-white text-brand">{s.icon}</span>
                      {i < after.length - 1 && <span className="hidden flex-1 border-t-2 border-dotted border-brand/70 lg:block" />}
                    </div>
                    <p className="mt-4 text-[16px] text-ink">
                      <span className="font-sans font-bold text-brand">{s.n}</span>
                      <span className="ml-2 font-serif text-[19px]">{s.title}</span>
                    </p>
                    <p className="mt-1.5 max-w-[220px] text-[14px] leading-[1.6] text-body">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Examines */}
        <section className="bg-page">
          <Container className="pb-6">
            <SectionTitle>What the scan examines</SectionTitle>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {examines.map((e) => (
                <Card key={e.title} className="flex gap-4 px-5 py-5">
                  <div className="flex-shrink-0 text-brand">{e.icon}</div>
                  <div>
                    <h3 className="font-serif text-[19px] text-ink-soft">{e.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-[1.6] text-body">{e.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Dependency map panel */}
        <section className="bg-page">
          <Container className="pb-6">
            <div className="grid gap-8 rounded-xl bg-brand px-8 pb-8 pt-6 text-white lg:grid-cols-[1fr_1px_1fr]">
              <div>
                <h2 className="font-serif text-[27px]">Your Founder Dependency Map</h2>
                <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/90">Illustrative example</p>
                <div className="mt-4 divide-y divide-line overflow-hidden rounded-md bg-white">
                  {heat.map(([label, level]) => (
                    <div key={label} className="flex items-center justify-between px-5 py-2.5 text-[14.5px] text-brand">
                      <span>{label}</span>
                      <span className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${level === 'Medium' ? 'bg-[#f2b134]' : 'bg-[#e0332b]'}`} />
                        <span className="w-14">{level}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden bg-white/40 lg:block" />
              <div className="lg:pl-2">
                <h2 className="font-serif text-[27px]">Priority transfer plan</h2>
                <CheckList items={plan} light className="mt-6 space-y-5" />
              </div>
            </div>
          </Container>
        </section>

        {/* Includes / excludes */}
        <section className="bg-page">
          <Container className="pb-6">
            <Card className="grid gap-8 px-7 pb-7 pt-6 lg:grid-cols-[1.2fr_1.2fr_1fr] lg:divide-x lg:divide-line">
              <div>
                <h3 className="font-serif text-[24px] text-ink">What the £500 scan includes</h3>
                <CheckList items={includes} size="sm" className="mt-3 space-y-2" />
              </div>
              <div className="lg:pl-8">
                <h3 className="font-serif text-[24px] text-ink">What it does not include</h3>
                <ul className="mt-3 space-y-2">
                  {excludes.map((t) => (
                    <li key={t} className="flex items-center gap-3.5 text-[14px] text-body">
                      <XCircle size={17} className="flex-shrink-0 text-[#9a8a6a]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-4 lg:pl-8">
                <ShieldCheck size={52} className="flex-shrink-0 text-brand" />
                <p className="text-[14px] leading-[1.6] text-body">
                  These are available through Verified Owner Transfer{' '}
                  <Link to="/pricing" className="border-b-2 border-brand font-semibold text-brand">from £5,000 per company.</Link>
                </p>
              </div>
            </Card>
          </Container>
        </section>

        {/* Common questions */}
        <section className="bg-page">
          <Container className="pb-6">
            <p className="text-[15px] font-semibold text-[#1f2a28]">Common questions</p>
            <div className="mt-2 grid gap-5 md:grid-cols-2">
              <FaqCard items={faqLeft} />
              <FaqCard items={faqRight} />
            </div>
          </Container>
        </section>

        {/* CTA card */}
        <section className="bg-page">
          <Container className="pb-8">
            <div className="flex flex-col gap-6 rounded-xl border border-[#efe6d8] bg-cream px-7 py-6 lg:flex-row lg:items-center">
              <span className="flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full border border-[#d9cbb5] text-brand">
                <TwoPeopleCheck size={42} />
              </span>
              <div className="flex-1">
                <h2 className="font-serif text-[28px] leading-tight text-ink">Make the first step a clear picture of the dependency.</h2>
                <p className="mt-2 text-[14.5px] text-body">Request the £500 Founder Dependency Scan.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="rounded-md bg-brand px-8 py-2.5 text-[15px] font-semibold text-white shadow-sm hover:bg-brand-dark">
                  Request a founder scan
                </a>
                <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="border-b-2 border-brand pb-0.5 text-[14.5px] font-semibold text-brand">Talk to us</a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
