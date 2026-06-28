import heroData from '../data/hero.json';
import type { HeroData } from '../types';

const hero = heroData as HeroData;

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      {/* Background layers */}
      <div className="hero-dot-grid" />
      <div className="hero-scanline" />

      {/* Corner labels */}
      <div className="hero-corner-tl">[ portfolio.sh — v1.0.0 ]</div>
      <div className="hero-corner-tr">
        status: <span className="status-online">■ online</span>
      </div>

      {/* Hero text */}
      <div className="hero-content">
        <div className="hero-prompt">
          <span className="prompt-path">~/portfolio</span>
          <span className="prompt-dollar"> $ </span>
          <span className="prompt-cmd">whoami</span>
        </div>

        <div className="hero-name-wrapper">
          <h1 className="hero-name">{hero.name}</h1>
          <h1 className="hero-name hero-name-glitch1" aria-hidden="true">{hero.name}</h1>
          <h1 className="hero-name hero-name-glitch2" aria-hidden="true">{hero.name}</h1>
        </div>

        <p className="hero-role">{hero.role}</p>

        <p className="hero-bio">
          {hero.bio}
          <span className="hero-cursor" />
        </p>

        <div className="hero-ctas">
          <a href={hero.ctaPrimary.href} className="btn-primary">{hero.ctaPrimary.label}</a>
          <a href={hero.ctaSecondary.href} className="btn-secondary">{hero.ctaSecondary.label}</a>
        </div>
      </div>

      {/* Hero video hologram or photo orb */}
      {hero.heroVideoUrl ? (
        <div className="hero-video-wrapper">
          <div className="hero-video-container">
            <div className="hero-video-glow" />
            <video
              className="hero-video"
              src={hero.heroVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <div className="hero-video-scanlines" />
            <div className="hero-video-border" />
            <div className="hero-video-border-light">
              <span />
            </div>
          </div>
          {/* Hologram projection cone */}
          <div className="hero-holo-projection">
            <div className="hero-holo-cone" />
          </div>
          {/* Projector device */}
          <div className="hero-holo-device">
            <div className="hero-holo-device-glow" />
          </div>
        </div>
      ) : (
        <div className="hero-photo-orb">
          <div className="hero-photo-inner">
            {hero.photoUrl ? (
              <img src={hero.photoUrl} alt={hero.name} className="hero-photo-img" />
            ) : (
              <>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,136,0.3)" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="photo-label">YOUR PHOTO</span>
              </>
            )}
          </div>
          <div className="orbit-dot orbit-dot-1" />
          <div className="orbit-dot orbit-dot-2" />
        </div>
      )}

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span className="scroll-line" />
        scroll
      </div>
    </section>
  );
}
