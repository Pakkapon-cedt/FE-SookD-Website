interface HeroProps {
  heading: string;
  subheading: string;
}

export default function Hero({ heading, subheading }: HeroProps) {
  return (
    <section className="hero" aria-label="Hero">
      {/* bg image: /img/hero-bg.jpg  (ภาพภูเขาจีน/Zhangjiajie) */}
      <div className="hero__bg" />
      <div className="hero__content">
        <h1 className="hero__heading">{heading}</h1>
        <p className="hero__subheading">{subheading}</p>
      </div>
    </section>
  );
}
