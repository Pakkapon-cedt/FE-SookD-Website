interface NatureQuoteProps {
  heading: string;
  subtext: string;
}

export default function NatureQuote({ heading, subtext }: NatureQuoteProps) {
  return (
    /* bg image: /img/nature-quote-bg.jpg  (ทิวเขาหมอก/misty mountains) */
    <section className="nature-quote" aria-label="Nature quote">
      <div className="nature-quote__overlay" />
      <div className="nature-quote__content">
        <h2 className="nature-quote__heading">{heading}</h2>
        <p className="nature-quote__sub">{subtext}</p>
      </div>
    </section>
  );
}
