import { useState } from "react";
import { Chip, Input, spacing } from "@demo/ui";

/** Ввод тегов через Enter. */
export function TagInput({ tags, onChange }: { tags: string[]; onChange: (tags: string[]) => void }) {
  const [draft, setDraft] = useState("");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: spacing.xs, alignItems: "center" }}>
      {tags.map((tag) => (
        <Chip key={tag} tone="brand" size="sm" variant="outline" onRemove={() => onChange(tags.filter((known) => known !== tag))}>
          {tag}
        </Chip>
      ))}
      <Input placeholder="Добавить тег" size="sm" value={draft} onChange={setDraft} />
    </div>
  );
}
