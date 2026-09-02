import { Badge, Btn, Card, Input } from "@demo/ui";

/** Оформление заказа: самый нагруженный экран продукта. */
export function Checkout() {
  return (
    <Card title="Оформление">
      <Input placeholder="Промокод" size="md" />
      <Badge tone="success">Доставка бесплатна</Badge>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <Btn style="primary" size="lg">
          Оплатить
        </Btn>
        <Btn style="secondary" size="lg">
          Назад в корзину
        </Btn>
        {/* Размер `xs` есть в макете, но не объявлен в коде: вызов переживёт сборку, а вид будет
            не тот, что нарисовали. Ровно такие расхождения и ищет библиотекарь. */}
        <Btn style="transparent" size="xs">
          Отменить
        </Btn>
      </div>
    </Card>
  );
}
