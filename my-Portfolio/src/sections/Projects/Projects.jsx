export default function Projects() {
  const headRef = useReveal();

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <div ref={headRef} className="reveal projects__head">
          <span className="over-heading">Selected work</span>
          <h2 className="section-heading">Projects</h2>
          <p className="section-sub">
            A few recent builds that show how I think about layout, motion
            and code structure.
          </p>
        </div>
        
      </div>
    </section>
  );
}