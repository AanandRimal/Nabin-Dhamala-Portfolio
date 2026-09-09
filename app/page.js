import Section from "@/components/Section";

const NAV = [
  ["About", "#about"],
  ["Work", "#work"],
  ["The agency", "#agency"],
  ["Contact", "#contact"],
];

const WORK = [
  [
    "Public relations",
    "Media strategy, reputation management and crisis response for institutions that cannot afford to be misread. Knowing which journalist to call is half of it; having something worth their time is the other half.",
  ],
  [
    "Journalism",
    "Reporting and commentary on Nepali business, politics and the media industry itself. The habit that keeps everything else honest.",
  ],
  [
    "Building the company",
    "Running an agency is its own discipline — hiring writers, producers and strategists, holding standards on client work, and keeping the operation solvent while it grows.",
  ],
  [
    "Strategy and counsel",
    "Positioning, message architecture and campaign planning for launches, public programmes and national-scale communications. Usually the quietest room and the one that decides the outcome.",
  ],
];

const SERVICES = [
  "Public relations",
  "Corporate branding",
  "Digital marketing",
  "Event management",
  "Video documentary production",
  "Film production",
  "AI advertising",
  "Web development",
  "Studio rental",
];

const CLIENTS = [
  "Tarkeshwar Municipality",
  "Ilam Municipality",
  "Kalaiya Sub-Metropolitan City",
  "Municipal Association of Nepal",
  "Manaslu World College",
  "Brooklyn College",
  "Global Next Consultancy",
];

const TICKER = [
  "Journalist",
  "Entrepreneur",
  "Media strategist",
  "Chairman, Public Relation Nepal",
  "Kathmandu",
];

function TickerRun() {
  // doubled so the -50% translate loops seamlessly
  return (
    <span>
      {[...TICKER, ...TICKER].map((t, i) => (
        <span key={i}>
          {t}
          <i>&#9670;</i>
        </span>
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <>
      <div className="progress" />
      <div className="grain-layer" />

      <header className="masthead">
        <div className="wrap">
          <a className="mark" href="#top">
            <b>Nabin Dhamala</b>
            <span>नबिन धमला</span>
          </a>
          <nav className="nav">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="hero">
          <div className="wrap">
            <div>
              <p className="kicker">Kathmandu, Nepal</p>
              <h1>I have spent my career on both sides of the microphone.</h1>
              <p className="lede">
                A journalist by training and an entrepreneur by trade. Today I lead{" "}
                <strong>Public Relation Nepal</strong>, the Kathmandu agency that handles
                communications for municipalities, institutions and brands working across the
                country.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#contact">
                  Get in touch
                </a>
                <a className="btn btn-ghost" href="#about">
                  Read the background
                </a>
              </div>
            </div>

            <figure className="portrait">
              <div className="viewport">
                <img src="/nabin.jpg" alt="Portrait of Nabin Dhamala" />
              </div>
              <figcaption className="chyron">
                <div className="name">Nabin Dhamala</div>
                <div className="role">Chairman &nbsp;/&nbsp; Public Relation Nepal</div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <TickerRun />
            <TickerRun />
          </div>
        </div>

        <Section id="about" tc="00:01" label="About" light>
          <h2>The same craft, from a different chair.</h2>
          <div className="prose">
            <p>
              I started in newsrooms. Reporting teaches you how a story is actually built — who
              decides which ones travel, how fast a version hardens into fact, and what makes an
              audience believe one account over another.
            </p>
            <p>
              That work now runs the other way. At Public Relation Nepal I sit with the people being
              written about: municipalities answering to their wards, colleges competing for
              students, companies entering a market that has already made up its mind about them.
              The job is to find the true thing, say it plainly, and put it where the right people
              will see it.
            </p>
            <p>
              Nepal&rsquo;s media landscape rewards whoever is clearest first. Most organisations
              here do not have a communications problem so much as a translation problem — good work
              that nobody outside the building understands yet.
            </p>
          </div>
          <ul className="facts">
            <li>
              <b>Based in</b> Kathmandu, Nepal
            </li>
            <li>
              <b>Role</b> Chairman, Public Relation Nepal Pvt. Ltd.
            </li>
            <li>
              <b>Practice</b> Journalism, public relations, brand and communications strategy
            </li>
            <li>
              <b>Sectors</b> Government and local bodies, education, corporate, development
            </li>
          </ul>
        </Section>

        <Section id="work" tc="00:02" label="What I do" light style={{ paddingTop: 0 }}>
          <h2>Four kinds of work.</h2>
          <div className="rows">
            {WORK.map(([title, body]) => (
              <div className="row" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="agency" tc="00:03" label="The agency">
          <p className="quote">We shape narratives that move nations and markets.</p>
          <div className="prose dim">
            <p>
              Public Relation Nepal is a strategic communications company in Kathmandu, working with
              governments, institutions and enterprises across South Asia. In-house production means
              a campaign can go from strategy to broadcast-quality film without leaving the
              building.
            </p>
          </div>
          <ul className="two-col">
            {SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="clients">
            <b>Selected clients</b>
            {CLIENTS.join("  ·  ")}
          </div>
          <a
            className="link-out"
            href="https://publicrelationnepal.com"
            target="_blank"
            rel="noopener"
          >
            Visit publicrelationnepal.com
          </a>
        </Section>

        <Section
          id="contact"
          tc="00:04"
          label="Contact"
          style={{ background: "var(--ink-2)", borderTop: "1px solid var(--rule)" }}
        >
          <h2>For press, partnerships or a project.</h2>
          <p className="lede" style={{ marginBottom: 0 }}>
            Write with what you are trying to achieve and by when. I answer my own email.
          </p>
          <div className="contact-grid">
            <div>
              <h4>Email</h4>
              <a href="mailto:nabindhamala@publicrelationnepal.com">
                nabindhamala@publicrelationnepal.com
              </a>
            </div>
            <div>
              <h4>Phone</h4>
              <a href="tel:+9779851075588">+977 985 107 5588</a>
            </div>
            <div>
              <h4>Office</h4>
              <p>
                Public Relation Nepal
                <br />
                Kathmandu 44600, Nepal
              </p>
            </div>
          </div>
        </Section>
      </main>

      <footer>
        <div className="wrap">
          <span>&copy; {new Date().getFullYear()} Nabin Dhamala</span>
          <span>नबिन धमला &nbsp;·&nbsp; Kathmandu</span>
        </div>
      </footer>
    </>
  );
}
