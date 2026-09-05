import { SpeechBubble, LinkIcon, Folder, GradCap, ShieldPerson } from './Icons'

const agents = [
  { icon: <SpeechBubble size={54} />, name: 'Interview Agent', body: 'Draws out\ntacit knowledge.' },
  { icon: <LinkIcon size={54} />, name: 'Evidness Agent', body: 'Links answers\nto sources.' },
  { icon: <Folder size={54} />, name: 'Memory Steward', body: 'Organises\napproved\nknowledge.' },
  { icon: <GradCap size={54} />, name: 'Successor Coach', body: 'Tests\nunderstanding.' },
  { icon: <ShieldPerson size={54} />, name: 'Owner Memory Agent', body: 'Answers\nauthorised\nquestions.' },
]

export default function Agents() {
  return (
    <section className="bg-mint">
      <div className="mx-auto grid max-w-[1260px] gap-10 px-6 py-12 lg:grid-cols-[270px_1fr] lg:px-10">
        <div className="lg:pl-16">
          <h2 className="font-serif text-[30px] text-ink">Why AI agents?</h2>
          <p className="mt-5 text-[14.5px] leading-[1.75] text-body">
            A static handover becomes harder to use and easier to forget. Controlled AI agents can
            interview adaptively, identify missing context, organise approved knowledge and help
            successors find the right explanation when it is needed.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {agents.map((a) => (
              <div
                key={a.name}
                className="flex flex-col items-center rounded-xl border border-line-soft bg-white px-2 pb-6 pt-7 text-center"
              >
                <div className="text-brand">{a.icon}</div>
                <h3 className="mt-5 font-serif md:whitespace-nowrap text-[14.5px] leading-tight tracking-tight text-ink-soft">{a.name}</h3>
                <p className="mt-3 whitespace-pre-line font-serif text-[15px] leading-[1.35] text-ink-soft/90">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-[560px] text-[14.5px] leading-[1.7] text-body">
            The agents support human decisions. They do not impersonate the owner or make
            autonomous commitments.
          </p>
        </div>
      </div>
    </section>
  )
}
