import { useState } from 'react';
import experienceData from '../data/experience.json';
import type { ExperienceEntry } from '../types';

const experiences = experienceData as ExperienceEntry[];

function ExpContent({ exp }: { exp: ExperienceEntry }) {
  return (
    <div className="exp-content-inner">
      <div className="exp-role-header">
        <div className="exp-role-top">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="exp-content-logo"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <h3 className="exp-role">{exp.role}</h3>
        </div>
        <div className="exp-meta">
          <span className="exp-company-name">@ {exp.company}</span>
          <span className="exp-period-badge">{exp.period}</span>
        </div>
      </div>

      <div className="exp-terminal-line">
        <span className="terminal-arrow">&#9656;</span> cat responsibilities.md
      </div>
      <p className="exp-description">{exp.description}</p>

      <div className="exp-terminal-line">
        <span className="terminal-arrow">&#9656;</span> ls tech-stack/
      </div>
      <div className="exp-tech-tags">
        {exp.techStack.map((tech, i) => (
          <span key={i} className="exp-tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experiences[activeIdx];

  const handleAccordionClick = (i: number) => {
    setActiveIdx(i);
  };

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-number">// 02</span>
        <h2 className="section-heading">Work Experience</h2>
        <div className="section-underline" />
      </div>

      {/* Desktop: tabs + content side by side */}
      <div className="exp-layout exp-desktop">
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
          {active && <ExpContent exp={active} />}
        </div>
      </div>

      {/* Mobile: accordion */}
      <div className="exp-accordion exp-mobile">
        {experiences.map((exp, i) => (
          <div key={i} className={`exp-acc-item${i === activeIdx ? ' exp-acc-item-active' : ''}`}>
            <button
              className="exp-acc-header"
              onClick={() => handleAccordionClick(i)}
            >
              <div className="exp-acc-header-left">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="exp-tab-logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="exp-acc-header-info">
                  <span className="exp-acc-company">{exp.company}</span>
                  <span className="exp-acc-role-brief">{exp.role}</span>
                </div>
              </div>
              <div className="exp-acc-header-right">
                <span className="exp-acc-period">{exp.period}</span>
                <span className={`exp-acc-chevron${i === activeIdx ? ' exp-acc-chevron-open' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </button>
            <div className={`exp-acc-body${i === activeIdx ? ' exp-acc-body-open' : ''}`}>
              <ExpContent exp={exp} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
