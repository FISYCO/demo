import { Card } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import { PromoBanner } from "../components/PromoBanner";
import { SearchBar } from "../components/SearchBar";
import { StayCard } from "../components/StayCard";
import { STAYS } from "../lib/data";

const DESTINATIONS = [
  { name: "Lisbon", stays: 1240 },
  { name: "Porto", stays: 860 },
  { name: "Madeira", stays: 410 },
  { name: "Seville", stays: 970 },
];

export function HomePage() {
  return (
    <AppShell unread={2}>
      <section className="hero">
        <h1>Find a place that feels like yours</h1>
        <SearchBar />
      </section>
      <PromoBanner />
      <h2>Popular destinations</h2>
      <div className="grid">
        {DESTINATIONS.map((destination) => (
          <Card.Root key={destination.name} variant="subtle" size="sm">
            <Card.Body>
              <Card.Title>{destination.name}</Card.Title>
              <Card.Description>{destination.stays} stays</Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </div>
      <h2>Guest favourites</h2>
      <div className="grid">
        {STAYS.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </AppShell>
  );
}
