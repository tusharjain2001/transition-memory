import { Building, Drawers, TwoPeople, DottedArrow } from './Icons'

export default function Mission() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-[1260px] px-6 pb-16 pt-12 text-center lg:px-10">
        <p className="font-serif text-[22px]">Our mission</p>
        <h2 className="mx-auto mt-2 max-w-[820px] font-serif text-[32px] leading-[1.2] sm:text-[38px]">
          Make established businesses transferable—
          <br className="hidden sm:block" />
          not founder-dependent.
        </h2>
        <p className="mx-auto mt-5 max-w-[660px] text-[15.5px] leading-[1.7] text-white/90">
          We want practical business knowledge to become a durable company asset rather than an
          informal responsibility carried indefinitely by one person.
        </p>

        <div className="mx-auto mt-12 flex max-w-[780px] flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
          <Step label="Founder">
            <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/85">
              <Building size={60} />
            </div>
          </Step>
          <DottedArrow className="hidden h-5 w-[130px] flex-shrink-0 text-white/90 sm:mt-10 sm:block" />
          <Step label="Business Memory">
            <div className="flex h-[92px] items-center justify-center">
              <Drawers size={100} className="mission-drawers" />
            </div>
          </Step>
          <DottedArrow className="hidden h-5 w-[130px] flex-shrink-0 text-white/90 sm:mt-10 sm:block" />
          <Step label="Prepared successor">
            <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-white/85">
              <TwoPeople size={60} />
            </div>
          </Step>
        </div>
      </div>
    </section>
  )
}

function Step({ children, label }) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <p className="mt-6 text-[15.5px] font-semibold text-white">{label}</p>
    </div>
  )
}
