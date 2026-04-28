import PhotoSlider from "./PhotoSlider";
import SmartLink from "./SmartLink";

export default function HeroSection({ hero }) {
  return (
    <section className="hero-grid">
      <div className="hero-panel">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p className="hero-intro">{hero.intro}</p>
        <p className="hero-copy">{hero.supportingText}</p>

        <div className="button-row">
          <SmartLink
            className="button button-primary"
            href={hero.primaryLink.href}
            label={hero.primaryLink.label}
          />
          <SmartLink
            className="button button-secondary"
            href={hero.secondaryLink.href}
            label={hero.secondaryLink.label}
          />
        </div>

        <ul className="highlight-list" aria-label="Research highlights">
          {hero.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <PhotoSlider
        caption={hero.imageCaption}
        image={hero.image}
        imageAlt={hero.imageAlt}
        slides={hero.slides}
      />
    </section>
  );
}
