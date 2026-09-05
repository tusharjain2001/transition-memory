import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Eyebrow, SectionTitle, Container, PrimaryButton, ArrowLink, CheckList, Card, IconCard,
  NumberedSteps, HeatTable, FlowDiagram, CtaBand,
} from '../components/shared'
import {
  TwoPeople, Handshake, Scales, Gear, Person, Calculator, ChartUp, Signpost, PieChart, PersonTie,
  Binoculars, SpeechBubble, ClipboardCheck, ChecklistDoc, Door, ShieldCheck, MapIcon, Database,
  TwoPeopleCheck, DocLines, Mail, DocEdit, Phone,
} from '../components/Icons'

const chips = [
  { icon: <TwoPeople size={26} />, label: 'Customers' },
  { icon: <Handshake size={26} />, label: 'Suppliers' },
  { icon: <Scales size={26} />, label: 'Decisions' },
  { icon: <Gear size={26} />, label: 'Operations' },
]

const who = [
  { icon: <Calculator size={44} />, title: 'Accountants' },
  { icon: <ChartUp size={44} />, title: 'Corporate-finance\nadvisers' },
  { icon: <Signpost size={44} />, title: 'Business brokers' },
  { icon: <TwoPeople size={46} />, title: 'Succession\nconsultants' },
  { icon: <Scales size={44} />, title: 'Commercial\nsolicitors' },
  { icon: <PieChart size={44} />, title: 'Wealth\nmanagers' },
  { icon: <PersonTie size={44} />, title: 'Non-executive\ndirectors' },
  { icon: <Binoculars size={44} />, title: 'Investors and\nsearch funds' },
]

const signals = [
  'The owner expects to leave within the next 6–24 months',
  'Customers still rely on the owner personally',
  'Pricing or supplier decisions cannot be explained by others',
  'The management team escalates unusual issues to the owner',
  'A buyer is concerned about founder dependency',
  'Succession has been discussed but practical knowledge transfer has not begun',
]

const heat = [
  { icon: <Person size={26} />, label: 'Customer relationships', level: 'High' },
  { icon: <Scales size={26} />, label: 'Commercial decisions', level: 'High' },
  { icon: <Handshake size={26} />, label: 'Supplier escalation', level: 'Medium' },
  { icon: <Gear size={26} />, label: 'Operational exceptions', level: 'High' },
]

const steps = [
  { n: '01', icon: <SpeechBubble size={44} />, title: 'Tell us about the situation', body: 'Share only basic, non-confidential details or invite the owner to contact us directly.' },
  { n: '02', icon: <Person size={44} />, title: 'We speak with the owner', body: 'We explain the process, establish suitability and answer questions.' },
  { n: '03', icon: <ClipboardCheck size={44} />, title: 'The owner chooses\nwhether to proceed', body: 'No work begins until scope, price and information handling are agreed.' },
  { n: '04', icon: <TwoPeople size={46} />, title: 'You remain involved\nif requested', body: "With the owner's consent, the adviser can join scoping and receive agreed outputs." },
]

const complements = [
  { icon: <ChecklistDoc size={44} />, title: 'Sale preparation', body: 'Share owner dependency that could complicate handover planning.' },
  { icon: <TwoPeople size={48} />, title: 'Succession planning', body: 'We turn a high-level succession decision into a practical knowledge-transfer programme.' },
  { icon: <Door size={44} />, title: 'Buyer transition', body: 'Give incoming management structured access to commercial and operational context.' },
  { icon: <ShieldCheck size={44} />, title: 'Owner confidence', body: 'Help the owner step back knowing the next team has been tested against the knowledge captured.' },
]

const receives = [
  { icon: <MapIcon size={46} />, title: 'Founder\nDependency Map' },
  { icon: <TwoPeople size={48} />, title: 'Customer and\nSupplier\nRelationship Map' },
  { icon: <Scales size={46} />, title: 'Commercial\nDecision Record' },
  { icon: <Database size={46} />, title: 'Operating\nBusiness Memory' },
  { icon: <TwoPeopleCheck size={48} />, title: 'Management\nReadiness\nAssessment' },
  { icon: <DocLines size={46} />, title: 'Owner\nTransition Report' },
]

const knowledgePoints = [
  'Shows sources and confidence',
  'Separates fact from recollection',
  'Flags outdated material',
  'Escalates unsupported decisions',
  'Never impersonates the former owner',
]

const ways = [
  { icon: <Mail size={40} />, title: 'Direct introduction', body: 'With permission, introduce TransitionMemory and the owner by email.' },
  { icon: <DocEdit size={40} />, title: 'Share the Founder Scan', body: 'Send the owner to the scan page so they can review it privately.' },
  { icon: <Phone size={40} />, title: 'Joint scoping call', body: 'Join the first conversation where the owner would value your involvement.' },
]

export default function ForAdvisers() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="advisers" className="bg-page">
          <Container className="grid items-start gap-8 pb-12 pt-8 lg:grid-cols-[1.15fr_1.4fr]">
            <div>
              <Eyebrow>For trusted advisers</Eyebrow>
              <h1 className="mt-4 font-serif text-[34px] leading-[1.15] text-ink sm:text-[37px]">
                Help your client retire without leaving the company dependent on them.
              </h1>
              <p className="mt-6 max-w-[520px] text-[15.5px] leading-[1.7] text-body">
                TransitionMemory identifies the knowledge, relationships and judgement concentrated in
                an SME owner, transfers it to the next team and makes the approved Business Memory
                usable after the owner steps back.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-8">
                <PrimaryButton href="/refer-an-owner">Refer an owner</PrimaryButton>
                <ArrowLink to="/how-it-works">See how it works</ArrowLink>
              </div>
              <p className="mt-6 max-w-[380px] text-[14px] leading-[1.6] text-body">
                A focused service that complements your existing client relationship.
              </p>
            </div>
            <div className="hidden pt-8 lg:block">
              <FlowDiagram
                chips={chips}
                first={{ icon: <Person size={34} />, label: 'Trusted adviser\nintroduces' }}
              />
            </div>
          </Container>
        </section>

        {/* Cream band */}
        <section className="bg-cream">
          <Container className="py-8 text-center">
            <h2 className="font-serif text-[27px] leading-[1.3] text-ink">
              The accounts can be ready for sale while the business is not ready to lose its owner.
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[14.5px] leading-[1.7] text-body">
              TransitionMemory addresses the operational knowledge dependency that financial, legal
              and tax work may identify but does not itself transfer.
            </p>
          </Container>
        </section>

        {/* Who */}
        <section className="bg-page">
          <Container className="pb-10 pt-10">
            <SectionTitle>Who can use TransitionMemory with clients?</SectionTitle>
            <div className="mt-7 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {who.map((w) => (
                <Card key={w.title} className="flex min-h-[120px] flex-col items-center justify-center px-4 py-6 text-center">
                  <div className="text-brand">{w.icon}</div>
                  <p className="mt-3 whitespace-pre-line font-serif text-[18px] leading-[1.25] text-ink-soft">{w.title}</p>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-[14.5px] text-body">
              No formal partnership is required to make an introduction.
            </p>
          </Container>
        </section>

        {/* Dark band */}
        <section className="bg-brand text-white">
          <Container className="grid gap-10 py-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <h2 className="font-serif text-[30px]">When to introduce us.</h2>
              <p className="mt-4 text-[15px] font-semibold">Useful signals</p>
              <CheckList items={signals} light className="mt-4 space-y-3.5" />
            </div>
            <div>
              <p className="text-right text-[10px] font-bold uppercase tracking-[0.14em] text-white/90">Illustrative</p>
              <div className="mt-2">
                <HeatTable rows={heat} title="Founder dependency" />
              </div>
              <ArrowLink light className="mt-5" to="/refer-an-owner">
                Refer an owner
              </ArrowLink>
            </div>
          </Container>
        </section>

        {/* Steps */}
        <section className="bg-page">
          <Container className="pb-8 pt-10">
            <SectionTitle>A simple introduction</SectionTitle>
            <div className="mt-8">
              <NumberedSteps steps={steps} />
            </div>
            <p className="mt-8 text-center text-[14.5px] text-brand">
              TransitionMemory normally contracts directly with the owner or company.
            </p>
          </Container>
        </section>

        {/* Complements */}
        <section className="border-t border-line bg-page">
          <Container className="pb-10 pt-8">
            <SectionTitle>How it complements your work</SectionTitle>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {complements.map((c) => (
                <IconCard key={c.title} {...c} />
              ))}
            </div>
          </Container>
        </section>

        {/* Receives */}
        <section className="bg-mint">
          <Container className="py-8">
            <SectionTitle>What your client receives</SectionTitle>
            <div className="mt-6 grid grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
              {receives.map((r, i) => (
                <div
                  key={r.title}
                  className={`flex flex-col items-center px-3 text-center ${i > 0 ? 'lg:border-l lg:border-line' : ''}`}
                >
                  <div className="text-brand">{r.icon}</div>
                  <p className="mt-4 whitespace-pre-line font-serif text-[16px] leading-[1.3] text-ink-soft">{r.title}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-center text-[14.5px] text-body">
              The approved Business Memory becomes the foundation for the Owner Memory Agent.
            </p>
            <div className="mt-2 text-center">
              <ArrowLink to="/for-owners" className="font-serif text-[22px] font-normal">
                View the owner journey
              </ArrowLink>
            </div>
          </Container>
        </section>

        {/* Knowledge + ways */}
        <section className="bg-page">
          <Container className="grid gap-10 pb-10 pt-8 lg:grid-cols-[1.9fr_1fr]">
            <div>
              <h2 className="font-serif text-[27px] text-ink lg:pl-16">Knowledge the successor can continue to use.</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-[1.75fr_1fr]">
                <Card className="px-6 pb-5 pt-5">
                  <h3 className="font-serif text-[20px] text-ink">Why was this customer offered different payment terms?</h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[#1f2a28]">
                    The founder said the terms were agreed after a supply disruption and linked to a
                    minimum annual order. The current agreement should be checked before relying on this.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-mint px-3 py-1.5 text-[12.5px] text-brand">Founder interview</span>
                    <span className="rounded bg-mint px-3 py-1.5 text-[12.5px] text-brand">Customer record</span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[12.5px] text-body">
                      <span className="h-3 w-3 rounded-full bg-[#f2c66d]" /> Source review required
                    </span>
                  </div>
                </Card>
                <Card className="px-5 py-5">
                  <CheckList items={knowledgePoints} size="sm" className="space-y-3.5 text-[13px]" />
                </Card>
              </div>

              <h2 className="mt-8 font-serif text-[27px] text-ink">A low-friction starting point.</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Card className="px-6 pb-5 pt-5">
                  <h3 className="font-serif text-[22px] text-ink-soft">Founder Dependency Scan</h3>
                  <p className="mt-1 font-serif text-ink">
                    <span className="text-[26px]">£500</span>
                    <span className="ml-2 font-sans text-[16px] text-body">+ VAT</span>
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.6] text-body">
                    A focused assessment showing where the company still relies on the owner and what should be transferred.
                  </p>
                  <CheckList
                    plain size="sm" className="mt-3 space-y-1.5 text-[13px]"
                    items={['Owner questionnaire', '60-minute scoping interview', 'Dependency heat map', 'Priority transfer plan']}
                  />
                  <PrimaryButton href="/refer-an-owner" className="mt-4 px-8 py-2">Refer an owner</PrimaryButton>
                </Card>
                <Card className="px-6 pb-5 pt-5">
                  <h3 className="font-serif text-[22px] text-ink-soft">Verified Owner Transfer</h3>
                  <p className="mt-1 font-serif text-ink">
                    <span className="text-[19px]">From </span>
                    <span className="text-[26px]">£5,000</span>
                    <span className="ml-2 font-sans text-[16px] text-body">per company</span>
                  </p>
                  <CheckList
                    plain size="sm" className="mt-3 space-y-1.5 text-[13px]"
                    items={['Structured owner interviews', 'Approved Business Memory', 'Successor testing', 'Transition readiness assessment', 'Owner Memory Agent foundation']}
                  />
                  <ArrowLink className="mt-5" to="/pricing">
                    View pricing
                  </ArrowLink>
                </Card>
              </div>
              <p className="mt-3 text-[12.5px] text-body">
                The £500 fee is credited against a full engagement if the client proceeds.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[27px] text-ink">Ways to introduce a client</h2>
              <div className="mt-4 space-y-4">
                {ways.map((w) => (
                  <Card key={w.title} className="flex gap-5 px-5 py-5">
                    <div className="flex-shrink-0 text-brand">{w.icon}</div>
                    <div>
                      <h3 className="font-serif text-[20px] text-ink-soft">{w.title}</h3>
                      <p className="mt-1 text-[13.5px] leading-[1.6] text-body">{w.body}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <CtaBand
          icon={<Person size={54} />}
          title="Know an owner preparing to step back?"
          body="Introduce them to a practical way to identify and transfer the knowledge their business still depends on."
          primary="Refer an owner"
          primaryHref="/refer-an-owner"
        />
      </main>
      <Footer />
    </>
  )
}
