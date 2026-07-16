import type { JourneyCard } from '../types';

interface StartJourneyProps {
  heading: string;
  cards: JourneyCard[];
  onNavigate?: (page: string) => void;
}

export default function StartJourney({ heading, cards, onNavigate }: StartJourneyProps) {
  return (
    <section className="journey" id="journey">
      <h2 className="journey__heading">{heading}</h2>
      <div className="journey__divider" />
      <div className="journey__cards">
        {cards.map((card) => (
          <a key={card.id} href={card.href} className="journey__card" aria-label={`Explore ${card.title}`}
            onClick={card.page && onNavigate ? (e) => { e.preventDefault(); onNavigate(card.page!); } : undefined}>
            <img src={`/img/${card.id}.jpg`} alt={card.title} className="journey__card-img" />
            <div className="journey__card-overlay" />
            <span className="journey__card-label">{card.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}