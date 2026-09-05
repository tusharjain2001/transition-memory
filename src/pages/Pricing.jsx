import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Eyebrow, SectionTitle, Container, PrimaryButton, CheckList, Card, NumberedSteps, FAQ, CtaBand,
} from '../components/shared'
import {
  DocSearch, PeopleShield, DottedArrow, CheckCircle, Dash, TwoPeople, Building2, DocLines,
  ThreePeople, CreditCard, ClipboardLines, TwoPeopleCheck, Brain, ShieldCheck, TrendChart, XCircle,
  Person,
} from '../components/Icons'

const scanItems = [
  'Owner questionnaire',
  '60-minute scoping interview',
  'Founder Dependency Map',
  'Dependency heat map',
  'Priority transfer plan',
  'Fixed-price recommendation',
]
const transferItems = [
  'Detailed transfer scoping',
  'Structured owner interviews',
  'Agreed evidence review',
  'Approved Business Memory',
  'Customer and supplier relationship map',
  'Commercial decision record',
  'Successor and management challenge',
  'Transition readiness assessment',
  'Owner Transition Report',
  'Owner Memory Agent foundation',
]

const included = [
  ['Owner questionnaire', true, true],
  ['Initial dependency interview', true, true],
  ['Founder Dependency Map', true, true],
  ['Priority transfer plan', true, true],
  ['Structured owner interviews', false, true],
  ['Business Memory', false, true],
  ['Successor testing', false, true],
  ['Owner Transition Report', false, true],
  ['Owner Memory Agent foundation', false, true],
]

const determines = [
  { icon: <TwoPeople size={46} />, title: 'Number of\nknowledge holders', body: 'Whether the owner alone or several key managers must be included.' },
  { icon: <Building2 size={46} />, title: 'Business\ncomplexity', body: 'The number of operating areas, relationships and decision types in scope.' },
  { icon: <DocLines size={46} />, title: 'Evidence\nscope', body: 'The amount and format of agreed material requiring review.' },
  { icon: <ThreePeople size={46} />, title: 'Successor\ngroup', body: 'Whether readiness is tested with one successor or a wider management team.' },
]

const payment = [
  { n: '01', icon: <CreditCard size={46} />, title: 'Pay £500 for the scan', body: 'Begin with a defined assessment rather than committing to the full programme.' },
  { n: '02', icon: <ClipboardLines size={46} />, title: 'Receive a fixed recommendation', body: 'We explain what should be captured, the proposed scope and the total price.' },
  { n: '03', icon: <TwoPeopleCheck size={48} />, title: 'Choose whether to continue', body: 'If you proceed, the £500 scan fee is credited against the full engagement.' },
]

const ongoing = [
  { icon: <Brain size={44} />, title: 'Owner Memory\nAgent access' },
  { icon: <ShieldCheck size={44} />, title: 'Periodic Memory\nSteward reviews' },
  { icon: <TwoPeople size={46} />, title: 'Evidential\nknowledge holders' },
  { icon: <TrendChart size={44} />, title: 'Additional\nsuccessor testing' },
]

const notIncluded = [
  'Unlimited\ndocument review',
  'Autonomous financial\nor contractual decisions',
  'Legal, financial, tax\nor technical due diligence',
  'A digital imitation of\nthe retiring owner',
]

const faq = [
  { q: 'Is the £500 scan compulsory?', a: 'It is the normal starting point because it defines whether a larger transfer is proportionate.' },
  { q: 'Is the £500 deducted from the full price?', a: 'Yes. It is credited if the company proceeds with a full TransitionMemory engagement.' },
  { q: 'Why does the full transfer start at £5,000?', a: 'The work depends on the number of people, knowledge areas, evidence sources and successor scenarios involved.' },
  { q: 'Do we need an annual contract?', a: 'No. The scan and Verified Owner Transfer are project-based engagements.' },
  { q: 'Is the Owner Memory Agent included?', a: 'The Business Memory and agent foundation are included. Ongoing access and update services are scoped separately.' },
  { q: 'Can an adviser purchase this for a client?', a: 'Yes, subject to agreeing the contracting party, owner participation and information permissions.' },
]

const StepPill = ({ n, icon, label }) => (
  <div className="flex items-center gap-4">
    <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-cream font-serif text-[22px] text-ink">
      {n}
    </div>
    <div className="flex items-center gap-5 rounded-xl border border-line bg-white px-6 py-4">
      <span className="text-brand">{icon}</span>
      <span className="whitespace-pre-line text-[13.5px] font-semibold leading-tight text-[#1f2a28]">{label}</span>
    </div>
  </div>
)

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="pricing" className="bg-page">
          <Container className="pb-8 pt-8 text-center">
            <Eyebrow>Simple, staged pricing</Eyebrow>
            <h1 className="mt-4 font-serif text-[34px] leading-[1.2] text-ink sm:text-[40px]">
              Start with the dependency—not the full project.
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] text-[14.5px] leading-[1.7] text-body">
              First identify where the business still relies on its owner. Commission the full
              transfer only when the scan shows knowledge worth protecting.
            </p>
            <p className="mt-3 text-[12.5px] text-muted">Prices exclude VAT where applicable.</p>

            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <StepPill n="1" icon={<DocSearch size={40} />} label="Scan the dependency" />
              <DottedArrow className="hidden h-4 w-[90px] text-brand sm:block" />
              <StepPill n="2" icon={<PeopleShield size={40} />} label={'Transfer\nand verify'} />
            </div>

            {/* Price cards */}
            <div className="mx-auto mt-8 grid max-w-[1000px] gap-6 text-center md:grid-cols-2">
              <div className="rounded-xl border border-line bg-cream px-8 pb-7 pt-6">
                <span className="inline-block rounded-full border border-brand px-6 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-brand">
                  Start here
                </span>
                <h2 className="mt-4 font-serif text-[26px] text-ink-soft">Founder Dependency Scan</h2>
                <p className="mt-1 font-serif text-ink">
                  <span className="text-[46px] leading-none">£500</span>
                  <span className="ml-2 font-sans text-[20px] text-body">+ VAT</span>
                </p>
                <p className="mx-auto mt-4 max-w-[400px] text-[13px] leading-[1.65] text-body">
                  A focused assessment of where the company still relies on the owner and what should
                  be transferred before retirement, sale or handover.
                </p>
                <CheckList items={scanItems} size="sm" className="mx-auto mt-6 max-w-[300px] text-left" />
                <div className="mt-10">
                  <PrimaryButton className="px-12 py-2.5">Book a founder scan</PrimaryButton>
                </div>
                <p className="mx-auto mt-4 max-w-[320px] text-[12px] leading-[1.5] text-muted">
                  The £500 fee is credited against a full TransitionMemory engagement if you proceed.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border-2 border-brand bg-white">
                <div className="bg-brand py-4">
                  <span className="inline-block rounded-full border border-white px-6 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-white">
                    Full transfer
                  </span>
                </div>
                <div className="px-8 pb-7 pt-5">
                  <h2 className="font-serif text-[26px] text-ink-soft">Verified Owner Transfer</h2>
                  <p className="mt-1 font-serif text-ink">
                    <span className="text-[30px]">From </span>
                    <span className="text-[46px] leading-none">£5,000</span>
                  </p>
                  <p className="text-[15px] text-body">per company + VAT</p>
                  <p className="mx-auto mt-3 max-w-[420px] text-[13px] leading-[1.65] text-body">
                    Capture the owner's critical knowledge, test the next team and establish the
                    approved Business Memory for controlled AI use.
                  </p>
                  <CheckList items={transferItems} size="sm" className="mx-auto mt-5 max-w-[330px] space-y-2.5 text-left" />
                  <div className="mt-7">
                    <PrimaryButton className="px-10 py-2.5">Discuss the full transfer</PrimaryButton>
                  </div>
                  <p className="mx-auto mt-4 max-w-[320px] text-[12px] leading-[1.5] text-muted">
                    A fixed price is agreed before the engagement begins.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Included table */}
        <section className="bg-page">
          <Container className="pb-12 pt-2">
            <SectionTitle>What is included</SectionTitle>
            <div className="mx-auto mt-5 max-w-[1000px] overflow-hidden rounded-xl border border-line bg-white">
              <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-line text-center text-[13px] text-body">
                <div />
                <div className="border-l border-line py-2.5">Founder Scan</div>
                <div className="border-l border-line bg-mint-soft py-2.5">Verified Transfer</div>
              </div>
              {included.map(([label, a, b], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-[1.4fr_1fr_1fr] items-center text-[13px] text-body ${i > 0 ? 'border-t border-line' : ''}`}
                >
                  <div className="px-6 py-2.5">{label}</div>
                  <div className="flex justify-center border-l border-line py-2.5 text-brand">
                    {a ? <CheckCircle size={18} /> : <Dash size={18} />}
                  </div>
                  <div className="flex justify-center border-l border-line py-2.5 text-brand">
                    {b ? <CheckCircle size={18} /> : <Dash size={18} />}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Determines */}
        <section className="bg-brand text-white">
          <Container className="py-10 text-center">
            <h2 className="font-serif text-[27px]">What determines the full-transfer price?</h2>
            <div className="mx-auto mt-7 grid max-w-[1000px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {determines.map((d) => (
                <div key={d.title} className="rounded-xl border border-white/80 px-5 pb-6 pt-6">
                  <div className="flex justify-center">{d.icon}</div>
                  <h3 className="mt-3 whitespace-pre-line font-serif text-[20px] leading-[1.2]">{d.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.6] text-white/90">{d.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 font-serif text-[15.5px]">
              The Founder Dependency Scan gives us enough information to recommend a proportionate fixed scope.
            </p>
          </Container>
        </section>

        {/* Payment */}
        <section className="bg-page">
          <Container className="pb-10 pt-8">
            <SectionTitle>How payment works</SectionTitle>
            <div className="mx-auto mt-6 max-w-[1000px]">
              <NumberedSteps steps={payment} colsClass="lg:grid-cols-3" />
            </div>
            <p className="mt-8 text-center text-[13.5px] text-body">
              No full-transfer work begins until the scope and price are agreed.
            </p>
          </Container>
        </section>

        {/* Ongoing */}
        <section className="bg-mint">
          <Container className="grid gap-8 py-9 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:pl-10">
              <p className="font-serif text-[18px] text-ink">After the owner steps back</p>
              <h2 className="mt-1 font-serif text-[27px] text-ink">Keep the Business Memory useful.</h2>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-body">
                Ongoing Owner Memory Agent access, additional users, update reviews and extra knowledge
                holders are scoped separately after the core transfer.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {ongoing.map((o) => (
                  <Card key={o.title} className="flex flex-col items-center border-line-soft px-3 pb-5 pt-5 text-center">
                    <div className="text-brand">{o.icon}</div>
                    <p className="mt-4 whitespace-pre-line font-serif text-[14.5px] leading-[1.3] text-ink-soft">{o.title}</p>
                  </Card>
                ))}
              </div>
              <p className="mt-5 text-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">Priced to scope</p>
              <p className="mt-1 text-center text-[13px] text-body">There is no requirement to purchase an ongoing service.</p>
            </div>
          </Container>
        </section>

        {/* Not included */}
        <section className="bg-page">
          <Container className="pb-8 pt-8">
            <SectionTitle>What is not included</SectionTitle>
            <div className="mx-auto mt-6 grid max-w-[1000px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {notIncluded.map((t) => (
                <Card key={t} className="flex flex-col items-center px-4 pb-6 pt-6 text-center">
                  <XCircle size={40} className="text-brand" />
                  <p className="mt-4 whitespace-pre-line font-serif text-[16.5px] leading-[1.3] text-ink-soft">{t}</p>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-[13px] text-body">
              TransitionMemory preserves approved business knowledge. It does not replace professional
              advice or management authority.
            </p>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-page">
          <Container className="pb-10 pt-4">
            <SectionTitle>Pricing questions</SectionTitle>
            <div className="mx-auto mt-5 max-w-[1050px]">
              <FAQ items={faq} />
            </div>
          </Container>
        </section>

        <CtaBand
          icon={<Person size={54} />}
          title="Find out what the business still depends on the owner to know."
          body="Begin with a fixed £500 Founder Dependency Scan."
        />
      </main>
      <Footer />
    </>
  )
}
