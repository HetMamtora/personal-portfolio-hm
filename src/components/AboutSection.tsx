import aboutData from '../data/about.json';
import type { AboutData } from '../types';

const about = aboutData as AboutData;

function renderParagraph(text: string) {
  const parts = text.split(/(<highlight>.*?<\/highlight>|<accent>.*?<\/accent>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<highlight>')) {
      return <span key={i} className="text-highlight">{part.replace(/<\/?highlight>/g, '')}</span>;
    }
    if (part.startsWith('<accent>')) {
      return <span key={i} className="text-accent">{part.replace(/<\/?accent>/g, '')}</span>;
    }
    return part;
  });
}

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-number">// 01</span>
        <h2 className="section-heading">About Me</h2>
        <div className="section-underline" />
      </div>

      <div className="about-grid">
        <div className="about-bio">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="body-text">{renderParagraph(p)}</p>
          ))}
        </div>

        <div className="quick-info-card">
          <div className="quick-info-label">QUICK INFO</div>
          {about.quickInfo.map((item, i) => (
            <div key={i} className="quick-info-row">
              <span className="quick-info-key">{item.key}</span>
              <span className={`quick-info-value${item.highlight ? ' quick-info-highlight' : ''}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
