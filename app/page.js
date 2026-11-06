import Section from "@/components/Section";

const NAV = [
  ["About", "#about"],
  ["Journey", "#journey"],
  ["Counsel", "#counsel"],
  ["The agency", "#agency"],
  ["Voices", "#voices"],
  ["Contact", "#contact"],
];

const JOURNEY = [
  ["2070 – 2072 BS", "Radio Okhaldhunga", "News reader and programme presenter — the start of a career at the microphone."],
  ["2072 – 2073 BS", "Radio Sahayatri", "Community radio, where reporting meant answering directly to the listeners it served."],
  ["2077 BS", "Federation of Nepali Journalists", "Elected a member of the Federation of Nepali Journalists."],
  ["2081 BS", "FNJ, Okhaldhunga", "Elected Assistant Secretary of the Federation of Nepali Journalists, Okhaldhunga chapter."],
];

const ROLES = [
  ["Managing Director & Founder", "Public Relation Nepal Pvt. Ltd.", "A leading PR and strategic communications agency in Nepal."],
  ["Chairman", "Sarun Media Pvt. Ltd.", "Media company shaping content and programming."],
  ["Editor (सम्पादक)", "onlinesarokar.com", "Editorial leadership of the news portal."],
];

const COUNSEL = [
  [
    "Satish Kumar Singh",
    "Former Chief Minister, Madhesh Province",
    "Election campaign planner and strategist. Message architecture, voter outreach and media planning built around a single, clear promise to the electorate.",
  ],
  [
    "Bahadur Singh Lama",
    "Former Chief Minister, Bagmati Province",
    "Counsellor and media planner. Advising on public positioning, press engagement and the long-run narrative of a political career, not just the next news cycle.",
  ],
  [
    "Mayors and rural municipalities",
    "Local government across Nepal",
    "Communications for elected local leaders: making ward-level development work visible, explaining budgets plainly, and keeping citizens and the press informed under a federal structure.",
  ],
];

const SCOPE = [
  "Programme direction",
  "Creative strategy",
  "Content creation",
  "Federalism and local government",
  "Television presenting",
  "Production",
  "Scriptwriting",
  "PR strategy",
  "Team leadership",
];

// ponytail: DRAFT testimonials, written from the brief. Each person must approve their quote
// before launch. Add `img: "/people/<file>.jpg"` once photos are supplied; initials show until then.
const VOICES = [
  ["Bahadur Singh Lama", "Former Chief Minister, Bagmati Province", "Nabin understands both the newsroom and the political room. His counsel on media and strategy was calm, practical and always grounded in the public."],
  ["Satish Kumar Singh", "Former Chief Minister, Madhesh Province", "He planned our campaign with discipline and a clear sense of the voter. A strategist you can trust with the message."],
  ["Ramhari Khatiwada", "Former Member of Parliament, House of Representatives", "Few people combine journalism and strategy the way Nabin does. He knows how a story travels."],
  ["Rishi Dhamala", "Senior Journalist", "Nabin earned respect in the profession long before he built an agency. He has kept the journalist's standards."],
  ["Pralad Kumar Chhetri", "Mayor, Bardibas Municipality", "He helped us explain our work to the people in clear language. Our municipality is better understood because of it."],
  ["Kedar Thapa", "Mayor, Ilam Municipality", "Professional, dependable and deeply aware of how local government works."],
  ["Samir Rai", "Chairman, Kepilasgadhi Rural Municipality", "Nabin treats a rural municipality with the same seriousness as a national brand."],
  ["Gyanendra Lama", "Manaslu World College", "Thoughtful communications that reached the right students and families."],
];

const initials = (n) => n.split(" ").slice(0, 2).map((w) => w[0]).join("");

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
  "Campaign strategist",
  "Media strategist",
  "MD & Founder, Public Relation Nepal",
  "Chairman, Sarun Media",
  "Editor, onlinesarokar.com",
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
                A journalist by training and an entrepreneur by trade. Founder of{" "}
                <strong>Public Relation Nepal</strong>, chairman of <strong>Sarun Media</strong> and
                strategist to former chief ministers, mayors, institutions and brands working across the country.
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
                <div className="role">MD &amp; Founder &nbsp;/&nbsp; Public Relation Nepal</div>
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
              <b>Roles</b> MD &amp; Founder, Public Relation Nepal · Chairman, Sarun Media · Editor, onlinesarokar.com
            </li>
            <li>
              <b>Practice</b> Journalism, PR, election campaigns, media planning, programme production, brand and communications strategy
            </li>
            <li>
              <b>Sectors</b> Government and local bodies, education, corporate, development
            </li>
          </ul>
        </Section>

        <Section id="journey" tc="00:02" label="Journey" light style={{ paddingTop: 0 }}>
          <h2>From the radio desk to the boardroom.</h2>
          <div className="rows">
            {JOURNEY.map(([when, where, what]) => (
              <div className="row" key={when}>
                <h3>
                  {when}
                  <small>{where}</small>
                </h3>
                <p>{what}</p>
              </div>
            ))}
          </div>
          <h3 className="sub">Today</h3>
          <div className="rows">
            {ROLES.map(([title, org, what]) => (
              <div className="row" key={org}>
                <h3>
                  {title}
                  <small>{org}</small>
                </h3>
                <p>{what}</p>
              </div>
            ))}
          </div>
          <h3 className="sub">Scope of work</h3>
          <ul className="chips">
            {SCOPE.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section id="counsel" tc="00:03" label="Counsel">
          <p className="quote">Campaigns are won in the message, then the machinery.</p>
          <div className="cards">
            {COUNSEL.map(([name, role, body]) => (
              <article className="card" key={name}>
                <h3>{name}</h3>
                <span>{role}</span>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="agency" tc="00:04" label="The agency">
          <p className="quote">We shape narratives that move nations and markets.</p>
          <div className="prose dim">
            <p>
              Public Relation Nepal Pvt. Ltd., founded and led by Nabin, is one of Nepal&rsquo;s leading
              PR agencies. It plans and runs communications for governments, local bodies,
              institutions and enterprises: media relations, reputation and crisis management,
              election and public campaigns, corporate branding and digital marketing. In-house
              production means a campaign can go from strategy to broadcast-quality film without
              leaving the building.
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

        <Section id="voices" tc="00:05" label="Voices" light>
          <h2>What people say.</h2>
          <div className="voices">
            {VOICES.map(([name, role, quote, img]) => (
              <figure className="voice" key={name}>
                <blockquote>{quote}</blockquote>
                <figcaption>
                  {img ? <img src={img} alt={name} /> : <i>{initials(name)}</i>}
                  <span>
                    <b>{name}</b>
                    {role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          tc="00:06"
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
