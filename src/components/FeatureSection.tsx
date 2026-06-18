import type { FeatureSection as FeatureSectionType } from '../types';

interface FeatureSectionProps {
  section: FeatureSectionType;
}

export default function FeatureSection({ section }: FeatureSectionProps) {
  const isImageRight = section.imagePosition === 'right';

  return (
    <section
      className={`feature-section ${isImageRight ? 'feature-section--img-right' : ''}`}
      id={section.id}
    >
      <div className="feature-section__text">
        {section.eyebrow && (
          <span className="feature-section__eyebrow">{section.eyebrow}</span>
        )}
        <h2 className="feature-section__heading">{section.heading}</h2>
        <p className="feature-section__body">{section.body}</p>
        {section.ctaLabel && section.ctaHref && (
          <a href={section.ctaHref} className="feature-section__cta">
            {section.ctaLabel}
          </a>
        )}
      </div>
      <div
        className="feature-section__image"
        style={{ backgroundImage: `url(${section.imageUrl})` }}
        role="img"
        aria-label={section.imageAlt}
      />
    </section>
  );
}
