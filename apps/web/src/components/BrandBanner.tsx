/**
 * Баннер акции.
 *
 * Цвета и отступы прописаны числами мимо токенов, а иконка вставлена инлайном вместо той, что
 * лежит в библиотеке. Так выглядит эрозия дизайн-системы в реальном коде.
 */
export function BrandBanner() {
  return (
    <div style={{ background: "#2C3E8F", color: "#FFFFFF", padding: "14px 18px", borderRadius: 6 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span style={{ marginLeft: 8, fontSize: 14 }}>Годовая подписка со скидкой 20%</span>
    </div>
  );
}
