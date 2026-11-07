import { Badge, Button, EmptyState, Menu, Status, Table, Toast } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import type { Trip, TripStatus } from "../lib/data";
import { formatDates, formatPrice } from "../lib/format";

const STATUS: Record<TripStatus, { label: string; palette: "teal" | "blue" | "green" | "red" }> = {
  upcoming: { label: "Upcoming", palette: "teal" },
  "in-progress": { label: "In progress", palette: "blue" },
  completed: { label: "Completed", palette: "green" },
  cancelled: { label: "Cancelled", palette: "red" },
};

export function TripsPage({ trips, cancelled }: { trips: Trip[]; cancelled?: string }) {
  return (
    <AppShell>
      <h1>Trips</h1>
      {cancelled ? (
        <Toast.Root>
          <Toast.Title>Booking {cancelled} cancelled</Toast.Title>
          <Toast.Description>The refund reaches your card in 3–5 days.</Toast.Description>
        </Toast.Root>
      ) : null}
      {trips.length === 0 ? (
        <EmptyState.Root size="lg">
          <EmptyState.Content>
            <EmptyState.Title>No trips yet</EmptyState.Title>
            <EmptyState.Description>Your bookings will appear here.</EmptyState.Description>
            <Button colorPalette="teal">Start exploring</Button>
          </EmptyState.Content>
        </EmptyState.Root>
      ) : (
        <Table.Root variant="line" size="md">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Booking</Table.ColumnHeader>
              <Table.ColumnHeader>Stay</Table.ColumnHeader>
              <Table.ColumnHeader>Dates</Table.ColumnHeader>
              <Table.ColumnHeader>Total</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {trips.map((trip) => (
              <Table.Row key={trip.id}>
                <Table.Cell>
                  <Badge variant="outline" size="sm">
                    {trip.id}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  {trip.stay}, {trip.place}
                </Table.Cell>
                <Table.Cell>{formatDates(trip.from, trip.to)}</Table.Cell>
                <Table.Cell>{formatPrice(trip.total)}</Table.Cell>
                <Table.Cell>
                  <Status.Root size="sm" colorPalette={STATUS[trip.status].palette}>
                    <Status.Indicator />
                    {STATUS[trip.status].label}
                  </Status.Root>
                </Table.Cell>
                <Table.Cell>
                  <Menu.Root>
                    <Menu.Trigger>Manage</Menu.Trigger>
                    <Menu.Positioner>
                      <Menu.Content>
                        <Menu.Item>Message the host</Menu.Item>
                        <Menu.Item>Change dates</Menu.Item>
                        <Menu.Separator />
                        <Menu.Item>Cancel booking</Menu.Item>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Menu.Root>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      )}
    </AppShell>
  );
}
