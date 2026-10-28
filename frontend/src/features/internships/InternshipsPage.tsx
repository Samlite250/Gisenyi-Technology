import { CTA, Icon, PageHero } from '../../components/SiteComponents'
import { internshipTracks } from '../../data/training'

const benefits = [
  ['code', 'Practical experience', 'Apply classroom knowledge through relevant tasks and guided project work.'],
  ['users', 'Professional guidance', 'Learn alongside experienced people and build productive workplace habits.'],
  ['bulb', 'Career preparation', 'Strengthen your portfolio, confidence and readiness for future opportunities.'],
]

const pathwayImages = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
]

export default function InternshipsPage() {
  return <>
    <PageHero eyebrow="Internships" title="Learn through real experience" copy="GTIC provides structured internship opportunities for technical, vocational and university students who want to strengthen practical skills in a professional environment." image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=85"/>

    <section className="page-shell py-16 lg:py-20"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Why intern with GTIC</p><h2 className="section-title">Build confidence by doing meaningful work.</h2><p className="mt-4 leading-7 text-slate-600">Our placements help students connect academic learning with practical technology and business environments.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{benefits.map(([icon,title,copy]) => <article key={title} className="card p-6"><div className="inline-flex rounded-xl bg-blue-50 p-3 text-primary"><Icon name={icon}/></div><h3 className="mt-5 text-lg font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></article>)}</div></section>

    <section className="bg-slate-50 py-16 lg:py-20"><div className="page-shell"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Available pathways</p><h2 className="section-title">Choose your education level.</h2><p className="mt-4 leading-7 text-slate-600">Select the pathway that matches your current studies to see the available placement areas.</p></div><div className="mx-auto mt-10 grid max-w-6xl gap-7 lg:grid-cols-2">{internshipTracks.map((track,index) => <article key={track.level} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="relative h-52 overflow-hidden"><img src={pathwayImages[index]} alt={`${track.level} internship pathway`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"/><span className="absolute left-5 top-5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider text-primary shadow backdrop-blur">Pathway {String(index+1).padStart(2,'0')}</span><h3 className="absolute bottom-5 left-6 right-6 text-2xl font-extrabold text-white">{track.level}</h3></div><div className="flex flex-1 flex-col p-6 sm:p-7"><p className="min-h-12 text-sm leading-6 text-slate-600">{track.note}</p><div className="my-6 h-px bg-slate-100"/><p className="text-xs font-bold uppercase tracking-[.16em] text-support-green">Placement areas</p><ul className="mt-4 grid gap-3 sm:grid-cols-2">{track.areas.map(area => <li key={area} className="flex items-start gap-2.5 text-sm font-semibold text-navy"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs text-support-green">✓</span><span>{area}</span></li>)}</ul><div className="mt-auto pt-7"><a href={`mailto:info@gtic.rw?subject=${encodeURIComponent(`Internship application: ${track.level}`)}`} className="btn-primary w-full">Apply or enquire <span>→</span></a></div></div></article>)}</div></div></section>

    <section className="page-shell py-16"><div className="grid overflow-hidden rounded-3xl bg-navy text-white lg:grid-cols-2"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85" alt="Students collaborating during an internship" className="h-full min-h-72 w-full object-cover"/><div className="p-9 lg:p-12"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">Before applying</p><h2 className="text-3xl font-extrabold">Tell us about your studies and goals.</h2><p className="mt-4 leading-7 text-slate-300">Include your institution, education level, preferred placement area and expected internship dates when contacting GTIC.</p></div></div></section>
    <CTA title="Ready to begin your internship journey?" copy="Contact GTIC with your education level, area of interest and preferred placement dates."/>
  </>
}
