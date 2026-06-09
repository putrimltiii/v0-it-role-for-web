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
  // ===== KAOS (10 produk) =====
  {
    id: "1",
    name: "Kaos Basic Polos Premium",
    slug: "kaos-basic-polos-premium",
    price: 50000,
    originalPrice: null,
    description: "Kaos polos basic dengan bahan cotton combed 30s yang lembut dan adem. Cocok untuk aktivitas sehari-hari dengan tampilan simpel dan elegan.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-1.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 100,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "Kaos Oversize Street",
    slug: "kaos-oversize-street",
    price: 50000,
    originalPrice: null,
    description: "Kaos oversize dengan potongan longgar dan bahan cotton combed 30s. Gaya streetwear yang santai dan stylish untuk tampilan kasual.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-2.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 80,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "3",
    name: "Kaos Polo Premium",
    slug: "kaos-polo-premium",
    price: 100000,
    originalPrice: null,
    description: "Kaos polo dengan bahan lacoste premium yang rapi dan nyaman. Cocok untuk tampilan smart casual di berbagai kesempatan.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-3.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 60,
    rating: 4.9,
    reviewCount: 76,
  },
  {
    id: "4",
    name: "Kaos Henley Premium",
    slug: "kaos-henley-premium",
    price: 100000,
    originalPrice: null,
    description: "Kaos henley dengan bahan cotton pique premium dan detail kancing di bagian depan. Tampilan maskulin yang stylish dan nyaman.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-4.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: true,
    stock: 55,
    rating: 4.8,
    reviewCount: 65,
  },
  {
    id: "5",
    name: "Kaos Crewneck Basic",
    slug: "kaos-crewneck-basic",
    price: 50000,
    originalPrice: null,
    description: "Kaos crewneck dengan leher bulat dan bahan cotton fleece yang hangat. Pilihan tepat untuk tampilan kasual yang nyaman.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-5.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 90,
    rating: 4.6,
    reviewCount: 112,
  },
  {
    id: "6",
    name: "Kaos Raglan Street",
    slug: "kaos-raglan-street",
    price: 50000,
    originalPrice: null,
    description: "Kaos raglan dengan detail lengan kontras dan bahan cotton combed 30s. Tampilan sporty yang cocok untuk gaya streetwear.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-6.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: false,
    stock: 75,
    rating: 4.5,
    reviewCount: 87,
  },
  {
    id: "7",
    name: "Kaos Linen Premium",
    slug: "kaos-linen-premium",
    price: 100000,
    originalPrice: null,
    description: "Kaos berbahan linen premium yang adem dan breathable. Sempurna untuk cuaca panas dengan tampilan yang tetap rapi dan stylish.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-7.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 45,
    rating: 4.9,
    reviewCount: 54,
  },
  {
    id: "8",
    name: "Kaos Pique Premium",
    slug: "kaos-pique-premium",
    price: 100000,
    originalPrice: null,
    description: "Kaos berbahan pique cotton premium dengan tekstur halus. Memberikan tampilan yang lebih formal namun tetap nyaman dipakai.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-8.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 50,
    rating: 4.7,
    reviewCount: 43,
  },
  {
    id: "9",
    name: "Kaos V-Neck Basic",
    slug: "kaos-vneck-basic",
    price: 50000,
    originalPrice: null,
    description: "Kaos v-neck dengan potongan slim fit dan bahan cotton combed 30s yang lembut. Tampilan simpel yang cocok dipadukan dengan berbagai outfit.",
    category: "kaos",
    subcategory: "basic",
    images: ["/images/product-9.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 85,
    rating: 4.6,
    reviewCount: 96,
  },
  {
    id: "10",
    name: "Kaos Waffle Premium",
    slug: "kaos-waffle-premium",
    price: 100000,
    originalPrice: null,
    description: "Kaos berbahan waffle knit premium dengan tekstur unik. Memberikan tampilan yang berbeda dan stylish untuk berbagai kesempatan.",
    category: "kaos",
    subcategory: "premium",
    images: ["/images/product-10.jpg"],
    sizes: tShirtSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 40,
    rating: 4.8,
    reviewCount: 38,
  },

  // ===== TOPI (5 produk) =====
  {
    id: "11",
    name: "Topi Baseball Basic",
    slug: "topi-baseball-basic",
    price: 50000,
    originalPrice: null,
    description: "Topi baseball dengan bahan canvas polos yang ringan dan nyaman. Adjustable strap di belakang untuk kenyamanan maksimal.",
    category: "topi",
    subcategory: "basic",
    images: ["/images/product-11.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 70,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "12",
    name: "Topi Bucket Premium",
    slug: "topi-bucket-premium",
    price: 100000,
    originalPrice: null,
    description: "Topi bucket dengan bahan premium dan jahitan rapi. Desain minimalis yang cocok untuk berbagai gaya outfit.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-12.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 55,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "13",
    name: "Topi Snapback Basic",
    slug: "topi-snapback-basic",
    price: 50000,
    originalPrice: null,
    description: "Topi snapback dengan panel datar dan bahan twill polos. Snapback closure untuk penyesuaian ukuran yang mudah.",
    category: "topi",
    subcategory: "basic",
    images: ["/images/product-1.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 60,
    rating: 4.5,
    reviewCount: 54,
  },
  {
    id: "14",
    name: "Topi Trucker Premium",
    slug: "topi-trucker-premium",
    price: 100000,
    originalPrice: null,
    description: "Topi trucker dengan bagian depan struktural dan mesh breathable di belakang. Bahan premium dengan jahitan presisi.",
    category: "topi",
    subcategory: "premium",
    images: ["/images/product-2.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 45,
    rating: 4.6,
    reviewCount: 43,
  },
  {
    id: "15",
    name: "Topi Dad Hat Basic",
    slug: "topi-dad-hat-basic",
    price: 50000,
    originalPrice: null,
    description: "Topi dad hat dengan siluet low profile yang kasual dan comfortable. Bahan cotton canvas polos yang ringan dan tahan lama.",
    category: "topi",
    subcategory: "basic",
    images: ["/images/product-3.jpg"],
    sizes: hatSizes,
    colors: allColors,
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 65,
    rating: 4.7,
    reviewCount: 72,
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
