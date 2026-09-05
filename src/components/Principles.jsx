import { Person, ClipboardCheck, Magnifier, TwoPeopleCheck } from './Icons'

const items = [
  {
    n: '01',
    title: "Respect the owner's\ncontribution",
    body: 'Reduce dependency without treating experience as a problem or trying to replace the person.',
    icon: <Person size={52} />,
  },
  {
    n: '02',
    title: 'Verify, do not merely\ndocument',
    body: 'Test whether the successor can apply the knowledge, not whether they received a file.',
    icon: <ClipboardCheck size={52} />,
  },
  {
    n: '03',
    title: 'Show the source',
    body: 'Important AI answers should identify their evidence, confidence and unresolved assumptions.',
    icon: <Magnifier size={52} />,
  },
  {
    n: '04',
    title: 'Keep people\nin control',
    body: 'Owners and authorised reviewers decide what is accurate, approved and available for use.',
    icon: <TwoPeopleCheck size={60} />,
  },
]

export default function Principles() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-[1260px] px-6 pb-14 pt-10 lg:px-10">
        <h2 className="text-center font-serif text-[30px] text-ink">
          The principles shaping TransitionMemory
        </h2>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.n}
              className="flex min-h-[290px] flex-col rounded-xl border border-line bg-white px-7 pb-6 pt-7 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <p className="font-serif text-[22px] text-ink">{it.n}</p>
              <h3 className="mt-3 whitespace-pre-line font-serif text-[23px] leading-[1.22] text-ink-soft">
                {it.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-body">{it.body}</p>
              <div className="mt-auto flex justify-center pt-6 text-brand">{it.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
