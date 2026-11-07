import { Accordion, Avatar, Badge, Breadcrumb, Button, DataList, Stat, Tabs, Tooltip } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import { PriceTag } from "../components/PriceTag";
import type { Stay } from "../lib/data";

const FAQ = [
  { q: "How do I check in?", a: "A lockbox code arrives in your inbox on the morning of arrival." },
  { q: "Is there parking?", a: "Street parking is free after 7 pm; a public garage is two minutes away." },
  { q: "Can I cancel?", a: "Free cancellation until 14 days before check-in, then 50% is refunded." },
];

export function StayPage({ stay }: { stay: Stay }) {
  return (
    <AppShell>
      <Breadcrumb.Root size="sm">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Explore</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>{stay.place}</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <h1>{stay.title}</h1>
      <div className="stay-summary">
        <Stat.Root size="md">
          <Stat.Label>Rating</Stat.Label>
          <Stat.ValueText>{stay.rating.toFixed(2)}</Stat.ValueText>
          <Stat.HelpText>{stay.reviews} reviews</Stat.HelpText>
        </Stat.Root>
        {stay.host.superhost ? (
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Badge variant="surface" size="md" colorPalette="yellow">
                Superhost
              </Badge>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>Superhosts keep a rating above 4.8 for a year.</Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
        ) : null}
        <PriceTag amount={stay.pricePerNight} />
        <Button size="xl" variant="solid" colorPalette="teal">
          Reserve
        </Button>
      </div>
      <Tabs.Root variant="line" size="md">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="amenities">Amenities</Tabs.Trigger>
          <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
          <DataList.Root orientation="horizontal" size="md">
            {[
              ["Guests", "4"],
              ["Bedrooms", "2"],
              ["Check-in", "after 3 pm"],
              ["Check-out", "before 11 am"],
            ].map(([label, value]) => (
              <DataList.Item key={label}>
                <DataList.ItemLabel>{label}</DataList.ItemLabel>
                <DataList.ItemValue>{value}</DataList.ItemValue>
              </DataList.Item>
            ))}
          </DataList.Root>
          <div className="host">
            <Avatar.Root size="md">
              <Avatar.Image src={stay.host.avatar} alt="" />
              <Avatar.Fallback>{stay.host.name[0]}</Avatar.Fallback>
            </Avatar.Root>
            <span>Hosted by {stay.host.name}</span>
          </div>
        </Tabs.Content>
      </Tabs.Root>
      <h2>Good to know</h2>
      <Accordion.Root variant="outline" size="md">
        {FAQ.map((item) => (
          <Accordion.Item key={item.q}>
            <Accordion.ItemTrigger>
              {item.q}
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>{item.a}</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </AppShell>
  );
}
