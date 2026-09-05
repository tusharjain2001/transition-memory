import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Eyebrow, SectionTitle, Container, PrimaryButton, ArrowLink, CheckList, Card, BOOK_PATH,
} from '../components/shared'
import {
  Person, TwoPeople, Truck, DocCheck, Gear, Brain, ShieldSparkle, ShieldCheck, MapIcon, DoubleBubble,
  CheckCircle, ThreePeople, DocLines, OpenBook, ShieldPerson, ChevronDown, Send, ArrowSm,
} from '../components/Icons'

const chips = [
  { icon: <ThreePeople size={28} />, label: 'Customers' },
  { icon: <Truck size={28} />, label: 'Suppliers' },
  { icon: <DocCheck size={28} />, label: 'Decisions' },
  { icon: <Gear size={28} />, label: 'Operations' },
]

const head = [
  { icon: <TwoPeople size={48} />, title: 'Customers', body: 'History, promises, preferences and relationships built over years.' },
  { icon: <Truck size={48} />, title: 'Suppliers', body: 'Negotiating leverage, alternatives and escalation routes.' },
  { icon: <DocCheck size={48} />, title: 'Decisions', body: 'How you price, prioritise, hire and respond when the usual rules fail.' },
  { icon: <Gear size={48} />, title: 'Operations', body: 'Workarounds, warning signs and routines that were never formally written down.' },
]

const journey = [
  { n: '01', icon: <MapIcon size={48} />, title: 'Scan', body: 'Map where customers, decisions and operations still depend on the owner.' },
  { n: '02', icon: <DoubleBubble size={48} />, title: 'Capture', body: 'Use adaptive AI-guided interviews and agreed evidence to draw out what is not documented.' },
  { n: '03', icon: <ShieldCheck size={48} />, title: 'Verify', body: 'Challenge the incoming owner or management team and expose what has not transferred.' },
  { n: '04', icon: <ShieldSparkle size={48} />, title: 'Continue', body: 'Make the approved Business Memory available through controlled AI agents after the handover.' },
]

const agentPoints = [
  'Answers from approved company knowledge',
  'Shows sources and confidence',
  'Separates fact from recollection',
  'Flags outdated or unsupported answers',
  'Never impersonates the former owner',
]

const produces = [
  { icon: <MapIcon size={44} />, title: 'Founder\nDependency Map' },
  { icon: <ThreePeople size={46} />, title: 'Customer and\nSupplier\nRelationship Map' },
  { icon: <DocLines size={44} />, title: 'Commercial\nDecision Record' },
  { icon: <OpenBook size={46} />, title: 'Operating\nBusiness Memory' },
  { icon: <ShieldPerson size={44} />, title: 'Management\nChallenge' },
  { icon: <DocLines size={44} />, title: 'Owner\nTransition Report' },
]

const groups = [
  { icon: <Person size={36} />, title: 'For the retiring owner', body: 'Leave the business with its operating knowledge intact.' },
  { icon: <TwoPeople size={38} />, title: 'For the buyer or successor', body: 'Understand the decisions and relationships you are inheriting.' },
  { icon: <Person size={36} />, title: 'For the adviser', body: "Help make a client's company less dependent on the person selling it.", link: 'Refer an owner', to: '/refer-an-owner' },
]

const included = ['Owner questionnaire', '60-minute scoping interview', 'Dependency heat map', 'Priority transfer plan', 'Fixed-price recommendation']

const faq = [
  { q: 'Is this only for businesses being sold?', a: 'No. It also supports family succession, management buyouts and owners gradually stepping back.' },
  { q: 'What if I plan to remain involved?', a: 'The capture can be staged as responsibilities move to the next team.' },
  { q: 'Do you copy my personality?', a: 'No. The agent uses approved business knowledge and does not impersonate the owner.' },
  { q: 'Do we need to install software?', a: 'No. The MVP is a guided service using agreed documents and interviews.' },
]

const Node = ({ icon, label, size = 'h-[68px] w-[68px]', circle = true }) => (
  <div className="flex flex-col items-center">
    <div className={`flex items-center justify-center text-brand ${circle ? `rounded-full border border-line bg-cream ${size}` : size}`}>{icon}</div>
    {label && <p className="mt-2 whitespace-pre-line text-center text-[12px] font-semibold leading-tight text-[#1f2a28]">{label}</p>}
  </div>
)

function HeroDiagram() {
  return (
    <div className="flex items-center justify-center">
      <Node icon={<Person size={36} />} label={'Experienced\nowner'} />
      <span className="w-4 border-t border-dotted border-brand" />
      <div className="relative py-2">
        <span className="absolute bottom-[14%] left-0 top-[14%] border-l border-dotted border-brand" />
        <span className="absolute bottom-[14%] right-0 top-[14%] border-r border-dotted border-brand" />
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
      <span className="w-4 border-t border-dotted border-brand" />
      <div className="flex h-[108px] w-[108px] flex-col items-center justify-center rounded-full border border-line bg-cream text-brand">
        <Brain size={34} />
        <span className="mt-1 text-[11px] font-semibold leading-tight text-[#1f2a28]">Business<br />Memory</span>
      </div>
      <div className="relative flex h-[190px] items-center">
        <span className="w-5 border-t border-brand" />
        <span className="absolute bottom-[26%] left-5 top-[22%] border-l border-brand" />
        <span className="absolute left-5 top-[22%] w-5 border-t border-brand" />
        <span className="absolute bottom-[26%] left-5 w-5 border-t border-brand" />
      </div>
      <div className="flex flex-col items-center gap-5 pl-5">
        <Node icon={<Person size={34} />} label={'Prepared\nsuccessor'} />
        <Node icon={<ShieldSparkle size={50} />} label={'AI agents the business\ncan keep using'} circle={false} size="h-[52px]" />
      </div>
    </div>
  )
}

function FaqCard({ f }) {
  const [open, setOpen] = useState(true)
  return (
    <Card className="px-5 py-5">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-3 text-left">
        <h3 className="text-[14px] font-semibold leading-snug text-[#1f2a28]">{f.q}</h3>
        <ChevronDown size={16} className={`mt-0.5 flex-shrink-0 text-brand transition-transform ${open ? '' : '-rotate-90'}`} />
      </button>
      {open && <p className="mt-2 text-[12.5px] leading-[1.6] text-body">{f.a}</p>}
    </Card>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-page">
          <Container className="grid items-start gap-10 pb-6 pt-8 lg:grid-cols-[1fr_1.45fr]">
            <div>
              <Eyebrow>For retiring SME owners</Eyebrow>
              <h1 className="mt-4 font-serif text-[38px] leading-[1.12] text-ink sm:text-[44px]">
                Make your business transferable—not founder-dependent.
              </h1>
              <p className="mt-6 max-w-[460px] text-[14.5px] leading-[1.7] text-body">
                TransitionMemory captures the knowledge, relationships and judgement that make your
                company work, verifies that the next team understands them, and turns them into AI
                agents the business can keep using.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-8">
                <PrimaryButton>Book a founder scan</PrimaryButton>
                <ArrowLink to="/how-it-works#ask">See the Owner Memory Agent</ArrowLink>
              </div>
              <p className="mt-7 inline-flex items-center gap-2.5 text-[13px] text-body">
                <ShieldCheck size={18} className="text-brand" /> Designed for owners planning to step back, sell or hand over.
              </p>
            </div>
            <div className="hidden pt-4 lg:block">
              <HeroDiagram />
            </div>
          </Container>
        </section>

        {/* Cream band */}
        <section className="bg-cream">
          <Container className="py-8 text-center">
            <h2 className="font-serif text-[27px] text-ink">You may be ready to retire.&nbsp; Is the business ready to run without you?</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[13.5px] leading-[1.7] text-body">
              Financial records show what the company earns. They do not show everything you know
              that keeps those earnings possible.
            </p>
          </Container>
        </section>

        {/* Head */}
        <section className="bg-page">
          <Container className="pb-8 pt-9">
            <SectionTitle>How much of the business still lives in your head?</SectionTitle>
            <div className="mx-auto mt-6 grid max-w-[1000px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {head.map((h) => (
                <Card key={h.title} className="flex flex-col items-center px-6 pb-7 pt-7 text-center">
                  <div className="text-brand">{h.icon}</div>
                  <h3 className="mt-4 font-serif text-[20px] text-ink-soft">{h.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-body">{h.body}</p>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <ArrowLink to={BOOK_PATH}>Start with a Founder Dependency Scan</ArrowLink>
            </div>
          </Container>
        </section>

        {/* Journey */}
        <section className="border-t border-line bg-page">
          <Container className="pb-10 pt-8">
            <SectionTitle>From founder knowledge to business capability.</SectionTitle>
            <div className="mx-auto mt-6 grid max-w-[1000px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((j, i) => (
                <div key={j.n} className="flex flex-col items-center text-center">
                  <div className="relative flex w-full items-center justify-center">
                    {i > 0 && <span className="absolute left-0 right-1/2 top-1/2 mr-6 hidden border-t border-dotted border-brand lg:block" />}
                    {i < journey.length - 1 && <span className="absolute left-1/2 right-0 top-1/2 ml-6 hidden border-t border-dotted border-brand lg:block" />}
                    <span className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-line bg-mint-soft text-[14px] font-semibold text-ink">{j.n}</span>
                  </div>
                  <div className="mt-5 text-brand">{j.icon}</div>
                  <h3 className="mt-2 text-[18px] font-semibold text-brand">{j.title}</h3>
                  <p className="mt-2 max-w-[230px] text-[13px] leading-[1.65] text-body">{j.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Agent */}
        <section className="bg-brand text-white">
          <Container className="grid items-center gap-10 py-10 lg:grid-cols-[1fr_1.15fr]">
            <div className="lg:pl-4">
              <h2 className="font-serif text-[30px]">Meet the Owner Memory Agent.</h2>
              <p className="mt-2 text-[15px]">The founder leaves. The business can still ask why.</p>
              <CheckList items={agentPoints} light className="mt-6 space-y-3.5" />
              <ArrowLink light className="mt-7" to="/how-it-works#ask">See how the agent works</ArrowLink>
            </div>
            <div className="rounded-xl bg-white px-5 pb-5 pt-4 text-[#1f2a28]">
              <div className="flex gap-4 border-b border-line pb-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream text-brand"><Person size={26} /></span>
                <div className="flex-1">
                  <div className="flex justify-between"><p className="text-[13px] font-semibold">You</p><span className="text-[11px] text-muted">10:28</span></div>
                  <p className="mt-0.5 text-[13.5px]">Why do we use this supplier?</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream text-brand"><ShieldSparkle size={28} /></span>
                <div className="flex-1">
                  <div className="flex justify-between"><p className="text-[13px] font-semibold">Owner Memory Agent</p><span className="text-[11px] text-muted">10:28</span></div>
                  <p className="mt-0.5 text-[13.5px] leading-[1.55]">
                    The founder identified reliability during peak periods and direct access to the service
                    manager as the main reasons. A cheaper alternative was trialled in 2024 but caused
                    delivery delays.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[12.5px] font-semibold">Sources</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <span className="rounded bg-mint px-3 py-1.5 text-[12px] text-brand">Founder interview</span>
                <span className="rounded bg-mint px-3 py-1.5 text-[12px] text-brand">Supplier review</span>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11.5px] text-body"><ShieldCheck size={16} className="text-brand" /> Supported by 2 sources</span>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-md border border-line px-4 py-2.5 text-[13px] text-muted">
                Ask another question...
                <Send size={18} className="text-brand" />
              </div>
            </div>
          </Container>
        </section>

        {/* Produces */}
        <section className="bg-page">
          <Container className="pb-6 pt-9">
            <SectionTitle>What the transfer produces</SectionTitle>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {produces.map((p) => (
                <Card key={p.title} className="flex flex-col items-center px-3 pb-6 pt-6 text-center">
                  <div className="text-brand">{p.icon}</div>
                  <p className="mt-4 whitespace-pre-line text-[14px] font-semibold leading-[1.3] text-brand">{p.title}</p>
                </Card>
              ))}
            </div>
            <p className="mt-5 text-center text-[13.5px] text-body">The Business Memory becomes the approved foundation for the AI agents.</p>
          </Container>
        </section>

        {/* Groups */}
        <section className="bg-page">
          <Container className="pb-6">
            <div className="rounded-xl bg-mint px-8 pb-8 pt-6">
              <SectionTitle>One transition.&nbsp; Three groups protected.</SectionTitle>
              <div className="mt-6 grid gap-6 md:grid-cols-3 md:divide-x md:divide-line">
                {groups.map((g) => (
                  <div key={g.title} className="flex gap-4 md:px-4">
                    <span className="flex h-[64px] w-[64px] flex-shrink-0 items-center justify-center rounded-full bg-cream text-brand">{g.icon}</span>
                    <div>
                      <h3 className="font-serif text-[17px] text-ink">{g.title}</h3>
                      <p className="mt-1 text-[13px] leading-[1.6] text-body">{g.body}</p>
                      {g.link && <ArrowLink to={g.to} className="mt-2 text-[13px]">{g.link}</ArrowLink>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Starting point */}
        <section className="bg-page">
          <Container className="pb-5">
            <Card className="grid gap-8 px-8 pb-7 pt-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:divide-x lg:divide-line">
              <div>
                <Eyebrow>The starting point</Eyebrow>
                <h2 className="mt-3 font-serif text-[30px] text-ink">Founder Dependency Scan</h2>
                <p className="font-serif text-ink"><span className="text-[36px] leading-none">£500</span><span className="ml-2 font-sans text-[22px] text-body">+ VAT</span></p>
                <p className="mt-3 max-w-[380px] text-[13px] leading-[1.65] text-body">
                  A focused assessment of where the company still relies on the owner and what should be
                  captured before retirement, sale or handover.
                </p>
              </div>
              <div className="lg:pl-8">
                <Eyebrow>Included</Eyebrow>
                <CheckList items={included} size="sm" className="mt-3 space-y-2.5" />
              </div>
              <div className="lg:pl-8">
                <PrimaryButton className="w-full py-2.5">Book a founder scan</PrimaryButton>
                <p className="mt-4 text-[13px] leading-[1.6] text-body">The £500 fee is credited against a full TransitionMemory engagement if you proceed.</p>
              </div>
            </Card>
          </Container>
        </section>

        {/* Complete transfer */}
        <section className="bg-page">
          <Container className="pb-8">
            <div className="flex flex-col gap-6 rounded-xl border border-[#efe6d8] bg-cream px-8 py-6 lg:flex-row lg:items-center">
              <ShieldSparkle size={52} className="flex-shrink-0 text-brand" />
              <div className="lg:w-[300px]">
                <h3 className="font-serif text-[22px] text-ink">Need the complete transfer?</h3>
                <p className="mt-1 text-[13px] text-body">Verified Owner Transfer — from £7,500 per company</p>
              </div>
              <div className="grid flex-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {['Structured owner interviews', 'Transition readiness assessment', 'Business Memory', 'Owner Memory Agent setup', 'Successor testing'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2.5 text-[12.5px] text-body"><CheckCircle size={16} className="text-brand" />{t}</span>
                ))}
              </div>
              <ArrowLink to="/pricing" className="flex-shrink-0">View pricing</ArrowLink>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-page">
          <Container className="pb-8">
            <SectionTitle>Questions owners usually ask</SectionTitle>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {faq.map((f) => <FaqCard key={f.q} f={f} />)}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-page">
          <Container className="pb-8">
            <div className="rounded-xl border border-[#efe6d8] bg-cream px-8 py-8 text-center">
              <h2 className="font-serif text-[28px] text-ink">Your experience should become an asset the business keeps.</h2>
              <p className="mt-2 text-[14px] text-body">Find out where the company still depends on you—and what needs to move before you do.</p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-8">
                <PrimaryButton className="px-10 py-2.5">Book a founder scan</PrimaryButton>
                <ArrowLink href="#contact">Talk to us</ArrowLink>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
