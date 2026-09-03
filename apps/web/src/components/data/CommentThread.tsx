import { useState } from "react";
import { Avatar, Btn, Divider, Textarea, color, fontSize, spacing } from "@demo/ui";

import { formatDate } from "../../lib/format";

export interface Comment {
  id: string;
  author: string;
  text: string;
  at: string;
}

/** Обсуждение под объектом. */
export function CommentThread({ comments, onPost }: { comments: Comment[]; onPost: (text: string) => void }) {
  const [draft, setDraft] = useState("");
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} style={{ display: "flex", gap: spacing.md, padding: `${spacing.sm}px 0` }}>
          <Avatar name={comment.author} size="sm" />
          <div>
            <div style={{ fontSize: fontSize.sm, color: color.text }}>
              <b>{comment.author}</b> <span style={{ color: color.textMuted }}>{formatDate(comment.at)}</span>
            </div>
            <div style={{ fontSize: fontSize.md, color: color.text }}>{comment.text}</div>
          </div>
        </div>
      ))}
      <Divider />
      <Textarea rows={3} placeholder="Написать комментарий" value={draft} onChange={setDraft} />
      <div style={{ marginTop: spacing.sm }}>
        <Btn style="primary" size="sm" disabled={draft.trim().length === 0} onClick={() => onPost(draft)}>
          Отправить
        </Btn>
      </div>
    </div>
  );
}
