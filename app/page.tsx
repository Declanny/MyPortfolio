"use client";

import { useMemo, useState, type ReactNode, useEffect } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { X } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const accent = "#111111";

const languages = [
  { label: "English", value: 100 },
  { label: "Igbo", value: 85 },
  { label: "Pidgin", value: 70 },
];

const skills = [
  { label: "React / Next.js", value: 95 },
  { label: "React Native", value: 92 },
  { label: "TypeScript", value: 88 },
  { label: "Node.js", value: 80 },
  { label: "Product Strategy", value: 85 },
];

const extraSkills = [
  "API & Systems Architecture",
  "AWS, Vercel, Firebase",
  "Node.js + MongoDB (NoSQL) & SQL data design",
  "Product strategy, roadmapping & team leadership",
];

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

const iconClasses = "h-9 w-9 text-black";

const services: Service[] = [
  {
    title: "Web Development",
    description: "Designing and shipping production-ready web apps using React, Next.js, Laravel, and Tailwind for startups and scaleups.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClasses} fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="7" cy="7" r="0.8" fill="currentColor" />
        <circle cx="10" cy="7" r="0.8" fill="currentColor" />
        <circle cx="13" cy="7" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    description: "Building cross-platform experiences with React Native, Expo, and native APIs, from MVPs to enterprise deployments.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClasses} fill="none">
        <rect x="7" y="2" width="10" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="18.5" r="0.8" fill="currentColor" />
        <rect x="9" y="4.5" width="6" height="10" rx="1" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
];

const socialLinks: { label: string; href: string; icon: IconType | React.ComponentType<{ className?: string }> }[] = [
  { label: "GitHub", href: "https://github.com/Declanny", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chisomhenryg/", icon: FaLinkedinIn },
  { label: "X", href: "https://x.com/11Declan_", icon: XIcon },
];

const sidebarInfo = [
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Experience", value: "4+ Years" },
  { label: "Freelance", value: "Available", highlight: true },
  { label: "Email", value: "chisomhenryg@gmail.com" },
];

const quickStats: { label: string; value: string }[] = [];

const navRail = [
  { label: "Home", icon: "M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-9z", href: "#top", highlighted: true },
  { label: "Profile", icon: "M12 12a4 4 0 100-8 4 4 0 000 8zm-6 7v-1c0-2.21 2.686-4 6-4s6 1.79 6 4v1", href: "#profile" },
  { label: "Services", icon: "M4 8h16M4 12h10M4 16h7", href: "#services" },
  { label: "Portfolio", icon: "M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v6H4zM14 15h6v6h-6z", href: "#portfolio" },
  { label: "Contact", icon: "M4 6h16v12H4z M4 6l8 6 8-6", href: "#contact" },
  { label: "About", icon: "M12 7h.01M12 11v6m0-9a1 1 0 110-2 1 1 0 010 2zm0 8a1 1 0 001-1v-4a1 1 0 00-1-1", href: "#about" },
];

const mobileNavRail = [
  { label: "Home", icon: "M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-9z", href: "#top", highlighted: true },
  { label: "Profile", icon: "M12 12a4 4 0 100-8 4 4 0 000 8zm-6 7v-1c0-2.21 2.686-4 6-4s6 1.79 6 4v1", href: "#profile" },
  { label: "Services", icon: "M4 8h16M4 12h10M4 16h7", href: "#services" },
  { label: "Contact", icon: "M4 6h16v12H4z M4 6l8 6 8-6", href: "#contact" },
  { label: "About", icon: "M12 7h.01M12 11v6m0-9a1 1 0 110-2 1 1 0 010 2zm0 8a1 1 0 001-1v-4a1 1 0 00-1-1", href: "#about" },
];

const categories = ["All Projects", "Web Apps", "Mobile Apps"] as const;

type Category = (typeof categories)[number];

interface PortfolioItem {
  title: string;
  subtitle: string;
  description?: string;
  src: string;
  link: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Kalabah",
    subtitle: "B2B commerce OS",
    src: "/kalabahproject.png",
    link: "https://kalabah.com/",
    category: "Web Apps",
  },
  {
    title: "Fisero AI",
    subtitle: "AI-powered financial management",
    description: "AI-powered solution that connects your bank accounts, tracks every transaction, and gives you smarter control of your finances.",
    src: "/fiseroai.png",
    link: "https://fisero.ai/",
    category: "Web Apps",
  },
  {
    title: "Envoy Angel",
    subtitle: "Global logistics platform",
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746448959/Screenshot_2025-05-05_at_1.42.23_PM_mrncnp.png",
    link: "https://www.envoyangel.com/",
    category: "Web Apps",
    },
    { 
    title: "Naija CP",
    subtitle: "In-game currency & bill-pay marketplace",
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1752490355/Screenshot_2025-07-14_at_11.08.33_AM_jx3jj6.png", 
    link: "https://www.naijacp.com/",
    category: "Web Apps",
    },
    { 
    title: "Qarba",
    subtitle: "Real estate investment",
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746450397/Screenshot_2025-05-05_at_2.06.05_PM_pzmevo.png", 
    link: "https://qarba.com/",
    category: "Web Apps",
    },
    { 
    title: "Lyfecircle Group",
    subtitle: "Pan-African conglomerate",
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1746451219/Screenshot_2025-05-05_at_2.19.47_PM_tj2xcg.png", 
    link: "https://lyfecirclegroup.com/",
    category: "Web Apps",
    },
    {
    title: "Freed AI",
    subtitle: "Freed AI Medical Scribe",
      src: "https://res.cloudinary.com/dqbbm0guw/image/upload/v1750434080/Screenshot_2025-06-20_at_4.41.08_PM_pq2u2r.png",
    link: "https://freed.com/",
    category: "Web Apps",
  },
  {
    title: "Naija CP Mobile",
    subtitle: "Naija CP mobile companion",
    src: "/naijacpmobile1.jpeg",
    link: "https://www.naijacp.com/",
    category: "Mobile Apps",
  },
  {
    title: "ShieldedBit",
    subtitle: "Cybersecurity suite",
      src: "/shieldedbit.png",
    link: "https://shieldedbit.com/",
    category: "Web Apps",
  },
  {
    title: "Quivy",
    subtitle: "Giveaway platform",
    src: "/quivy.png",
    link: "https://quivy.ai/",
    category: "Web Apps",
  },
];

const Progress = ({ value }: { value: number }) => (
  <div className="h-2 w-full rounded-full bg-[#f1f1f1]">
    <span
      className="block h-full rounded-full"
      style={{ width: `${value}%`, backgroundColor: accent }}
    />
  </div>
);

const Page = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All Projects");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All Projects") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus({ type: "error", message: data.error || "Failed to send message. Please try again." });
      }
    } catch (error) {
      setFormStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-white px-4 py-6 text-[#1f1f1f] md:px-8 pb-24 lg:pb-6">
      {/* Mobile Menu Button - Top Right */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-6 right-6 z-40 lg:hidden flex items-center justify-center transition-all"
        aria-label="Open menu"
      >
        <CgMenuRight className="w-10 h-10 text-black" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-50 lg:hidden transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-[#f5f5f5] text-black hover:bg-[#e5e5e5] transition-all"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Content (Sidebar Content) */}
        <div className="p-6 pt-20 pb-24">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 h-32 w-32">
              <span className="absolute inset-0 rounded-full bg-[#f2f2f2]" />
              <Image
                src="/chisomdev.png"
                alt="Chisom Henry"
                fill
                priority
                className="rounded-full object-cover p-3 grayscale"
              />
            </div>
            <h2 className="text-xl font-semibold text-[#1c1c1c]">Chisom Henry</h2>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-black">
              Full-Stack & Mobile Developer
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#747474] transition hover:bg-black hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {sidebarInfo.map((info) => (
              <div key={info.label} className="flex items-center justify-between border-b border-[#f2f2f2] pb-2 text-sm font-semibold">
                <span className="text-[#9a9a9a]">{info.label}:</span>
                <span
                  className={info.highlight ? "rounded-full bg-[#ecf8ed] px-3 py-1 text-[#4ba455]" : "text-[#1f1f1f]"}
                >
                  {info.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-base font-semibold text-[#1f1f1f]">Languages</h3>
            {languages.map((language) => (
              <div key={language.label}>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-[#808080]">{language.label}</span>
                  <span className="text-[#1f1f1f]">{language.value}%</span>
                </div>
                <Progress value={language.value} />
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <h3 className="text-base font-semibold text-[#1f1f1f]">Skills</h3>
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span className="text-[#808080]">{skill.label}</span>
                  <span className="text-[#1f1f1f]">{skill.value}%</span>
                </div>
                <Progress value={skill.value} />
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="text-base font-semibold text-[#1f1f1f]">Extra Skills</h3>
            <ul className="space-y-2 text-sm font-semibold text-[#808080]">
              {extraSkills.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://drive.google.com/file/d/11cTLcG7foelmUmv0MHs-t7u8Uo490Sf9/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-3 font-semibold uppercase tracking-wide text-white transition hover:bg-[#1f1f1f]"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-4 lg:h-screen lg:flex-row lg:gap-6 lg:overflow-hidden">
        <aside id="profile" className="order-2 lg:order-1 lg:w-[320px] lg:flex-shrink-0 lg:overflow-y-auto">
          <div className="rounded-[30px] bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-40 w-40">
                <span className="absolute inset-0 rounded-full bg-[#f2f2f2]" />
                <Image
                  src="/chisomdev.png"
                  alt="Chisom Henry"
                  fill
                  priority
                  className="rounded-full object-cover p-3 grayscale"
                />
              </div>
              <h1 className="text-2xl font-semibold text-[#1c1c1c]">Chisom Henry</h1>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-black">
                Full-Stack & Mobile Developer
              </p>
              <div className="mt-5 flex gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                  target="_blank" 
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-[#747474] transition hover:bg-black hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {sidebarInfo.map((info) => (
                <div key={info.label} className="flex items-center justify-between border-b border-[#f2f2f2] pb-3 text-sm font-semibold">
                  <span className="text-[#9a9a9a]">{info.label}:</span>
                  <span
                    className={info.highlight ? "rounded-full bg-[#ecf8ed] px-3 py-1 text-[#4ba455]" : "text-[#1f1f1f]"}
                  >
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#1f1f1f]">Languages</h3>
              {languages.map((language) => (
                <div key={language.label}>
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-[#808080]">{language.label}</span>
                    <span className="text-[#1f1f1f]">{language.value}%</span>
                  </div>
                  <Progress value={language.value} />
                        </div>
              ))}
                      </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#1f1f1f]">Skills</h3>
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-[#808080]">{skill.label}</span>
                    <span className="text-[#1f1f1f]">{skill.value}%</span>
                    </div>
                  <Progress value={skill.value} />
                </div>
                ))}
              </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-semibold text-[#1f1f1f]">Extra Skills</h3>
              <ul className="space-y-2 text-sm font-semibold text-[#808080]">
                {extraSkills.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://drive.google.com/file/d/11cTLcG7foelmUmv0MHs-t7u8Uo490Sf9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-3 font-semibold uppercase tracking-wide text-white transition hover:bg-[#1f1f1f]"
            >
              Download CV
            </a>
          </div>
        </aside>

        <main className="order-1 lg:order-2 flex-1 lg:flex-[1.2] lg:h-full lg:overflow-y-auto">
          <div id="top" className="relative rounded-[30px] bg-white px-4 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:px-8">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1 space-y-5">
                <h2 className="text-3xl font-bold leading-tight text-[#1c1c1c] sm:text-5xl">
                  Building Digital <br /> Experiences
                </h2>
                <p className="text-lg font-semibold text-[#1c1c1c]">
                  Hi, I&apos;m Chisom — Full-Stack Developer & Business Strategy Consultant.
                </p>
                <p className="text-lg text-[#6f6f6f]">
                  I partner with venture-backed startups to design, architect, and ship production-grade platforms—
                  from investor dashboards to consumer mobile apps—while coaching teams on product strategy.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:chisomhenryg@gmail.com?subject=Hire Me Inquiry" className="rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-[#1f1f1f]">
                    Hire me
                  </a>
                  <a href="mailto:chisomhenryg@gmail.com?subject=Get In Touch" className="rounded-2xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-[#f5f5f5]">
                    Get in touch
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  {quickStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-[#1c1c1c]">{stat.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 translate-y-6 rounded-[40px] bg-[#f2f2f7]" />
                  <div className="relative h-72 w-60 overflow-hidden rounded-[40px] bg-[#f4f4f4]">
                    <Image
                      src="/chisomdev.png"
                      alt="Chisom Henry portrait"
                      fill
                      className="object-cover grayscale"
                      priority
                    />
                  </div>
                  </div>
              </div>
            </div>
            </div>

          <section id="services" className="mt-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)] sm:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-black">My Services</p>
              <h3 className="mt-3 text-3xl font-bold text-[#1c1c1c]">What I Do</h3>
              <p className="mx-auto mt-2 max-w-2xl text-[#7b7b7b]">
                I help founders and product teams move from idea to production—owning the architecture, engineering,
                and product polish for both web dashboards and consumer-grade mobile apps.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-[#f1f1f1] bg-[#fdfdfd] p-5 transition hover:-translate-y-1 hover:border-black hover:bg-white"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-[#f2f2f2] p-3 text-black">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1f1f1f]">{service.title}</h4>
                  <p className="text-sm text-[#7b7b7b]">{service.description}</p>
                  <a href={`mailto:chisomhenryg@gmail.com?subject=${encodeURIComponent(service.title + ' - Order Inquiry')}`} className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-black hover:underline">
                    Order now →
                  </a>
                </div>
              ))}
          </div>
        </section>

          <section id="portfolio" className="mt-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)] sm:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-black">Portfolio</p>
              <h3 className="mt-3 text-3xl font-bold text-[#1c1c1c]">Selected Work</h3>
              <p className="mx-auto mt-2 max-w-2xl text-[#7b7b7b]">
                A handful of shipped platforms powering logistics, finance, health, and security teams across Africa,
                Europe, and the US.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#9a9a9a]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full px-4 py-2 transition ${
                    activeCategory === category ? "bg-black text-white" : "hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-3xl bg-[#f4f4f6] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                      </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black">{item.subtitle}</p>
                    <h4 className="text-lg font-semibold text-[#1f1f1f]">{item.title}</h4>
                      </div>
                </a>
              ))}
                    </div>
          </section>

          <section id="contact" className="mt-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.07)] sm:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-black">Contact</p>
              <h3 className="mt-3 text-3xl font-bold text-[#1c1c1c]">Let&apos;s Work Together</h3>
              <p className="mx-auto mt-2 max-w-2xl text-[#7b7b7b]">
                Have a project in mind or just want to say hi? Send me a message and I&apos;ll get back to you shortly.
              </p>
                    </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <div className="hidden lg:block rounded-3xl border border-[#e5e5e5] bg-white p-8 shadow-sm">
                <h4 className="text-2xl font-bold text-[#1c1c1c] mb-6">Send a message</h4>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formStatus.type && (
                    <div className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      formStatus.type === "success" 
                        ? "bg-[#ecf8ed] text-[#4ba455] border border-[#4ba455]" 
                        : "bg-red-50 text-red-600 border border-red-600"
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1c1c1c] mb-2">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-2 border-[#e5e5e5] bg-white px-4 py-3 text-[#1c1c1c] outline-none transition focus:border-black focus:ring-0" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1c1c1c] mb-2">Email Address</label>
                      <input 
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-2 border-[#e5e5e5] bg-white px-4 py-3 text-[#1c1c1c] outline-none transition focus:border-black focus:ring-0" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1c1c1c] mb-2">Subject</label>
                    <input 
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-[#e5e5e5] bg-white px-4 py-3 text-[#1c1c1c] outline-none transition focus:border-black focus:ring-0" 
                      placeholder="Project Inquiry" 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1c1c1c] mb-2">Tell me about your project</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-2 border-[#e5e5e5] bg-white px-4 py-3 text-[#1c1c1c] outline-none transition resize-none focus:border-black focus:ring-0" 
                      placeholder="Describe your project or inquiry..." 
                    />
                  </div>
                    <button
                      type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-[#1f1f1f] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
              </div>
              <div className="rounded-3xl border border-[#f1f1f1] bg-[#f9f9f9] p-6">
                <h4 className="text-xl font-semibold text-[#1c1c1c]">Contact Info</h4>
                <div className="mt-6 space-y-5 text-sm font-semibold text-[#6f6f6f]">
                      <div>
                    <p className="text-[#9a9a9a]">Email</p>
                    <a href="mailto:chisomhenryg@gmail.com" className="text-[#1f1f1f] hover:text-black">
                          chisomhenryg@gmail.com
                        </a>
                      </div>
                      <div>
                    <p className="text-[#9a9a9a]">Phone</p>
                    <a href="tel:+2347083089127" className="text-[#1f1f1f] hover:text-black">
                          +234 (708) 308-9127
                        </a>
                      </div>
                  <div>
                    <p className="text-[#9a9a9a]">Location</p>
                    <span className="text-[#1f1f1f]">Lagos, Nigeria · Remote friendly</span>
                  </div>
                </div>
                <div className="mt-8 rounded-2xl border border-dashed border-black p-5 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-black">Resume</p>
                  <p className="mt-2 text-lg font-semibold text-[#1c1c1c]">Download my CV & project history</p>
                    <a
                      href="https://drive.google.com/file/d/11cTLcG7foelmUmv0MHs-t7u8Uo490Sf9/view?usp=sharing"
                      target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-[#1f1f1f]"
                    >
                    Download CV
                    </a>
                  </div>
              </div>
            </div>
          </section>

          <section id="about" className="mt-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.05)] sm:px-8">
            <div className="relative overflow-hidden rounded-[30px]">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/30 to-gray-200/30"></div>
              <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gray-200 blur-3xl opacity-10"></div>
              <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gray-300 blur-3xl opacity-10"></div>
              <div className="relative z-10 px-4 py-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">My Experience</h2>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  I&apos;m a Full-Stack Developer and Business Strategy Consultant with experience working in competitive startups across various development phases. From initial brainstorming sessions to product launch and scaling, I&apos;ve been involved in every stage of the development lifecycle.
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  My expertise spans modern technologies including React Native, React, Vue, Next.js, and Tailwind CSS. I&apos;ve worked with diverse industries - from logistics and gaming platforms to healthcare and cybersecurity - delivering scalable solutions that drive business growth.
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  On the backend I architect Node.js and Express services, model data across MongoDB (NoSQL document databases) and SQL stores, and ship secure APIs that plug into the wider product ecosystem.
                </p>
                <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                  I specialize in transforming ideas into robust digital products, combining technical excellence with strategic thinking to ensure solutions not only meet current needs but scale for future growth.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recent work includes leading the React Native + Expo builds for NaijaCP and Qarba mobile apps, bringing the full marketplace experience to iOS and Android. Constantly learning emerging technologies and staying updated with industry best practices to deliver cutting-edge solutions that make a real impact.
                </p>
            </div>
          </div>
        </section>
        </main>

        <div className="hidden xl:flex xl:w-[72px] xl:flex-shrink-0 xl:flex-col xl:items-center xl:gap-4 order-3">
          {navRail.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex h-14 w-14 items-center justify-center rounded-full border transition ${
                item.highlighted ? "border-black bg-white text-black" : "border-[#e7e7e7] text-[#b0b0b0] hover:text-black"
              }`}
              aria-label={item.label}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path d={item.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
          </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 xl:hidden bg-white border-t border-[#e7e7e7] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50">
        <div className="flex items-center justify-around px-2 py-3 max-w-[600px] mx-auto">
          {mobileNavRail.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                item.highlighted ? "text-black" : "text-[#9a9a9a] hover:text-black"
              }`}
              aria-label={item.label}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d={item.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[10px] font-semibold uppercase tracking-wider">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Page;