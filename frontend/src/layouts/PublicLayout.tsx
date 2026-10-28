import { useState } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'

const nav = [['Home','/'],['About','/about'],['Services','/services'],['Projects','/work'],['Training','/training'],['Internships','/internships'],['Contact','/contact']]

export default function PublicLayout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-white text-body-text">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="page-shell flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="GTIC home">
            <img src="/gtic-logo.png" alt="Gisenyi Technology Innovation Center Ltd" decoding="async" className="h-14 w-auto max-w-[270px] object-contain sm:h-16 sm:max-w-[310px]"/>
          </Link>
          <div className="hidden items-center gap-5 lg:flex">
            {nav.map(([label,to]) => <NavLink key={to} to={to} end={to === '/'} className={({isActive}) => `relative py-7 text-sm font-semibold transition hover:text-primary ${isActive ? 'text-primary after:absolute after:bottom-4 after:left-0 after:h-0.5 after:w-full after:bg-primary' : 'text-navy'}`}>{label}</NavLink>)}
          </div>
          <Link to="/contact" className="group !hidden items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 px-4 py-2 text-[13px] font-bold text-white shadow-md shadow-blue-600/20 ring-1 ring-blue-400/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-600 hover:to-button-blue hover:shadow-lg hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:!inline-flex">Discuss Your Project <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/15 text-sm transition group-hover:translate-x-0.5 group-hover:bg-white/25">→</span></Link>
          <button onClick={() => setOpen(!open)} className="rounded-lg border border-slate-200 p-2.5 text-navy lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
            <span className="block h-0.5 w-6 bg-current"/><span className="my-1.5 block h-0.5 w-6 bg-current"/><span className="block h-0.5 w-6 bg-current"/>
          </button>
        </nav>
        {open && <div className="border-t bg-white px-5 py-4 shadow-lg lg:hidden">{nav.map(([label,to]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={`block rounded-lg px-4 py-3 font-semibold ${pathname === to ? 'bg-blue-50 text-primary' : 'text-navy'}`}>{label}</NavLink>)}<Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 flex w-full">Discuss Your Project <span>→</span></Link></div>}
      </header>
      <main><Outlet /></main>
      <footer className="bg-[#071c35] text-white">
        <div className="page-shell py-8 sm:py-10"><div className="grid gap-6 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div className="border-b border-white/10 pb-6 md:border-0 md:pb-0"><Link to="/" className="inline-flex" aria-label="GTIC home"><img src="/gtic-logo.png" alt="Gisenyi Technology Innovation Center Ltd" className="h-14 w-auto max-w-[260px] object-contain brightness-0 invert"/></Link><p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">Digital solutions, creative services and practical skills in Rubavu.</p></div>
          <div className="border-b border-white/10 pb-6 md:border-0 md:pb-0"><h3 className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-sky-300">Quick links</h3><nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300" aria-label="Footer navigation">{[['About','/about'],['Services','/services'],['Training','/training'],['Internships','/internships'],['Projects','/work'],['Contact','/contact']].map(([l,t]) => <Link className="transition hover:text-white" key={t} to={t}>{l}</Link>)}</nav></div>
          <div><h3 className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-sky-300">Contact</h3><address className="not-italic text-sm leading-6 text-slate-300"><strong className="font-semibold text-white">Near the Tower</strong> · Mbugangari, Rubavu</address><p className="mt-2 text-sm text-slate-300">Mon–Fri · 8:00–17:00</p><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1"><a href="mailto:info@gtic.rw" className="text-sm font-bold text-sky-300">info@gtic.rw</a><a href="https://maps.app.goo.gl/PaWSAQcE8eAzehf86" target="_blank" rel="noreferrer" className="text-sm font-bold text-sky-300">Map ↗</a></div></div>
        </div></div>
        <div className="border-t border-white/10"><div className="page-shell flex flex-col gap-2 py-5 text-center text-xs leading-5 text-slate-400 sm:flex-row sm:justify-between sm:text-left"><span>© {new Date().getFullYear()} Gisenyi Technology Innovation Center Ltd.</span><span>Made for progress in Rwanda.</span></div></div>
      </footer>
    </div>
  )
}
