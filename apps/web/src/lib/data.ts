export interface Stay {
  id: string;
  title: string;
  place: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  host: { name: string; avatar: string; superhost: boolean };
  tags: string[];
  image: string;
}

export const STAYS: Stay[] = [
  {
    id: "lisbon-alfama-loft",
    title: "Sunlit loft above the river",
    place: "Alfama, Lisbon",
    pricePerNight: 148,
    rating: 4.92,
    reviews: 318,
    host: { name: "Inês", avatar: "/avatars/ines.webp", superhost: true },
    tags: ["River view", "Self check-in"],
    image: "/stays/lisbon-loft.webp",
  },
  {
    id: "porto-ribeira-studio",
    title: "Tiled studio by the Ribeira",
    place: "Ribeira, Porto",
    pricePerNight: 96,
    rating: 4.81,
    reviews: 204,
    host: { name: "Rui", avatar: "/avatars/rui.webp", superhost: false },
    tags: ["Walkable", "Fast wifi"],
    image: "/stays/porto-studio.webp",
  },
  {
    id: "madeira-cliff-house",
    title: "Cliff house with an ocean deck",
    place: "Calheta, Madeira",
    pricePerNight: 212,
    rating: 4.97,
    reviews: 96,
    host: { name: "Marta", avatar: "/avatars/marta.webp", superhost: true },
    tags: ["Ocean view", "Pool"],
    image: "/stays/madeira-house.webp",
  },
];

export type TripStatus = "upcoming" | "in-progress" | "completed" | "cancelled";

export interface Trip {
  id: string;
  stay: string;
  place: string;
  from: string;
  to: string;
  guests: number;
  total: number;
  status: TripStatus;
}

export const TRIPS: Trip[] = [
  { id: "SV-48213", stay: "Sunlit loft above the river", place: "Lisbon", from: "2026-12-18", to: "2026-12-23", guests: 2, total: 740, status: "upcoming" },
  { id: "SV-47106", stay: "Cliff house with an ocean deck", place: "Madeira", from: "2026-10-02", to: "2026-10-09", guests: 4, total: 1484, status: "completed" },
  { id: "SV-46550", stay: "Tiled studio by the Ribeira", place: "Porto", from: "2026-08-11", to: "2026-08-14", guests: 1, total: 288, status: "cancelled" },
];
