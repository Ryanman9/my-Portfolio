import skills from "../../data/skills";

function SkillGroup({ group }) {
  
  return (
    <div className="skill-group">
        <h3 className="skill-group_title">{group.category}</h3>
        <ul className="skill-group_list">
            {group.items.map((item) => (
                <li key={item.name} className="skill-item">
                    <div className="skill-item_row">
                        <span>{item.name}</span>
                        <span className="skill-item_level">{item.level}%</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default function Skills() {

  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <div className="projects__head">
            <span className="over-heading">Toolbox</span>
            <h2 className="section-heading">Skills</h2>
            <p className="section-sub">
                The technologies and tools I reach for most when building on the
                web.
            </p>
        </div>

        <div className="skills_grid">
            {Skills.map((group) => {
                <SkillGroup key={group.category} group={group}/>
            })}
        </div>
      </div>
    </section>
  );
}