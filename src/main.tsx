import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Factory,
  Flame,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  ShieldCheck,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./styles.css";

const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "CPCB & KSPCB Compliant",
  "Registered Plastic Waste Processor",
  "EPR Support",
];

const homeProducts = [
  {
    name: "POLY-FUEL A52",
    short: "Equivalent to Furnace Oil",
    description:
      "A high-performance industrial fuel alternative suitable for applications traditionally using Furnace Oil.",
    image: "/assets/a52-latest.jpg",
  },
  {
    name: "POLY-FUEL A60",
    short: "Equivalent to LDO",
    description:
      "A treated industrial fuel alternative designed for compatible applications traditionally using LDO.",
    image: "/assets/a60-latest.jpg",
  },
];

const productDetails = [
  {
    name: "POLY-FUEL A52",
    short: "Furnace Oil Eqv.",
    description:
      "A high-performance industrial fuel alternative suitable for applications traditionally using Furnace Oil. Delivers superior calorific value for efficient heating.",
    image: "/assets/a52-latest.jpg",
  },
  {
    name: "POLY-FUEL A60",
    short: "L.D.O. Eqv.",
    description:
      "A treated industrial fuel alternative designed for compatible applications traditionally using Light Diesel Oil (LDO). Engineered for stable performance.",
    image: "/assets/a60-latest.jpg",
  },
];

const slides = [
  {
    title: (
      <>
        Turning Plastic Waste into
        <br />
        <span>Industrial Energy</span>
      </>
    ),
    description:
      "High-performance alternative fuels for boilers, furnaces and industrial heating applications. Supporting industries with a cost-effective alternative to conventional Furnace Oil and LDO.",
    action: "Explore our products",
    to: "/products",
    image: "/assets/S1.jpg",
  },
  {
    title: (
      <>
        Fueling Industry.
        <br />
        <span>Advancing Circularity.</span>
      </>
    ),
    description:
      "Transforming difficult-to-recycle plastic waste into valuable industrial fuel through advanced pyrolysis technology.",
    action: "Learn About Organic Mile",
    to: "/about",
    image: "/assets/S2.jpg",
  },
  {
    title: (
      <>
        Key Applications and
        <br />
        <span>Industrial Impact</span>
      </>
    ),
    description:
      "Our Poly-Fuel reliably powers essential processes: Delivering high calorific value for Boilers, Furnaces, and Kilns. A stable, high-performance energy source for diverse manufacturing sectors.",
    action: "View Applications",
    to: "/products",
    image: "/assets/S3.jpg",
  },
];

const benefits = [
  "High calorific value",
  "Low sulphur content",
  "Lower viscosity compared with standard Furnace Oil / LDO",
  "Reduced burner maintenance observed in client applications",
  "No pre-heating / steam heating required for suitable applications",
  "Reduced soot generation",
  "Suitable for boilers, furnaces and industrial heating systems",
];

const industries = [
  "Casting Industry",
  "Cement Industry",
  "Road Works",
  "Construction",
  "Recycling Industry",
  "Sponge Iron Industry",
];

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "yellow" | "blue" | "plain";
};

function LinkButton({ to, children, variant = "yellow" }: LinkButtonProps) {
  return (
    <Link className={`button-link button-${variant}`} to={to}>
      {children}
    </Link>
  );
}

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Organic Mile home">
      <img src="/assets/logo.png" alt="Organic Mile Logo" />
      <span className="brand-copy">
        <strong>ORGANIC MILE</strong>
        <small>Sustainable Fuels</small>
      </span>
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const links = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Products", "/products"],
  ] as const;

  return (
    <header className="site-header">
      <div className="header-panel">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              {label}
            </NavLink>
          ))}
          <LinkButton to="/#contact">Contact Us</LinkButton>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === "/"}>
                {label}
              </NavLink>
            ))}
            <LinkButton to="/#contact">Contact Us</LinkButton>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link className="footer-brand" to="/">
          <img src="/assets/logo.png" alt="Organic Mile Logo" />
          <strong>ORGANIC MILE</strong>
        </Link>
        <p>© 2026 Organic Mile Private Limited. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
        </nav>
      </div>
    </footer>
  );
}

function CertificationStrip() {
  return (
    <div className="certification-wrap">
      <div className="certification-strip">
        {certifications.map((certification) => (
          <div className="certification" key={certification}>
            <CheckCircle2 aria-hidden="true" />
            <span>{certification}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % slides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  function showSlide(direction: number) {
    setActiveSlide((slide) => (slide + direction + slides.length) % slides.length);
  }

  const slide = slides[activeSlide];

  return (
    <>
      <section className="home-hero" aria-label="Organic Mile">
        {slides.map((item, index) => (
          <div
            aria-hidden="true"
            className={`hero-background ${index === activeSlide ? "active" : ""}`}
            key={item.image}
            style={{ backgroundImage: `url("${item.image}")` }}
          />
        ))}
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-copy-panel glass-panel">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <LinkButton to={slide.to}>{slide.action}</LinkButton>
          </div>
        </div>
        <button
          className="hero-arrow hero-arrow-left"
          type="button"
          aria-label="Previous slide"
          onClick={() => showSlide(-1)}
        >
          <ArrowLeft />
        </button>
        <button
          className="hero-arrow hero-arrow-right"
          type="button"
          aria-label="Next slide"
          onClick={() => showSlide(1)}
        >
          <ArrowRight />
        </button>
        <div className="slide-indicators" aria-label="Choose slide">
          {slides.map((item, index) => (
            <button
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeSlide}
              className={index === activeSlide ? "selected" : ""}
              key={item.image}
              onClick={() => setActiveSlide(index)}
              type="button"
            />
          ))}
        </div>
      </section>
      <CertificationStrip />
    </>
  );
}

function HomeProductCard({
  product,
}: {
  product: (typeof homeProducts)[number];
}) {
  return (
    <article className="home-product-card">
      <div className="home-product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="home-product-copy">
        <h3>{product.name}</h3>
        <span className="product-equivalent">{product.short}</span>
        <p>{product.description}</p>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <HomeHero />
      <section className="home-about section-shell">
        <div className="home-about-card glass-panel">
          <span className="section-kicker">About Organic Mile</span>
          <p>
            Organic Mile Private Limited is a Mangalore-based manufacturer
            focused on converting waste plastic into industrial-grade
            alternative fuels through pyrolysis and downstream treatment. Our
            process creates useful energy value from difficult-to-recycle
            plastic waste while supplying industries with practical fuel
            alternatives for compatible heating applications.
          </p>
          <LinkButton to="/about">
            Know More About Us
          </LinkButton>
        </div>
      </section>

      <section className="home-products section-shell">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Featured Products</span>
            <h2>Industrial Fuel Alternatives</h2>
          </div>
        </div>
        <div className="home-product-grid">
          {homeProducts.map((product) => (
            <HomeProductCard key={product.name} product={product} />
          ))}
        </div>
        <Link className="text-link" to="/products">
          Explore Products <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="why-section section-shell">
        <div className="section-heading">
          <span className="section-kicker">Why Poly-Fuel?</span>
          <h2>Advantages &amp; Applications</h2>
        </div>
        <div className="why-grid">
          <article className="glass-panel">
            <h3>Key Benefits</h3>
            <ul className="benefit-list">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </article>
          <article className="glass-panel application-panel">
            <h3>Applications &amp; Industries</h3>
            <div>
              <p className="panel-label">Core Applications:</p>
              <p>Hot Air Generators, Boilers, Furnaces, Industrial Heating Systems</p>
            </div>
            <div>
              <p className="panel-label">Industries We Serve:</p>
              <div className="industry-tags">
                {industries.map((industry) => (
                  <span key={industry}>{industry}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="sustainability-section">
        <div className="sustainability-card glass-panel section-shell">
          <h2>Sustainability Snapshot</h2>
          <p>
            Organic Mile converts difficult-to-recycle plastic waste into usable
            industrial fuel, helping recover value from waste while providing
            an alternative to conventional industrial fuels for compatible
            applications.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card glass-panel">
        <div className="contact-layout">
          <div className="contact-main">
            <h2>Looking for an Alternative Industrial Fuel?</h2>
            <p>
              Talk to us about your application, current fuel usage and
              estimated monthly requirement.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input name="name" placeholder="Your Name" type="text" />
                </label>
                <label>
                  <span>Company</span>
                  <input name="company" placeholder="Company Name" type="text" />
                </label>
              </div>
              <label>
                <span>Phone / Email</span>
                <input name="contact" placeholder="Contact Details" type="text" />
              </label>
              <label>
                <span>Estimated Monthly Fuel Requirement</span>
                <select name="requirement" defaultValue="">
                  <option value="">Select an option...</option>
                  <option value="&lt; 10 KL">Less than 10 KL</option>
                  <option value="10 - 50 KL">10 - 50 KL</option>
                  <option value="&gt; 50 KL">More than 50 KL</option>
                </select>
              </label>
              <label>
                <span>Message (Optional)</span>
                <textarea
                  name="message"
                  placeholder="Tell us about your current fuel and application..."
                  rows={3}
                />
              </label>
              <button className="button-link button-yellow" type="submit">
                Contact Us
              </button>
            </form>
          </div>
          <aside className="company-details">
            <h3>Company Details</h3>
            <div className="company-identity">
              <p className="company-name">ORGANIC MILE PRIVATE LIMITED</p>
              <p>GST: 29AAOCO9959L1ZO</p>
            </div>
            <div className="detail-line address-line">
              <span className="detail-icon">
                <MapPin aria-hidden="true" />
              </span>
              <p>
                Plot No. 100A, Baikampady Industrial Area,
                <br />
                New Mangalore, Karnataka – 575011
              </p>
            </div>
            <a className="detail-line" href="tel:+919880876297">
              <span className="detail-icon">
                <Phone aria-hidden="true" />
              </span>
              <p>+91 98808 76297</p>
            </a>
            <a className="detail-line" href="mailto:info@organicmile.in">
              <span className="detail-icon">
                <Mail aria-hidden="true" />
              </span>
              <p>info@organicmile.in</p>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function PageHero({
  title,
  description,
}: {
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="inner-page-hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function CertificationList() {
  return (
    <div className="about-certifications">
      <h2>Certifications &amp; Regulatory Compliance</h2>
      <div>
        {certifications.map((certification) => (
          <span key={certification}>
            <BadgeCheck aria-hidden="true" />
            {certification}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const process = [
    {
      icon: <Recycle aria-hidden="true" />,
      name: "Pyrolysis",
      detail: "Advanced thermal decomposition",
    },
    {
      icon: <Flame aria-hidden="true" />,
      name: "Treatment & Filtration",
      detail: "Refining for industrial standards",
    },
    {
      icon: <CheckCircle2 aria-hidden="true" />,
      name: "Poly-Fuel",
      detail: "High-performance fuel ready for use",
    },
    {
      icon: <Factory aria-hidden="true" />,
      name: "Industrial Use",
      detail: "Powering boilers and furnaces",
    },
  ];

  const commitments = [
    [
      "Waste Diversion",
      "Converts difficult-to-recycle plastic waste into usable industrial fuel.",
    ],
    [
      "Resource Recovery",
      "Recovers energy value from material with limited conventional recycling potential.",
    ],
    [
      "Industrial Fuel Alternative",
      "Provides industries with an alternative fuel option for compatible boiler, furnace and heating applications.",
    ],
    [
      "Local Economic Value",
      "Supports industrial supply chains, business activity and employment through waste recovery and manufacturing.",
    ],
  ];

  return (
    <>
      <PageHero
        title={
          <>
            About <span>Organic Mile</span>
          </>
        }
        description="Powering Industry Responsibly through Advanced Pyrolysis."
      />
      <section className="about-content-section">
        <div className="about-content-shell">
          <div className="about-intro-card glass-panel">
            <article>
              <span className="about-eyebrow">Who We Are</span>
              <h2>Mangalore-based Alternative Fuel Manufacturer.</h2>
              <p>
                Organic Mile Private Limited is based in New Mangalore,
                Karnataka, and focuses on converting waste plastic into
                industrial-grade alternative fuels. Through pyrolysis, treatment
                and filtration, we recover energy value from difficult-to-recycle
                plastic and produce fuel solutions for industrial heating
                applications.
              </p>
            </article>
            <article>
              <span className="about-eyebrow">What We Do</span>
              <h2>Transforming Waste into Value.</h2>
              <p>
                Our manufacturing process converts suitable plastic waste into
                pyrolysis oil, which is further treated and filtered to improve
                usability, stability and fuel characteristics for industrial
                applications.
              </p>
            </article>
          </div>

          <div className="mission-section">
            <div className="mission-copy">
              <div>
                <span className="about-eyebrow">Our Mission</span>
                <h2>
                  Powering Industry
                  <br className="about-tablet-break" />
                  Responsibly.
                </h2>
                <p>
                  To create practical value from difficult-to-recycle plastic
                  waste by producing reliable alternative fuels for industrial
                  applications and supporting circular economy practices.
                </p>
              </div>
              <div className="vision-copy">
                <span className="about-eyebrow">Our Vision</span>
                <p>
                  To contribute to a more resource-efficient future where waste
                  materials are recovered, reused and converted into valuable
                  industrial resources.
                </p>
              </div>
            </div>
            <div className="process-panel">
              <div className="process-list">
                {process.map((step, index) => (
                  <div className="process-step" key={step.name}>
                    <span className="process-icon">{step.icon}</span>
                    <div className="process-step-copy">
                      <h3>{step.name}</h3>
                      <p>{step.detail}</p>
                    </div>
                    {index < process.length - 1 && (
                      <span className="process-connector" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sustainability-about">
            <div className="sustainability-about-heading">
              <span className="about-eyebrow">Sustainability</span>
              <h2>Our Environmental Commitment</h2>
            </div>
            <div className="commitment-grid">
              {commitments.map(([title, description]) => (
                <article key={title}>
                  <span className="commitment-icon">
                    <CheckCircle2 aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-compliance-card glass-panel">
            <CertificationList />
          </div>

          <div className="about-cta-wrap">
            <Link className="about-cta" to="/products">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const specifications = [
  ["Gross Calorific Value (GCV)", "9,000 – 11,200 Kcal/kg"],
  ["Density (at 15°C / 30°C)", "0.75 – 0.95 g/cm³"],
  ["Flash Point", "46°C – 100°C"],
  ["Viscosity (at 40°C / 50°C)", "1.98 – 20 cSt"],
  ["Sulphur Content", "< 1.0%"],
  ["Ash Content", "< 0.1%"],
];

const productBenefits: [string, string, LucideIcon][] = [
  [
    "High Calorific Value",
    "Super heater efficiency. 1.1 times better than regular fuel available in the market.",
    Flame,
  ],
  [
    "Low Sulphur Content",
    "Reduces harmful emissions during combustion compared to conventional alternatives.",
    Recycle,
  ],
  [
    "Heavy Metals Absent",
    "Since the feed itself is waste plastic, heavy metals are entirely absent.",
    ShieldCheck,
  ],
  [
    "Minimal Maintenance",
    "Lower viscosity and reduced soot generation leads to lower burner maintenance.",
    Factory,
  ],
  [
    "No Pre-heating Required",
    "Steam heating or pre-heating is not required, resulting in direct energy savings.",
    CheckCircle2,
  ],
  [
    "Increased Efficiency",
    "Reduces stack temperature (Flu Gas Temp) & increases overall efficiency of Boilers & Furnaces.",
    BadgeCheck,
  ],
];

function ProductCard({
  product,
}: {
  product: (typeof productDetails)[number];
}) {
  return (
    <article className="product-card glass-panel">
      <div className="product-image-frame">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-copy">
        <div className="product-title-row">
          <h2>{product.name}</h2>
          <span>{product.short}</span>
        </div>
        <p>{product.description}</p>
        <LinkButton to="/#contact" variant="blue">
          Contact Us
        </LinkButton>
      </div>
    </article>
  );
}

function Products() {
  const applications = [
    ["Hot Air Generators", "Boilers", "Furnaces & Industrial Heating"],
    industries.slice(0, 5).concat("Sponge Iron"),
  ];

  return (
    <>
      <PageHero
        title={
          <>
            Our <span>Products</span>
          </>
        }
        description="Explore Organic Mile’s Poly-Fuel range developed for compatible boilers, furnaces and industrial heating applications."
      />
      <section className="products-section section-shell">
        <div className="product-grid">
          {productDetails.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="specification-panel glass-panel">
          <h3>Technical Specifications</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Target Specification Range</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map(([parameter, value]) => (
                  <tr key={parameter}>
                    <td>{parameter}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="product-benefits-section section-shell">
        <div className="section-heading">
          <span className="section-kicker">Key Benefits</span>
          <h2>Advantages of using Poly-fuel</h2>
        </div>
        <div className="product-benefit-grid">
          {productBenefits.map(([title, description, Icon], index) => (
            <article className="glass-panel" key={title}>
              <span className="benefit-number">0{index + 1}</span>
              <h3>
                <Icon aria-hidden="true" />
                {title}
              </h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="applications-industries">
          <article>
            <h3>Core Applications</h3>
            <ul>
              {applications[0].map((application) => (
                <li key={application}>
                  <Factory aria-hidden="true" />
                  {application}
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Industries Served</h3>
            <div className="industry-tags">
              {applications[1].map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function NotFound() {
  return (
    <PageHero
      title={
        <>
          Page <span>Not Found</span>
        </>
      }
      description="The page you are looking for could not be found."
    />
  );
}

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    document.title =
      location.pathname === "/about"
        ? "Organic Mile | About Us"
        : location.pathname === "/products"
          ? "Organic Mile | Products"
          : "Organic Mile | Sustainable Industrial Fuels";

    if (location.hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <RouteEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
