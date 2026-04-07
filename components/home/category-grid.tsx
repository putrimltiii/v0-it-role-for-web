import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Tops",
    description: "T-Shirts, Hoodies, Kemeja",
    href: "/products?category=tops",
    image: "/images/category-tops.jpg",
  },
  {
    name: "Bottoms",
    description: "Jogger, Cargo, Jeans",
    href: "/products?category=bottoms",
    image: "/images/category-bottoms.jpg",
  },
  {
    name: "Outerwear",
    description: "Jaket, Bomber, Varsity",
    href: "/products?category=outerwear",
    image: "/images/category-outerwear.jpg",
  },
  {
    name: "Dress",
    description: "A-line, Maxi, Midi",
    href: "/products?category=dress",
    image: "/images/category-dress.jpg",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Browse by
          </span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden bg-card"
            >
              {/* Category Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <span className="mt-4 text-xs tracking-wider uppercase text-foreground opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
