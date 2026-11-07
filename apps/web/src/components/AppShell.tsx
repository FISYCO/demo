import type { ReactNode } from "react";
import { Avatar, Badge, Button, Separator } from "@seavora/ui";

const NAV = [
  { href: "/", label: "Explore" },
  { href: "/trips", label: "Trips" },
  { href: "/inbox", label: "Inbox" },
  { href: "/host", label: "Hosting" },
];

export function AppShell({ children, unread = 0 }: { children: ReactNode; unread?: number }) {
  return (
    <div className="shell">
      <header className="shell-header">
        <a href="/" className="logo">
          Seavora
        </a>
        <nav>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
              {item.href === "/inbox" && unread > 0 ? (
                <Badge size="xs" variant="solid" colorPalette="teal">
                  {unread}
                </Badge>
              ) : null}
            </a>
          ))}
        </nav>
        <Button size="sm" variant="ghost">
          Become a host
        </Button>
        <Avatar.Root size="sm">
          <Avatar.Image src="/me.webp" alt="" />
          <Avatar.Fallback>ML</Avatar.Fallback>
        </Avatar.Root>
      </header>
      <Separator />
      <main>{children}</main>
    </div>
  );
}
