import { Armchair, DocPound, TwoPeople, CheckCircle, XCircle } from './Icons'

const cases = [
  { icon: <Armchair size={52} />, label: 'Retirement' },
  { icon: <DocPound size={52} />, label: 'Business sale' },
  { icon: <TwoPeople size={60} />, label: 'Family or management\nsuccession' },
]

const isList = [
  'A structured owner-knowledge transfer',
  'A founder-dependency assessment',
  'An approved Business Memory',
  'A successor-readiness process',
  'A source-linked foundation for AI agents',
]
const isNotList = [
  'A digital imitation of the owner',
  'An autonomous company decision-maker',
  'A substitute for management',
  'Legal, financial, tax or technical due diligence',
  'An unlimited document-storage system',
]

export default function Focus() {
  return (
    <section id="how" className="bg-page">
      <div className="mx-auto max-w-[1180px] px-6 pb-12 pt-12 lg:px-10">
        <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand">
          Current focus
        </p>
        <h2 className="mt-2 text-center font-serif text-[27px] leading-[1.25] text-ink">
          What we are building now
          <br />
          A guided service before a self-service platform.
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-center text-[13.5px] leading-[1.75] text-body">
          During the MVP, our team works directly with the owner, successor and responsible
          management. We supervise the interviews, evidence review, Business Memory, successor
          challenge and final report before automating more of the workflow.
        </p>

        <div className="mx-auto mt-9 grid max-w-[1000px] gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.label}
              className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-line bg-white px-6 py-7 text-center"
            >
              <div className="text-brand">{c.icon}</div>
              <p className="mt-4 whitespace-pre-line font-serif text-[21px] leading-[1.2] text-ink-soft">
                {c.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center font-serif text-[15px] text-muted">
          Established UK SMEs where practical knowledge remains concentrated in the owner.
        </p>

        <div className="mx-auto mt-6 grid max-w-[1000px] gap-6 md:grid-cols-2">
          <Panel title="TransitionMemory is" tone="mint" items={isList} Icon={CheckCircle} />
          <Panel title="TransitionMemory is not" tone="cream" items={isNotList} Icon={XCircle} />
        </div>
      </div>
    </section>
  )
}

function Panel({ title, tone, items, Icon }) {
  const bg = tone === 'mint' ? 'bg-mint-soft border-[#dde6df]' : 'bg-cream-soft border-[#ece6dc]'
  return (
    <div className={`rounded-xl border px-9 pb-8 pt-7 ${bg}`}>
      <p className="text-center text-[13px] font-bold uppercase tracking-[0.1em] text-brand">
        {title}
      </p>
      <ul className="mt-6 space-y-3.5">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-4 text-[13.5px] text-body">
            <Icon size={20} className="flex-shrink-0 text-brand" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
