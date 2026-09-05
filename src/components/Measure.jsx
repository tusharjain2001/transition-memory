import { DashedArrow } from './Icons'

const pills = ['Captured', 'Understood', 'Usable']

export default function Measure() {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-[1180px] px-6 py-10 text-center lg:px-10">
        <p className="text-[16px] tracking-wide">Our measure of success is simple.</p>
        <h2 className="mx-auto mt-2 max-w-[760px] font-serif text-[30px] leading-[1.2] sm:text-[34px]">
          Can the business make sound decisions when the owner is no longer in the room?
        </h2>
        <div className="mx-auto mt-6 flex max-w-[720px] flex-wrap items-center justify-center gap-y-3">
          {pills.map((p, i) => (
            <div key={p} className="flex items-center">
              <span className="rounded-md border border-white/90 px-8 py-1.5 text-[14.5px] font-semibold">
                {p}
              </span>
              {i < pills.length - 1 && (
                <DashedArrow className="hidden h-4 w-[110px] text-white/90 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
