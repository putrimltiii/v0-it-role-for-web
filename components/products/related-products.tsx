import { ProductCard } from "./product-card"
import type { Product } from "@/lib/data/products"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="px-6 py-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            You may also like
          </span>
          <h2 className="mt-4 font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Related Products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
