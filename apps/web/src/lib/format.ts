export function formatPrice(amount: number, currency = "EUR"): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
}

export function formatDates(from: string, to: string): string {
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" };
  return `${new Date(from).toLocaleDateString("en-GB", options)} – ${new Date(to).toLocaleDateString("en-GB", options)}`;
}

export function nights(from: string, to: string): number {
  return Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86_400_000);
}
