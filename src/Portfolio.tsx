import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// iOS 26-inspired React single-file portfolio
// Tailwind is available. Uses shadcn/ui for Cards/Buttons and framer-motion for micro-animations.

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-chache-2647091a7/",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/adityachache", icon: Github },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adityac__09/",
    icon: Instagram,
  },
];

const projects = [
  {
    title: "Tableau Public Profile",
    blurb: "Data visualizations on Tableau Public.",
    image: "/img/tableau-public.png",
    links: [
      {
        label: "Profile",
        href: "https://public.tableau.com/app/profile/aditya.chache/vizzes",
      },
    ],
  },
  {
    title: "NYC Taxi Ridership Forecasting",
    blurb: "An interactive time series forecasting dashboard to model and evaluate hourly NYC taxi ridership",
    image: "/img/nyc_taxi.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/adityachache/nyc-taxi-demand-dashboard",
      },
      {
        label: "Implementation",
        href: "https://nyc-taxi-demand-dashboard-gvx6tek8vtuydixrvzavmm.streamlit.app/",
      },
    ],
  },
  {
    title: "Object Tracker",
    blurb: "Real-time object detection and count tracking using YOLOv5.",
    image: "/img/objtracker.png",
    links: [
      {
        label: "Implementation",
        href: "https://object-tracker-hcbcsom4yse88ny6qs7dbw.streamlit.app/",
      },
    ],
  },
  {
    title: "Flight Fare Prediction",
    blurb: "Analyzing data with regression to predict flight fares.",
    image: "/img/flightfare.png",
    links: [
      {
        label: "Jupyter Notebook",
        href: "https://github.com/adityachache/Flight-Fare-Prediction",
      },
    ],
  },
  {
    title: "Wine Analysis",
    blurb: "A data analysis case study (cover image from web).",
    image: "/img/wine_analysis.png",
    links: [{ label: "Go to Blog", href: "https://rebrand.ly/8uacxhm" }],
  },
  {
    title: "Blog Website",
    blurb: "Blog with auth built using Flask + PostgreSQL + Bootstrap.",
    image: "/img/blog-website.png",
    links: [
      {
        label: "Implementation",
        href: "https://flask-blog-website-006g.onrender.com/",
      },
    ],
  },
  {
    title: "Consumer Churn Analysis",
    blurb:
      "Predicting and analyzing customer retention (cover image from web).",
    image: "/img/customer-churn.jpg",
    links: [
      {
        label: "Jupyter Notebook",
        href: "https://github.com/adityachache/ML-Notebooks",
      },
      { label: "Go to Blog", href: "https://rebrand.ly/tpng0ef" },
    ],
  },
  {
    title: "Stock Spectrum",
    blurb:
      "Datathon 1.0 Finance Track: simplifying stock & metric analysis so anyone can explore financial data.",
    image: "/img/stock-spectrum.png",
    links: [
      { label: "Code", href: "https://github.com/adityachache/datathon-csueb" },
      {
        label: "Implementation",
        href: "https://youtu.be/O8KBiRDAmlo?si=4axsGVeDfEJQAIIv",
      },
    ],
  },
  {
    title: "Recommendation System",
    blurb: "Product recommendations with Streamlit, Apriori, and clustering.",
    image: "/img/recom.png",
    links: [
      {
        label: "Code",
        href: "https://github.com/adityachache/Recommendation-System",
      },
      {
        label: "Implementation",
        href: "https://recommendation-system-uzjhr7bjkxfpszneb3vya2.streamlit.app/",
      },
    ],
  },
];

const experience = [
  {
    company: "Compass Group",
    role: "Operations Associate (On-Campus)",
    period: "Aug 2025 – Present",
    logo: "/img/compass-group-logo.png",
    bullets: [
      "Supported daily operations, including inventory control, restocking, receiving deliveries, and maintaining stock accuracy.",
      "Coordinated with team members to ensure timely availability of supplies and smooth service operations.",
      "Monitored inventory levels, identified shortages, and assisted with replenishment to avoid service disruptions."
    ],
  },
  {
    company: "Nidaan Systems Inc.",
    role: "Solutions Analyst Intern",
    period: "Sep 2025 – Jan 2026",
    logo: "/img/Nidaan_logo.png",
    bullets: [
      "Supported client’s migration from on-premise systems to Intapp Cloud CDS by building Boomi integrations to transfer data from Salesforce CRM, streamlining their cloud adoption processs.",
      "Developed and maintained ETL workflows in Boomi according to Intapp’s integration builder rules to sync data across external systems and Intapp’s Common Data Store (CDS), ensuring data consistency and integrity.",
    ],
  },
  {
    company: "Lonza",
    role: "Business Analyst Intern (Quality Control)",
    period: "May 2025 – Aug 2025",
    logo: "/img/Lonza_logo.png",
    bullets: [
      "Worked with the QC team to extract and integrate data from SAP and LIMS into a Power BI model to forecast raw material quantities. Used the forecast to optimally assign QC Analysts for testing based on capacity, improving resource utilization and planning efficiency by 15%.",
    ],
  },
  {
    company: "Jio Platforms Limited",
    role: "Software Engineer",
    period: "Sep 2022 – Jun 2024",
    logo: "/img/Jio_Logo.png",
    bullets: [
      "Developed RESTful APIs to migrate the Enterprise Product Catalog from a monolithic to a scalable microservices architecture using open-source technologies, reducing vendor dependency and cutting integration costs by 20%.",
      "Automated and optimized deployment configurations by implementing dynamic IP and port management, resulting in a 20% reduction in deployment time and fewer post-deployment issues.",
      "Wrote complex SQL scripts to support data migration from relational databases to MongoDB via Apache NiFi, improving data accessibility and query performance by 15%.",
      "Streamlined project tracking and deployment through Microsoft Azure Boards, managing task assignments, bug tracking, and release readiness, enhancing delivery efficiency by 10%.",
    ],
  },
];

function SectionTitle({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {subtitle && (
        <div className="text-sm text-slate-600 dark:text-white/70 tracking-wide mb-1">
          {subtitle}
        </div>
      )}
      <div className="inline-flex items-end gap-3">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white drop-shadow-[0_1px_0_rgba(255,255,255,0.2)]">
          {children}
        </h2>
        <span
          className="h-1 w-14 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </div>
    </div>
  );
}

const Glass = ({
  className = "",
  children,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div
    className={
      "rounded-3xl border backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] " +
      "bg-white/60 border-white/40 " + // LIGHT
      "dark:bg-white/10 dark:border-white/10 " + // DARK
      className
    }
  >
    {children}
  </div>
);

export default function PortfolioIOS() {
  const year = useMemo(() => new Date().getFullYear(), []);

  // THEME: accent color (persisted + URL override)
  const [accent, setAccent] = React.useState<string>(() => {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("accent");
    const saved = localStorage.getItem("accent");
    return q || saved || "#7c3aed"; // default violet
  });

  // Dark mode toggle
  const [dark, setDark] = React.useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // accent → additional tints used by the glass + background
  useEffect(() => {
    const root = document.documentElement;
    const hexToRgba = (hex: string, a: number) => {
      const h = hex.replace("#", "");
      const b = parseInt(
        h.length === 3
          ? h
              .split("")
              .map((c) => c + c)
              .join("")
          : h,
        16
      );
      const r = (b >> 16) & 255,
        g = (b >> 8) & 255,
        bl = b & 255;
      return `rgba(${r}, ${g}, ${bl}, ${a})`;
    };
    root.style.setProperty("--accent", accent);
    root.style.setProperty("--accent-10", hexToRgba(accent, 0.1));
    root.style.setProperty("--accent-20", hexToRgba(accent, 0.2));
    root.style.setProperty("--accent-40", hexToRgba(accent, 0.4));
  }, [accent]);

  useEffect(() => {
    localStorage.setItem("accent", accent);
    const root = document.documentElement;
    root.style.setProperty("--accent", accent);
    // translucent versions for borders/hover
    const hexToRgba = (hex: string, a: number) => {
      const h = hex.replace("#", "");
      const bigint = parseInt(
        h.length === 3
          ? h
              .split("")
              .map((c) => c + c)
              .join("")
          : h,
        16
      );
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };
    root.style.setProperty("--accent-20", hexToRgba(accent, 0.2));
    root.style.setProperty("--accent-40", hexToRgba(accent, 0.4));
  }, [accent]);

  useEffect(() => {
    document.title = "Aditya Chache – Portfolio";
  }, []);

  const backgroundStyle = dark
    ? {
        // iOS Liquid Glass — DARK
        background:
          "radial-gradient(1200px 600px at 100% -10%, var(--accent-20), transparent 60%)," +
          "radial-gradient(800px 400px at -10% 10%, rgba(139,92,246,0.20), transparent 60%)," +
          "linear-gradient(180deg,#0b0b10 0%,#0b0b10 60%,#0f0f14 100%)",
      }
    : {
        // iOS Liquid Glass — LIGHT
        background:
          "radial-gradient(1200px 600px at 100% -10%, var(--accent-10), transparent 60%)," +
          "radial-gradient(800px 400px at -10% 10%, rgba(0,0,0,0.04), transparent 60%)," +
          "linear-gradient(180deg,#f8fafc 0%,#f2f5f9 60%,#eef2f7 100%)",
      };

  return (
    <div
      className="min-h-screen w-full text-slate-900 dark:text-white"
      style={backgroundStyle}
    >
      {/* Top bar / Dynamic Island-style header */}
      <div className="sticky top-0 z-50 pt-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto w-fit "
            >
              <div
                className="h-10 px-4 sm:px-6 flex items-center gap-3 rounded-full
                border border-white/40 bg-white/60 backdrop-blur-xl
                dark:border-white/10 dark:bg-white/10"
              >
                <span className="text-sm font-medium">Aditya Chache</span>
                <span className="hidden sm:inline-flex text-xs text-slate-600 dark:text-white/70">
                  Portfolio
                </span>
              </div>
            </motion.div>
            {/* Color picker control */}
            <div className="hidden md:flex items-center gap-2">
              <div className="text-xs text-slate-600 dark:text-white/70">Accent</div>
              <input
                type="color"
                aria-label="Pick accent color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="h-6 w-6 cursor-pointer rounded-md border border-white/20 bg-transparent p-0"
              />

              <button
                onClick={() => setDark(!dark)}
                className="h-6 w-6 rounded-md border border-white/20 flex items-center justify-center text-xs"
              >
                {dark ? "🌙" : "☀️"}
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-white/60">
            <a href="#about" className="hover:text-slate-900 dark:text-white transition">
              About
            </a>
            <span>•</span>
            <a href="#work" className="hover:text-slate-900 dark:text-white transition">
              Work
            </a>
            <span>•</span>
            <a href="#projects" className="hover:text-slate-900 dark:text-white transition">
              Projects
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-slate-900 dark:text-white transition">
              Contact
            </a>
            <span>•</span>
            <a
              href="/Aditya_Resume_Word.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:text-white transition flex items-center gap-1"
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Glass className="p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              src="/img/headshot.jpg"
              alt="Aditya headshot"
              className="h-36 w-36 rounded-3xl object-cover border border-white/20"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Aditya Chache
              </h1>
              <p className="mt-2 text-slate-600 dark:text-white/80">
                Ex SDE • Business Analytics Grad Student • Traveler
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <a href="#about">
                  <Button
                    className="rounded-full px-5 text-slate-900 dark:text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    More About Me
                  </Button>
                </a>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition"
                    style={{
                      borderColor: "var(--accent-40)",
                      background: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <s.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Glass>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle subtitle="About">Hello there! 👋</SectionTitle>
        <Glass className="p-6 sm:p-8 leading-relaxed">
          {/* <p className="text-slate-700 dark:text-white/90">
            I'm Aditya, a Business Analytics grad student from{" "}
            <span className="font-medium">
              California State University, East Bay
            </span>{" "}
          </p> */}
          <p className="mt-3 text-slate-600 dark:text-white/80">
          I’m a Business Analytics graduate student with over two years of experience working at the intersection of data, 
          systems, and operations. I’ve supported enterprise and departmental teams by improving planning, streamlining workflows, 
          and turning complex data into actionable insights. My background spans analytics, capacity forecasting, system migrations, 
          and operations support, and I enjoy working with cross-functional teams to solve practical business problems. 
          I’m currently seeking full-time opportunities where I can apply analytics to improve decision-making, efficiency, and outcomes.
          </p>
          <p className="mt-3 text-slate-600 dark:text-white/80">
            I'm also currently working as an operations associate on my campus at CSUEB.
          </p>
          <p className="mt-3 text-slate-600 dark:text-white/80">
            In my free time I enjoy photography, working out, traveling, PC
            gaming, and meeting new people.
          </p>
        </Glass>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle subtitle="Experience">Work Experience</SectionTitle>
        {experience.map((job) => (
          <Glass key={job.company} className="p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="h-20 w-20 rounded-2xl object-contain border border-white/10 bg-white/10 p-2"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5" /> {job.company}
                    </h3>
                    <div className="text-slate-600 dark:text-white/70">{job.role}</div>
                  </div>
                  <div className="text-slate-600 dark:text-white/70 text-sm">{job.period}</div>
                </div>
                <ul className="mt-4 list-disc marker:text-slate-400 dark:marker:text-white/50 pl-5 space-y-2 text-slate-700/90 dark:text-white/85">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Glass>
        ))}
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle subtitle="Selected">Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card
                className="rounded-3xl border bg-white/60 text-slate-900 backdrop-blur-xl overflow-hidden
                 border-white/40
                 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-white/80">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          variant="secondary"
                          className="rounded-full text-slate-900 dark:text-white"
                          style={{
                            background: "var(--accent)",
                            borderColor: "transparent",
                          }}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> {l.label}
                        </Button>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle subtitle="Say hi">Connect with me</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <Glass className="p-6">
            <div className="flex flex-col items-center text-center">
              <Mail className="h-6 w-6" />
              <h4 className="mt-2 text-lg font-medium">Email</h4>
              <a
                href="mailto:aditya.chache@gmail.com"
                className="mt-1 hover:opacity-90"
                style={{ color: "var(--accent)" }}
              >
                aditya.chache@gmail.com
              </a>
            </div>
          </Glass>
          <Glass className="p-6">
            <div className="flex flex-col items-center text-center">
              <Github className="h-6 w-6" />
              <h4 className="mt-2 text-lg font-medium">Socials</h4>
              <div className="mt-1 flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80"
                    aria-label={s.name}
                    style={{ color: "var(--accent)" }}
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </Glass>
          <Glass className="p-6">
            <div className="flex flex-col items-center text-center">
              <Phone className="h-6 w-6" />
              <h4 className="mt-2 text-lg font-medium">Phone</h4>
              <div className="mt-1 text-slate-600 dark:text-white/80">+1 (510) 807-8968</div>
            </div>
          </Glass>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-slate-600 dark:text-white/70">
          © {year} Aditya Chache
        </div>
      </footer>

      {/* Floating bottom tabbar (iOS-ish) */}
      {/* <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 backdrop-blur-2xl px-2 py-1 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <a href="#about" className="px-3 py-1.5 text-xs rounded-full hover:bg-white/20 transition">About</a>
          <a href="#work" className="px-3 py-1.5 text-xs rounded-full hover:bg-white/20 transition">Work</a>
          <a href="#projects" className="px-3 py-1.5 text-xs rounded-full hover:bg-white/20 transition">Projects</a>
          <a href="#contact" className="px-3 py-1.5 text-xs rounded-full hover:bg-white/20 transition">Contact</a>
        </div>
      </div> */}
    </div>
  );
}
