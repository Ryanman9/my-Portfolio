export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card_image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <div className="project-card_body">
                <h3 className="project-card_title">{project.title}</h3>
                <p className="project-card_desc">{project.description}</p>

                <ul className="project-card_tags">
                    {project.tags.map((tag) => {
                        <li key={tag}>{tag}</li>
                    })}
                </ul>

                <div className="project-card_actions">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-card_link">
                        GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link project-card__link--primary">
                        Live Demo &#8594;
                    </a>
                </div>
            </div>
        </article>
    );
}