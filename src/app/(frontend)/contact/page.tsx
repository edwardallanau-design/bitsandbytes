import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-header-title">Here&rsquo;s how it works.</h1>
          <p className="page-header-sub">Book a discovery call or send us a project brief. We read every brief ourselves. You&rsquo;ll hear back directly.</p>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
