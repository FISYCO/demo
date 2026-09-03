import { Btn, Toast } from "@demo/ui";

/** Очередь уведомлений. Показывает не больше трёх. */
export interface ToastMessage {
  id: string;
  status: "info" | "success" | "warning" | "danger";
  title: string;
  description?: string;
}

export function ToastHost({ messages, onDismiss }: { messages: ToastMessage[]; onDismiss: (id: string) => void }) {
  return (
    <>
      {messages.slice(0, 3).map((message, index) => (
        <Toast
          key={message.id}
          status={message.status}
          placement={index === 0 ? "bottom-end" : "top-end"}
          title={message.title}
          description={message.description}
          onClose={() => onDismiss(message.id)}
          action={
            message.status === "danger" ? (
              <Btn style="transparent" size="xs">
                Повторить
              </Btn>
            ) : undefined
          }
        />
      ))}
    </>
  );
}
