import certsData from '../data/certifications.json';
import type { CertificationEntry } from '../types';

const certs = certsData as CertificationEntry[];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="section-header">
        <span className="section-number">// 05</span>
        <h2 className="section-heading">Certifications</h2>
        <div className="section-underline" />
      </div>

      <div className="certs-scroll">
        {certs.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div className="cert-preview">
              <div className="cert-accent-bar" />
              {cert.previewImage ? (
                <img
                  src={cert.previewImage}
                  alt={cert.name}
                  className="cert-preview-img"
                  loading="lazy"
                />
              ) : (
                <div className="cert-inner-frame">
                  <div className="cert-seal">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,136,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="cert-skeleton-line cert-skeleton-long" />
                  <div className="cert-skeleton-line cert-skeleton-short" />
                  <div className="cert-bottom-rule">
                    <span className="cert-rule-line" />
                    <span className="cert-rule-dot" />
                    <span className="cert-rule-line" />
                  </div>
                </div>
              )}
            </div>
            <div className="cert-info">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
