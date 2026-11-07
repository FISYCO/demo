import { Button } from "@seavora/ui";

/** Баннер сезонной акции: пришёл из маркетинга целиком, вместе с картинкой и цветами. */
export function PromoBanner() {
  return (
    <section className="promo" style={{ background: "#FFC857", color: "#1F2933" }}>
      <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill="#0E5E6F" />
      </svg>
      <div>
        <h2>Winter sun, 20% off</h2>
        <p style={{ color: "gray.500" }}>Book a stay of five nights or more in Madeira or the Canaries before 31 December.</p>
      </div>
      <Button size="lg" colorPalette="teal">
        See winter deals
      </Button>
    </section>
  );
}
