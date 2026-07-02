import "./Hero.css";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero_firstLine">
                <span className="hero_meta-left">Web&nbsp;Developer</span>
                <span className="hero_meta-right">Open to Opportunities →</span>
            </div>

            <div className="hero_center">
                <h1 className="hero_portfolio">
                    <span className="hero_portfolio-line">portfolio.</span>
                    <span className="hero_name">mohd asfar khan</span>
                </h1>
            </div>

            <p className="hero_tagline">
                Learning by building projects and turning ideas into functional web applications.
            </p>

            <div className="hero_info">
                <button className="btn-primary">
                    Download CV
                </button>
                <button className="btn-secondary">
                    Contact Me
                </button>
            </div>
        </section>
    );
}