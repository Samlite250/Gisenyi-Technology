import { FormEvent, useState } from 'react'
import { Icon, PageHero } from '../../components/SiteComponents'

const mapEmbedUrl = 'https://www.google.com/maps?q=-1.676813056361849,29.25362965469756&z=17&output=embed'
const mapDirectionsUrl = 'https://maps.app.goo.gl/PaWSAQcE8eAzehf86'

const contactDetails = [
  { label: 'Visit us', value: 'Near the Tower, Mbugangari, Rubavu', icon: 'gear' },
  { label: 'Email us', value: 'info@gtic.rw', icon: 'code', href: 'mailto:info@gtic.rw' },
  { label: 'Opening hours', value: 'Monday–Friday · 8:00–17:00', icon: 'bulb' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true) }

  return <>
    <PageHero eyebrow="Contact" title="Let's start a conversation" copy="Whether you have a project in mind, want to learn more about our services or explore training opportunities, we'd love to hear from you."/>

    <section className="bg-slate-50 py-6 sm:py-8"><div className="page-shell"><div className="grid gap-3 md:grid-cols-3">{contactDetails.map(detail => <div key={detail.label} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary"><Icon name={detail.icon} className="h-5 w-5"/></span><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{detail.label}</p>{detail.href ? <a href={detail.href} className="mt-1 block truncate text-sm font-bold text-navy hover:text-primary">{detail.value}</a> : <p className="mt-1 text-sm font-bold leading-5 text-navy">{detail.value}</p>}</div></div>)}</div></div></section>

    <section className="page-shell py-14 lg:py-20"><div className="mb-9 max-w-2xl"><p className="eyebrow">Get in touch</p><h2 className="section-title">Tell us how we can help.</h2><p className="mt-3 leading-7 text-slate-600">Share a few details and our team will respond with the right next step.</p></div>
      <div className="contact-layout grid items-stretch overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg md:grid-cols-[.65fr_1fr] lg:grid-cols-3">
        <div className="relative min-h-64 overflow-hidden bg-navy md:min-h-[460px] lg:min-h-[480px]"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85" alt="GTIC team discussing a client project" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-400">Ideas into impact</p><p className="mt-2 text-lg font-extrabold leading-7 lg:text-xl">Let's create something useful together.</p></div></div>
        <div className="m-3 self-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:m-4 sm:p-5 lg:m-4 lg:p-5">
          <div className="mb-4 border-b border-slate-100 pb-3"><p className="text-[11px] font-bold uppercase tracking-[.16em] text-support-green">Send an enquiry</p><h3 className="mt-1 font-display text-xl font-extrabold text-navy">How can we help?</h3><p className="mt-1 text-xs leading-5 text-slate-500">Complete the form and our team will get back to you.</p></div>
          {sent ? <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-emerald-50 p-6 text-center"><div><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">✓</div><h3 className="mt-4 text-2xl font-bold text-navy">Thank you.</h3><p className="mx-auto mt-2 max-w-sm text-slate-600">Your message has been received. Our team will be in touch soon.</p><button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-primary">Send another message</button></div></div> : <form onSubmit={submit} className="grid content-start gap-x-3 gap-y-2.5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy">Full name<input required className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100" placeholder="Your full name"/></label>
            <label className="text-sm font-semibold text-navy">Email address<input required type="email" className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100" placeholder="you@example.com"/></label>
            <label className="text-sm font-semibold text-navy">Phone number<input className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100" placeholder="Your phone number"/></label>
            <label className="text-sm font-semibold text-navy">I'm interested in<select className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100"><option value="">Select an option</option><option>Digital solutions</option><option>Creative services</option><option>Training programme</option><option>Internship placement</option><option>IT support</option></select></label>
            <label className="text-sm font-semibold text-navy sm:col-span-2">How can we help?<textarea required rows={3} className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100" placeholder="Tell us about your project, training needs or enquiry"/></label>
            <div className="mt-1 flex flex-col items-stretch justify-between gap-3 border-t border-slate-100 pt-3 sm:col-span-2 sm:flex-row sm:items-center"><p className="max-w-[15rem] text-[11px] leading-4 text-slate-500">We use your details only to respond to this enquiry.</p><button className="btn-primary shrink-0 !px-4 !py-2.5 text-sm">Send enquiry <span>→</span></button></div>
          </form>}
        </div>

        <div className="flex min-h-[440px] flex-col border-t border-slate-200 bg-slate-100 lg:min-h-full lg:border-l lg:border-t-0"><div className="flex items-center justify-between gap-4 bg-navy px-5 py-4 text-white sm:px-6"><div><p className="text-xs font-bold uppercase tracking-widest text-sky-300">Exact location</p><p className="mt-1 text-sm font-semibold">Near the Tower · Mbugangari, Rubavu</p></div><a href={mapDirectionsUrl} target="_blank" rel="noreferrer" className="shrink-0 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold transition hover:bg-white/20">Directions ↗</a></div><iframe src={mapEmbedUrl} title="Map showing the exact GTIC location in Mbugangari, Rubavu" className="min-h-[380px] w-full flex-1 border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><a href={mapDirectionsUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border-t border-slate-200 bg-white px-5 py-4 text-sm font-bold text-primary transition hover:bg-blue-50">Open exact location in Google Maps <span>↗</span></a></div>
      </div>
    </section>
  </>
}
