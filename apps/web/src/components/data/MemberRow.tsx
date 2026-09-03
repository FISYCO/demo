import { Avatar, Chip, Menu, Switch, IconButton, color, fontSize, spacing } from "@demo/ui";

import { StatusDot } from "../legacy/StatusDot";

export interface Member {
  id: string;
  name: string;
  email: string;
  role: "owner" | "admin" | "member" | "guest";
  presence: "online" | "away" | "offline";
  active: boolean;
}

const ROLE_TONE = { owner: "brand", admin: "success", member: "neutral", guest: "warning" } as const;

/** Строка участника в списке команды. */
export function MemberRow({ member, onToggle }: { member: Member; onToggle: (active: boolean) => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: spacing.md, padding: `${spacing.sm}px 0`, borderBottom: `1px solid ${color.border}` }}>
      <Avatar name={member.name} size="md" />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: fontSize.md, color: color.text, display: "flex", alignItems: "center", gap: spacing.xs }}>
          <StatusDot status={member.presence} />
          {member.name}
        </div>
        <div style={{ fontSize: fontSize.xs, color: color.textMuted }}>{member.email}</div>
      </div>
      <Chip tone={ROLE_TONE[member.role]} size="sm" variant={member.role === "guest" ? "outline" : "solid"}>
        {member.role}
      </Chip>
      <Switch checked={member.active} size="sm" onChange={onToggle} disabled={member.role === "owner"} />
      <Menu.Root
        size="sm"
        placement="bottom-end"
        trigger={
          <IconButton label="Действия" size="sm" variant="ghost">
            ⋯
          </IconButton>
        }
      >
        <Menu.Item>Сменить роль</Menu.Item>
        <Menu.Item disabled={member.role === "owner"} danger>
          Удалить из команды
        </Menu.Item>
      </Menu.Root>
    </div>
  );
}
