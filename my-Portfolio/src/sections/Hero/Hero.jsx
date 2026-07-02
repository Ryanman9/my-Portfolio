import "./Hero.css";

export default function Hero() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth"});

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
                <button className="btn btn-primary"
                    onClick={() =>
                        window.open("https://drive.google.com/file/d/1woWnIx3ddWcFNStxElPTGoXKu1dBl1AJ/view?usp=drive_link", "_blank")
                    }
                >
                    Download CV
                </button>
                <button className="btn btn-secondary" onClick={() => scrollTo("contact")}>
                    Contact Me
                </button>
            </div>
        </section>
    );
}