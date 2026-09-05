import { Eye, DocLines, DashedClock } from './Icons'

const items = [
  {
    icon: <Eye size={38} />,
    title: 'Owner dependency\nis often invisible',
    body: 'The company appears to run normally because the owner is still there to answer questions, resolve exceptions and maintain relationships.',
  },
  {
    icon: <DocLines size={38} />,
    title: 'Traditional handovers\ncapture information',
    body: 'They rarely establish whether the next team understands how to apply it when circumstances change.',
  },
  {
    icon: <DashedClock size={38} />,
    title: 'Knowledge disappears\nat the transition',
    body: 'Important context is often discovered only after the owner has retired, sold the company or stopped taking calls.',
  },
]

export default function Problem() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-12 lg:px-10">
        <h2 className="text-center font-serif text-[27px] text-ink">The problem we are here to solve</h2>
        <div className="mx-auto mt-8 grid max-w-[1000px] gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-line bg-white px-8 py-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <div className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border border-brand/70 text-brand">
                {it.icon}
              </div>
              <h3 className="mt-6 whitespace-pre-line font-serif text-[21px] leading-[1.25] text-ink-soft">
                {it.title}
              </h3>
              <p className="mt-4 text-left text-[13.5px] leading-[1.75] text-body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
