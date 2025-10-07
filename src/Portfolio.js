import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, Phone, Github, Linkedin, Instagram, ExternalLink, Download, } from "lucide-react";
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
        blurb: "Predicting and analyzing customer retention (cover image from web).",
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
        blurb: "Datathon 1.0 Finance Track: simplifying stock & metric analysis so anyone can explore financial data.",
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
        company: "Jio Platforms Limited",
        role: "Software Engineer",
        period: "Sep 2022 – Jun 2024",
        logo: "/img/Jio_Logo.png",
        bullets: [
            "Developed RESTful APIs to migrate Enterprise Product Catalog from Ericsson Conceptwave, enhancing flexibility and cutting costs by 20%.",
            "Optimized deployment processes by developing dynamic IP and Port configuration, reducing deployment time by 20%.",
            "Built an ETL pipeline moving SQL → MongoDB using Apache NiFi, improving scalability and reducing query time by 15%.",
            "Managed timelines and improved productivity by ~10% using Azure Boards for tracking and task management.",
            "Leveraged Tableau to analyze stock data, generating insights to optimize inventory and prevent imbalances.",
        ],
    },
];
function SectionTitle({ children, subtitle, }) {
    return (_jsxs("div", { className: "mb-8", children: [subtitle && (_jsx("div", { className: "text-sm text-slate-600 dark:text-white/70 tracking-wide mb-1", children: subtitle })), _jsxs("div", { className: "inline-flex items-end gap-3", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white drop-shadow-[0_1px_0_rgba(255,255,255,0.2)]", children: children }), _jsx("span", { className: "h-1 w-14 rounded-full", style: { background: "var(--accent)" } })] })] }));
}
const Glass = ({ className = "", children, }) => (_jsx("div", { className: "rounded-3xl border backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] " +
        "bg-white/60 border-white/40 " + // LIGHT
        "dark:bg-white/10 dark:border-white/10 " + // DARK
        className, children: children }));
export default function PortfolioIOS() {
    const year = useMemo(() => new Date().getFullYear(), []);
    // THEME: accent color (persisted + URL override)
    const [accent, setAccent] = React.useState(() => {
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
        }
        else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);
    // accent → additional tints used by the glass + background
    useEffect(() => {
        const root = document.documentElement;
        const hexToRgba = (hex, a) => {
            const h = hex.replace("#", "");
            const b = parseInt(h.length === 3
                ? h
                    .split("")
                    .map((c) => c + c)
                    .join("")
                : h, 16);
            const r = (b >> 16) & 255, g = (b >> 8) & 255, bl = b & 255;
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
        const hexToRgba = (hex, a) => {
            const h = hex.replace("#", "");
            const bigint = parseInt(h.length === 3
                ? h
                    .split("")
                    .map((c) => c + c)
                    .join("")
                : h, 16);
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
            background: "radial-gradient(1200px 600px at 100% -10%, var(--accent-20), transparent 60%)," +
                "radial-gradient(800px 400px at -10% 10%, rgba(139,92,246,0.20), transparent 60%)," +
                "linear-gradient(180deg,#0b0b10 0%,#0b0b10 60%,#0f0f14 100%)",
        }
        : {
            // iOS Liquid Glass — LIGHT
            background: "radial-gradient(1200px 600px at 100% -10%, var(--accent-10), transparent 60%)," +
                "radial-gradient(800px 400px at -10% 10%, rgba(0,0,0,0.04), transparent 60%)," +
                "linear-gradient(180deg,#f8fafc 0%,#f2f5f9 60%,#eef2f7 100%)",
        };
    return (_jsxs("div", { className: "min-h-screen w-full text-slate-900 dark:text-white", style: backgroundStyle, children: [_jsx("div", { className: "sticky top-0 z-50 pt-6", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(motion.div, { initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "mx-auto w-fit ", children: _jsxs("div", { className: "h-10 px-4 sm:px-6 flex items-center gap-3 rounded-full\n                border border-white/40 bg-white/60 backdrop-blur-xl\n                dark:border-white/10 dark:bg-white/10", children: [_jsx("span", { className: "text-sm font-medium", children: "Aditya Chache" }), _jsx("span", { className: "hidden sm:inline-flex text-xs text-slate-600 dark:text-white/70", children: "Portfolio" })] }) }), _jsxs("div", { className: "hidden md:flex items-center gap-2", children: [_jsx("div", { className: "text-xs text-slate-600 dark:text-white/70", children: "Accent" }), _jsx("input", { type: "color", "aria-label": "Pick accent color", value: accent, onChange: (e) => setAccent(e.target.value), className: "h-6 w-6 cursor-pointer rounded-md border border-white/20 bg-transparent p-0" }), _jsx("button", { onClick: () => setDark(!dark), className: "h-6 w-6 rounded-md border border-white/20 flex items-center justify-center text-xs", children: dark ? "🌙" : "☀️" })] })] }), _jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-white/60", children: [_jsx("a", { href: "#about", className: "hover:text-slate-900 dark:text-white transition", children: "About" }), _jsx("span", { children: "\u2022" }), _jsx("a", { href: "#work", className: "hover:text-slate-900 dark:text-white transition", children: "Work" }), _jsx("span", { children: "\u2022" }), _jsx("a", { href: "#projects", className: "hover:text-slate-900 dark:text-white transition", children: "Projects" }), _jsx("span", { children: "\u2022" }), _jsx("a", { href: "#contact", className: "hover:text-slate-900 dark:text-white transition", children: "Contact" }), _jsx("span", { children: "\u2022" }), _jsxs("a", { href: "/public/Aditya_Resume_Word.pdf", target: "_blank", rel: "noreferrer", className: "hover:text-slate-900 dark:text-white transition flex items-center gap-1", children: [_jsx(Download, { className: "h-3.5 w-3.5" }), " Resume"] })] })] }) }), _jsx("section", { className: "mx-auto max-w-6xl px-4 py-16", children: _jsx(Glass, { className: "p-6 sm:p-10", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center gap-6", children: [_jsx(motion.img, { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.4 }, src: "/img/headshot.jpg", alt: "Aditya headshot", className: "h-36 w-36 rounded-3xl object-cover border border-white/20" }), _jsxs("div", { className: "text-center md:text-left", children: [_jsx("h1", { className: "text-3xl sm:text-4xl font-semibold tracking-tight", children: "Aditya Chache" }), _jsx("p", { className: "mt-2 text-slate-600 dark:text-white/80", children: "Ex SDE \u2022 Business Analytics Grad Student \u2022 Traveler" }), _jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2", children: [_jsx("a", { href: "#about", children: _jsx(Button, { className: "rounded-full px-5 text-slate-900 dark:text-white", style: { background: "var(--accent)" }, children: "More About Me" }) }), socials.map((s) => (_jsxs("a", { href: s.href, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition", style: {
                                                    borderColor: "var(--accent-40)",
                                                    background: "rgba(255,255,255,0.06)",
                                                }, children: [_jsx(s.icon, { className: "h-4 w-4" }), _jsx("span", { className: "hidden sm:inline", children: s.name })] }, s.name)))] })] })] }) }) }), _jsxs("section", { id: "about", className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx(SectionTitle, { subtitle: "About", children: "Hello there! \uD83D\uDC4B" }), _jsxs(Glass, { className: "p-6 sm:p-8 leading-relaxed", children: [_jsxs("p", { className: "text-slate-700 dark:text-white/90", children: ["I'm Aditya, a Business Analytics grad student at", " ", _jsx("span", { className: "font-medium", children: "California State University, East Bay" }), " ", "and ex ", _jsx("span", { className: "font-medium", children: "Software Developer" }), " at Jio Platforms Limited."] }), _jsx("p", { className: "mt-3 text-slate-600 dark:text-white/80", children: "I\u2019m pursuing a career in business/data analytics. I hold a B.E. in Computer Engineering (University of Mumbai), and at Jio I worked on two enterprise migrations\u2014Enterprise Product Catalog and Plan-to-Build Order Care. Early on I collaborated closely with UI/UX and backend teams, and later contributed to data migration from SQL to MongoDB using Apache NiFi (ETL)." }), _jsx("p", { className: "mt-3 text-slate-600 dark:text-white/80", children: "On campus, I participate in tech & entrepreneurship clubs like UpClub\u2014attending events and sharpening communication and interpersonal skills." }), _jsx("p", { className: "mt-3 text-slate-600 dark:text-white/80", children: "In my free time I enjoy photography, working out, traveling, PC gaming, and meeting new people." })] })] }), _jsxs("section", { id: "work", className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx(SectionTitle, { subtitle: "Experience", children: "Work Experience" }), experience.map((job) => (_jsx(Glass, { className: "p-6 sm:p-8 mb-8", children: _jsxs("div", { className: "flex flex-col sm:flex-row gap-6", children: [_jsx("img", { src: job.logo, alt: `${job.company} logo`, className: "h-20 w-20 rounded-2xl object-contain border border-white/10 bg-white/10 p-2" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2", children: [_jsxs("div", { children: [_jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2", children: [_jsx(Briefcase, { className: "h-5 w-5" }), " ", job.company] }), _jsx("div", { className: "text-slate-600 dark:text-white/70", children: job.role })] }), _jsx("div", { className: "text-slate-600 dark:text-white/70 text-sm", children: job.period })] }), _jsx("ul", { className: "mt-4 list-disc marker:text-slate-400 dark:marker:text-white/50 pl-5 space-y-2 text-slate-700/90 dark:text-white/85", children: job.bullets.map((b, i) => (_jsx("li", { children: b }, i))) })] })] }) }, job.company)))] }), _jsxs("section", { id: "projects", className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx(SectionTitle, { subtitle: "Selected", children: "Projects" }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: projects.map((p) => (_jsx(motion.div, { initial: { opacity: 0, y: 8 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: _jsxs(Card, { className: "rounded-3xl border bg-white/60 text-slate-900 backdrop-blur-xl overflow-hidden\n                 border-white/40\n                 dark:border-white/10 dark:bg-white/10 dark:text-white", children: [_jsx("div", { className: "aspect-video w-full overflow-hidden", children: _jsx("img", { src: p.image, alt: p.title, className: "h-full w-full object-cover" }) }), _jsxs(CardContent, { className: "p-5", children: [_jsx("h3", { className: "text-lg font-semibold", children: p.title }), _jsx("p", { className: "mt-2 text-sm text-slate-600 dark:text-white/80", children: p.blurb }), _jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.links?.map((l) => (_jsx("a", { href: l.href, target: "_blank", rel: "noreferrer", children: _jsxs(Button, { variant: "secondary", className: "rounded-full text-slate-900 dark:text-white", style: {
                                                            background: "var(--accent)",
                                                            borderColor: "transparent",
                                                        }, children: [_jsx(ExternalLink, { className: "mr-2 h-4 w-4" }), " ", l.label] }) }, l.href))) })] })] }) }, p.title))) })] }), _jsxs("section", { id: "contact", className: "mx-auto max-w-6xl px-4 py-16", children: [_jsx(SectionTitle, { subtitle: "Say hi", children: "Connect with me" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [_jsx(Glass, { className: "p-6", children: _jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx(Mail, { className: "h-6 w-6" }), _jsx("h4", { className: "mt-2 text-lg font-medium", children: "Email" }), _jsx("a", { href: "mailto:aditya.chache@gmail.com", className: "mt-1 hover:opacity-90", style: { color: "var(--accent)" }, children: "aditya.chache@gmail.com" })] }) }), _jsx(Glass, { className: "p-6", children: _jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx(Github, { className: "h-6 w-6" }), _jsx("h4", { className: "mt-2 text-lg font-medium", children: "Socials" }), _jsx("div", { className: "mt-1 flex gap-4", children: socials.map((s) => (_jsx("a", { href: s.href, target: "_blank", rel: "noreferrer", className: "hover:opacity-80", "aria-label": s.name, style: { color: "var(--accent)" }, children: _jsx(s.icon, { className: "h-5 w-5" }) }, s.name))) })] }) }), _jsx(Glass, { className: "p-6", children: _jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx(Phone, { className: "h-6 w-6" }), _jsx("h4", { className: "mt-2 text-lg font-medium", children: "Phone" }), _jsx("div", { className: "mt-1 text-slate-600 dark:text-white/80", children: "+1 (510) 807-8968" })] }) })] })] }), _jsx("footer", { className: "border-t border-white/5 py-10", children: _jsxs("div", { className: "mx-auto max-w-6xl px-4 text-center text-slate-600 dark:text-white/70", children: ["\u00A9 ", year, " Aditya Chache"] }) })] }));
}
