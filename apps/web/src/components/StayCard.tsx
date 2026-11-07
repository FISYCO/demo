import { Avatar, Badge, Card } from "@seavora/ui";

import type { Stay } from "../lib/data";
import { PriceTag } from "./PriceTag";

export function StayCard({ stay }: { stay: Stay }) {
  return (
    <Card.Root variant="elevated" size="sm">
      <img src={stay.image} alt="" className="stay-image" />
      <Card.Header>
        <Card.Title>{stay.title}</Card.Title>
        <Card.Description>{stay.place}</Card.Description>
      </Card.Header>
      <Card.Body>
        <div className="tags">
          {stay.tags.map((tag) => (
            <Badge key={tag} size="sm" variant="subtle">
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
      <Card.Footer>
        <Avatar.Root size="xs">
          <Avatar.Image src={stay.host.avatar} alt="" />
          <Avatar.Fallback>{stay.host.name[0]}</Avatar.Fallback>
        </Avatar.Root>
        <span>
          {stay.rating.toFixed(2)} · {stay.reviews} reviews
        </span>
        <PriceTag amount={stay.pricePerNight} />
      </Card.Footer>
    </Card.Root>
  );
}
