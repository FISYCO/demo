/** Промо-баннер: картинка с внешнего хостинга, градиент числами, инлайновая звёздочка. */
export function HeroBanner({ title, cta }: { title: string; cta: string }) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: 24,
        padding: 28,
        borderRadius: 16,
        background: "linear-gradient(135deg, #1e2a78 0%, #2c3e8f 60%, #4f63c9 100%)",
        color: "#ffffff",
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: 26 }}>{title}</h2>
        <p style={{ color: "rgba(255, 255, 255, 0.78)", fontSize: 15 }}>Скидка действует до конца квартала.</p>
        <small style={{ color: "indigo.200", fontSize: 12 }}>Только для тарифа «Команда» и выше.</small>
        <button type="button" style={{ background: "#ffffff", color: "#2c3e8f", border: "none", borderRadius: 8, padding: "10px 16px", fontWeight: 600 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#f5b400" style={{ marginRight: 6 }}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {cta}
        </button>
      </div>
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692.png" alt="" style={{ width: "100%", borderRadius: 12 }} />
    </section>
  );
}
