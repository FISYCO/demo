import { Avatar, Badge, Button, Skeleton, Textarea } from "@seavora/ui";

import { AppShell } from "../components/AppShell";

const THREADS = [
  { id: "t1", from: "Inês", stay: "Sunlit loft above the river", preview: "The lockbox code is 4821 — see you on the 18th!", unread: true },
  { id: "t2", from: "Marta", stay: "Cliff house with an ocean deck", preview: "Thank you for staying with us. Leave a review?", unread: true },
  { id: "t3", from: "Seavora", stay: "Account", preview: "Your refund for SV-46550 was sent.", unread: false },
];

export function InboxPage({ loading }: { loading: boolean }) {
  return (
    <AppShell unread={2}>
      <h1>Inbox</h1>
      <div className="inbox">
        <ul className="threads">
          {loading
            ? [0, 1, 2].map((index) => <Skeleton key={index} variant="pulse" height="16" />)
            : THREADS.map((thread) => (
                <li key={thread.id} className="thread">
                  <Avatar.Root size="md" variant="subtle" colorPalette="teal">
                    <Avatar.Fallback>{thread.from[0]}</Avatar.Fallback>
                  </Avatar.Root>
                  <div>
                    <strong>{thread.from}</strong> · {thread.stay}
                    <p>{thread.preview}</p>
                  </div>
                  {thread.unread ? (
                    <Badge size="xs" variant="solid" colorPalette="teal">
                      New
                    </Badge>
                  ) : null}
                </li>
              ))}
        </ul>
        <section className="conversation">
          <Textarea size="md" variant="subtle" placeholder="Write a message" />
          <Button size="md" colorPalette="teal">
            Send
          </Button>
        </section>
      </div>
    </AppShell>
  );
}
