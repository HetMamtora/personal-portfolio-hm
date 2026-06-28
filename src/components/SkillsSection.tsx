import skillsData from '../data/skills.json';
import type { SkillCategory } from '../types';

const skills = skillsData as SkillCategory[];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <span className="section-number">// 04</span>
        <h2 className="section-heading">Skills</h2>
        <div className="section-underline" />
      </div>

      <div className="skills-list">
        {skills.map((cat, i) => (
          <div key={i} className="skill-row">
            <span className="skill-category">{cat.category}</span>
            <div className="skill-tags">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
