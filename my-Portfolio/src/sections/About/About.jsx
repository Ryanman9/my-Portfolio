import useReveal from "../../hooks/useReveal";
import "./About.css";

const STATS = [
  { label: "Projects Completed", value: "5+" },
  { label: "Location", value: "Uttar Pradesh, IN" },
];

export default function About() {
  const imageRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about" className="section about">
      <div className="section-inner about_grid">

        <div ref={textRef} className="about_content reveal">
            <span className="over-heading">About Me</span>

            <h2 className="section-heading">
                Designing ideas into reality
            </h2>

            <p className="section-sub about_paragraph">
                Currently, I’m focused on learning full stack development,
                strengthening my problem solving skills through Data Structures & Algorithms,
                and building projects that help me understand real world software development.
                <br />
                I aim to gain deep expertise in AI and create products that integrate
                intelligent technology with real-world everyday applications.
            </p>

            <div className="about_stats">
                {STATS.map((stat) => (
                <div key={stat.label} className="about_stat">
                    <span className="about_stat-value">{stat.value}</span>
                    <span className="about_stat-label">{stat.label}</span>
                </div>
                ))}
            </div>
        </div>


        <div ref={imageRef} className="about_image reveal">
            <img src={`${import.meta.env.BASE_URL}images/Profile.png`} alt="Profile" />
            <span className="about_image-tag">Hello, I'm Asfar</span>
        </div>

      </div>
    </section>
  );
}