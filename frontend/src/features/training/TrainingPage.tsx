import { CTA, Icon, PageHero } from '../../components/SiteComponents'
import { trainingProgrammes } from '../../data/training'

export default function TrainingPage() {
  return <>
    <PageHero eyebrow="Training" title="Practical skills. New possibilities" copy="Gain hands-on experience and build in-demand digital skills to advance your career, start a business or contribute to your community."/>
    <section className="page-shell py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Our programmes</p><h2 className="section-title">Choose what you want to build.</h2><p className="mt-4 leading-7 text-slate-600">Every programme focuses on practical learning, useful outcomes and skills learners can apply with confidence.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{trainingProgrammes.map(programme => <article className="card group overflow-hidden" key={programme.title}><div className="relative h-40 overflow-hidden"><img src={programme.image} alt={`${programme.title} training`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute bottom-3 left-3 rounded-lg bg-white/95 p-2 text-primary shadow"><Icon name={programme.icon} className="h-5 w-5"/></div></div><div className="p-5"><h3 className="text-base font-extrabold leading-6 text-navy">{programme.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{programme.description}</p><a href={`mailto:info@gtic.rw?subject=${encodeURIComponent(`Training enquiry: ${programme.title}`)}`} className="mt-4 inline-block text-sm font-bold text-primary">Ask about this programme →</a></div></article>)}</div>
    </section>

    <section className="page-shell py-16"><div className="grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-2"><div className="min-h-72"><img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85" alt="Collaborative practical training" className="h-full w-full object-cover"/></div><div className="p-9 lg:p-12"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">Flexible learning</p><h2 className="text-3xl font-extrabold">Programmes for individuals and teams.</h2><p className="mt-4 leading-7 text-slate-300">Contact GTIC to discuss programme availability, schedules, group training or the internship application process.</p></div></div></section>
    <CTA title="Ready to build your next skill?" copy="Tell us which training programme interests you and what you hope to achieve."/>
  </>
}
