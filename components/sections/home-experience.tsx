"use client";

import { ArrowUpRight, Check, ChevronDown, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

type Service = {
  number: string;
  title: string;
  accent: string;
  hover: string;
  short: string;
  expanded: string;
  includes: string[];
  bestFor: string[];
  process: string[];
  deliverables: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "UI/UX DESIGN",
    accent: "#B6FF00",
    hover: "User flow / Interface clarity / Conversion",
    short: "Digital experiences designed for clarity, usability, visual impact, and better user decisions.",
    expanded: "We design modern, clean, conversion-focused interfaces for websites, dashboards, landing pages, SaaS products, and mobile applications. Every interaction is shaped to feel intuitive, polished, and valuable.",
    includes: ["User flow mapping", "Wireframes", "High-fidelity UI design", "Responsive interface systems", "Component libraries", "Interactive prototypes", "Developer handoff notes"],
    bestFor: ["SaaS products", "Startups", "Dashboards", "New mobile products", "Businesses improving user experience"],
    process: ["Discover flows", "Map screens", "Design interface", "Prototype decisions"],
    deliverables: ["Figma files", "Prototype", "Component notes", "Responsive screens"],
  },
  {
    number: "02",
    title: "APPLICATION DESIGN & DEVELOPMENT",
    accent: "#00F5FF",
    hover: "Mobile apps / Web apps / Product systems",
    short: "Functional product experiences designed and prepared for real-world use.",
    expanded: "We help turn ideas into structured digital products by planning app flows, designing beautiful interfaces, and supporting the build process for mobile apps, web apps, dashboards, internal systems, and customer-facing platforms.",
    includes: ["Product flow planning", "App screen architecture", "Mobile UI design", "Web app interface design", "Prototype experience", "Build support", "Scalable system thinking"],
    bestFor: ["Mobile app ideas", "Founder MVPs", "Customer portals", "Internal tools", "Product teams needing clarity"],
    process: ["Define product goal", "Plan app architecture", "Design core screens", "Support development"],
    deliverables: ["Screen map", "UI system", "Prototype", "Build-ready assets"],
  },
  {
    number: "03",
    title: "WEB DESIGN & DEVELOPMENT",
    accent: "#FF7A00",
    hover: "Websites / Landing pages / Interactive builds",
    short: "High-impact websites with strong visuals, smooth motion, and clean responsive performance.",
    expanded: "We create websites that communicate clearly, attract attention, guide visitors, and leave a premium brand impression, whether it is a portfolio, service site, startup page, landing page, or business platform.",
    includes: ["Sitemap and page planning", "Wireframe direction", "Custom visual design", "Responsive front-end development", "Motion interactions", "CMS structure if needed", "Launch preparation"],
    bestFor: ["Service businesses", "Startup launches", "Portfolio sites", "Landing pages", "Brands refreshing online presence"],
    process: ["Plan page flow", "Design key sections", "Build responsive pages", "Launch and polish"],
    deliverables: ["Responsive website", "Motion system", "Launch checklist", "Editable structure"],
  },
  {
    number: "04",
    title: "BRANDING",
    accent: "#FF3DF2",
    hover: "Identity / Logo / Visual system",
    short: "Brand identities designed to be intentional, memorable, flexible, and premium.",
    expanded: "We build strategic brand systems that shape how your business is seen. From logos and typography to colors, visual language, and brand application rules, every element is designed to create recognition and trust.",
    includes: ["Brand direction", "Logo design", "Identity system", "Color palette", "Typography system", "Graphic elements", "Brand guidelines", "Mockup applications"],
    bestFor: ["New brands", "Rebrands", "Personal brands", "Premium product brands", "Businesses needing consistency"],
    process: ["Position the brand", "Define visual language", "Build identity kit", "Document usage"],
    deliverables: ["Logo suite", "Brand guidelines", "Visual assets", "Mockup pack"],
  },
  {
    number: "05",
    title: "SOCIAL MEDIA DESIGN & MANAGEMENT",
    accent: "#7CFF4F",
    hover: "Content systems / Campaign visuals / Brand consistency",
    short: "Scroll-stopping visual systems built for recognition, engagement, and content consistency.",
    expanded: "We create social media design systems that help brands post with confidence. From templates and campaign creatives to post layouts, reel covers, carousels, and story assets, scattered posting becomes a cohesive visual presence.",
    includes: ["Social visual direction", "Feed system", "Post templates", "Story templates", "Carousel design", "Reels cover design", "Content consistency support", "Campaign visual packs"],
    bestFor: ["Marketing teams", "Founders posting often", "DTC brands", "Personal brands", "Businesses needing visual consistency"],
    process: ["Audit current content", "Design content system", "Create templates", "Package campaign assets"],
    deliverables: ["Template kit", "Campaign visuals", "Social guidelines", "Asset exports"],
  },
  {
    number: "06",
    title: "PRINTING MATERIAL & CAMPAIGN DESIGN",
    accent: "#FFD447",
    hover: "Posters / Flyers / Packaging / Outdoor",
    short: "Physical and campaign visuals designed to bring your brand into the real world.",
    expanded: "We design print materials and campaign assets with strong hierarchy, production awareness, and bold visual communication for promotions, launches, events, packaging, outdoor campaigns, and branded collateral.",
    includes: ["Poster design", "Flyer design", "Brochures", "Business cards", "Packaging concepts", "Event materials", "Campaign systems", "Print-ready production files"],
    bestFor: ["Events", "Launch campaigns", "Retail brands", "Local businesses", "Brands needing physical materials"],
    process: ["Define campaign goal", "Create campaign look", "Build print assets", "Prepare production files"],
    deliverables: ["Print-ready files", "Campaign set", "Mockups", "Export package"],
  },
];

const work = [
  ["UI/UX DESIGN", "Nova Analytics Dashboard", "A data-driven dashboard interface designed for clarity, usability, and faster decision-making.", "Figma / Design System / Prototype"],
  ["WEB DESIGN", "Startup Landing Page", "A conversion-focused launch page with strong positioning, motion, and premium first impression.", "Next.js / Motion / Responsive"],
  ["BRANDING", "Luxury Brand Identity", "A refined identity system built around recognition, trust, and high-value visual consistency.", "Logo / Typography / Guidelines"],
  ["SOCIAL SYSTEM", "Campaign Content Grid", "A social media system designed to make every post feel connected and recognizable.", "Templates / Carousel / Reels"],
  ["APP CONCEPT", "Mobile Product Flow", "A mobile interface concept shaped around clean navigation and high-confidence user actions.", "UX Flow / UI Kit / Prototype"],
  ["PRINT CAMPAIGN", "Poster Collection", "A set of bold campaign assets prepared for launches, events, and real-world promotion.", "Poster / Flyer / Print Files"],
];

const faqs = [
  ["What type of clients do you work with?", "We work with startups, business owners, B2B companies, B2C brands, entrepreneurs, agencies, and growing teams looking for stronger design systems."],
  ["Can I hire you for only one service?", "Yes. You can start with one focused service like branding, website design, or social media design and expand later if needed."],
  ["I am not sure what service I need. Can you help?", "Absolutely. Share your goals and we will identify the right solution based on your business stage, timeline, and audience."],
  ["Do you work with new businesses?", "Yes. Whether you are launching your first brand or improving an existing one, the process is tailored to your stage."],
  ["Do you provide development too?", "Yes, especially for website and application-focused projects where design and development support may both be included."],
  ["Can you create both digital and print materials?", "Yes. We create design systems that work across digital platforms, campaigns, and physical brand materials."],
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionReveal = {
  initial: { opacity: 0, y: 34, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: easeOut },
};

function SectionHeader({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <motion.div className="tv-section-header" {...sectionReveal}>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </motion.div>
  );
}

export function HomeExperience() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const marquee = useMemo(() => "UI/UX DESIGN * APPLICATION DESIGN & DEVELOPMENT * WEB DESIGN & DEVELOPMENT * BRANDING * SOCIAL MEDIA DESIGN & MANAGEMENT * PRINTING MATERIAL & CAMPAIGN DESIGN * CREATIVE DIRECTION * DIGITAL EXPERIENCES * VISUAL SYSTEMS * ", []);

  return (
    <>
      <section id="home" className="tv-hero">
        <div className="ghost-word">CREATE</div>
        <div className="tv-hero-copy">
          <p className="system-label">PORTFOLIO SYSTEM // TECVION SOLUTIONS</p>
          <h1>
            <span className="hero-highlight primary">Creative</span> design for{" "}
            <span className="hero-highlight secondary">brands</span> that want to look{" "}
            <span className="hero-highlight strong">unforgettable.</span>
          </h1>
          <p className="hero-subline">Web. Apps. Branding. Social. Campaigns. Built as one connected visual system.</p>
          <p className="hero-copy-text">Tecvion Solutions helps businesses, startups, and modern brands build stronger digital presence through bold visual design, high-converting interfaces, strategic branding, impactful campaigns, and premium creative execution across every touchpoint.</p>
          <div className="micro-row">
            <span>Available for selected projects</span>
            <span>Remote worldwide</span>
            <span>Strategy-led creative execution</span>
          </div>
          <div className="tv-actions">
            <a className="tv-button primary" href="#contact">Start a Project <ArrowUpRight size={17} /></a>
            <a className="tv-button" href="#services">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="marquee-stack" aria-label="Tecvion service marquee">
        <div><span>{marquee.repeat(2)}</span></div>
        <div><span>{("B2B * B2C * STARTUPS * FOUNDERS * COMPANIES * MODERN BRANDS * CAMPAIGNS * DIGITAL PRODUCTS * TRUST-BUILDING DESIGN * ").repeat(2)}</span></div>
      </section>

      <section className="trust-stats" aria-label="Tecvion trust stats">
        {[
          ["06+", "Core Services"],
          ["360", "Brand Experience"],
          ["100%", "Custom Direction"],
          ["Infinite", "Creative Possibilities"],
        ].map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section id="about" className="tv-section about-grid">
        <motion.div className="about-mobile-copy" {...sectionReveal}>
          <p className="system-label">ABOUT TECVION //</p>
          <h2>Let's build your creative system together</h2>
          <span>Tecvion Solutions turns brand ideas into clear digital, social, campaign, and identity systems.</span>
          <div className="about-ridges" aria-hidden="true" />
        </motion.div>
        <motion.div className="about-mobile-cards" {...sectionReveal}>
          {[
            ["01", "Start with one creative direction", "We define the brand, audience, offer, and visual route before design begins.", "dark"],
            ["02", "Co-develop systems tailored to your brand", "Interfaces, websites, social visuals, and campaign assets stay connected.", "light"],
            ["03", "Tecvion AI", "The creative infrastructure layer for unforgettable brand operations.", "accent"],
          ].map(([number, title, copy, tone]) => (
            <article className={`about-mobile-card ${tone}`} key={title}>
              <b>{number}</b>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="tv-section">
        <SectionHeader label="WHY TECVION // TRUST LAYER" title="CREATIVE ENOUGH TO STAND OUT. STRUCTURED ENOUGH TO DELIVER RESULTS." copy="Whether you are launching something new, improving your presence, or building consistency across platforms, Tecvion Solutions provides creative direction with business clarity." />
        <div className="reason-grid">
          {[
            ["01", "Clear Communication", "We turn complex ideas into design that feels easy to understand."],
            ["02", "Premium Visual Identity", "We create polished visuals that instantly elevate brand perception."],
            ["03", "Strategy-Led Process", "Design decisions are built around goals, audience, and outcomes."],
            ["04", "Multi-Service Advantage", "From web to brand to social to print, everything can work together."],
            ["05", "Scalable Systems", "The work is designed for long-term consistency and future growth."],
            ["06", "Client-Friendly Approach", "Even if you are new to design, the process stays clear and guided."],
          ].map(([number, title, copy], index) => (
            <motion.article className="reason-card" key={title} {...sectionReveal} transition={{ ...sectionReveal.transition, delay: index * 0.04 }}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="tv-section service-zone">
        <SectionHeader label="SERVICES // CREATIVE SYSTEMS" title="SELECT A SERVICE. OPEN THE SYSTEM. START THE PROJECT." copy="Every service is built as a complete creative layer. Start with one focused need or build a full ecosystem across digital product, web, branding, content, campaign, and print." />
        <div className="service-list">
          {services.map((service) => (
            <button className="service-row" style={{ "--accent": service.accent } as CSSProperties} key={service.title} type="button" onClick={() => setActiveService(service)}>
              <span>{service.number}</span>
              <strong>{service.title}</strong>
              <em>{service.hover}</em>
              <p>{service.short}</p>
              <ArrowUpRight />
            </button>
          ))}
        </div>
      </section>

      <section id="work" className="tv-section">
        <SectionHeader label="SELECTED WORK // VISUAL PROOF" title="DESIGNED TO LOOK STRONG. BUILT TO COMMUNICATE CLEARLY." copy="A selection of visual systems, digital products, brand directions, campaign pieces, and interface experiences created to help brands attract, engage, and convert." />
        <div className="work-grid-tv">
          {work.map(([category, title, outcome, tools], index) => (
            <motion.article className="work-card-tv" key={title} {...sectionReveal} transition={{ ...sectionReveal.transition, delay: index * 0.04 }}>
              <div className={`project-art project-art-${index}`} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <b />
                <em />
              </div>
              <p>{category}</p>
              <h3>{title}</h3>
              <span>{outcome}</span>
              <small>{tools}</small>
              <a href="#contact">View Case <ArrowUpRight size={15} /></a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="tv-section">
        <SectionHeader label="WHO WE WORK WITH // CUSTOMER TYPES" title="BUILT FOR FOUNDERS, BRANDS, BUSINESSES, AND GROWING TEAMS." copy="No matter where you are in your journey, Tecvion Solutions creates design that meets you at the right stage." />
        <div className="customer-grid">
          {[
            ["Entrepreneurs & Startups", "Launch with a stronger first impression, clearer positioning, and a system ready for growth."],
            ["B2B Companies", "Present your services with more clarity, stronger trust, and a more premium digital identity."],
            ["B2C Brands", "Build a memorable customer-facing experience across website, social, campaign, and product visuals."],
            ["Personal Brands", "Create a consistent and professional image that helps you stand out in crowded spaces."],
            ["E-commerce & Product Brands", "Design experiences that help products feel more desirable, credible, and conversion-friendly."],
            ["New Business Owners", "If you are not sure what you need yet, we simplify the process from idea to execution."],
          ].map(([title, copy]) => (
            <article className="customer-card" key={title}><Sparkles size={18} /><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section id="process" className="tv-section process-zone">
        <div className="process-object" aria-hidden="true">
          <div className="cube">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
        <SectionHeader label="PROCESS // FROM CHAOS TO SYSTEM" title="A CLEAR CREATIVE PROCESS FOR BOLD DIGITAL RESULTS." copy="Every project follows a structured path that keeps the work strategic, focused, and visually powerful, from first conversation to final delivery." />
        <div className="process-grid-tv">
          {[
            ["01", "Discover", "We define the problem, audience, goals, and creative direction.", "Brief Research Strategy Direction"],
            ["02", "Design", "We turn the direction into a bold visual system.", "Wireframe UI Identity Layouts"],
            ["03", "Build", "The concept becomes a functional and scalable experience.", "Development System Prototype Assets"],
            ["04", "Launch", "Final polish, handoff, and delivery.", "Testing Delivery Handoff Launch"],
          ].map(([num, title, copy, tags]) => (
            <article key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <small>{tags}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="tv-section">
        <SectionHeader label="OUTCOMES // WHAT GOOD DESIGN DOES" title="GOOD DESIGN SHOULD DO MORE THAN LOOK IMPRESSIVE." copy="The right visual system helps your brand communicate faster, feel more trustworthy, and create better customer response across digital and physical channels." />
        <div className="benefit-line">
          {["Stronger First Impressions", "Better User Understanding", "Higher Brand Recall", "Better Conversion Potential", "Scalable Brand Assets", "More Trust Across Touchpoints"].map((item) => <span key={item}><Check size={15} />{item}</span>)}
        </div>
      </section>

      <section className="tv-section testimonials-tv">
        <SectionHeader label="CLIENT SIGNALS // TRUST LAYER" title="DESIGN THAT FEELS DIFFERENT - AND WORKS WITH PURPOSE." />
        {[
          ["The visual direction felt bold, modern, and completely aligned with how we wanted our business to be seen. Everything looked intentional and premium.", "Startup Founder", "Brand Identity + Website"],
          ["The interface design made our product feel more professional and easier to use. The process was smooth from discovery to final handoff.", "Product Owner", "App UI/UX Design"],
          ["Our social media now feels much more consistent and recognizable. The content system gave our brand clarity and stronger engagement.", "Marketing Lead", "Social Media Design System"],
        ].map(([quote, client, project]) => <article key={client}><b>"</b><p>{quote}</p><strong>{client}</strong><span>{project}</span></article>)}
      </section>

      <section className="tv-section faq-grid">
        <SectionHeader label="FAQ // BEFORE WE BUILD" title="COMMON QUESTIONS, CLEAR ANSWERS." />
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <button key={question} className="faq-item" type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
              <span><strong>{question}</strong><ChevronDown className={openFaq === index ? "open" : ""} /></span>
              <AnimatePresence>{openFaq === index ? <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{answer}</motion.p> : null}</AnimatePresence>
            </button>
          ))}
        </div>
      </section>

      <section id="contact" className="tv-section inquiry-grid">
        <SectionHeader label="PROJECT INQUIRY // START THE BUILD" title="TELL US WHAT YOU WANT TO CREATE. WE WILL HELP SHAPE THE SYSTEM." copy="Choose a service, share your goals, and send your project details. We will review your request and guide you toward the best next step." />
        <form className="inquiry-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div className="success-state">
              <h3>PROJECT SIGNAL RECEIVED.</h3>
              <p>Thank you for your inquiry. We will review your project details and get back to you with the next best step.</p>
              <button type="button" onClick={() => setSubmitted(false)}>Back to Form</button>
            </div>
          ) : (
            <>
              <input placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input placeholder="Phone Number" />
              <input placeholder="Company / Brand Name" />
              <select defaultValue=""><option value="" disabled>Service Needed</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select>
              <select defaultValue=""><option value="" disabled>Budget Range</option>{["Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+", "Not Sure Yet"].map((item) => <option key={item}>{item}</option>)}</select>
              <select defaultValue=""><option value="" disabled>Timeline</option>{["Urgent", "2-4 Weeks", "1-2 Months", "Flexible"].map((item) => <option key={item}>{item}</option>)}</select>
              <textarea placeholder="Tell us about your business, your goals, what you need designed, and the outcome you want to achieve." rows={5} />
              <input className="wide" placeholder="Paste websites, moodboards, social pages, competitors, or references you like." />
              <label className="consent"><input type="checkbox" required /> I agree to be contacted about this project.</label>
              <button className="submit-button" type="submit">Send Project Request <ArrowUpRight size={17} /></button>
            </>
          )}
        </form>
      </section>

      <section className="tv-section final-cta-tv">
        <div className="final-ghost">START</div>
        <p>READY WHEN YOU ARE //</p>
        <h2>LET'S BUILD A VISUAL SYSTEM THAT MAKES YOUR BRAND IMPOSSIBLE TO IGNORE.</h2>
        <span>Whether you need a website, application interface, brand identity, social media system, campaign design, or complete creative direction, Tecvion Solutions helps turn ideas into bold, functional, memorable experiences.</span>
        <div className="tv-actions"><a className="tv-button primary" href="#contact">Start Your Project <ArrowUpRight size={17} /></a><a className="tv-button" href="#services">View All Services</a></div>
      </section>

      <AnimatePresence>
        {activeService ? (
          <motion.aside className="service-panel-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="panel-scrim" type="button" onClick={() => setActiveService(null)} aria-label="Close service panel" />
            <motion.div className="service-panel" style={{ "--accent": activeService.accent } as CSSProperties} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 220, damping: 28 }}>
              <button className="close-panel" type="button" onClick={() => setActiveService(null)}><X size={18} /></button>
              <p>{activeService.number} // SERVICE SYSTEM</p>
              <h2>{activeService.title}</h2>
              <span className="panel-marker" />
              <p className="panel-copy">{activeService.expanded}</p>
              {[["What's Included", activeService.includes], ["Best For", activeService.bestFor], ["Process", activeService.process], ["Deliverables", activeService.deliverables]].map(([title, items]) => (
                <div className="panel-block" key={title as string}>
                  <h3>{title as string}</h3>
                  <div>{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
              <a className="tv-button primary" href="#contact" onClick={() => setActiveService(null)}>Start {activeService.title.replace(" & DEVELOPMENT", "")} Project <ArrowUpRight size={17} /></a>
            </motion.div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
