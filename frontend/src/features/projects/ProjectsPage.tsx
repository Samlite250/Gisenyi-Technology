import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CTA, Icon, PageHero } from '../../components/SiteComponents'

const projects = [
  {
    type: 'Digital solutions',
    title: 'Business website platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    copy: 'A clear, responsive online presence structured to help an organisation explain its work, build credibility and make enquiries easier.',
    scope: ['UX structure', 'Responsive development', 'Content presentation'],
    outcome: 'A focused digital presence that works clearly across desktop and mobile.',
  },
  {
    type: 'Creative',
    title: 'Brand identity system',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85',
    copy: 'A practical visual identity designed to keep communication recognisable and consistent across everyday brand touchpoints.',
    scope: ['Visual direction', 'Brand assets', 'Print & digital use'],
    outcome: 'A coherent identity that is easier to apply across multiple communication formats.',
  },
  {
    type: 'Digital solutions',
    title: 'Management dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    copy: 'A streamlined workspace that organises operational information and makes routine activity easier to review and manage.',
    scope: ['Workflow planning', 'Interface design', 'Information views'],
    outcome: 'A more accessible view of the information teams need for day-to-day decisions.',
  },
  {
    type: 'Creative',
    title: 'Photography & content',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1400&q=85',
    copy: 'Purposeful visual content created to document people, programmes and progress with clarity and authenticity.',
    scope: ['Content planning', 'Photography', 'Digital-ready assets'],
    outcome: 'A versatile image collection ready for campaigns, reports and online communication.',
  },
]

const filters = ['All', 'Digital solutions', 'Creative']

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter(project => project.type === filter)

  return <>
    <PageHero
      eyebrow="Our work"
      title="Useful work, thoughtfully delivered"
      copy="Explore how GTIC brings technology, design and practical thinking together to create solutions shaped around real needs."
    />

    <section className="page-shell py-16 lg:py-20">
      <div className="grid gap-7 border-b border-slate-200 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Solutions with a clear purpose.</h2>
          <p className="mt-4 leading-7 text-slate-600">Each engagement starts with understanding the need, then selecting the right combination of strategy, creativity and technology.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {filters.map(item => <button key={item} type="button" role="tab" aria-selected={filter === item} onClick={() => setFilter(item)} className={`filter-tab rounded-full border px-4 py-2 text-sm font-bold ${filter === item ? 'border-primary bg-primary text-white' : 'border-slate-200 bg-white text-navy hover:border-blue-200 hover:bg-blue-50'}`}>{item}</button>)}
        </div>
      </div>

      <div key={filter} role="tabpanel" className="tab-panel-enter mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2">
        {shown.map((project, index) => <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl" key={project.title}>
          <div className="relative h-44 overflow-hidden sm:h-48">
            <img src={project.image} alt={`${project.title} project`} loading="lazy" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white sm:p-5">
              <span className="rounded-full border border-white/30 bg-navy/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.16em] backdrop-blur">{project.type}</span>
              <span className="text-xs font-bold text-white/80">Project {String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="font-display text-xl font-extrabold leading-tight text-navy">{project.title}</h3>
            <p className="mt-2.5 text-sm leading-6 text-slate-600">{project.copy}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{project.scope.map(item => <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{item}</span>)}</div>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-support-green">Designed outcome</p>
              <p className="mt-1.5 text-sm font-semibold leading-5 text-navy">{project.outcome}</p>
            </div>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 self-start text-sm font-extrabold text-primary transition hover:gap-3">Discuss a similar project <span>→</span></Link>
          </div>
        </article>)}
      </div>
    </section>

    <section className="border-y border-slate-200 bg-slate-50 py-14 lg:py-16">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div><p className="eyebrow">Built into every project</p><h2 className="font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">Professional work starts with a sound process.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['users', 'Listen first', 'We clarify the people, priorities and practical constraints behind the work.'],
              ['bulb', 'Design with purpose', 'Every choice should improve clarity, usability or the intended outcome.'],
              ['gear', 'Support delivery', 'We refine the work carefully and provide guidance for what comes next.'],
            ].map(([icon, title, copy]) => <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-primary"><Icon name={icon} className="h-5 w-5"/></span><h3 className="mt-4 font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></div>)}
          </div>
        </div>
      </div>
    </section>

    <CTA eyebrow="Start a project" title="Have an idea worth building?" copy="Tell us what you want to improve, create or communicate. We will help you identify a practical way forward." />
  </>
}
