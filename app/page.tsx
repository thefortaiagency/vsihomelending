const PHONE = "(260) 338-2561";
const TEL = "tel:+12603382561";

function Loan({ ic, title, desc }: { ic: string; title: string; desc: string }) {
  return (<div className="card"><div className="ic">{ic}</div><h3>{title}</h3><p>{desc}</p></div>);
}

export default function Home() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="brand">VSI <span>Home Lending</span></div>
          <div className="navlinks">
            <a href="#loans">Loan Options</a>
            <a href="#why">Why VSI</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="cta" href={TEL}>Call {PHONE}</a>
        </nav>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">FORT WAYNE, INDIANA</div>
          <h1>Your Fort Wayne Mortgage<br />Loan Professional</h1>
          <p>Getting the right mortgage loan for you — purchase, refinance, and everything in between. Local guidance, honest answers, and a smooth path to your keys.</p>
          <div className="btns">
            <a className="btn primary" href={TEL}>Get Pre-Qualified</a>
            <a className="btn ghost" href="#loans">Explore Loan Options</a>
          </div>
        </div>
      </section>

      <section id="loans">
        <div className="wrap">
          <div className="sec-label">WHAT WE OFFER</div>
          <h2 className="sec-title">Loan Options for Every Buyer</h2>
          <div className="grid">
            <Loan ic="🏡" title="Purchase Loans" desc="First home or next home — competitive rates and a clear, step-by-step path to closing." />
            <Loan ic="🔁" title="Refinance" desc="Lower your rate, tap equity, or shorten your term. We'll run the numbers with you." />
            <Loan ic="🇺🇸" title="VA Loans" desc="For those who served — $0-down options and specialized guidance for veterans and their families." />
            <Loan ic="🔑" title="FHA Loans" desc="Low down payment and flexible qualifying — a great fit for first-time buyers." />
            <Loan ic="📊" title="Conventional" desc="Flexible terms for strong-credit buyers, with options to avoid PMI sooner." />
            <Loan ic="🏗️" title="Renovation & More" desc="Building, buying to renovate, or a unique situation? Let's find the right program." />
          </div>
        </div>
      </section>

      <section className="alt" id="why">
        <div className="wrap">
          <div className="why">
            <div>
              <div className="sec-label" style={{ textAlign: "left" }}>WHY VSI HOME LENDING</div>
              <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)", color: "var(--navy)", margin: "8px 0 4px" }}>A local pro in your corner</h2>
              <ul>
                <li>Straight answers — no runaround, no surprises at closing</li>
                <li>Fort Wayne roots and real relationships with local buyers and Realtors</li>
                <li>A wide range of loan programs, matched to your actual situation</li>
                <li>Responsive from pre-qualification all the way to your keys</li>
              </ul>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: 40 }}>📞</div>
              <h3 style={{ marginTop: 10 }}>Talk to a real person</h3>
              <p style={{ marginBottom: 16 }}>Have a question about rates, programs, or where to start? Call directly.</p>
              <a className="btn primary" href={TEL} style={{ display: "inline-block" }}>{PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-band">
            <h2>Ready to see what you qualify for?</h2>
            <p>A quick conversation is the best first step. No pressure — just clear guidance.</p>
            <a className="btn primary" href={TEL}>Start with a Call</a>
          </div>
        </div>
      </section>

      <section id="contact" className="alt">
        <div className="wrap">
          <div className="sec-label">GET IN TOUCH</div>
          <h2 className="sec-title">Contact VSI Home Lending</h2>
          <div className="contact">
            <div className="box">
              <p style={{ marginBottom: 12 }}><b>Phone</b><br /><a href={TEL} style={{ color: "var(--navy2)", fontWeight: 700 }}>{PHONE}</a></p>
              <p style={{ marginBottom: 12 }}><b>Office</b><br />1028 W Cook Rd<br />Fort Wayne, IN 46825</p>
              <p><b>Hours</b><br />By appointment — evenings & weekends available</p>
            </div>
            <div className="box">
              <p style={{ marginBottom: 12 }}><b>Get started</b></p>
              <p style={{ color: "var(--muted)", marginBottom: 18 }}>Call or text and we'll walk through your goals, timeline, and the loan options that fit — usually in one short conversation.</p>
              <a className="btn primary" href={TEL} style={{ display: "inline-block" }}>Call {PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="eho">🏠 Equal Housing Lender</div>
          VSI Home Lending · Fort Wayne, IN · {PHONE}<br />
          Mortgage loans provided through Polaris Home Funding Corp. · NMLS# 38072 · <a href="https://www.nmlsconsumeraccess.org" style={{ color: "#c6d4e4" }}>nmlsconsumeraccess.org</a><br />
          This is not a commitment to lend. All loans subject to credit approval. Rates and programs subject to change.
        </div>
      </footer>
    </>
  );
}
