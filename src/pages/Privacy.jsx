import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Eyebrow } from '../components/shared'

const linkCls = 'border-b border-brand/40 font-semibold text-brand hover:border-brand'

const toc = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use', label: 'How we use your information' },
  { id: 'ai', label: 'Interviews, recordings and AI' },
  { id: 'other-people', label: 'Information relating to other people' },
  { id: 'special-category', label: 'Special category information' },
  { id: 'sharing', label: 'Who we share information with' },
  { id: 'transfers', label: 'International transfers' },
  { id: 'retention', label: 'How long we keep information' },
  { id: 'security', label: 'Security' },
  { id: 'rights', label: 'Your rights' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'cookies', label: 'Cookies and website technology' },
  { id: 'third-party', label: 'Third-party websites' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes to this Policy' },
  { id: 'contact', label: 'How to contact us' },
  { id: 'complaints', label: 'Complaints' },
]

export default function Privacy() {
  const [active, setActive] = useState(toc[0].id)

  // highlight whichever section is currently in view in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -70% 0px' },
    )
    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-brand text-white">
          <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow className="text-white/85">Privacy</Eyebrow>
              <h1 className="mt-2 font-serif text-[44px] leading-[1.05] sm:text-[52px]">Privacy Policy</h1>
              <p className="mt-3 max-w-[620px] font-serif text-[22px] leading-[1.25] text-white/95">
                How TransitionMemory collects, uses and protects your information.
              </p>
              <p className="mt-3 text-[14px] text-white/85">Last updated: 7 September 2026</p>
            </div>
            <p className="max-w-[270px] border-l-2 border-white/60 pl-5 text-[19px] leading-[1.35] text-white/95">
              People&rsquo;s knowledge builds businesses.
              <br />
              We help it live on.
            </p>
          </Container>
        </section>

        {/* Policy */}
        <section className="bg-page">
          <Container className="grid gap-10 pb-12 pt-8 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-12">
            <aside className="lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-xl border border-line bg-cream px-6 py-5">
                <h2 className="font-serif text-[19px] text-ink">On this page</h2>
                <ol className="mt-3 space-y-2">
                  {toc.map((t, i) => (
                    <li key={t.id} className="flex gap-2 text-[13px] leading-[1.4]">
                      <span className="w-5 flex-shrink-0 text-muted">{i + 1}.</span>
                      <a
                        href={`#${t.id}`}
                        className={`hover:underline ${active === t.id ? 'font-semibold text-brand' : 'text-body'}`}
                      >
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-5 rounded-xl border border-line-soft bg-mint-soft px-6 py-5">
                <p className="font-serif text-[17px] text-ink">Your trust matters</p>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-body">
                  We are committed to being clear, transparent and responsible with your information.
                </p>
              </div>
            </aside>

            <article className="max-w-[860px]">
            <div className="rounded-xl border border-line-soft bg-mint-soft px-6 py-5">
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory is committed to protecting your privacy and handling personal information responsibly.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">This Privacy Policy explains what information we collect, why we collect it, how we use it, who we may share it with, how long we keep it and the rights you have in relation to your personal information.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">It applies when you visit the TransitionMemory website, contact us, use our services or otherwise interact with us.</p>
      </div>

      <section id="who-we-are" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">1. Who we are</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory provides services designed to help businesses capture, organise, preserve and transfer important knowledge, including knowledge held by business owners, founders, employees and other key individuals.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">For personal information we collect directly in connection with our website, marketing and administration of our services, TransitionMemory will normally act as the <strong className="font-semibold text-ink-soft">data controller</strong>.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where we process information provided to us by a business customer as part of providing the TransitionMemory service, we may instead act as a <strong className="font-semibold text-ink-soft">data processor</strong> on behalf of that customer. In those circumstances, the customer will generally determine how and why the personal information is processed.</p>

        <div className="mt-6 flex items-start gap-5 rounded-xl border border-line bg-cream px-6 py-5">
          <span className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full border border-[#d9cbb5] bg-white font-serif text-[17px] font-bold text-brand">TM</span>
          <div className="text-[15px] leading-[1.75] text-body">
            <strong className="font-semibold text-ink-soft">TransitionMemory</strong><br />
            25 Wilton Road<br />
            London<br />
            SW1V 1LW<br />
            United Kingdom
          </div>
        </div>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">For privacy enquiries, please contact: <a href="mailto:hello@transitionmemory.com" className={linkCls}><strong className="font-semibold text-ink-soft">hello@transitionmemory.com</strong></a></p>
      </section>

      <section id="information-we-collect" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">2. Information we collect</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">The information we collect will depend on how you interact with TransitionMemory.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Information you provide to us</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">This may include:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>your name;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>email address;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>telephone number;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>job title;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>company or organisation;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>information submitted through our website;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>correspondence with us;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>information provided when requesting information, a demonstration or our services;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>account and billing information where applicable; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>feedback you provide about TransitionMemory.</span></li>
        </ul>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Information used within the TransitionMemory service</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">The nature of TransitionMemory means that customers may provide information relating to their business and the people involved in it.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">This may include:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>recorded interviews;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>audio or video recordings;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>interview transcripts;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>notes;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>business documents;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>operating procedures;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>business history;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>information about customers and suppliers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>information about employees and other individuals;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>information about key business relationships;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>organisational knowledge;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>photographs;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>presentations;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>spreadsheets;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>correspondence; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>other files or information supplied to us.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We ask customers not to provide personal information that is unnecessary for the purpose for which they are using TransitionMemory.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Information collected automatically</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">When you use our website, we may collect limited technical information such as:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>IP address;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>browser type;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>device information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>pages visited;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>date and time of visits;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>referring website; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>website usage and performance information.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Some of this information may be collected using cookies or similar technologies.</p>
      </section>

      <section id="how-we-use" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">3. How we use your information</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may use personal information to:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>provide and operate TransitionMemory;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>respond to enquiries;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>establish and manage customer relationships;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>provide requested services;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>conduct and manage interviews and knowledge-capture exercises;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>transcribe and organise information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>create summaries, reports and structured knowledge records;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>preserve important business knowledge;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>enable knowledge to be transferred to successors, employees or other authorised individuals;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>maintain, support and improve our services;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>provide customer support;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>protect the security and integrity of our systems;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>prevent fraud or misuse;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>maintain business and financial records;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>comply with our legal obligations;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>establish, exercise or defend legal claims; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>communicate with you about TransitionMemory where permitted by law.</span></li>
        </ul>

        <p className="mt-3 text-[15px] leading-[1.75] text-body">We will only use personal information where we have a lawful basis for doing so.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Contract</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where processing is necessary to provide services you have requested or to take steps before entering into a contract.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Legitimate interests</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where processing is necessary for our legitimate business interests and those interests are not overridden by your rights and interests.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">This may include operating and improving TransitionMemory, managing customer relationships, securing our systems and developing our services.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Consent</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where we have asked you to provide consent for a particular use of your information.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where processing is based on consent, you can withdraw that consent at any time.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Legal obligation</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where we need to process information to comply with a legal requirement.</p>
      </section>

      <section id="ai" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">4. Interviews, recordings and artificial intelligence</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory may use technology, including artificial intelligence, to assist with the capture, transcription, organisation, retrieval and summarisation of business knowledge.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">For example, technology may be used to:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>transcribe interviews;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>convert audio or video into written records;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>identify themes within interviews;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>organise information into categories;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>summarise lengthy discussions;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>make stored knowledge easier to search;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>identify relationships between pieces of information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>structure operational knowledge;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>prepare draft reports;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>assist in creating transition materials; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>help authorised users find relevant information.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where an interview or meeting is recorded, participants will be informed that recording is taking place.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where appropriate, we may obtain consent before making or using recordings.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Artificial intelligence systems may occasionally produce inaccurate, incomplete or misleading results. Where appropriate, AI-generated information should therefore be reviewed before being relied upon for important commercial, legal, financial or operational decisions.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory does not intend to make decisions about individuals which have legal or similarly significant effects solely through automated processing unless we specifically tell the affected individual and put appropriate safeguards in place.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where third-party AI, transcription or technology providers process personal information on our behalf, we will take appropriate steps to ensure that suitable confidentiality, security and data-protection arrangements are in place.</p>
      </section>

      <section id="other-people" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">5. Information relating to other people</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Because TransitionMemory is designed to preserve business knowledge, information supplied to us may sometimes mention other individuals.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">These could include:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>employees;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>former employees;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>directors;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>shareholders;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>customers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>suppliers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>contractors;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>consultants;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>professional advisers; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>other business contacts.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Businesses using TransitionMemory are responsible for ensuring that they have an appropriate basis for providing personal information about other people to us and for giving those individuals any privacy information required by law.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We encourage customers to avoid providing unnecessary or excessive personal information about other individuals.</p>
      </section>

      <section id="special-category" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">6. Special category information</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Certain types of personal information receive additional protection under data-protection law.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">This may include information concerning:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>racial or ethnic origin;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>political opinions;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>religious or philosophical beliefs;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>trade union membership;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>genetic information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>biometric information used for identification;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>health;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>sex life; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>sexual orientation.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory is not primarily designed to collect this type of information.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We ask users not to provide special category information unless it is genuinely necessary for the relevant project and there is an appropriate legal basis for processing it.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where we do process special category information, we will take appropriate steps to comply with the additional requirements applying to that information.</p>
      </section>

      <section id="sharing" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">7. Who we share information with</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may share personal information with carefully selected organisations that help us operate TransitionMemory.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">These may include:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>cloud hosting providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>IT providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>cybersecurity providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>communications providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>transcription providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>artificial intelligence technology providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>data storage providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>website and analytics providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>payment providers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>accountants;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>lawyers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>insurers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>consultants; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>other professional advisers and service providers.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where appropriate, organisations processing information on our behalf will be subject to contractual confidentiality, security and data-protection obligations.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may also disclose personal information where necessary:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>to comply with the law;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>to comply with a court order;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>to respond to a request from a regulator or competent authority;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>to investigate suspected fraud or unlawful activity;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>to protect our rights or the rights of others;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>to establish, exercise or defend legal claims; or</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>in connection with a proposed sale, investment, restructuring or transfer of all or part of TransitionMemory.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">If TransitionMemory or substantially all of its business or assets is acquired, personal information may form part of that transaction.</p>
        <p className="mt-6 rounded-lg border-l-4 border-brand bg-mint px-5 py-4 font-serif text-[19px] text-ink"><strong className="font-semibold text-ink-soft">We do not sell personal information.</strong></p>
      </section>

      <section id="transfers" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">8. International transfers</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Some of the technology and service providers used by TransitionMemory may process or store information outside the United Kingdom.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where personal information is transferred outside the UK, we will take appropriate steps to ensure that the transfer complies with applicable UK data-protection law.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Depending on the circumstances, these protections may include:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>transferring information to a country recognised as providing an adequate level of protection;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>using approved contractual safeguards;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>using the UK International Data Transfer Agreement or applicable UK addendum;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>relying on another permitted transfer mechanism; or</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>implementing additional technical and organisational safeguards where appropriate.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You can contact us at <a href="mailto:hello@transitionmemory.com" className={linkCls}>hello@transitionmemory.com</a> if you would like further information about the safeguards applying to a particular transfer.</p>
      </section>

      <section id="retention" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">9. How long we keep information</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We keep personal information only for as long as reasonably necessary for the purposes for which it was collected.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">The appropriate retention period will depend on factors such as:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>the nature of the information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>why the information was collected;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>the duration of our relationship with the customer;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>the customer's instructions;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>contractual requirements;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>whether information remains necessary to provide the service;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>applicable limitation periods; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>legal, accounting or regulatory requirements.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Customer information forming part of a TransitionMemory project may be retained for the period agreed with the relevant customer.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">At the end of the relevant retention period, personal information may be:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>securely deleted;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>returned to the customer;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>anonymised so that it no longer identifies an individual; or</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>retained where we have a legitimate or legal reason to continue holding it.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Backup copies may remain for a limited period until they are overwritten or securely deleted as part of our normal backup processes.</p>
      </section>

      <section id="security" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">10. Security</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We take the security of personal information seriously.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We use appropriate technical and organisational measures designed to protect information against:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>unauthorised access;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>unlawful processing;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>accidental loss;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>disclosure;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>alteration;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>misuse; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>destruction.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Depending on the nature of the information and services involved, these safeguards may include:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>access controls;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>password protection;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>authentication measures;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>encryption;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>secure cloud infrastructure;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>data backups;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>system monitoring;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>restrictions on personnel access;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>confidentiality obligations; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>security requirements for service providers.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Access to customer information should be limited to individuals who need it for legitimate business purposes.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">No internet-based or electronic storage system can guarantee absolute security. However, protecting the confidentiality and integrity of customer information is an important part of how TransitionMemory is designed and operated.</p>
      </section>

      <section id="rights" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">11. Your rights</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">UK data-protection law gives individuals various rights in relation to their personal information.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Depending on the circumstances, you may have the right to:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>ask whether we hold personal information about you;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>request access to your personal information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>ask us to correct inaccurate or incomplete information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>ask us to delete your personal information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>ask us to restrict the use of your information;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>object to certain types of processing;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>receive certain information in a portable format;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>withdraw consent where processing is based on consent; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>raise concerns about certain types of automated decision-making.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">These rights are not absolute and may be subject to exemptions or other conditions under applicable law.</p>

        <h3 className="mt-7 font-serif text-[20px] leading-snug text-ink-soft">Your right to object</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where we process your personal information on the basis of legitimate interests, you may have the right to object to that processing.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You also have the right to object at any time to the use of your personal information for direct marketing.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">To exercise any of your rights, please contact <a href="mailto:hello@transitionmemory.com" className={linkCls}>hello@transitionmemory.com</a>.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may need to ask for information to confirm your identity before dealing with a request.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We will respond to valid requests within the period required by applicable law.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You will normally not have to pay a fee to exercise your rights. However, applicable law may allow us to charge a reasonable fee or decline a request where it is manifestly unfounded or excessive.</p>
      </section>

      <section id="marketing" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">12. Marketing</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may contact customers and prospective customers with information about TransitionMemory and services that we believe may be relevant to them where permitted by law.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where consent is required, we will obtain consent before sending marketing communications.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You can stop receiving marketing communications at any time by:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>using the unsubscribe facility included in the communication; or</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>contacting us at <a href="mailto:hello@transitionmemory.com" className={linkCls}>hello@transitionmemory.com</a>.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Stopping marketing communications will not prevent us from contacting you about matters necessary for the provision of services or administration of our relationship with you.</p>
      </section>

      <section id="cookies" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">13. Cookies and website technology</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Our website may use cookies and similar technologies.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Cookies are small files or pieces of information placed on or accessed from your device when you visit a website.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">They may be used to:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>make the website operate correctly;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>maintain website security;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>remember user preferences;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>understand how visitors use the website;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>measure website performance; and</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>improve the user experience.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Cookies that are strictly necessary for the operation of our website may be used where permitted by law without obtaining prior consent.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where applicable law requires consent for other cookies or similar technologies, we will request that consent before using them.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You can also control cookies through the settings available in your internet browser.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Blocking certain cookies may affect the operation or functionality of the TransitionMemory website.</p>
      </section>

      <section id="third-party" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">14. Third-party websites</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Our website may contain links to websites or services operated by other organisations.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">If you follow one of these links, that organisation may collect and use information about you in accordance with its own privacy practices.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory does not control third-party websites and is not responsible for their content, security or privacy practices.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We recommend reviewing the privacy information provided by third-party websites before submitting personal information to them.</p>
      </section>

      <section id="children" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">15. Children</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">TransitionMemory is a business-focused service.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Our services and website are not directed at children and we do not knowingly seek to collect personal information directly from children.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">If we become aware that personal information relating to a child has been provided to us inappropriately, we will take reasonable steps to address the situation.</p>
      </section>

      <section id="changes" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">16. Changes to this Privacy Policy</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may update this Privacy Policy from time to time.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">We may do so to reflect:</p>
        <ul className="mt-3 space-y-2">
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>changes to TransitionMemory;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>new services or features;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>changes to the technology we use;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>changes to our suppliers;</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>changes to our processing activities; or</span></li>
          <li className="flex gap-3 text-[15px] leading-[1.75] text-body"><span aria-hidden="true" className="mt-[10px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand/70" /><span>changes to applicable law or regulatory guidance.</span></li>
        </ul>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">The most recent version will be published on our website and the <strong className="font-semibold text-ink-soft">Last updated</strong> date at the beginning of this Privacy Policy will be amended.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">Where a change materially affects how we use personal information, we will take reasonable steps to bring the change to the attention of affected individuals where required.</p>
      </section>

      <section id="contact" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">17. How to contact us</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">If you have any questions about this Privacy Policy, how TransitionMemory handles your information or wish to exercise a data-protection right, please contact us.</p>

        <div className="mt-6 flex items-start gap-5 rounded-xl border border-line bg-cream px-6 py-5">
          <span className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full border border-[#d9cbb5] bg-white font-serif text-[17px] font-bold text-brand">TM</span>
          <div className="text-[15px] leading-[1.75] text-body">
            <strong className="font-semibold text-ink-soft">TransitionMemory</strong><br />
            25 Wilton Road<br />
            London<br />
            SW1V 1LW<br />
            United Kingdom<br /><br />
            <strong className="font-semibold text-ink-soft">Email:</strong> <a href="mailto:hello@transitionmemory.com" className={linkCls}>hello@transitionmemory.com</a>
          </div>
        </div>
      </section>

      <section id="complaints" className="scroll-mt-28">
        <h2 className="mt-11 border-t border-line pt-7 font-serif text-[27px] leading-[1.25] text-ink">18. Complaints</h2>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">If you have concerns about how we use your personal information, please contact us first so that we have an opportunity to investigate and respond.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You can contact us at <a href="mailto:hello@transitionmemory.com" className={linkCls}>hello@transitionmemory.com</a>.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You also have the right to make a complaint to the <strong className="font-semibold text-ink-soft">Information Commissioner's Office (ICO)</strong>, the UK's independent authority responsible for upholding information rights and data-protection law.</p>
        <p className="mt-3 text-[15px] leading-[1.75] text-body">You can find further information about your data-protection rights and how to make a complaint on the ICO's website.</p>
      </section>
    
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
