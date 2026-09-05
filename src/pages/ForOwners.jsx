import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Eyebrow, SectionTitle, Container, PrimaryButton, ArrowLink, CheckList, Card, IconCard,
  NumberedSteps, FAQ, HeatTable, FlowDiagram, CtaBand,
} from '../components/shared'
import {
  TwoPeople, Handshake, Scales, Gear, Tag, Briefcase, Stairs, Person, DoubleBubble, DocSearch,
  ShieldCheck, Lock, Brain, MapIcon, Database, TwoPeopleCheck, DocLines, CheckCircle, Check, ArrowSm,
} from '../components/Icons'

const chips = [
  { icon: <TwoPeople size={26} />, label: 'Customers' },
  { icon: <Handshake size={26} />, label: 'Suppliers' },
  { icon: <Scales size={26} />, label: 'Decisions' },
  { icon: <Gear size={26} />, label: 'Operations' },
]

const transitions = [
  { icon: <Tag size={44} />, title: 'Selling the business', body: 'Help the buyer understand the relationships and judgement behind the numbers.' },
  { icon: <TwoPeople size={48} />, title: 'Family succession', body: 'Pass on the context that may never have been discussed formally.' },
  { icon: <Briefcase size={44} />, title: 'Management handover', body: 'Give the next team the knowledge and confidence to make decisions without you.' },
  { icon: <Stairs size={44} />, title: 'Gradually stepping back', body: 'Transfer responsibilities in stages while you are still available to clarify what matters.' },
]

const heat = [
  { icon: <TwoPeople size={26} />, label: 'Key customers', level: 'High' },
  { icon: <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white text-[13px] font-serif">£</span>, label: 'Pricing decisions', level: 'High' },
  { icon: <Handshake size={26} />, label: 'Supplier escalation', level: 'Medium' },
  { icon: <Gear size={26} />, label: 'Operational exceptions', level: 'High' },
]

const signs = [
  'Customers still ask for you personally',
  'Only you know why certain prices or terms were agreed',
  'Important supplier relationships depend on your involvement',
  'Staff escalate unusual decisions to you',
  'Processes work differently from how they are documented',
]

const steps = [
  { n: '01', icon: <DoubleBubble size={46} />, title: 'A focused starting\nconversation', body: 'We discuss your plans, the company and where you believe dependency may exist.' },
  { n: '02', icon: <Person size={44} />, title: 'Guided interviews', body: 'The AI Interview Agent asks adaptive questions in manageable sessions. You do not need to prepare a manual.' },
  { n: '03', icon: <DocSearch size={44} />, title: 'Review and approval', body: 'You or a nominated reviewer confirms what is accurate and what may be shared.' },
  { n: '04', icon: <TwoPeople size={46} />, title: 'Successor transfer', body: 'The next team is challenged with realistic scenarios and remaining gaps are assigned.' },
]

const youDecide = [
  'What information is in scope',
  'Which documents may be reviewed',
  'Who may access each area',
  'What is approved for future use',
  'When your participation ends',
]
const willNot = [
  'Copy or imitate your personality',
  'Share unapproved recollections',
  'Make payments or contractual commitments',
  'Give unsupported answers with false confidence',
  'Require permanent access to you',
]

const agentPoints = [
  'Uses approved Business Memory',
  'Shows sources and confidence',
  'Flags outdated information',
  'Escalates unsupported decisions',
  'No founder impersonation',
]

const leaveBehind = [
  { icon: <MapIcon size={46} />, title: 'Founder\nDependency Map' },
  { icon: <TwoPeople size={48} />, title: 'Customer and\nSupplier\nRelationship Map' },
  { icon: <Scales size={46} />, title: 'Commercial\nDecision Record' },
  { icon: <Database size={46} />, title: 'Operating\nBusiness Memory' },
  { icon: <TwoPeopleCheck size={48} />, title: 'Management\nReadiness\nAssessment' },
  { icon: <DocLines size={46} />, title: 'Owner\nTransition Report' },
]

const faq = [
  { q: 'Is this only for businesses being sold?', a: 'No. It also supports retirement, family succession, management handover and owners gradually stepping back.' },
  { q: 'Will I need to organise years of documents?', a: 'No. We agree a focused evidence scope after identifying the most important dependencies.' },
  { q: 'Do you create a digital version of me?', a: 'No. We preserve approved business knowledge and never impersonate the owner.' },
  { q: 'What if I plan to remain involved?', a: 'The transfer can be staged as responsibilities move to the next team.' },
  { q: 'Who sees the information?', a: 'Access is agreed with the company and limited according to the approved scope.' },
]

export default function ForOwners() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="owners" className="bg-page">
          <Container className="grid items-start gap-12 pb-12 pt-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <Eyebrow>For SME owners</Eyebrow>
              <h1 className="mt-4 font-serif text-[38px] leading-[1.12] text-ink sm:text-[44px] lg:text-[46px]">
                Step back without taking the business with you.
              </h1>
              <p className="mt-6 max-w-[520px] text-[14.5px] leading-[1.7] text-body">
                You have spent years learning which customers need special handling, which suppliers
                can be trusted and what to do when the usual process fails. TransitionMemory helps
                turn that experience into capability the business keeps.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-8">
                <PrimaryButton>Book a founder scan</PrimaryButton>
                <ArrowLink to="/how-it-works">See how it works</ArrowLink>
              </div>
              <p className="mt-6 max-w-[360px] text-[13px] leading-[1.6] text-body">
                For retirement, sale, family succession or management handover.
              </p>
            </div>
            <div className="hidden pt-8 lg:block">
              <FlowDiagram chips={chips} />
            </div>
          </Container>
        </section>

        {/* Cream band */}
        <section className="bg-cream">
          <Container className="py-9 text-center">
            <h2 className="font-serif text-[27px] text-ink">Your experience is part of the company's value.</h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[13.5px] leading-[1.7] text-body">
              TransitionMemory helps preserve it without asking you to write a manual, remember
              everything at once or remain permanently on call.
            </p>
          </Container>
        </section>

        {/* Transitions */}
        <section className="bg-page">
          <Container className="pb-12 pt-10">
            <SectionTitle>Which transition are you preparing for?</SectionTitle>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {transitions.map((t) => (
                <IconCard key={t.title} {...t} />
              ))}
            </div>
          </Container>
        </section>

        {/* Dark band */}
        <section className="bg-brand text-white">
          <Container className="grid gap-10 py-10 lg:grid-cols-[1fr_1px_1.2fr]">
            <div>
              <h2 className="font-serif text-[27px] leading-[1.2]">How much of the company still depends on you?</h2>
              <div className="mt-6">
                <HeatTable rows={heat} />
              </div>
            </div>
            <div className="hidden bg-white/40 lg:block" />
            <div className="lg:pl-4">
              <h2 className="font-serif text-[24px]">Common signs</h2>
              <CheckList items={signs} light className="mt-6 space-y-4" />
              <ArrowLink light className="mt-8" href="#book">
                Start with the Founder Dependency Scan
              </ArrowLink>
            </div>
          </Container>
        </section>

        {/* Steps */}
        <section className="bg-page">
          <Container className="pb-8 pt-10">
            <SectionTitle>What taking part involves</SectionTitle>
            <div className="mt-8">
              <NumberedSteps steps={steps} />
            </div>
            <p className="mt-10 text-center text-[14px] text-brand">
              The process is planned around your availability and intended transition date.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[#dde6df] bg-mint-soft px-7 pb-7 pt-6">
                <div className="flex items-center gap-5">
                  <ShieldCheck size={44} className="text-brand" />
                  <h3 className="font-serif text-[24px] text-ink">You decide</h3>
                </div>
                <CheckList items={youDecide} size="sm" className="mt-5 pl-1" />
              </div>
              <div className="rounded-xl border border-[#ece6dc] bg-cream-soft px-7 pb-7 pt-6">
                <div className="flex items-center gap-5">
                  <Lock size={44} className="text-brand" />
                  <h3 className="font-serif text-[24px] text-ink">TransitionMemory will not</h3>
                </div>
                <CheckList items={willNot} size="sm" className="mt-5 pl-1" />
              </div>
            </div>
          </Container>
        </section>

        {/* Ask why */}
        <section className="bg-mint">
          <Container className="grid gap-10 py-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-serif text-[27px] text-ink">The business can still ask why.</h2>
              <div className="mt-5 flex items-start gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                  <Person size={26} />
                </span>
                <div className="rounded-lg bg-white px-5 py-3 text-[13.5px] text-body">Why do we use this supplier?</div>
              </div>
              <div className="mt-3 flex items-start gap-3">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                  <Brain size={26} />
                </span>
                <div className="rounded-lg bg-white px-5 py-4">
                  <p className="text-[13.5px] leading-[1.55] text-[#1f2a28]">
                    The founder identified reliability during peak periods and direct access to the
                    service manager as the main reasons. A lower-cost alternative was tested in 2024
                    but caused delivery delays.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-mint px-3 py-1 text-[11.5px] text-brand">Founder interview</span>
                    <span className="rounded bg-mint px-3 py-1 text-[11.5px] text-brand">Supplier review</span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[11.5px] text-body">
                      <ShieldCheck size={14} className="text-brand" /> Supported by 2 sources
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:pl-6 lg:pt-2">
              <CheckList items={agentPoints} size="sm" className="space-y-4" />
              <ArrowLink className="mt-7" to="/how-it-works#ask">
                See the Owner Memory Agent
              </ArrowLink>
            </div>
          </Container>
        </section>

        {/* Leave behind */}
        <section className="bg-page">
          <Container className="pb-8 pt-10">
            <SectionTitle>What you leave behind</SectionTitle>
            <p className="mt-2 text-center text-[13.5px] text-body">
              A clearer, more independent business for the people taking responsibility next.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {leaveBehind.map((l) => (
                <Card key={l.title} className="flex flex-col items-center px-3 pb-6 pt-6 text-center">
                  <div className="text-brand">{l.icon}</div>
                  <p className="mt-4 whitespace-pre-line font-serif text-[15px] leading-[1.3] text-ink-soft">{l.title}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section className="border-t border-line bg-page">
          <Container className="pb-6 pt-8">
            <SectionTitle>Start with the dependency—not the full project.</SectionTitle>
            <div className="mx-auto mt-6 grid max-w-[1000px] gap-6 md:grid-cols-2">
              <Card className="px-8 pb-5 pt-6">
                <h3 className="font-serif text-[22px] text-ink-soft">Founder Dependency Scan</h3>
                <p className="mt-1 font-serif text-ink">
                  <span className="text-[26px]">£500</span>
                  <span className="ml-2 font-sans text-[16px] text-body">+ VAT</span>
                </p>
                <CheckList
                  plain size="sm" className="mt-3 space-y-1.5"
                  items={['Owner questionnaire', '60-minute scoping interview', 'Dependency heat map', 'Priority transfer plan', 'Fixed-price recommendation']}
                />
                <div className="mt-4 text-center">
                  <PrimaryButton className="w-full max-w-[320px] py-2.5">Book a founder scan</PrimaryButton>
                  <p className="mt-3 text-[11.5px] text-body">
                    The £500 fee is credited against a full engagement if you proceed.
                  </p>
                </div>
              </Card>
              <Card className="px-8 pb-5 pt-6">
                <h3 className="font-serif text-[22px] text-ink-soft">Verified Owner Transfer</h3>
                <p className="mt-1 font-serif text-ink">
                  <span className="text-[20px]">From </span>
                  <span className="text-[26px]">£5,000</span>
                  <span className="ml-2 font-sans text-[16px] text-body">per company</span>
                </p>
                <CheckList
                  plain size="sm" className="mt-3 space-y-1.5"
                  items={['Structured owner interviews', 'Approved Business Memory', 'Successor testing', 'Transition readiness assessment', 'Owner Memory Agent foundation']}
                />
                <ArrowLink className="mt-6" to="/pricing">
                  View pricing
                </ArrowLink>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-page">
          <Container className="pb-10 pt-4">
            <SectionTitle className="text-[24px]">Questions owners often ask</SectionTitle>
            <div className="mt-5">
              <FAQ items={faq} />
            </div>
          </Container>
        </section>

        <CtaBand
          title="Retire from the role—not from everything you built."
          body="Find out what the business still relies on you to know and what should be transferred before you step back."
        />
      </main>
      <Footer />
    </>
  )
}
