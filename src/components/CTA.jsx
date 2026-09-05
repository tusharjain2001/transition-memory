import { Link } from 'react-router-dom'
import { CalendarCheck, ArrowSm } from './Icons'

export default function CTA() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-8 px-6 py-9 lg:flex-row lg:items-center lg:px-10">
        <div className="flex h-[112px] w-[112px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand lg:ml-6">
          <CalendarCheck size={60} />
        </div>
        <div className="flex-1 lg:pl-4">
          <h2 className="max-w-[640px] font-serif text-[30px] leading-[1.2] text-ink sm:text-[32px]">
            Your experience should become an asset the business keeps.
          </h2>
          <p className="mt-4 max-w-[560px] text-[15.5px] leading-[1.55] text-body">
            Find out what still depends on the owner and what should be transferred before
            retirement, sale or handover.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col items-center gap-5 lg:pr-12">
          <Link
            to="/book-a-founder-scan"
            className="rounded-md bg-brand px-10 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-brand-dark"
          >
            Book a founder scan
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[15px] font-semibold text-brand hover:underline"
          >
            Talk to us <ArrowSm />
          </a>
        </div>
      </div>
    </section>
  )
}
