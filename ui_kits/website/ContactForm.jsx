/**
 * ContactForm — unified booking + brief form.
 * Left: calendar + time picker. Right: name/email/message.
 * One submit sends everything.
 */
function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName]     = React.useState("");
  const [email, setEmail]   = React.useState("");
  const [message, setMessage] = React.useState("");
  const [pickedDay, setPickedDay]   = React.useState(14);
  const [pickedTime, setPickedTime] = React.useState(null);

  const times    = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
  const availDays = [7, 8, 12, 13, 14, 19, 20, 21, 26, 27, 28];

  const dayLabel = (day) => {
    const names = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const d = new Date(2026, 4, day);
    return `${names[d.getDay()]} May ${day}`;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!email || !message || !pickedTime) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="contact">
        <div className="container">
          <div className="contact-confirm">
            <div className="contact-confirm-check">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="section-title" style={{margin: "24px 0 12px"}}>You&rsquo;re booked.</h2>
            <p className="section-sub" style={{marginBottom: 40}}>See you {dayLabel(pickedDay)} at {pickedTime}. We&rsquo;ll also reply to your brief within two business days.</p>
            <div className="contact-receipt" style={{maxWidth: 480}}>
              <span className="eyebrow" style={{display:"block", marginBottom: 12}}>Receipt</span>
              <div className="receipt-row"><span>Name</span><span>{name || "(no name)"}</span></div>
              <div className="receipt-row"><span>Email</span><span>{email}</span></div>
              <div className="receipt-row"><span>Call</span><span>{dayLabel(pickedDay)} &middot; {pickedTime}</span></div>
              <div className="receipt-row"><span>Brief</span><span>{message.length} chars sent</span></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact">
      <div className="container">
        <form className="contact-merged" onSubmit={submit}>

          {/* ── Left: calendar ── */}
          <div className="contact-merged-cal">
            <span className="eyebrow" style={{display:"block", marginBottom: 20}}>Pick a time</span>
            <div className="cal">
              <div className="cal-head">
                <span className="cal-month">May 2026</span>
                <div className="cal-nav">
                  <button type="button" className="tb-icon-btn"><i data-lucide="chevron-left"></i></button>
                  <button type="button" className="tb-icon-btn"><i data-lucide="chevron-right"></i></button>
                </div>
              </div>
              <div className="cal-dow">
                {["S","M","T","W","T","F","S"].map((d,i) => <span key={i}>{d}</span>)}
              </div>
              <div className="cal-grid">
                {Array.from({length: 35}).map((_,i) => {
                  const day = i - 4;
                  const isMonth  = day > 0 && day <= 31;
                  const isAvail  = isMonth && availDays.includes(day);
                  const isSel    = day === pickedDay;
                  return (
                    <span
                      key={i}
                      className={`cal-day ${isMonth ? "in-month" : ""} ${isAvail ? "avail" : ""} ${isSel ? "selected" : ""}`}
                      onClick={() => isAvail && (setPickedDay(day), setPickedTime(null))}
                      style={{cursor: isAvail ? "pointer" : undefined}}
                    >{isMonth ? day : ""}</span>
                  );
                })}
              </div>
              <div className="cal-times">
                <div className="cal-times-head">Available &middot; {dayLabel(pickedDay)}</div>
                <div className="cal-times-grid">
                  {times.map(t => (
                    <button key={t} type="button" className={`cal-time ${pickedTime === t ? "active" : ""}`} onClick={() => setPickedTime(t)}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: details ── */}
          <div className="contact-merged-fields">
            <span className="eyebrow" style={{display:"block", marginBottom: 20}}>Your details</span>
            <div className="field-row">
              <div className="field"><span className="eyebrow">Name</span><input value={name} onChange={e => setName(e.target.value)} placeholder="Theo Bennett"/></div>
              <div className="field"><span className="eyebrow">Email *</span><input value={email} onChange={e => setEmail(e.target.value)} placeholder="hello@example.com" required/></div>
            </div>
            <div className="field" style={{flex: 1}}>
              <span className="eyebrow">What are you working on? *</span>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="A few sentences is plenty." required style={{flex: 1, minHeight: 140}}/>
            </div>
            <div className="contact-merged-footer">
              <button className="btn" type="submit" disabled={!pickedTime || !email || !message}>
                {pickedTime ? `Book ${pickedTime} & send brief` : "Pick a time to continue"}
                <i data-lucide="arrow-up-right"></i>
              </button>
              <div className="contact-merged-direct">
                <span className="eyebrow">Or reach us directly</span>
                <a className="book-direct-link">hello@bitsandbytes.studio</a>
                <a className="book-direct-link">+1 (718) 555-0144</a>
              </div>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

window.ContactForm = ContactForm;
