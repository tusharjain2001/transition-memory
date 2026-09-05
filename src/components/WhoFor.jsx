import { Link } from 'react-router-dom'
import { Person, TwoPeople, Briefcase, ArrowSm } from './Icons'

const items = [
  {
    id: 'owners',
    icon: <Person size={46} />,
    title: 'For owners',
    body: 'People planning to retire, sell or gradually step back.',
    link: 'For owners',
  },
  {
    id: 'successors',
    icon: <TwoPeople size={50} />,
    title: 'For successors and buyers',
    body: 'People taking responsibility for a business whose context they did not build.',
  },
  {
    id: 'advisers',
    icon: <Briefcase size={44} />,
    title: 'For trusted advisers',
    body: 'Professionals helping owners prepare for succession, sale and transition.',
    link: 'For advisers',
  },
]

export default function WhoFor() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-[1180px] px-6 pb-14 pt-2 lg:px-10">
        <h2 className="text-center font-serif text-[27px] text-ink">Who we are building for</h2>
        <div className="mx-auto mt-6 grid max-w-[1000px] gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              id={it.id}
              key={it.title}
              className="rounded-xl border border-line bg-white px-5 pb-5 pt-6"
            >
              <div className="flex gap-4">
                <div className="flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand">
                  {it.icon}
                </div>
                <div>
                  <h3 className="whitespace-nowrap font-serif text-[16px] text-ink-soft">{it.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.65] text-body">{it.body}</p>
                </div>
              </div>
              {it.link && (
                <Link
                  to={it.id === 'owners' ? '/for-owners' : '/for-advisers'}
                  className="mt-5 inline-flex items-center gap-2.5 pl-[92px] text-[13px] font-semibold text-brand hover:underline"
                >
                  {it.link} <ArrowSm />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
