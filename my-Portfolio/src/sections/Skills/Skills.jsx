import useReveal from "../../hooks/useReveal";
import skills from "../../data/skills";

import "./Skills.css";

function SkillGroup({ group }) {
    const ref = useReveal();
    return (
        <div ref={ref} className="skill-group">
            <h3 className="skill-group_title">{group.category}</h3>
            <ul className="skill-group_list">
                {group.items.map((item) => (
                    <li key={item.name} className="skill-item">
                        <div className="skill-item_row">
                            <span>{item.name}</span>
                            <span className="skill-item_level">{item.level}%</span>
                        </div>
                        <div className="skill-item_bar">
                        <span
                            className="skill-item_bar-fill"
                            style={{ width: `${item.level}%` }}
                        />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Skills() {
    const headRef = useReveal();

    return (
        <section id="skills" className="section skills">
            <div className="section-inner">
                <div ref={headRef} className="reveal projects__head">
                    <span className="over-heading">Toolbox</span>
                    <h2 className="section-heading">Skills</h2>
                    <p className="section-sub">
                        The technologies and tools I reach for most when building on the
                        web.
                    </p>
                </div>

                <div className="skills_grid">
                    {skills.map((group) => (
                        <SkillGroup key={group.category} group={group}/>
                    ))}
                </div>
            </div>
        </section>
    );
}