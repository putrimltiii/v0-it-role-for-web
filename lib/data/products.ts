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

export const products: Product[] = [
  {
    id: "1",
    name: "Urban Classic Hoodie",
    slug: "urban-classic-hoodie",
    price: 249000,
    originalPrice: 299000,
    description: "Hoodie klasik dengan bahan cotton fleece premium yang nyaman untuk aktivitas sehari-hari. Dilengkapi dengan kantong depan dan tali hoodie yang adjustable.",
    category: "men",
    subcategory: "tops",
    images: ["/images/product-1.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Gray", hex: "#6b7280" },
    ],
    isNew: true,
    isSale: true,
    isFeatured: true,
    stock: 50,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "Streetwear Cargo Pants",
    slug: "streetwear-cargo-pants",
    price: 199000,
    originalPrice: null,
    description: "Celana cargo dengan desain streetwear modern. Dilengkapi dengan multiple pockets dan adjustable waist untuk kenyamanan maksimal.",
    category: "men",
    subcategory: "bottoms",
    images: ["/images/product-2.jpg"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Khaki", hex: "#c4a77d" },
      { name: "Olive", hex: "#556b2f" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 35,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "3",
    name: "Essential Oversized Tee",
    slug: "essential-oversized-tee",
    price: 89000,
    originalPrice: 119000,
    description: "T-shirt oversized dengan bahan cotton combed 30s yang lembut dan adem. Cocok untuk gaya kasual sehari-hari.",
    category: "men",
    subcategory: "tops",
    images: ["/images/product-3.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Cream", hex: "#f5f5dc" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    isNew: false,
    isSale: true,
    isFeatured: true,
    stock: 100,
    rating: 4.9,
    reviewCount: 256,
  },
  {
    id: "4",
    name: "Bomber Jacket Premium",
    slug: "bomber-jacket-premium",
    price: 349000,
    originalPrice: null,
    description: "Jaket bomber premium dengan bahan parasut waterproof dan inner lining yang nyaman. Perfect untuk cuaca dingin.",
    category: "men",
    subcategory: "outerwear",
    images: ["/images/product-4.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Army Green", hex: "#4b5320" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 25,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "5",
    name: "Urban Jogger Pants",
    slug: "urban-jogger-pants",
    price: 179000,
    originalPrice: null,
    description: "Celana jogger dengan bahan katun stretch yang nyaman untuk berbagai aktivitas. Elastic waistband dengan tali adjustable.",
    category: "men",
    subcategory: "bottoms",
    images: ["/images/product-5.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Gray", hex: "#6b7280" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 60,
    rating: 4.6,
    reviewCount: 143,
  },
  {
    id: "6",
    name: "Minimalist Crewneck",
    slug: "minimalist-crewneck",
    price: 199000,
    originalPrice: 249000,
    description: "Crewneck sweater dengan desain minimalis dan bahan fleece premium. Cocok untuk layering atau dipakai sendiri.",
    category: "men",
    subcategory: "tops",
    images: ["/images/product-6.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Cream", hex: "#f5f5dc" },
      { name: "Sage", hex: "#9caf88" },
    ],
    isNew: false,
    isSale: true,
    isFeatured: true,
    stock: 40,
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: "7",
    name: "Flowy Midi Dress",
    slug: "flowy-midi-dress",
    price: 229000,
    originalPrice: null,
    description: "Dress midi dengan siluet A-line yang flowy dan feminine. Bahan rayon premium yang adem dan nyaman.",
    category: "women",
    subcategory: "dress",
    images: ["/images/product-7.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Dusty Pink", hex: "#d4a5a5" },
      { name: "Sage", hex: "#9caf88" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 30,
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "8",
    name: "Cropped Cardigan",
    slug: "cropped-cardigan",
    price: 189000,
    originalPrice: null,
    description: "Cardigan cropped dengan bahan knit yang lembut. Perfect untuk layering dengan dress atau high-waist pants.",
    category: "women",
    subcategory: "outerwear",
    images: ["/images/product-8.jpg"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Beige", hex: "#f5f5dc" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: false,
    stock: 35,
    rating: 4.6,
    reviewCount: 45,
  },
  {
    id: "9",
    name: "Wide Leg Palazzo Pants",
    slug: "wide-leg-palazzo-pants",
    price: 169000,
    originalPrice: 199000,
    description: "Celana palazzo dengan potongan wide leg yang elegan. Bahan crepe premium dengan elastic waistband.",
    category: "women",
    subcategory: "bottoms",
    images: ["/images/product-9.jpg"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Cream", hex: "#f5f5dc" },
      { name: "Brown", hex: "#8b4513" },
    ],
    isNew: false,
    isSale: true,
    isFeatured: true,
    stock: 45,
    rating: 4.8,
    reviewCount: 112,
  },
  {
    id: "10",
    name: "Satin Slip Dress",
    slug: "satin-slip-dress",
    price: 259000,
    originalPrice: null,
    description: "Slip dress dengan bahan satin premium yang jatuh sempurna di badan. Cocok untuk acara formal maupun casual dinner.",
    category: "women",
    subcategory: "dress",
    images: ["/images/product-10.jpg"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Burgundy", hex: "#722f37" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: true,
    stock: 20,
    rating: 4.9,
    reviewCount: 56,
  },
  {
    id: "11",
    name: "Urban Totebag",
    slug: "urban-totebag",
    price: 79000,
    originalPrice: null,
    description: "Totebag canvas premium dengan desain minimalis. Kapasitas besar cocok untuk kebutuhan sehari-hari.",
    category: "accessories",
    subcategory: "bags",
    images: ["/images/product-11.jpg"],
    sizes: ["One Size"],
    colors: [
      { name: "Natural", hex: "#f5f5dc" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    isNew: false,
    isSale: false,
    isFeatured: false,
    stock: 80,
    rating: 4.5,
    reviewCount: 189,
  },
  {
    id: "12",
    name: "Streetwear Cap",
    slug: "streetwear-cap",
    price: 89000,
    originalPrice: null,
    description: "Topi baseball dengan bahan canvas dan embroidery logo UrbanWeave. Adjustable strap untuk kenyamanan.",
    category: "accessories",
    subcategory: "hats",
    images: ["/images/product-12.jpg"],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#ffffff" },
      { name: "Navy", hex: "#1e3a5f" },
    ],
    isNew: true,
    isSale: false,
    isFeatured: false,
    stock: 70,
    rating: 4.4,
    reviewCount: 67,
  },
]

export const categories = [
  { name: "All", value: "all" },
  { name: "Men", value: "men" },
  { name: "Women", value: "women" },
  { name: "Accessories", value: "accessories" },
]

export const subcategories = [
  { name: "Tops", value: "tops" },
  { name: "Bottoms", value: "bottoms" },
  { name: "Outerwear", value: "outerwear" },
  { name: "Dress", value: "dress" },
  { name: "Bags", value: "bags" },
  { name: "Hats", value: "hats" },
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
