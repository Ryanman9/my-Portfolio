export default function About() {
    return(
        <section className="section about">
            <div className="section-inner">
                <div ref={imageRef} className="about__image reveal">
                    <img
                    />
                    <span className="about__image-tag">Hello, I'm Asfar</span>
                </div>

                <div className="about_content">
                    <span className="over-heading">About Me</span>
                    <h2 className="section-heading">Designing ideas into reality</h2>
                    <p className="section-sub">
                        Currently, I’m focused on learning full stack development,
                        strengthening my problem solving skills through Data Structures & Algorithms,
                        and building projects that help me understand real world software development.
                        <br />
                        I aim to gain deep expertise in AI and create products that integrate
                        intelligent technology with real-world everyday applications.
                    </p>
                </div>
            </div>
        </section>
    );
}