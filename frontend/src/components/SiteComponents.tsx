import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export const Icon = ({ name, className = '' }: { name: string; className?: string }) => {
  const icons: Record<string, ReactNode> = {
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    bulb: <><path d="M9 18h6M10 22h4M8.5 14.5A6 6 0 1 1 15.5 14c-1 .8-1.5 1.7-1.5 3h-4c0-1.1-.5-1.8-1.5-2.5Z"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    palette: <><path d="M12 22a10 10 0 1 1 10-10c0 1.1-.9 2-2 2h-3.5a2.5 2.5 0 0 0 0 5H17c0 1.7-2.2 3-5 3Z"/><circle cx="7.5" cy="10.5" r=".5"/><circle cx="10.5" cy="6.5" r=".5"/><circle cx="15" cy="7.5" r=".5"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H3v-4h1a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V3h4v1a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.1.4.3.7.6 1h1v4h-1c-.3.3-.5.6-.6 1Z"/></>,
    camera: <><path d="M14.5 4 16 7h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l1.5-3h5Z"/><circle cx="12" cy="13" r="3"/></>,
    printer: <><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/><path d="M18 12h.01"/></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className || 'h-7 w-7'} aria-hidden="true">{icons[name] || icons.bulb}</svg>
}

export function PageHero({ eyebrow, title, copy, image, children }: { eyebrow: string; title: string; copy: string; image?: string; children?: ReactNode }) {
  const heroImages: Record<string, string> = {
    'About us': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=85',
    'Our services': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=85',
    'Our work': 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=85',
    'Training': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85',
    'Insights': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85',
    'Contact': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85',
  }
  const heroImage = image || heroImages[eyebrow]
  return <section className="relative overflow-hidden bg-navy text-white">{heroImage && <><img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-[#061b35] via-[#061b35]/95 to-[#061b35]/30"/></>}<div className={`page-shell relative grid min-h-[420px] items-center gap-10 py-16 ${children ? 'lg:grid-cols-2' : ''}`}><div><p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-emerald-400">{eyebrow}</p><h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl">{title}<span className="text-primary">.</span></h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{copy}</p></div>{children}</div></section>
}

export function ServiceCard({ icon, title, copy, to = '/contact' }: { icon: string; title: string; copy: string; to?: string }) {
  const imageByType: Record<string, string> = {
    code: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    palette: '/services/illustrator-workspace.jpg',
    users: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
    gear: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85',
    camera: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=85',
    bulb: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85',
  }
  return <Link to={to} className="group card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><div className="relative h-36 overflow-hidden"><img src={imageByType[icon]} alt={`${title} service`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><div className="absolute bottom-2.5 left-2.5 rounded-lg bg-white/95 p-2 text-primary shadow backdrop-blur"><Icon name={icon} className="h-5 w-5"/></div></div><div className="p-5"><h3 className="text-base font-extrabold text-navy">{title}</h3><p className="mt-1.5 text-sm leading-5 text-slate-600">{copy}</p><span className="mt-4 inline-flex text-sm font-bold text-primary transition group-hover:translate-x-1">Learn more →</span></div></Link>
}

export function CTA({ title = 'Have a project in mind?', copy = "Let's shape it into something useful, clear and built to last.", eyebrow = 'A practical next step' }: { title?: string; copy?: string; eyebrow?: string }) {
  return <section className="bg-slate-50"><div className="page-shell py-12 lg:py-14"><div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-8 shadow-lg sm:px-8 lg:px-10 lg:py-9"><div className="absolute inset-y-0 left-0 w-px bg-slate-300"/><div className="relative grid items-center gap-7 lg:grid-cols-[1fr_auto]"><div className="flex items-start gap-4 sm:gap-5"><div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary sm:flex"><Icon name="bulb" className="h-6 w-6"/></div><div>{eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-support-green">{eyebrow}</p>}<h2 className="font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">{title}</h2><p className="mt-2 max-w-2xl leading-7 text-slate-600">{copy}</p></div></div><Link to="/contact" className="inline-flex w-full items-center justify-center gap-4 rounded-lg bg-primary px-6 py-3.5 font-bold text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-button-blue lg:w-auto">Talk to our team <span className="text-xl leading-none">→</span></Link></div></div></div></section>
}
