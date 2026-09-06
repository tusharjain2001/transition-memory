import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { submitForm } from '../lib/api'
import { Eyebrow, SectionTitle, Container, CheckList, Card, ArrowLink, BOOK_PATH } from '../components/shared'
import {
  ShieldPerson, DocSlash, CheckCircle, Warning, ArrowSm, SearchCheck, SpeechBubble, Person, ThreePeople,
  ClipboardChart, ShieldCheck, ChevronDown, PeopleChat,
} from '../components/Icons'

const highlights = [
  { icon: <ShieldPerson size={44} />, text: 'Owner permission\nrequired' },
  { icon: <DocSlash size={40} />, text: 'No confidential\ndocuments' },
  { icon: <CheckCircle size={44} />, text: 'No commitment\nto proceed' },
]

const before = [
  'The owner knows you are making the introduction',
  'The owner is open to an initial conversation',
  'The business has a genuine retirement, sale or succession need',
  'You share only basic, non-confidential information',
]

const next = [
  { n: '01', icon: <SearchCheck size={28} />, title: 'We review the referral', body: 'Check whether the situation appears suitable.' },
  { n: '02', icon: <SpeechBubble size={28} />, title: 'We contact the owner', body: 'Explain the process and ask whether they want a conversation.' },
  { n: '03', icon: <Person size={28} />, title: 'The owner chooses', body: 'No work begins until scope and price are agreed.' },
  { n: '04', icon: <ThreePeople size={30} />, title: 'You remain involved\nif requested', body: "With the owner's consent." },
]

const faq = [
  { q: 'Will you contact the owner without their agreement?', a: 'No. The adviser must confirm permission before submitting the referral.' },
  { q: 'Is there a referral commission?', a: 'No referral arrangement is implied by this form.' },
  { q: 'Can I join the first call?', a: 'Yes, where the owner agrees.' },
  { q: 'Should I send documents?', a: 'No. Evidence is discussed only after the owner chooses to proceed.' },
]

const inputCls =
  'w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-[14.5px] text-[#1f2a28] placeholder:text-muted focus:border-brand focus:outline-none'
const labelCls = 'mb-1.5 block text-[14px] text-[#1f2a28]'
const groupCls = 'text-[15.5px] font-bold text-brand'

const Field = ({ label, children }) => (
  <div>
    <label className={labelCls}>{label}</label>
    {children}
  </div>
)

const Select = ({ placeholder, options, value, onChange }) => (
  <div className="relative">
    <select value={value} onChange={onChange} className={`${inputCls} appearance-none pr-9 ${value ? '' : 'text-muted'}`}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1f2a28]" />
  </div>
)

const initial = {
  name: '', email: '', org: '', role: '', ownerName: '', ownerEmail: '', company: '', website: '',
  type: '', timeframe: '', why: '', consent: false, involved: false,
}

export default function ReferOwner() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [open, setOpen] = useState(faq.map(() => true))
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setError('')
    setSending(true)
    try {
      await submitForm('refer-owner', { ...form, website_url: honeypot })
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
            <Eyebrow>Refer an owner</Eyebrow>
            <h1 className="mt-3 font-serif text-[38px] leading-[1.15] text-ink sm:text-[44px]">Make a careful introduction.</h1>
            <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] leading-[1.7] text-body">
              If an SME owner is preparing to retire, sell or step back, introduce them to a practical
              way to identify and transfer the knowledge their company still depends on.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-12">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-4">
                  <span className="text-brand">{h.icon}</span>
                  <span className="whitespace-pre-line text-left text-[14.5px] leading-snug text-body">{h.text}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Before + form */}
        <section className="bg-[#f2f4f3]">
          <Container className="grid gap-8 py-8 lg:grid-cols-[1fr_2.1fr]">
            <div className="pt-1">
              <h2 className="font-serif text-[30px] text-ink">Before you refer</h2>
              <CheckList items={before} size="sm" className="mt-5 space-y-5 text-[14.5px]" />
              <div className="mt-7 flex gap-4 rounded-lg border border-[#f0dfc6] bg-[#fbf3e8] px-4 py-4">
                <Warning size={30} className="flex-shrink-0 text-[#8a6a3a]" />
                <p className="text-[13.5px] leading-[1.6] text-[#1f2a28]">
                  Do not include financial, personal, legally privileged or commercially sensitive information.
                </p>
              </div>
              <Link to={BOOK_PATH} className="mt-8 inline-flex items-center gap-2.5 border-b-2 border-brand pb-0.5 text-[14.5px] font-semibold text-brand">
                Learn about the Founder Scan <ArrowSm />
              </Link>
            </div>

            <Card className="px-7 pb-7 pt-6">
              <Eyebrow>Owner referral</Eyebrow>
              <h2 className="mt-1 font-serif text-[30px] text-ink">Introduce the owner</h2>
              <p className="mt-1 text-[14px] text-body">This should take around three minutes.</p>

              {submitted ? (
                <div className="mt-8 rounded-lg bg-mint-soft px-6 py-8 text-center">
                  <CheckCircle size={40} className="mx-auto text-brand" />
                  <h3 className="mt-4 font-serif text-[24px] text-ink">Referral received</h3>
                  <p className="mt-2 text-[14.5px] text-body">Thank you. Your referral has been sent to our team and a confirmation is on its way to {form.email || 'your work email'}.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-5 space-y-5">
                  <input type="text" name="website_url" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div>
                    <p className={groupCls}>About you</p>
                    <div className="mt-2 grid gap-4 sm:grid-cols-2">
                      <Field label="Your name"><input className={inputCls} placeholder="Your name" value={form.name} onChange={set('name')} required /></Field>
                      <Field label="Work email"><input type="email" className={inputCls} placeholder="name@organisation.com" value={form.email} onChange={set('email')} required /></Field>
                      <Field label="Organisation"><input className={inputCls} placeholder="Organisation" value={form.org} onChange={set('org')} /></Field>
                      <Field label="Your role"><input className={inputCls} placeholder="Your role" value={form.role} onChange={set('role')} /></Field>
                    </div>
                  </div>
                  <div>
                    <p className={groupCls}>About the owner</p>
                    <div className="mt-2 grid gap-4 sm:grid-cols-2">
                      <Field label="Owner's name"><input className={inputCls} placeholder="Owner's name" value={form.ownerName} onChange={set('ownerName')} required /></Field>
                      <Field label="Owner's work email"><input type="email" className={inputCls} placeholder="owner@company.com" value={form.ownerEmail} onChange={set('ownerEmail')} /></Field>
                      <Field label="Company"><input className={inputCls} placeholder="Company" value={form.company} onChange={set('company')} /></Field>
                      <Field label={<>Company website <span className="text-muted">(optional)</span></>}><input className={inputCls} placeholder="www.company.com" value={form.website} onChange={set('website')} /></Field>
                    </div>
                  </div>
                  <div>
                    <p className={groupCls}>About the transition</p>
                    <div className="mt-2 space-y-4">
                      <Field label="Transition type">
                        <Select placeholder="Retirement, sale, family succession or management handover" value={form.type} onChange={set('type')} options={['Retirement', 'Sale', 'Family succession', 'Management handover', 'Gradually stepping back']} />
                      </Field>
                      <Field label="Expected timeframe">
                        <Select placeholder="Select a timeframe" value={form.timeframe} onChange={set('timeframe')} options={['Within 6 months', '6–12 months', '1–2 years', 'More than 2 years', 'Not yet decided']} />
                      </Field>
                      <Field label="Why might TransitionMemory be useful?">
                        <textarea rows={3} className={inputCls} value={form.why} onChange={set('why')}
                          placeholder={'Briefly describe the owner dependency or transition concern.\nDo not include confidential information.'} />
                      </Field>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 text-[14px] text-[#1f2a28]">
                      <input type="checkbox" checked={form.consent} onChange={set('consent')} required className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 accent-brand" />
                      I confirm that the owner has agreed to be introduced to TransitionMemory.
                    </label>
                    <label className="flex items-start gap-3 text-[14px] text-[#1f2a28]">
                      <input type="checkbox" checked={form.involved} onChange={set('involved')} className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 accent-brand" />
                      I would like to remain involved in the initial conversation.
                    </label>
                  </div>
                  {error && (
                    <p role="alert" className="rounded-md border border-[#f0c9c2] bg-[#fdf1ee] px-4 py-3 text-[14px] text-[#8a2f22]">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-md bg-brand py-3 text-[16px] font-semibold text-white shadow-sm transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? 'Sending…' : 'Submit owner referral'}
                  </button>
                  <p className="text-[13.5px] leading-[1.7] text-body">
                    We will use these details only to review the referral and contact the people named.
                    <br />
                    Read our <a href="#privacy" className="border-b-2 border-brand font-semibold text-brand">Privacy notice</a>.
                  </p>
                </form>
              )}
            </Card>
          </Container>
        </section>

        {/* What happens next */}
        <section className="bg-mint">
          <Container className="py-9">
            <SectionTitle>What happens next</SectionTitle>
            <div className="mx-auto mt-6 grid max-w-[1000px] gap-8 md:grid-cols-2 lg:grid-cols-4">
              {next.map((s, i) => (
                <div key={s.n}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-full border border-brand/60 text-brand">{s.icon}</span>
                    {i < next.length - 1 && <span className="hidden flex-1 border-t-2 border-dotted border-brand/60 lg:block" />}
                  </div>
                  <p className="mt-4 whitespace-pre-line leading-tight">
                    <span className="text-[16px] font-bold text-brand">{s.n}</span>
                    <span className="ml-2 font-serif text-[19px] text-ink">{s.title}</span>
                  </p>
                  <p className="mt-1.5 max-w-[210px] text-[14px] leading-[1.6] text-body">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Starting point */}
        <section className="bg-page">
          <Container className="pb-8 pt-8">
            <SectionTitle>The normal starting point</SectionTitle>
            <div className="mx-auto mt-5 grid max-w-[1000px] gap-5 md:grid-cols-2">
              <div className="rounded-xl border border-[#efe6d8] bg-cream px-6 pb-6 pt-6">
                <div className="flex gap-5">
                  <span className="flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-full border border-[#e8dcc6] text-brand"><ClipboardChart size={36} /></span>
                  <div>
                    <h3 className="font-serif text-[26px] text-ink-soft">Founder Dependency Scan</h3>
                    <p className="font-serif text-ink"><span className="text-[38px] leading-none">£500</span><span className="ml-2 text-[17px]">+ VAT</span></p>
                    <CheckList size="sm" className="mt-3 space-y-1.5" items={['Includes owner questionnaire', '60-minute scoping interview', 'Dependency heat map', 'Priority transfer plan']} />
                  </div>
                </div>
                <p className="mt-4 text-[14px] text-body">Credited against a full engagement if the company proceeds.</p>
              </div>
              <div className="rounded-xl border border-line-soft bg-[#eef3f0] px-6 pb-6 pt-6">
                <div className="flex gap-5">
                  <span className="flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-full bg-mint-deep/60 text-brand"><ShieldCheck size={36} /></span>
                  <div>
                    <h3 className="font-serif text-[26px] text-ink-soft">Verified Owner Transfer</h3>
                    <p className="font-serif text-ink"><span className="text-[26px]">From </span><span className="text-[38px] leading-none">£5,000</span></p>
                    <p className="font-serif text-[22px] text-ink">per company <span className="text-[16px]">+ VAT</span></p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-body">A structured engagement to build the Business Memory, test successor readiness and deliver a final transfer report.</p>
                <ArrowLink to="/pricing" className="mt-4">View pricing</ArrowLink>
              </div>
            </div>
          </Container>
        </section>

        {/* Dark band */}
        <section className="bg-brand text-white">
          <Container className="flex flex-col items-center gap-8 py-9 lg:flex-row lg:justify-center lg:gap-12">
            <ShieldCheck size={84} className="flex-shrink-0" />
            <div>
              <h2 className="font-serif text-[32px]">An introduction is not an instruction.</h2>
              <p className="mt-2 max-w-[440px] text-[16px] leading-[1.55]">The owner remains free to decline, ask questions or proceed only with the initial scan.</p>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-page">
          <Container className="pb-6 pt-4">
            <div className="mx-auto max-w-[1000px] divide-y divide-line">
              {faq.map((f, i) => (
                <button key={f.q} type="button" onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))} className="flex w-full items-center justify-between gap-4 py-4 text-left">
                  <div>
                    <p className="text-[15px] font-semibold text-[#1f2a28]">{f.q}</p>
                    {open[i] && <p className="mt-1 text-[14px] text-body">{f.a}</p>}
                  </div>
                  <ChevronDown size={18} className={`flex-shrink-0 text-brand transition-transform ${open[i] ? '' : '-rotate-90'}`} />
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA card */}
        <section className="bg-page">
          <Container className="pb-8">
            <div className="flex flex-col gap-6 rounded-xl border border-[#efe6d8] bg-cream px-7 py-6 lg:flex-row lg:items-center">
              <span className="flex h-[88px] w-[88px] flex-shrink-0 items-center justify-center rounded-full border border-[#d9cbb5] text-brand"><PeopleChat size={52} /></span>
              <div className="flex-1">
                <h2 className="font-serif text-[30px] leading-tight text-ink">Prefer to let the owner contact us directly?</h2>
                <p className="mt-2 max-w-[440px] text-[14.5px] leading-[1.6] text-body">Share the Founder Dependency Scan page and allow them to review the service privately.</p>
              </div>
              <Link to={BOOK_PATH} className="inline-flex items-center gap-2.5 rounded-md border-2 border-brand px-7 py-2.5 text-[15px] font-semibold text-brand hover:bg-mint-soft">
                View the Founder Scan <ArrowSm />
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
