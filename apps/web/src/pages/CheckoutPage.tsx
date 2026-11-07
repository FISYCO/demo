import { Alert, Button, Checkbox, Dialog, Input, RadioGroup, Steps, Textarea } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import { formatDates, formatPrice, nights } from "../lib/format";

const STEPS = ["Your trip", "Guest details", "Payment", "Confirm"];

export function CheckoutPage({ from, to, perNight }: { from: string; to: string; perNight: number }) {
  const total = nights(from, to) * perNight;
  return (
    <AppShell>
      <Steps.Root size="sm" colorPalette="teal">
        <Steps.List>
          {STEPS.map((step) => (
            <Steps.Item key={step}>
              <Steps.Indicator />
              <Steps.Title>{step}</Steps.Title>
              <Steps.Separator />
            </Steps.Item>
          ))}
        </Steps.List>
      </Steps.Root>
      <section className="checkout">
        <h2>Guest details</h2>
        <Input size="md" placeholder="Full name" />
        <Input size="md" placeholder="Email" type="email" />
        <Input size="md" placeholder="Phone" type="tel" />
        <Textarea size="md" placeholder="A note for your host (optional)" />
        <h2>Payment</h2>
        <RadioGroup.Root size="md" colorPalette="teal">
          {["Card", "Apple Pay", "Bank transfer"].map((method) => (
            <RadioGroup.Item key={method}>
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>{method}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
        <Alert.Root status="info" variant="subtle" size="md">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Free cancellation until 14 days before check-in</Alert.Title>
            <Alert.Description>After that, half of the stay is refunded.</Alert.Description>
          </Alert.Content>
        </Alert.Root>
        <Checkbox.Root size="md" colorPalette="teal">
          <Checkbox.Control />
          <Checkbox.Label>I agree to the house rules and the cancellation policy</Checkbox.Label>
        </Checkbox.Root>
        <p>
          {formatDates(from, to)} · {nights(from, to)} nights · <strong>{formatPrice(total)}</strong>
        </p>
        <Button size="lg" variant="solid" colorPalette="teal">
          Confirm and pay
        </Button>
      </section>
      <Dialog.Root size="sm">
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Booking confirmed</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>We sent the details and the check-in guide to your email.</Dialog.Body>
          <Dialog.Footer>
            <Button variant="solid" colorPalette="teal">
              View trip
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </AppShell>
  );
}
