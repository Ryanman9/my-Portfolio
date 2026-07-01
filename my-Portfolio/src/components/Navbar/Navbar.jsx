import { useEffect, useState } from "react";

const LINKS = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "projects", label: "Projects"},
    {id: "skills", label: "Skills"},
    {id: "contact", label: "Contact"},
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleClick = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    
    return(
        <header>
            <div className="navbar_inner">
                <button className="navbar_logo">
                    M<span>AK</span>
                </button>
            
                <nav className={`navbar_links ${menuOpen ? "navbar_links--open" : ""}`}>
                    {LINKS.map((link) => (
                        <button
                        key={link.id}
                        className={`navbar_link ${active === link.id ? "navbar_link--active" : ""}`}
                        onClick={() => handleClick(link.id)}
                        >
                        {link.label}
                        </button>
                    ))}
                </nav>

                <button
                    className={`navbar_burger ${menuOpen ? "navbar_burger--open" : ""}`}
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((o) => !o)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}