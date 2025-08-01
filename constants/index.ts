import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Modern Villa",
    image: "/villa.jpg",
    rating: 4.8,
    address: {
      city: "Kigali",
      country: "Rwanda",
    },
    description: "A beautiful modern villa with stunning views.",
    category: ["WiFi", "Parking", "Pool", "Kitchen"],
    price: 120,
    reviews: [
      {
        name: "Alice",
        avatar: "/avatar1.png",
        rating: 5,
        comment: "Amazing place! Loved every moment.",
      },
      {
        name: "Bob",
        avatar: "/avatar2.png",
        rating: 4,
        comment: "Very comfortable and clean.",
      },
    ],
  },
];
