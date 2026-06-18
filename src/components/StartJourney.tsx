import type { JourneyCard } from '../types';

interface StartJourneyProps {
  heading: string;
  cards: JourneyCard[];
}

export default function StartJourney({ heading, cards }: StartJourneyProps) {
  return (
    <section className="journey" id="journey">
      <h2 className="journey__heading">{heading}</h2>
      <div className="journey__divider" />
      <div className="journey__cards">
        {cards.map((card) => (
          <a key={card.id} href={card.href} className="journey__card" aria-label={`Explore ${card.title}`}>
            {/* image filenames: taste.jpg | activity.jpg | travel.jpg  inside /img/ */}
            <img src={`/img/${card.id}.jpg`} alt={card.title} className="journey__card-img" />
            <div className="journey__card-overlay" />
            <span className="journey__card-label">{card.title}</span>
          </a>
        ))}
      </div>
      {/* Mascot */}
      <img src="/img/mascot.png" alt="" className="journey__mascot" aria-hidden="true" />
    </section>
  );
}