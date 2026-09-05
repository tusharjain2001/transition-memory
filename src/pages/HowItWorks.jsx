import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  Eyebrow, SectionTitle, Container, PrimaryButton, ArrowLink, CheckList, Card, CtaBand, BOOK_PATH,
} from '../components/shared'
import {
  Person, MapIcon, Brain, TwoPeople, ShieldSparkle, ChecklistDoc, SpeechBubble, DatabaseCheck,
  TwoPeopleCheck, ShieldPerson, DoubleBubble, DocSearch, Database, Clock, DocLines, ShieldCheck,
  Lock, QuestionCircle, DottedArrow, ArrowSm,
} from '../components/Icons'

const flow = [
  { icon: <Person size={40} />, label: 'Owner' },
  { icon: <MapIcon size={40} />, label: 'Scan' },
  { icon: <Brain size={40} />, label: 'Business\nMemory' },
  { icon: <TwoPeople size={42} />, label: 'Successor' },
  { icon: <ShieldSparkle size={40} />, label: 'AI agents' },
]

const stages = [
  { n: '01', title: 'Scan the dependency', body: 'Complete an owner questionnaire and guided interview to identify customers, suppliers, decisions and operations that still depend on you.', chip: 'Founder Dependency Map', icon: <MapIcon size={40} /> },
  { n: '02', title: 'Agree the capture plan', body: 'Prioritise the knowledge that matters most, the people who should contribute and the information that may be reviewed.', chip: 'Fixed transfer scope', icon: <ChecklistDoc size={40} /> },
  { n: '03', title: 'Capture what is not written down', body: 'An AI Interview Agent asks adaptive follow-up questions about judgement, exceptions, relationships, past decisions and warning signs.', chip: 'Owner knowledge record', icon: <SpeechBubble size={40} /> },
  { n: '04', title: 'Build and approve the Business Memory', body: 'An Evidence Agent links answers to agreed sources, flags contradictions and organises the approved knowledge into a structured company record.', chip: 'Approved Business Memory', icon: <DatabaseCheck size={42} /> },
  { n: '05', title: 'Challenge the next team', body: 'A Successor Coach creates realistic scenarios to reveal what the incoming owner or management team still does not understand.', chip: 'Management readiness assessment', icon: <TwoPeopleCheck size={42} /> },
  { n: '06', title: 'Activate the Owner Memory Agent', body: 'Authorised users can ask questions after the handover. Answers show sources, confidence and unresolved gaps, and the memory can be updated as the business changes.', chip: 'Controlled AI access', icon: <ShieldPerson size={40} /> },
]

const agents = [
  { icon: <DoubleBubble size={50} />, name: 'Interview Agent', body: 'Draws out missing context.' },
  { icon: <DocSearch size={50} />, name: 'Evidence Agent', body: 'Checks sources and contradictions.' },
  { icon: <Database size={50} />, name: 'Memory Steward', body: 'Organises and updates approved knowledge.' },
  { icon: <TwoPeople size={52} />, name: 'Successor Coach', body: 'Tests understanding through scenarios.' },
  { icon: <ShieldPerson size={50} />, name: 'Owner Memory Agent', body: 'Answers authorised questions after handover.' },
]

const chat = [
  { who: 'You', time: '10:28', text: 'Why do we use this supplier?' },
  { who: 'Owner Memory Agent', time: '10:28', text: 'The founder identified reliability during peak periods and direct access to the service manager as the main reasons. A lower-cost alternative was tested in 2024 but caused delivery delays.', chips: ['Founder interview', 'Supplier review'], sources: 'Supported by 2 sources' },
  { who: 'You', time: '10:32', text: 'Can I approve a 10% discount?' },
  { who: 'Owner Memory Agent', time: '10:32', text: 'The Business Memory does not establish your authority to approve this. Escalate to the responsible director.' },
]

const answerShould = ['Show its source', 'State its confidence', 'Separate fact from recollection', 'Flag outdated information', 'Escalate unsupported decisions']

const provide = [
  { icon: <Person size={30} />, text: 'An owner planning to step back, sell or hand over' },
  { icon: <TwoPeople size={30} />, text: 'A successor or responsible management team' },
  { icon: <Clock size={30} />, text: 'Time for guided interviews' },
  { icon: <DocLines size={30} />, text: 'Relevant documents where agreed' },
]
const receive = [
  { icon: <MapIcon size={26} />, text: 'Founder Dependency Map' },
  { icon: <Database size={26} />, text: 'Structured Business Memory' },
  { icon: <TwoPeople size={26} />, text: 'Relationship and decision records' },
  { icon: <TwoPeople size={26} />, text: 'Management Challenge' },
  { icon: <DocLines size={26} />, text: 'Owner Transition Report' },
  { icon: <ShieldCheck size={26} />, text: 'Owner Memory Agent foundation' },
]

const control = [
  { icon: <ShieldCheck size={44} />, title: 'Approved before use', body: 'The owner or nominated reviewer confirms captured knowledge.' },
  { icon: <DocLines size={44} />, title: 'Source-linked answers', body: 'The agent shows where important information came from.' },
  { icon: <Person size={44} />, title: 'No founder impersonation', body: "It preserves business knowledge, not the owner's personality." },
  { icon: <Lock size={44} />, title: 'No autonomous commitments', body: 'It does not approve prices, payments or contractual decisions.' },
]

const faq = [
  { q: 'How long does the process take?', a: "Timing depends on the owner's availability, the scope and the planned transition date." },
  { q: 'Do we need to connect company systems?', a: 'No. The MVP uses guided interviews and agreed documents.' },
  { q: 'Who approves the knowledge?', a: 'The owner or an agreed company representative reviews it before wider use.' },
  { q: 'What happens when the business changes?', a: 'Authorised users can propose updates for review so the Business Memory remains current.' },
]

const Chip = ({ children }) => (
  <span className="inline-block rounded bg-mint px-3 py-1 text-[12px] text-brand">{children}</span>
)

function StageCard({ s }) {
  return (
    <Card className="flex gap-4 px-6 pb-5 pt-5">
      <span className="font-serif text-[30px] leading-none text-ink">{s.n}</span>
      <div>
        <h3 className="font-serif text-[20px] leading-tight text-ink-soft">{s.title}</h3>
        <p className="mt-2 text-[13px] leading-[1.6] text-body">{s.body}</p>
        <div className="mt-3">
          <Chip>{s.chip}</Chip>
        </div>
      </div>
    </Card>
  )
}

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-page">
          <Container className="grid items-start gap-10 pb-10 pt-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h1 className="mt-4 font-serif text-[38px] leading-[1.12] text-ink sm:text-[44px]">
                Turn what only you know into capability the business keeps.
              </h1>
              <p className="mt-6 max-w-[500px] text-[14.5px] leading-[1.7] text-body">
                TransitionMemory identifies where the company still depends on you, captures the
                knowledge behind it, tests the next team and makes the approved Business Memory usable
                through controlled AI agents.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-8">
                <PrimaryButton>Book a founder scan</PrimaryButton>
                <ArrowLink href="#ask">See the Owner Memory Agent</ArrowLink>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-start justify-between">
                {flow.map((f, i) => (
                  <div key={f.label} className="flex flex-1 items-start">
                    <div className="flex w-[104px] flex-col items-center text-center">
                      <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-line bg-cream text-brand">
                        {f.icon}
                      </div>
                      <p className="mt-4 whitespace-pre-line text-[13.5px] font-semibold leading-tight text-[#1f2a28]">{f.label}</p>
                    </div>
                    {i < flow.length - 1 && <span className="mt-[46px] flex-1 border-t border-dotted border-brand" />}
                  </div>
                ))}
              </div>
              <p className="mt-10 text-center text-[14.5px] text-[#1f2a28]">
                Captured. Verified. Available after the handover.
              </p>
            </div>
          </Container>
        </section>

        {/* Cream band */}
        <section className="bg-cream">
          <Container className="py-8 text-center">
            <h2 className="font-serif text-[27px] text-ink">A guided transfer—not a software rollout.</h2>
            <p className="mx-auto mt-3 max-w-[640px] text-[13.5px] leading-[1.7] text-body">
              During the MVP, our team coordinates every stage. The owner, successor and responsible
              management remain in control of what is captured, approved and used.
            </p>
          </Container>
        </section>

        {/* Six stages */}
        <section className="bg-page">
          <Container className="pb-10 pt-10">
            <SectionTitle>Six stages from founder dependency to continuity.</SectionTitle>

            {/* Desktop zigzag */}
            <div className="relative mt-8 hidden lg:block">
              <span className="absolute bottom-10 left-1/2 top-10 -translate-x-1/2 border-l border-dotted border-brand" />
              <div className="space-y-[-12px]">
                {stages.map((s, i) => {
                  const left = i % 2 === 0
                  return (
                    <div key={s.n} className={`relative flex items-center ${i > 0 ? '-mt-6' : ''}`}>
                      {left ? (
                        <>
                          <div className="w-[41%]"><StageCard s={s} /></div>
                          <span className="relative h-px w-[9%] bg-brand/80"><span className="absolute -right-0.5 -top-[3px] h-[7px] w-[7px] rounded-full bg-brand" /></span>
                        </>
                      ) : (
                        <div className="w-1/2" />
                      )}
                      <div className="relative z-10 -mx-9 flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-[#eef1ef] text-brand">
                        {s.icon}
                      </div>
                      {!left ? (
                        <>
                          <span className="relative h-px w-[9%] bg-brand/80"><span className="absolute -left-0.5 -top-[3px] h-[7px] w-[7px] rounded-full bg-brand" /></span>
                          <div className="w-[41%]"><StageCard s={s} /></div>
                        </>
                      ) : (
                        <div className="w-1/2" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile stack */}
            <div className="mt-8 grid gap-4 lg:hidden">
              {stages.map((s) => (
                <StageCard key={s.n} s={s} />
              ))}
            </div>
          </Container>
        </section>

        {/* Agents */}
        <section className="bg-brand text-white">
          <Container className="py-9 text-center">
            <h2 className="font-serif text-[27px]">One Business Memory. Five specialist agents.</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {agents.map((a) => (
                <div key={a.name} className="rounded-xl bg-white px-4 pb-6 pt-6 text-center">
                  <div className="flex justify-center text-brand">{a.icon}</div>
                  <h3 className="mt-4 text-[15px] font-semibold text-[#1f2a28]">{a.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-body">{a.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[14px]">For the MVP, these agent roles operate within one supervised workflow.</p>
          </Container>
        </section>

        {/* Ask why */}
        <section id="ask" className="bg-page">
          <Container className="grid gap-10 py-10 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <h2 className="font-serif text-[25px] text-ink lg:pl-14">Ask the business why.</h2>
              <div className="mt-4 space-y-3">
                {[chat.slice(0, 2), chat.slice(2)].map((pair, pi) => (
                  <Card key={pi} className="divide-y divide-line">
                    {pair.map((m) => (
                      <div key={m.time + m.who} className="flex gap-4 px-4 py-4">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#eef1ef] text-brand">
                          {m.who === 'You' ? <Person size={26} /> : <ShieldSparkle size={28} />}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between">
                            <p className="text-[13px] font-semibold text-[#1f2a28]">{m.who}</p>
                            <span className="text-[11px] text-muted">{m.time}</span>
                          </div>
                          <p className="mt-0.5 text-[13.5px] leading-[1.55] text-[#1f2a28]">{m.text}</p>
                          {m.chips && (
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              {m.chips.map((c) => <Chip key={c}>{c}</Chip>)}
                              <span className="ml-auto inline-flex items-center gap-1.5 text-[11.5px] text-body">
                                <ShieldCheck size={16} className="text-brand" /> {m.sources}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </Card>
                ))}
              </div>
            </div>
            <div className="lg:border-l lg:border-line lg:pl-12 lg:pt-8">
              <h3 className="font-serif text-[24px] text-ink">Every substantive answer should</h3>
              <CheckList items={answerShould} className="mt-6 space-y-4" />
            </div>
          </Container>
        </section>

        {/* Need / receive */}
        <section className="border-t border-line bg-page">
          <Container className="pb-8 pt-8">
            <SectionTitle>What we need.&nbsp; What you receive.</SectionTitle>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-[#e9efeb] px-7 pb-7 pt-6">
                <h3 className="font-serif text-[22px] text-ink">You provide</h3>
                <ul className="mt-4 space-y-4">
                  {provide.map((p) => (
                    <li key={p.text} className="flex items-center gap-5 text-[13.5px] text-body">
                      <span className="text-brand">{p.icon}</span>
                      {p.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-[#f5f5f1] px-7 pb-7 pt-6">
                <h3 className="font-serif text-[22px] text-ink">What you receive</h3>
                <ul className="mt-4 space-y-3">
                  {receive.map((r) => (
                    <li key={r.text} className="flex items-center gap-5 text-[13.5px] text-body">
                      <span className="text-brand">{r.icon}</span>
                      {r.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Human control */}
        <section className="bg-page">
          <Container className="pb-8 pt-4">
            <SectionTitle>Human control at every stage.</SectionTitle>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {control.map((c) => (
                <Card key={c.title} className="flex gap-4 px-5 py-5">
                  <div className="flex-shrink-0 text-brand">{c.icon}</div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#1f2a28]">{c.title}</h3>
                    <p className="mt-1 text-[12.5px] leading-[1.6] text-body">{c.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Start small */}
        <section className="bg-page">
          <Container className="pb-8 pt-4">
            <SectionTitle>Start small.&nbsp; Expand only if the dependency is real.</SectionTitle>
            <div className="mt-6 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
              <Card className="flex flex-1 gap-5 px-6 pb-6 pt-6">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand font-serif text-[22px] text-white">1</span>
                <div>
                  <h3 className="font-serif text-[22px] text-ink-soft">Founder Dependency Scan</h3>
                  <p className="font-serif text-ink"><span className="text-[26px]">£500</span><span className="ml-2 font-sans text-[16px] text-body">+ VAT</span></p>
                  <p className="mt-3 text-[13px] leading-[1.6] text-body">Questionnaire, 60-minute scoping interview, dependency heat map and priority plan.</p>
                  <PrimaryButton className="mt-4 px-10 py-2">Book a founder scan</PrimaryButton>
                  <p className="mt-3 text-[12px] text-body">Credited against a full engagement if you proceed.</p>
                </div>
              </Card>
              <DottedArrow className="hidden h-4 w-[60px] flex-shrink-0 text-brand md:block" />
              <Card className="flex flex-1 gap-5 px-6 pb-6 pt-6">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand font-serif text-[22px] text-white">2</span>
                <div>
                  <h3 className="font-serif text-[22px] text-ink-soft">Verified Owner Transfer</h3>
                  <p className="font-serif text-ink"><span className="text-[20px]">From </span><span className="text-[26px]">£7,500</span><span className="ml-2 font-sans text-[16px] text-body">per company</span></p>
                  <p className="mt-3 text-[13px] leading-[1.6] text-body">Structured interviews, Business Memory, successor testing, readiness assessment and agent setup.</p>
                  <ArrowLink className="mt-6" to="/pricing">View pricing</ArrowLink>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQ cards */}
        <section className="bg-page">
          <Container className="pb-10 pt-4">
            <SectionTitle>Questions about the process</SectionTitle>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {faq.map((f) => (
                <Card key={f.q} className="flex gap-3 px-5 py-5">
                  <QuestionCircle size={26} className="flex-shrink-0 text-brand" />
                  <div>
                    <h3 className="text-[14px] font-semibold leading-snug text-[#1f2a28]">{f.q}</h3>
                    <p className="mt-2 text-[12.5px] leading-[1.6] text-body">{f.a}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <CtaBand
          title="Find out where the business still depends on you."
          body="The Founder Dependency Scan identifies what needs to be transferred before retirement, sale or handover."
        />
      </main>
      <Footer />
    </>
  )
}
