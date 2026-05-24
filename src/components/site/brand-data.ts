import threeByJoe from "@/assets/three-by-joe.jpg";
import threeByJoHeadline from "@/assets/three-by-jo-headline.jpg";
import threeByJoDiningGuest from "@/assets/three-by-jo-dining-guest.jpeg";
import threeByJoDiningTable from "@/assets/three-by-jo-dining-table.jpeg";
import threeByJoLemonWater from "@/assets/three-by-jo-lemon-water.jpeg";
import threeByJoLogoRose from "@/assets/three-by-jo-logo-rose.jpeg";
import threeByJoLounge from "@/assets/three-by-jo-lounge.jpeg";
import threeByJoPlateDrink from "@/assets/three-by-jo-plate-drink.jpeg";
import threeByJoPortrait from "@/assets/three-by-jo-portrait.jpeg";
import threeByJoRedDrink from "@/assets/three-by-jo-red-drink.jpeg";
import lounge from "@/assets/lounge.jpg";
import sweetShop from "@/assets/sweet-shop.jpg";
import bowling from "@/assets/bowling.jpg";
import games from "@/assets/games.jpg";
import cinema from "@/assets/cinema.jpg";
import holidayHomes from "@/assets/holiday-homes.jpg";
import artisanBakeryPhoto from "@/assets/artisan-bakery-photo.jpg";
import artisanBakeryLogo from "@/assets/logos/artisan-bakery.png";

export type BrandGalleryImage = {
  src: string;
  alt: string;
};

export type Brand = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  logo?: string;
  /** Logo has light/gold artwork on a black PNG */
  logoBlend?: boolean;
  /** Logo is a full photo/graphic with its own background */
  logoPhoto?: boolean;
  gallery?: BrandGalleryImage[];
  highlights?: string[];
};

export const brands: Brand[] = [
  {
    id: "three-by-joe",
    name: "Three by Jo",
    category: "Dining",
    tagline: "Modern. Seasonal. Considered.",
    description:
      "A warm restaurant for real people, real food and real laughter. Plates, drinks and rose-toned interiors come together for unhurried meals and good company.",
    image: threeByJoHeadline,
    logo: threeByJoLogoRose,
    logoPhoto: true,
    gallery: [
      { src: threeByJoHeadline, alt: "Three by Jo lounge headline wall" },
      { src: threeByJoDiningTable, alt: "Guest dining at a Three by Jo table" },
      { src: threeByJoDiningGuest, alt: "Guest dining at Three by Jo" },
      { src: threeByJoRedDrink, alt: "Red signature drink at Three by Jo" },
      { src: threeByJoPlateDrink, alt: "Plate and red drink at Three by Jo" },
      { src: threeByJoLemonWater, alt: "Iced lemon drink at Three by Jo" },
      { src: threeByJoPortrait, alt: "Guest seated at Three by Jo" },
      { src: threeByJoLounge, alt: "Pink lounge interior at Three by Jo" },
      { src: threeByJoLogoRose, alt: "Three by Jo rose brand artwork" },
      { src: threeByJoe, alt: "Three by Jo restaurant detail" },
    ],
    highlights: ["Restaurant bookings", "Signature drinks", "Private tables"],
  },
  {
    id: "lounge-215",
    name: "Lounge Two One Five",
    category: "Lounge",
    tagline: "Velvet, vinyl and very late.",
    description:
      "A stylish cocktail destination of low light, deep velvet and signature serves. A grown-up room for slow drinks, good company and softer hours.",
    image: lounge,
    highlights: ["Cocktail service", "Late lounge seating", "Private celebrations"],
  },
  {
    id: "sweet-shop",
    name: "Sweet Shop",
    category: "Sweets",
    tagline: "Confectionery, reimagined.",
    description:
      "A modern patisserie and confectionery — handmade chocolates, layered desserts and gifting-worthy creations from our pastry team.",
    image: sweetShop,
    highlights: ["Dessert counter", "Celebration gifting", "Seasonal sweets"],
  },
  {
    id: "artisan-bakery",
    name: "Artisan Bakery",
    category: "Bakery",
    tagline: "Baked with tradition. Crafted with care.",
    description:
      "A classic artisan bakery where time-honoured techniques meet premium ingredients — fresh bread, golden pastries and seasonal bakes made daily by our skilled bakers.",
    image: artisanBakeryPhoto,
    logo: artisanBakeryLogo,
    logoBlend: true,
    highlights: ["Daily bread", "Morning pastries", "Custom bakery orders"],
  },
  {
    id: "briar-lanes",
    name: "Briar Lanes",
    category: "Leisure",
    tagline: "Bowling, with character.",
    description:
      "A premium bowling hall styled in walnut and brass — competitive lanes, craft cocktails and a soundtrack that keeps the night moving.",
    image: bowling,
    highlights: ["Lane bookings", "Group events", "Food and drinks"],
  },
  {
    id: "games",
    name: "Games",
    category: "Entertainment",
    tagline: "Play, properly produced.",
    description:
      "An entertainment floor of arcade classics, modern cabinets and tournament screens — designed for friends, families and a little friendly rivalry.",
    image: games,
    highlights: ["Arcade play", "Group challenges", "Family sessions"],
  },
  {
    id: "road-house-cinema",
    name: "Road House & Cinema",
    category: "Cinema",
    tagline: "Big screen. Easy seats.",
    description:
      "A roadside picture house and diner — independent films, weekend matinees and the kind of menu you order without thinking.",
    image: cinema,
    highlights: ["Film screenings", "Roadhouse dining", "Private showings"],
  },
  {
    id: "boutique-holiday-homes",
    name: "Boutique Holiday Homes",
    category: "Stay",
    tagline: "Rest, with view.",
    description:
      "A small collection of design-led short stays in the countryside — linen sheets, slow mornings and the quiet you came looking for.",
    image: holidayHomes,
    highlights: ["Short stays", "Countryside views", "Design-led homes"],
  },
];
