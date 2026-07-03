import useReveal from "../../hooks/useReveal";
import "./Contact.css";

const SOCIALS = [
    {
        id: "social-icon",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mohd-asfar-khan",
    },
    {
        id: "github-icon",
        label: "GitHub",
        href: "https://github.com/Ryanman9",
    },
    {
        id: "telegram-icon",
        label: "Telegram",
        href: "https://t.me/Five5ee",
    },
];

export default function Contact() {
  const contactRef = useReveal();

  return (
    <section id="contact" className="section contact">
        <div ref={contactRef} className="section-inner contact_intro">
            <div className="contact_content">
                <span className="over-heading">Get in touch</span>

                <h2 className="section-heading">Let's Work Together</h2>

                <p className="section-sub">
                Want to collaborate, discuss ideas, or just connect?
                Reach out through any of the platforms →
                </p>
            </div>

            <div className="contact_card">
                <ul className="contact_socials">
                    {SOCIALS.map((social) => (
                        <li key={social.id}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact_social-link"
                                >
                                    <div className="contact_icon">
                                        <svg width="20" height="20" aria-hidden="true">
                                            <use href={`${import.meta.env.BASE_URL}icons.svg#${social.id}`} />
                                        </svg>
                                    </div>

                                    <span>{social.label}</span>

                                    <span className="contact_arrow">→</span>
                                </a>
                        </li>
                    ))}
                </ul>

                <div className="contact_mail">
                        <span>or email me directly</span>

                        <a href="mailto:asferk8@gmail.com">asferk8@gmail.com</a>
                </div>
            </div>
        </div>
    </section>
  );
}