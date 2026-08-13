import { Product, UpcomingDrop, Capability } from "../types";

export const LOGO_HORIZONTAL = "/images/logo-horizontal.webp";
export const LOGO_FOOTER = "/images/logo-horizontal.webp";

export const HERO_SLIDES = [
  {
    id: "slide-1",
    eyebrow: "DIRECT FACTORY APPAREL MANUFACTURING / BANGLADESH",
    title: "PREMIUM APPAREL. BUILT WITH PURPOSE.",
    subtext:
      "From heavyweight T-shirts and polos to hoodies, jackets, and sweatshirts—Wolfon manufactures premium garments at scale for global streetwear brands and wholesalers.",
    bgImage: "/images/hero/slide-1.webp",
  },
  {
    id: "slide-2",
    eyebrow: "HEAVYWEIGHT FABRIC",
    title: "STRENGTH IN EVERY STITCH.",
    subtext:
      "Precision engineered cotton-blend clothing manufactured in Bangladesh with extreme structural durability and custom private label finishing.",
    bgImage: "/images/hero/slide-2.webp",
  },
  {
    id: "slide-3",
    eyebrow: "PRIVATE LABEL & B2B WHOLESALE SUPPLY",
    title: "SCALE YOUR VISION WITH WOLFON.",
    subtext:
      "Full-spectrum apparel manufacturing infrastructure, custom tech packs, and fabric swatches — built to support global labels, retail buyers, and emerging streetwear brands at every stage of production.",
    bgImage: "/images/hero/slide-3.webp",
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "cap-1",
    title: "WOLFON PRODUCT SUPPLY",
    description:
      "We provide products of our own brand Wolfon in bulk, crafted to our exacting quality standards.",
    iconName: "Package",
  },
  {
    id: "cap-2",
    title: "CUSTOMIZED PRODUCT SUPPLY",
    description:
      "We manufacture custom private-label garments for other brands, leveraging our Bangladeshi factory supply chain.",
    iconName: "Scissors",
  },
  {
    id: "cap-3",
    title: "RAW MATERIALS SUPPLY",
    description:
      "We supply high-grade combed cotton fabrics, knit blends, and raw textiles for apparel companies globally.",
    iconName: "Layers",
  },
];

export const DROP_SHOULDER_PRODUCTS: Product[] = [
  {
    id: "prod-black-drop",
    name: "BLACK DROP SHOULDER",
    category: "DROP SHOULDER T-SHIRTS",
    moq: "100 Pcs / Colorway",
    leadTime: "7 - 12 Business Days",
    sampleAvailable: true,
    tag: "MUST-HAVE",
    image: "/images/product/drop-shoulder-t/1.webp",
    description:
      "Engineered heavy-weight combed cotton drop shoulder t-shirt. Features reinforced double-needle collar stitching, pre-shrunk finish, and seamless shoulder drape.",
    gsm: 280,
    fabric: "95% Premium Combed Cotton, 5% Elastane",
    fit: "Boxy Oversized Drop Shoulder",
    customization: [
      "Screen Printing",
      "Puff Print",
      "Embroidery",
      "Woven Neck Labels",
      "Custom Polybag",
    ],
    colors: [
      { name: "Onyx Black", hex: "#121212" },
      { name: "Washed Charcoal", hex: "#2A2A2A" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "prod-coffee-drop",
    name: "COFFEE DROP SHOULDER",
    category: "DROP SHOULDER T-SHIRTS",
    moq: "100 Pcs / Colorway",
    leadTime: "7 - 12 Business Days",
    sampleAvailable: true,
    tag: "PREMIUM",
    image: "/images/product/drop-shoulder-t/2.webp",
    description:
      "Earth-tone coffee shade oversized staple crafted with custom reactive garment dye. Soft-touch brushed interior with high tensile ribbing and anti-pilling structure.",
    gsm: 280,
    fabric: "100% Organic Ring-Spun Cotton",
    fit: "Boxy Oversized Drop Shoulder",
    customization: [
      "Reactive Dyeing",
      "High-Density Screen Print",
      "Custom Branded Tags",
      "Polybag Packaging",
    ],
    colors: [
      { name: "Raw Coffee", hex: "#524337" },
      { name: "Mocha Tan", hex: "#8B7355" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "prod-grey-drop",
    name: "GREY DROP SHOULDER",
    category: "DROP SHOULDER T-SHIRTS",
    moq: "100 Pcs / Colorway",
    leadTime: "7 - 12 Business Days",
    sampleAvailable: true,
    tag: "VERSATILE",
    image: "/images/product/drop-shoulder-t/3.webp",
    description:
      "Heather neutral grey essential t-shirt. High color fastness, pre-shrunk, anti-pilling structure, and clean minimalist finish suitable for custom brand printing.",
    gsm: 280,
    fabric: "90% Cotton, 10% Polyester",
    fit: "Boxy Oversized Drop Shoulder",
    customization: [
      "Embroidery",
      "Discharge Printing",
      "Private Label Care Tags",
      "Custom Packaging",
    ],
    colors: [
      { name: "Concrete Grey", hex: "#7A7A7A" },
      { name: "Heather Silver", hex: "#C2C2C2" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "prod-white-drop",
    name: "WHITE DROP SHOULDER",
    category: "DROP SHOULDER T-SHIRTS",
    moq: "100 Pcs / Colorway",
    leadTime: "7 - 12 Business Days",
    sampleAvailable: true,
    tag: "ESSENTIAL",
    image: "/images/product/drop-shoulder-t/4.webp",
    description:
      "Stark optical white heavy-weight drop shoulder. Opaque dense knit preventing transparency under daylight, designed specifically for DTG and screen printing.",
    gsm: 280,
    fabric: "100% Heavy Premium Cotton",
    fit: "Boxy Oversized Drop Shoulder",
    customization: [
      "DTG Printing",
      "Screen Printing",
      "Hem Tags",
      "Custom Barcode Stickers",
    ],
    colors: [
      { name: "Stark White", hex: "#FFFFFF" },
      { name: "Off-White", hex: "#F0EFEA" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
];

export const UPCOMING_DROPS: UpcomingDrop[] = [
  {
    id: "drop-polo",
    title: "POLO SHIRTS",
    category: "ESSENTIAL APPAREL",
    image: "/images/product/polo/polo.webp",
    tag: "PRODUCTION READY",
    releaseDate: "BULK ORDERS OPEN",
  },
  // {
  //   id: "drop-seam",
  //   title: "DROPPED SEAM T-SHIRTS",
  //   category: "STREETWEAR",
  //   image:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBEmP5B1IoE1qsUUSbIpAqGryMbjKKnweRyNRKxxcso_-9BgAK41Kmxi_UvcW6_dlTKCgjwRGgmqfllGOEtyEHjBP8sZCRNYGcRkEUjvmxZnJfZWwE7jVxqreKGO2K1Kg3ng4NnNhQrPn3sW4jLfX8_nSJbrCeA7qE4xTEXgGe7tEL4lLzx0JHoeCEFF2L1t2SW2aNcvkq2JriW9Rk-IUXyv5irBUyDjzBVRzHVvObT04f-EXE7cBuE",
  //   tag: "PRODUCTION READY",
  //   releaseDate: "BULK ORDERS OPEN",
  // },
  {
    id: "drop-hoodie",
    title: "HOODIES",
    category: "HEAVYWEIGHT FLEECE",
    image: "/images/product/hoodies/hoodie-black.webp",
    tag: "DEVELOPMENT",
    releaseDate: "INQUIRE SPEC SHEET",
  },
  {
    id: "drop-jacket",
    title: "JACKETS",
    category: "OUTERWEAR",
    image: "/images/product/jacket/jacket.webp",
    tag: "DEVELOPMENT",
    releaseDate: "INQUIRE SPEC SHEET",
  },
  {
    id: "drop-sweatshirt",
    title: "SWEATSHIRTS",
    category: "HEAVYWEIGHT FLEECE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAX9cIc2W50AItLdnrTF67lSzpadHsyscnitFihVBMOMIem-Wk3REmvGrWz4i-ivl3utZmbaHQGXc0J9W_jS_ZsQJ0hRsqXMRoEdwvnAzCI1j4NXV-_nzdKjVU3v4K5GZvmTZkLxTVBIXqwCvh6QkgkH93QuFKQPBJUppSqRTkDSuwNiWYpQKBKcbuk1AF7QsuXBCJTNKtTlyTmDR9Q50sUMRMvryI-1lE9oXyKCjogEE0WbimbyA",
    tag: "DEVELOPMENT",
    releaseDate: "INQUIRE SPEC SHEET",
  },
];

export const ABOUT_STORY = {
  eyebrow: "ABOUT US / OUR STORY",
  headline: "STRENGTH IN EVERY STITCH.",
  p1: 'At Wolfon, we believe quality is built into every detail. Guided by our slogan, "Strength In Every Stitch," we create premium clothing designed for comfort, durability, and everyday wear.',
  p2: "Every Wolfon product is proudly manufactured in Bangladesh, one of the world's leading garment-producing countries. We carefully select premium fabrics and maintain strict quality standards throughout production.",
  p3: "Our goal is simple: to provide reliable, stylish, and comfortable clothing that offers excellent value and earns our customers' trust.",
  editorialImage: "/images/about_us.webp",
};

export const CONTACT_INFO = {
  headline: "SCALE YOUR VISION WITH WOLFON.",
  p1: "We partner with brands and retailers who refuse to compromise on quality. Our manufacturing process combines Bangladeshi craftsmanship with a brutalist design philosophy, delivering heavy-weight essentials built for the global market.",
  p2: "From custom private label production to raw material supply, we provide the infrastructure for your brand's growth. Let's build something that lasts.",
  contactPerson: "AHAD HOSSAIN",
  role: "Head of Business Development & Client Management",
  phone: "+49-176-57877318",
  email: "ahad@wolfonstyle.com",
  location: "Augsburg, Germany",
};
