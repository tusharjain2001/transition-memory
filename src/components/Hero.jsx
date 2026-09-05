import { Link } from 'react-router-dom'
import { HeadBulb, DottedBeam, Drawers, TwoPeople, RobotBubble, ArrowRight, ArrowSm } from './Icons'

const steps = [
  { icon: <HeadBulb size={84} />, label: 'Experience' },
  { icon: <Drawers size={84} />, label: 'Business\nMemory' },
  { icon: <TwoPeople size={84} />, label: 'Continuity' },
  { icon: <RobotBubble size={84} />, label: 'Controlled\nAI agent' },
]

export default function Hero() {
  return (
    <section id="about" className="bg-page">
      <div className="mx-auto grid max-w-[1260px] items-start gap-12 px-6 pb-16 pt-8 lg:grid-cols-[1.12fr_1fr] lg:px-10">
        {/* Left */}
        <div>
          <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-brand">
            About TransitionMemory
          </p>
          <h1 className="mt-4 font-serif text-[38px] leading-[1.12] text-[#1f5c54] sm:text-[44px] lg:text-[46px]">
            When an owner leaves, the company should keep what made their judgement valuable.
          </h1>
          <p className="mt-7 max-w-[500px] text-[16.5px] leading-[1.65] text-body">
            TransitionMemory is being built to help retiring SME owners turn years of
            relationships, decisions and practical experience into capability the business can
            continue to use.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-8">
            <Link
              to="/book-a-founder-scan"
              className="rounded-md bg-brand px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Book a founder scan
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-brand hover:underline"
            >
              See how it works <ArrowSm />
            </Link>
          </div>
        </div>

        {/* Right illustration */}
        <div className="pt-2 text-brand lg:pt-6">
          <div className="flex items-start justify-between">
            {steps.map((s, i) => (
              <div key={s.label} className={`flex items-start ${i < steps.length - 1 ? 'flex-1' : ''}`}>
                <div className="flex w-[70px] flex-shrink-0 flex-col items-center text-center sm:w-[110px]">
                  <div className="flex h-[64px] items-center [&_svg]:h-14 [&_svg]:w-14 sm:h-[92px] sm:[&_svg]:h-[84px] sm:[&_svg]:w-[84px]">{s.icon}</div>
                  <p className="mt-4 whitespace-pre-line text-[12px] leading-snug text-[#1f2a28] sm:text-[14.5px]">
                    {s.label}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-5 flex flex-1 items-center justify-center text-brand sm:mt-7 [&_svg]:max-w-full">
                    {i === 0 ? (
                      <>
                        <DottedBeam size={26} className="-ml-3" />
                        <ArrowRight className="-ml-1 h-5 w-9" />
                      </>
                    ) : (
                      <ArrowRight className="h-5 w-10" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
