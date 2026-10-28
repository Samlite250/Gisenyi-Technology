import { Link } from 'react-router-dom'
import { CTA, Icon } from '../../components/SiteComponents'

const values = [
  { icon: 'gear', title: 'Integrity', copy: 'We communicate clearly, act responsibly and earn trust through the quality of our work.' },
  { icon: 'users', title: 'Collaboration', copy: 'We listen closely and bring people together to create solutions that genuinely fit.' },
  { icon: 'bulb', title: 'Practical impact', copy: 'We focus on useful outcomes that strengthen skills, improve work and open opportunities.' },
]

export default function AboutPage() {
  return <>
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=88" alt="" className="h-full w-full object-cover object-[58%_center]"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b35] via-[#061b35]/95 to-[#061b35]/30"/>
      </div>
      <div className="page-shell relative flex min-h-[440px] items-center py-12 text-white sm:min-h-[470px] sm:py-14 lg:min-h-[490px] lg:py-16">
        <div className="max-w-[720px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[.24em] text-emerald-400">Who we are</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Technology, skills and ideas that <span className="text-blue-300">move people forward.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">GTIC combines practical technology, creative thinking and hands-on learning to create opportunities for people, businesses and institutions across Rwanda.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><Link to="/services" className="btn-primary w-full whitespace-nowrap sm:w-auto">Discover what we do&nbsp; →</Link><Link to="/contact" className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-white/50 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/20 sm:w-auto">Start a conversation&nbsp; →</Link></div>
          <p className="mt-10 flex items-center gap-3 text-sm font-semibold text-slate-200"><span className="h-px w-8 bg-emerald-400"/>Rooted in Rubavu. Built for progress in Rwanda.</p>
        </div>
      </div>
    </section>

    <section className="page-shell py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div><p className="eyebrow">Who we are</p><h2 className="section-title">Progress is strongest when people grow with it.</h2><p className="mt-6 leading-7 text-slate-600">GTIC is a Rwandan technology and innovation company supporting individuals, businesses and institutions through digital solutions, creative services and hands-on training.</p><p className="mt-4 leading-7 text-slate-600">We begin by understanding the real need. Then we combine the right people, ideas and tools to create something useful—something our clients and learners can confidently carry forward.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><article className="rounded-2xl border border-blue-100 bg-blue-50 p-6"><Icon name="gear" className="h-7 w-7 text-primary"/><p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">Our mission</p><h3 className="mt-2 font-display text-lg font-extrabold text-navy">Turn potential into practical progress.</h3></article><article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6"><Icon name="bulb" className="h-7 w-7 text-support-green"/><p className="mt-4 text-xs font-bold uppercase tracking-wider text-support-green">Our vision</p><h3 className="mt-2 font-display text-lg font-extrabold text-navy">A skilled, connected and innovative Rwanda.</h3></article></div></div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-slate-50 py-16 lg:py-20"><div className="page-shell"><div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-14"><div><p className="eyebrow">What guides us</p><h2 className="section-title">Values visible in how we work.</h2><p className="mt-4 leading-7 text-slate-600">Simple principles shape every conversation, programme and project.</p></div><div className="grid gap-4 md:grid-cols-3">{values.map(item => <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" key={item.title}><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary"><Icon name={item.icon} className="h-5 w-5"/></span><h3 className="mt-5 text-lg font-extrabold text-navy">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p></article>)}</div></div></div></section>

    <CTA title="Let's build meaningful progress together" copy="Bring us your project, training need or challenge, and we will help you shape a clear way forward." />
  </>
}
