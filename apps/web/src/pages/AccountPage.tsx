import { Button, FileUpload, Input, Separator, Switch } from "@seavora/ui";

import { AppShell } from "../components/AppShell";
import { OldModal } from "../components/legacy/OldModal";

const NOTIFICATIONS = ["Booking updates", "Messages from hosts", "Deals and inspiration"];

export function AccountPage({ confirmDelete }: { confirmDelete: boolean }) {
  return (
    <AppShell>
      <h1>Account</h1>
      <section>
        <h2>Profile</h2>
        <FileUpload.Root>
          <FileUpload.Trigger>Change photo</FileUpload.Trigger>
        </FileUpload.Root>
        <Input size="md" defaultValue="Maya Lindqvist" aria-label="Name" />
        <Input size="md" defaultValue="maya@seavora.example" aria-label="Email" />
        <Button size="md" variant="outline">
          Save profile
        </Button>
      </section>
      <Separator variant="dashed" />
      <section>
        <h2>Notifications</h2>
        {NOTIFICATIONS.map((item) => (
          <Switch.Root key={item} size="md" colorPalette="teal" label={item} />
        ))}
      </section>
      <Separator />
      <Button size="sm" variant="ghost" colorPalette="red">
        Delete account
      </Button>
      <OldModal open={confirmDelete} title="Delete your account?">
        <p>Your trips and messages will be removed. This cannot be undone.</p>
        <Button colorPalette="red">Delete</Button>
      </OldModal>
    </AppShell>
  );
}
