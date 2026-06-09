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

  // ===== KAOS BASIC POLOS (5 produk) =====
  {
    id: "1",
    name: "Kaos Polos Cotton Combed 30s",
    slug: "kaos-polos-cotton-combed-30s",
    price: 50000,
    originalPrice: null,
    description: "Kaos polos basic dengan bahan cotton combed 30s yang lembut dan adem. Cocok untuk aktivitas sehari-hari dengan tampilan simpel dan minimalis.",
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
    name: "Kaos Polos Oversize Basic",
    slug: "kaos-polos-oversize-basic",
    price: 50000,
    originalPrice: null,
    description: "Kaos polos oversize dengan potongan boxy yang longgar dan santai. Bahan cotton combed 30s yang nyaman untuk tampilan kasual sehari-hari.",
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
    name: "Kaos Polos Slim Fit",
    slug: "kaos-polos-slim-fit",
    price: 50000,
    originalPrice: null,
    description: "Kaos polos dengan potongan slim fit yang mengikuti bentuk tubuh. Bahan cotton combed 30s yang stretchy dan nyaman dipakai seharian.",
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
    name: "Kaos Polos V-Neck Basic",
    slug: "kaos-polos-vneck-basic",
    price: 50000,
    originalPrice: null,
    description: "Kaos polos dengan kerah V yang elegan dan kasual. Bahan cotton combed 30s yang ringan dan breathable untuk kenyamanan sehari-hari.",
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
    name: "Kaos Polos Raglan Basic",
    slug: "kaos-polos-raglan-basic",
    price: 50000,
    originalPrice: null,
    description: "Kaos raglan polos dengan detail lengan kontras yang sporty. Bahan cotton combed 30s yang nyaman untuk tampilan kasual dan aktif.",
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

  // ===== KAOS PREMIUM (5 produk) =====
  {
    id: "6",
    name: "Kaos Premium Cotton Pique",
    slug: "kaos-premium-cotton-pique",
    price: 100000,
    originalPrice: null,
    description: "Kaos premium berbahan cotton pique dengan tekstur halus yang memberikan tampilan lebih rapi. Bahan tebal namun tetap adem dan nyaman.",
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
    price: 100000,
    originalPrice: null,
    description: "Kaos premium berbahan linen blend yang adem dan breathable. Tampilan natural dan stylish cocok untuk cuaca panas maupun formal casual.",
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
    price: 100000,
    originalPrice: null,
    description: "Kaos dengan motif tie dye yang unik dan stylish. Setiap kaos memiliki pola berbeda sehingga eksklusif dan tidak ada yang sama persis.",
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
    price: 100000,
    originalPrice: null,
    description: "Kaos dengan motif garis-garis (stripe) yang klasik dan timeless. Bahan cotton premium yang nyaman dengan jahitan rapi dan tahan lama.",
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
    description: "Kaos premium dengan desain graphic art eksklusif hasil kolaborasi dengan seniman lokal. Bahan cotton heavy weight 220 gsm dengan print berkualitas tinggi.",
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

  // ===== TOPI (5 produk) =====
  {
    id: "11",
    name: "Topi Baseball Polos Basic",
    slug: "topi-baseball-polos-basic",
    price: 50000,
    originalPrice: null,
    description: "Topi baseball polos dengan bahan canvas yang ringan dan tahan lama. Adjustable strap di belakang untuk kenyamanan semua ukuran kepala.",
    category: "topi",
    subcategory: "basic",
    images: ["/images/product-11.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: true,
    stock: 80,
    rating: 4.6,
    reviewCount: 134,
  },
  {
    id: "12",
    name: "Topi Bucket Polos Premium",
    slug: "topi-bucket-polos-premium",
    price: 100000,
    originalPrice: null,
    description: "Topi bucket dengan bahan premium canvas tebal dan jahitan presisi. Desain minimalis polos yang cocok untuk berbagai gaya outfit kasual maupun streetwear.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-12.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 65,
    rating: 4.8,
    reviewCount: 98,
  },
  {
    id: "13",
    name: "Topi Snapback Logo Embroidery",
    slug: "topi-snapback-logo-embroidery",
    price: 100000,
    originalPrice: null,
    description: "Topi snapback dengan panel datar dan logo embroidery eksklusif di bagian depan. Bahan twill premium dengan snapback closure yang kuat dan presisi.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-1.jpg"],
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
    reviewCount: 76,
  },
  {
    id: "14",
    name: "Topi Dad Hat Motif Patch",
    slug: "topi-dad-hat-motif-patch",
    price: 100000,
    originalPrice: null,
    description: "Topi dad hat low profile dengan detail patch motif yang unik di bagian depan. Bahan cotton canvas premium dengan metal buckle strap yang adjustable.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-2.jpg"],
    sizes: hatSizes,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Beige", hex: "#d4b896" },
      { name: "Pink", hex: "#f4a7b9" },
      { name: "White", hex: "#ffffff" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: false,
    stock: 45,
    rating: 4.8,
    reviewCount: 58,
  },
  {
    id: "15",
    name: "Topi Trucker Mesh Full Print",
    slug: "topi-trucker-mesh-full-print",
    price: 100000,
    originalPrice: null,
    description: "Topi trucker premium dengan bagian depan full print motif eksklusif dan mesh breathable di belakang. Edisi terbatas dengan desain kolaborasi seniman lokal.",
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
    stock: 30,
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