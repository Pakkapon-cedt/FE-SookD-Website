interface LuxuryTravelProps {
  heading: string;
  body: string;
}

export default function LuxuryTravel({ heading, body }: LuxuryTravelProps) {
  return (
    <section className="luxury" id="luxury">
      {/* LEFT: image — /img/luxury-local.jpg  (ผู้หญิงนั่งทอผ้าในสวน) */}
      <div className="luxury__image" role="img" aria-label="Local artisan weaving in garden" />
      {/* RIGHT: text */}
      <div className="luxury__text">
        <h2 className="luxury__heading">{heading}</h2>
        <p className="luxury__body">{body}</p>
      </div>
    </section>
  );
}
