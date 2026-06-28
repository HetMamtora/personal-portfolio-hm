import { useState } from 'react';
import experienceData from '../data/experience.json';
import type { ExperienceEntry } from '../types';

const experiences = experienceData as ExperienceEntry[];

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experiences[activeIdx];

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-number">// 02</span>
        <h2 className="section-heading">Work Experience</h2>
        <div className="section-underline" />
      </div>

      <div className="exp-layout">
        <div className="exp-tabs">
          {experiences.map((exp, i) => (
            <button
              key={i}
              className={`exp-tab${i === activeIdx ? ' exp-tab-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              <div className="exp-tab-top">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="exp-tab-logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="exp-tab-company">{exp.company}</span>
              </div>
              <span className="exp-tab-period">{exp.period}</span>
            </button>
          ))}
        </div>

        <div className="exp-content">
          <div className="exp-role-header">
            <div className="exp-role-top">
              <img
                src={active.logo}
                alt={`${active.company} logo`}
                className="exp-content-logo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h3 className="exp-role">{active.role}</h3>
            </div>
            <div className="exp-meta">
              <span className="exp-company-name">@ {active.company}</span>
              <span className="exp-period-badge">{active.period}</span>
            </div>
          </div>

          <div className="exp-terminal-line">
            <span className="terminal-arrow">&#9656;</span> cat responsibilities.md
          </div>
          <p className="exp-description">{active.description}</p>

          <div className="exp-terminal-line">
            <span className="terminal-arrow">&#9656;</span> ls tech-stack/
          </div>
          <div className="exp-tech-tags">
            {active.techStack.map((tech, i) => (
              <span key={i} className="exp-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
