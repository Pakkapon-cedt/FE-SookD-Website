import type { ImpactStat } from '../types';

interface SocialImpactProps {
  heading: string;
  subheading: string;
  stats: ImpactStat[];
}

export default function SocialImpact({ heading, subheading, stats }: SocialImpactProps) {
  return (
    /* bg image: /img/social-impact-bg.jpg  (นาขั้นบันได/rice terraces + ชนเผ่า) */
    <section className="impact" aria-label="Social Impact">
      <div className="impact__overlay" />
      <div className="impact__content">
        <h2 className="impact__heading">{heading}</h2>
        <p className="impact__sub">{subheading}</p>
        <div className="impact__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="impact__card">
              <span className="impact__value">{stat.value}</span>
              <span className="impact__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
