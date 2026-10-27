import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Cog,
  Download,
  FileSpreadsheet,
  FileText,
  Factory,
  Flame,
  Hammer,
  HardHat,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Route as RouteIcon,
  ShieldCheck,
  ThermometerSun,
  X,
  Waves,
  Wind,
  Wrench,
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
    id: "product-a52",
    name: "POLY-FUEL A52",
    short: "Furnace Oil Eqv.",
    description:
      "A high-performance industrial fuel alternative suitable for applications traditionally using Furnace Oil. Delivers superior calorific value for efficient heating.",
    image: "/assets/a52-latest.jpg",
  },
  {
    id: "product-a60",
    name: "POLY-FUEL A60",
    short: "L.D.O. Eqv.",
    description:
      "A treated industrial fuel alternative designed for compatible applications traditionally using Light Diesel Oil (LDO). Engineered for stable performance. Treated and filtered up to 1 micron level.",
    image: "/assets/a60-latest.jpg",
  },
];

const slides = [
  {
    title: (
      <>
        Turning Plastic Waste
        <br />
        <span>into Industrial Energy</span>
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

const benefitIcons: LucideIcon[] = [
  Flame,
  ShieldCheck,
  Waves,
  Wrench,
  ThermometerSun,
  Wind,
  Factory,
];

const industries = [
  "Casting Industry",
  "Cement Industry",
  "Road Works",
  "Construction",
  "Recycling Industry",
  "Sponge Iron Industry",
];

const homeApplications = [
  "Hot Air Generators",
  "Boilers",
  "Furnaces",
  "Industrial Heating Systems",
];

const applicationIcons: LucideIcon[] = [Wind, Factory, Flame, Cog];
const industryIcons: LucideIcon[] = [
  Hammer,
  Layers3,
  RouteIcon,
  HardHat,
  Recycle,
  Building2,
];

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "yellow" | "blue" | "plain";
  className?: string;
};

function LinkButton({
  to,
  children,
  variant = "yellow",
  className = "",
}: LinkButtonProps) {
  return (
    <Link className={`button-link button-${variant} ${className}`} to={to}>
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
      <div className="footer-main">
        <div className="footer-about">
          <Link className="footer-brand" to="/">
            <img src="/assets/logo.png" alt="Organic Mile Logo" />
            <span>
              <strong>ORGANIC MILE</strong>
              <small>PRIVATE LIMITED</small>
            </span>
          </Link>
          <p>
            Converting difficult-to-recycle plastic waste into industrial-grade
            alternative fuels for compatible heating applications.
          </p>
          <div className="footer-certifications" aria-label="Certifications">
            <span>ISO 9001:2015</span>
            <span>ISO 14001:2015</span>
            <span>CPCB · KSPCB</span>
          </div>
        </div>
        <nav className="footer-column" aria-label="Quick links">
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/#contact">Contact Us</Link>
        </nav>
        <nav className="footer-column" aria-label="Our products">
          <h2>Our Products</h2>
          <Link to="/products#product-a52">POLY-FUEL A52</Link>
          <Link to="/products#product-a60">POLY-FUEL A60</Link>
          <Link to="/products#specifications">Technical Specifications</Link>
        </nav>
        <div className="footer-column footer-contact">
          <h2>Get in Touch</h2>
          <a href="tel:+919880876297">
            <Phone aria-hidden="true" />
            +91 98808 76297
          </a>
          <a href="mailto:info@organicmile.in">
            <Mail aria-hidden="true" />
            info@organicmile.in
          </a>
          <a
            href="https://maps.google.com/?q=Baikampady+Industrial+Area,+New+Mangalore,+Karnataka"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" />
            <span>
              Plot No. 100A, Baikampady Industrial Area, New Mangalore,
              Karnataka – 575011
            </span>
          </a>
          <Link className="footer-quote-link" to="/#contact">
            Contact Us <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 ORGANIC MILE PRIVATE LIMITED. All rights reserved.</p>
        <p>
          Registered Plastic Waste Processor <span>·</span> EPR support for
          eligible requirements
        </p>
      </div>
    </footer>
  );
}

function CertificationStrip() {
  return (
    <section className="certification-wrap" aria-label="Certifications and compliance">
      <div className="certification-intro">
        <span className="certification-kicker">Trust framework</span>
        <h2 className="certification-heading">
          Trust &amp;
          <br />
          <span>Compliance</span>
        </h2>
        <p className="certification-summary">
          Quality, environmental standards &amp; responsible recovery.
        </p>
        <div className="certification-count" aria-label={`${certifications.length} credentials`}>
          <strong>{String(certifications.length).padStart(2, "0")}</strong>
          <span>credentials<br />in focus</span>
        </div>
      </div>
      <div className="certification-strip">
        {certifications.map((certification, index) => (
          <div className="certification" key={certification}>
            <div className="certification-card-top">
              <span className="certification-mark">
                <ShieldCheck aria-hidden="true" />
              </span>
              <span className="certification-index">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="certification-name">{certification}</span>
            <span className="certification-rule" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
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
            <span className="hero-kicker">Waste to energy. Built for industry.</span>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <LinkButton to={slide.to} className="hero-explore-link">
              <span className="hero-cta-label">{slide.action}</span>
              <span className="hero-cta-icon">
                <ArrowRight aria-hidden="true" />
              </span>
            </LinkButton>
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
  const whyContentRef = useRef<HTMLDivElement>(null);
  const [whyVisible, setWhyVisible] = useState(false);

  useEffect(() => {
    const content = whyContentRef.current;
    if (!content) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HomeHero />
      <section className="home-about section-shell">
        <div className="home-about-copy">
          <span className="section-kicker">About Organic Mile</span>
          <h2>A better use for difficult-to-recycle plastic</h2>
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
        <div className="home-about-visual">
          <img
            src="/assets/S2.jpg"
            alt="Plastic waste transformed through pyrolysis into industrial energy"
          />
          <div className="process-caption">
            <span>Waste plastic</span>
            <ArrowRight aria-hidden="true" />
            <span>Industrial energy</span>
          </div>
        </div>
      </section>

      <section className="home-products section-shell" id="products">
        <div className="section-heading">
          <div>
            <span className="section-kicker">Our Products</span>
            <h2>Industrial fuels with a circular purpose</h2>
            <p>
              Explore the Poly-Fuel range for compatible boilers, furnaces and
              industrial heating applications.
            </p>
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
        <div
          className={`why-content${whyVisible ? " is-visible" : ""}`}
          ref={whyContentRef}
        >
          <div className="why-column">
            <h3>Key Benefits</h3>
            <ul className="why-benefit-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="why-column">
            <h3>Applications &amp; Industries</h3>
            <div className="why-applications-copy">
              <h4>Core Applications:</h4>
              <p>{homeApplications.join(", ")}</p>
            </div>
            <div className="why-industries">
              <h4>Industries We Serve:</h4>
              <div className="why-industry-tags">
                {industries.map((industry) => (
                  <span key={industry}>{industry}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sector-download-section" aria-label="Sector spreadsheet">
        <a
          className="sector-spreadsheet-download"
          href="/assets/organic-mile-essential-sectors.csv"
          download="Organic-Mile-Essential-Sectors.csv"
        >
          <span className="sector-spreadsheet-icon">
            <FileSpreadsheet aria-hidden="true" />
            <Download aria-hidden="true" />
          </span>
          <span className="sector-spreadsheet-label">
            <strong>Download Sector Spreadsheet</strong>
            <small>Essential sectors, applications and product references · CSV</small>
          </span>
          <span className="sector-spreadsheet-action" aria-hidden="true">
            <Download />
          </span>
        </a>
      </section>

      <Contact />
    </>
  );
}

function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Organic Mile website enquiry");
    const body = encodeURIComponent(
      [
        `Name: ${formData.get("name")}`,
        `Company: ${formData.get("company")}`,
        `Phone / Email: ${formData.get("contact")}`,
        `Estimated Monthly Fuel Requirement: ${formData.get("requirement")}`,
        `Message: ${formData.get("message") || "Not provided"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:info@organicmile.in?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="quote-cta">
        <div>
          <span>LET'S TALK FUEL</span>
          <h2>Looking for an Alternative Industrial Fuel?</h2>
          <p>
            Talk to us about your application, current fuel usage and estimated
            monthly requirement.
          </p>
        </div>
        <a className="quote-cta-button" href="#quote-form">
          Contact Us <ArrowRight aria-hidden="true" />
        </a>
      </div>
      <div className="contact-card glass-panel">
        <div className="contact-layout">
          <div className="contact-main">
            <span className="contact-kicker">START A CONVERSATION</span>
            <h2>Contact Us</h2>
            <p>
              Talk to us about your application, current fuel usage and
              estimated monthly requirement.
            </p>
            <div className="quote-contact-list">
              <a href="tel:+919880876297">
                <Phone aria-hidden="true" />
                <span>
                  <strong>CALL US</strong>
                  +91 98808 76297
                </span>
              </a>
              <a href="mailto:info@organicmile.in">
                <Mail aria-hidden="true" />
                <span>
                  <strong>EMAIL US</strong>
                  info@organicmile.in
                </span>
              </a>
              <a
                href="https://maps.google.com/?q=Baikampady+Industrial+Area,+New+Mangalore,+Karnataka"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin aria-hidden="true" />
                <span>
                  <strong>VISIT US</strong>
                  Plot No. 100A, Baikampady Industrial Area, New Mangalore, <br/>
                  Karnataka – 575011 <br />
                  GST: 29AAOCO9959L1ZO
                </span>
              </a>
            </div>
            
          </div>
          <div className="quote-form-card" id="quote-form">
            <h3>Tell us what you need</h3>
            <p>Complete the details below to prepare an enquiry in your email app.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name <b aria-hidden="true">*</b></span>
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label>
                <span>Company <b aria-hidden="true">*</b></span>
                <input
                  autoComplete="organization"
                  name="company"
                  placeholder="Company name"
                  required
                />
              </label>
              <label>
                <span>Phone / Email <b aria-hidden="true">*</b></span>
                <input
                  autoComplete="email"
                  name="contact"
                  placeholder="Phone number or email"
                  required
                />
              </label>
              <label>
                <span>
                  Estimated Monthly Fuel Requirement{" "}
                  <b aria-hidden="true">*</b>
                </span>
                <input
                  name="requirement"
                  placeholder="e.g. volume per month"
                  required
                />
              </label>
              <label className="quote-message-field">
                <span>Message (optional)</span>
                <textarea
                  name="message"
                  placeholder="Tell us about your fuel and application"
                  rows={3}
                />
              </label>
              <button className="button-link button-yellow" type="submit">
                Submit Enquiry <ArrowRight aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          title="Map showing Baikampady Industrial Area, New Mangalore"
          src="https://www.google.com/maps?q=Baikampady+Industrial+Area,+New+Mangalore,+Karnataka&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function PageHero({
  title,
  description,
  compact = false,
}: {
  title: ReactNode;
  description: string;
  compact?: boolean;
}) {
  return (
    <section className={`inner-page-hero${compact ? " inner-page-hero-compact" : ""}`}>
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
  const processPanelRef = useRef<HTMLDivElement>(null);
  const [processVisible, setProcessVisible] = useState(false);
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

  useEffect(() => {
    const panel = processPanelRef.current;
    if (!panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

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
            <div
              className={`process-panel${processVisible ? " is-visible" : ""}`}
              ref={processPanelRef}
            >
              <div className="process-list">
                {process.map((step, index) => (
                  <div
                    className="process-step"
                    key={step.name}
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
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
  ["Gross Calorific Value (GCV)", "10,600–11,800 Kcal/kg"],
  ["Density (at 15°C / 30°C)", "0.75 – 0.95 g/cm³"],
  ["Flash Point", "28°C"],
  ["Pour Point", "< -13°C"],
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
  const benefitsGridRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [applicationsVisible, setApplicationsVisible] = useState(false);
  const applications = [
    ["Hot Air Generators", "Boilers", "Furnaces & Industrial Heating"],
    industries.slice(0, 5).concat("Sponge Iron"),
  ];

  useEffect(() => {
    const grid = benefitsGridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const panel = applicationsRef.current;
    if (!panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setApplicationsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        compact
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
            <div id={product.id} key={product.name}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="specification-panel glass-panel" id="specifications">
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
        <div
          className={`product-benefit-grid${benefitsVisible ? " is-visible" : ""}`}
          ref={benefitsGridRef}
        >
          {productBenefits.map(([title, description, Icon], index) => (
            <article
              className="glass-panel"
              key={title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="benefit-number">0{index + 1}</span>
              <h3>
                <Icon aria-hidden="true" />
                {title}
              </h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div
          className={`applications-industries${applicationsVisible ? " is-visible" : ""}`}
          ref={applicationsRef}
        >
          <article className="applications-detail-card glass-panel">
            <span className="applications-kicker">Where it works</span>
            <h3>Core Applications</h3>
            <p className="applications-tagline">
              Practical applications for everyday industrial heating.
            </p>
            <ul>
              {applications[0].map((application) => (
                <li key={application}>
                  <Factory aria-hidden="true" />
                  {application}
                </li>
              ))}
            </ul>
          </article>
          <article className="applications-detail-card glass-panel">
            <span className="applications-kicker">Who we support</span>
            <h3>Industries We Serve</h3>
            <p className="applications-tagline">
              Fuel solutions for diverse, energy-intensive sectors.
            </p>
            <div className="industry-tags">
              {applications[1].map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </article>
        </div>
        <section className="product-download-wrap section-shell">
          <div className="product-download-copy">
            <span className="section-kicker">Product Information</span>
            <h2>Download Product Spec Sheet</h2>
            <p>
              Product photographs, target specifications, key advantages and
              application information in one PDF.
            </p>
          </div>
          <a
            className="product-download-button"
            href="/assets/organic-mile-product-spec-sheet.pdf"
            download="Organic-Mile-Product-Spec-Sheet.pdf"
          >
            <FileText aria-hidden="true" />
            <span>Download Product Spec Sheet</span>
            <Download aria-hidden="true" />
          </a>
        </section>
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

function AppContent() {
  const location = useLocation();

  return (
    <>
      <RouteEffects />
      <Header />
      <main>
        <div className="route-swap" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
