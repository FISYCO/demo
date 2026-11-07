import { Card, Progress, ProgressCircle, SegmentGroup, Stat, Table, Timeline } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import { formatPrice } from "../lib/format";

const ACTIVITY = [
  { when: "Today", what: "New booking from Lena F. for 18–23 December" },
  { when: "Yesterday", what: "Review: “Spotless and right by the river” — 5 stars" },
  { when: "Mon", what: "Payout of €1,184 sent" },
];

export function HostDashboardPage() {
  return (
    <AppShell>
      <h1>Hosting</h1>
      <SegmentGroup.Root size="sm">
        {["30 days", "90 days", "Year"].map((range) => (
          <SegmentGroup.Item key={range}>
            <SegmentGroup.ItemText>{range}</SegmentGroup.ItemText>
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
      <div className="grid">
        <Card.Root variant="outline" size="sm">
          <Card.Body>
            <Stat.Root size="lg">
              <Stat.Label>Earnings</Stat.Label>
              <Stat.ValueText>{formatPrice(4280)}</Stat.ValueText>
              <Stat.HelpText>+12% on last month</Stat.HelpText>
            </Stat.Root>
          </Card.Body>
        </Card.Root>
        <Card.Root variant="outline" size="sm">
          <Card.Body>
            <Stat.Root size="lg">
              <Stat.Label>Occupancy</Stat.Label>
              <Stat.ValueText>78%</Stat.ValueText>
            </Stat.Root>
            <Progress.Root size="sm" colorPalette="teal">
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </Card.Body>
        </Card.Root>
        <Card.Root variant="outline" size="sm">
          <Card.Body>
            <ProgressCircle.Root size="lg" colorPalette="teal">
              <ProgressCircle.Circle>
                <ProgressCircle.CircleTrack />
                <ProgressCircle.CircleRange />
              </ProgressCircle.Circle>
              <ProgressCircle.ValueText>92%</ProgressCircle.ValueText>
            </ProgressCircle.Root>
            <span>Response rate</span>
          </Card.Body>
        </Card.Root>
      </div>
      <h2>Activity</h2>
      <Timeline.Root size="md" variant="subtle">
        {ACTIVITY.map((item) => (
          <Timeline.Item key={item.what}>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>{item.when}</Timeline.Title>
              <Timeline.Description>{item.what}</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
      <h2>Upcoming check-ins</h2>
      <Table.Root variant="outline" size="sm">
        <Table.Body>
          <Table.Row>
            <Table.Cell>Lena Fischer</Table.Cell>
            <Table.Cell>18 Dec</Table.Cell>
            <Table.Cell>2 guests</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </AppShell>
  );
}
