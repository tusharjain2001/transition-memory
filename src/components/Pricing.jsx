import { Link } from 'react-router-dom'
import { ArrowSm } from './Icons'

export default function Pricing() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-[1260px] px-6 pb-8 pt-8 lg:px-10">
        <h2 className="text-center font-serif text-[30px] text-ink">Begin by finding the dependency.</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {/* Scan */}
          <div className="rounded-xl bg-cream px-8 pb-6 pt-5 text-center">
            <h3 className="font-serif text-[26px] text-ink-soft">Founder Dependency Scan</h3>
            <p className="mt-1 font-serif text-ink">
              <span className="text-[40px] leading-none">£500</span>
              <span className="ml-2 font-sans text-[22px] text-body">+ VAT</span>
            </p>
            <p className="mx-auto mt-3 max-w-[460px] text-[14px] leading-[1.7] text-body">
              Owner questionnaire, 60-minute scoping interview, dependency heat map and priority
              transfer plan.
              <br />
              Credited against a full engagement if the company proceeds.
            </p>
            <Link
              to="/book-a-founder-scan"
              className="mt-5 inline-block rounded-md bg-brand px-16 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Book a founder scan
            </Link>
          </div>

          {/* Transfer */}
          <div className="rounded-xl bg-mint-soft px-8 pb-6 pt-5 text-center">
            <h3 className="font-serif text-[26px] text-ink-soft">Verified Owner Transfer</h3>
            <p className="mt-1 font-serif text-ink">
              <span className="text-[32px]">From </span>
              <span className="text-[40px] leading-none">£5,000</span>
              <span className="ml-2 font-sans text-[22px] text-body">per company + VAT</span>
            </p>
            <p className="mx-auto mt-3 max-w-[460px] text-[14px] leading-[1.7] text-body">
              A structured engagement to build the Business Memory, test successor readiness and
              deliver a final transfer report.
            </p>
            <Link
              to="/pricing"
              className="mt-7 inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand hover:underline"
            >
              View pricing <ArrowSm />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
