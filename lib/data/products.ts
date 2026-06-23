export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice: number | null
  description: string
  category: string
  subcategory: string
  images: string[]
  sizes: string[]
  colors: { name: string; hex: string }[]
  isNew: boolean
  isSale: boolean
  isFeatured: boolean
  stock: number
  rating: number
  reviewCount: number
}

const allColors = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Beige", hex: "#d4b896" },
  { name: "White", hex: "#ffffff" },
  { name: "Army Green", hex: "#4b5320" },
  { name: "Pink", hex: "#f4a7b9" },
  { name: "Gray", hex: "#6b7280" },
  { name: "Navy", hex: "#1e3a5f" },
]

const tShirtSizes = ["M", "L", "XL", "XXL"]
const hatSizes = ["One Size"]

export const products: Product[] = [

  // ===== KAOS BASIC POLOS (5 produk) — Rp 50.000–65.000 =====
  {
    id: "1",
    name: "Kaos Polos Cotton Combed 30s",
    slug: "kaos-polos-cotton-combed-30s",
    price: 50000,
    originalPrice: null,
    description: "Kaos polos basic dengan bahan cotton combed 30s yang lembut dan adem. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-1.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: true,
    stock: 100,
    rating: 4.7,
    reviewCount: 210,
  },
  {
    id: "2",
    name: "Kaos Polos Oversize Cotton 30s",
    slug: "kaos-polos-oversize-cotton-30s",
    price: 55000,
    originalPrice: null,
    description: "Kaos polos oversize dengan potongan boxy dan bahan cotton combed 30s. Sedikit lebih tebal dari basic, cocok untuk tampilan kasual streetwear. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-2.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 90,
    rating: 4.6,
    reviewCount: 178,
  },
  {
    id: "3",
    name: "Kaos Polos Slim Fit Cotton 24s",
    slug: "kaos-polos-slim-fit-cotton-24s",
    price: 58000,
    originalPrice: null,
    description: "Kaos polos slim fit dengan bahan cotton combed 24s yang lebih tebal dan kokoh. Potongan mengikuti badan dengan jahitan rapi. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-3.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 85,
    rating: 4.5,
    reviewCount: 145,
  },
  {
    id: "4",
    name: "Kaos Polos V-Neck Cotton 24s",
    slug: "kaos-polos-vneck-cotton-24s",
    price: 60000,
    originalPrice: null,
    description: "Kaos polos v-neck dengan bahan cotton combed 24s yang lebih berat dan nyaman. Kerah V yang rapi cocok untuk tampilan semi-formal kasual. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-4.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 80,
    rating: 4.5,
    reviewCount: 132,
  },
  {
    id: "5",
    name: "Kaos Polos Raglan Cotton Fleece",
    slug: "kaos-polos-raglan-cotton-fleece",
    price: 65000,
    originalPrice: null,
    description: "Kaos raglan polos berbahan cotton fleece ringan dengan detail lengan warna kontras. Lebih hangat dan nyaman, cocok untuk cuaca sejuk. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-5.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: false,
    stock: 75,
    rating: 4.6,
    reviewCount: 98,
  },

  // ===== KAOS PREMIUM (5 produk) — Rp 70.000–100.000 =====
  {
    id: "6",
    name: "Kaos Premium Cotton Pique",
    slug: "kaos-premium-cotton-pique",
    price: 70000,
    originalPrice: null,
    description: "Kaos premium berbahan cotton pique dengan tekstur halus yang memberikan tampilan lebih rapi dan berkelas. Bahan tebal 220gsm namun tetap adem. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-6.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 60,
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: "7",
    name: "Kaos Premium Linen Blend",
    slug: "kaos-premium-linen-blend",
    price: 80000,
    originalPrice: null,
    description: "Kaos premium berbahan linen blend yang adem dan breathable. Tampilan natural dan stylish, cocok untuk cuaca panas. Bahan lebih premium dibanding cotton biasa. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-7.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 50,
    rating: 4.8,
    reviewCount: 65,
  },
  {
    id: "8",
    name: "Kaos Motif Tie Dye Premium",
    slug: "kaos-motif-tie-dye-premium",
    price: 85000,
    originalPrice: null,
    description: "Kaos premium dengan motif tie dye yang unik dan stylish. Setiap kaos memiliki pola berbeda — eksklusif dan tidak ada yang sama. Bahan cotton heavy weight 220gsm. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-8.jpg"],
    sizes: tShirtSizes,
    colors: [
      { name: "Blue Tie Dye", hex: "#4a90d9" },
      { name: "Pink Tie Dye", hex: "#f4a7b9" },
      { name: "Earth Tie Dye", hex: "#c4a77d" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 40,
    rating: 4.9,
    reviewCount: 54,
  },
  {
    id: "9",
    name: "Kaos Motif Stripe Premium",
    slug: "kaos-motif-stripe-premium",
    price: 90000,
    originalPrice: null,
    description: "Kaos dengan motif garis-garis (stripe) klasik dan timeless. Bahan cotton premium 240gsm dengan jahitan rapi dan tahan lama. Motif print berkualitas tinggi yang tidak mudah luntur. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-9.jpg"],
    sizes: tShirtSizes,
    colors: [
      { name: "Black White Stripe", hex: "#888888" },
      { name: "Navy White Stripe", hex: "#1e3a5f" },
      { name: "Green White Stripe", hex: "#4b5320" },
    ],
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 45,
    rating: 4.7,
    reviewCount: 72,
  },
  {
    id: "10",
    name: "Kaos Motif Graphic Art Premium",
    slug: "kaos-motif-graphic-art-premium",
    price: 100000,
    originalPrice: null,
    description: "Kaos premium dengan desain graphic art eksklusif kolaborasi seniman lokal. Bahan cotton heavy weight 240gsm dengan DTF print berkualitas tinggi, warna tajam dan tahan lama. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-10.jpg"],
    sizes: tShirtSizes,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 30,
    rating: 5.0,
    reviewCount: 43,
  },

  // ===== TOPI (5 produk) — Rp 40.000–75.000 =====
  {
    id: "11",
    name: "Topi Baseball Polos Canvas",
    slug: "topi-baseball-polos-canvas",
    price: 40000,
    originalPrice: null,
    description: "Topi baseball polos dengan bahan canvas ringan dan adjustable strap di belakang. Model klasik yang cocok untuk tampilan sehari-hari. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "topi",
    subcategory: "basic",
    images: ["/images/product-11.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: true,
    stock: 80,
    rating: 4.5,
    reviewCount: 134,
  },
  {
    id: "12",
    name: "Topi Dad Hat Cotton Polos",
    slug: "topi-dad-hat-cotton-polos",
    price: 50000,
    originalPrice: null,
    description: "Topi dad hat low profile dengan bahan cotton canvas yang lembut dan nyaman. Metal buckle strap adjustable, cocok untuk berbagai gaya kasual. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "topi",
    subcategory: "basic",
    images: ["/images/product-12.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 70,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "13",
    name: "Topi Bucket Premium Drill",
    slug: "topi-bucket-premium-drill",
    price: 58000,
    originalPrice: null,
    description: "Topi bucket dengan bahan drill premium yang lebih tebal dan kokoh. Jahitan presisi dengan desain minimalis polos yang timeless. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-1.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: false,
    stock: 60,
    rating: 4.8,
    reviewCount: 76,
  },
  {
    id: "14",
    name: "Topi Snapback Logo Embroidery",
    slug: "topi-snapback-logo-embroidery",
    price: 65000,
    originalPrice: null,
    description: "Topi snapback dengan panel datar struktural dan logo embroidery eksklusif. Bahan twill premium dengan snapback closure yang kuat. Tampilan streetwear yang bold dan stylish. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-2.jpg"],
    sizes: hatSizes,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Army Green", hex: "#4b5320" },
      { name: "Gray", hex: "#6b7280" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 55,
    rating: 4.9,
    reviewCount: 67,
  },
  {
    id: "15",
    name: "Topi Trucker Mesh Full Print",
    slug: "topi-trucker-mesh-full-print",
    price: 75000,
    originalPrice: null,
    description: "Topi trucker premium dengan bagian depan full print motif eksklusif dan mesh breathable di belakang. Edisi terbatas kolaborasi seniman lokal, bahan premium dengan print DTF berkualitas tinggi. Harga sudah include PPN, biaya admin, packing, dan ongkir.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-3.jpg"],
    sizes: hatSizes,
    colors: [
      { name: "Black Print", hex: "#1a1a1a" },
      { name: "White Print", hex: "#ffffff" },
      { name: "Navy Print", hex: "#1e3a5f" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 35,
    rating: 5.0,
    reviewCount: 34,
  },
]

export const categories = [
  { name: "All", value: "all" },
  { name: "Kaos", value: "kaos" },
  { name: "Topi", value: "topi" },
]

export const subcategories = [
  { name: "Basic", value: "basic" },
  { name: "Premium", value: "premium" },
]

export const sortOptions = [
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
  { name: "Best Selling", value: "best-selling" },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function filterProducts(options: {
  category?: string
  subcategory?: string
  sale?: boolean
  search?: string
  sort?: string
}): Product[] {
  let filtered = [...products]

  if (options.category && options.category !== "all") {
    filtered = filtered.filter((p) => p.category === options.category)
  }

  if (options.subcategory) {
    filtered = filtered.filter((p) => p.subcategory === options.subcategory)
  }

  if (options.sale) {
    filtered = filtered.filter((p) => p.isSale)
  }

  if (options.search) {
    const searchLower = options.search.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    )
  }

  switch (options.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price)
      break
    case "newest":
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      break
    case "best-selling":
      filtered.sort((a, b) => b.reviewCount - a.reviewCount)
      break
    default:
      break
  }

  return filtered
}