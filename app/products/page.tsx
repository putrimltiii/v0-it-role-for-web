import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCard } from "@/components/products/product-card"
import { ProductFilters } from "@/components/products/product-filters"
import { filterProducts } from "@/lib/data/products"

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string
    subcategory?: string
    sale?: string
    search?: string
    sort?: string
  }>
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const products = filterProducts({
    category: params.category,
    subcategory: params.subcategory,
    sale: params.sale === "true",
    search: params.search,
    sort: params.sort,
  })

  const pageTitle = params.sale === "true" 
    ? "Sale" 
    : params.category && params.category !== "all"
      ? params.category.charAt(0).toUpperCase() + params.category.slice(1)
      : "All Products"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        {/* Page header */}
        <div className="px-6 py-12 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              {pageTitle}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {products.length} {products.length === 1 ? "product" : "products"}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Filters sidebar */}
            <aside className="lg:col-span-1">
              <Suspense fallback={<div>Loading filters...</div>}>
                <ProductFilters />
              </Suspense>
            </aside>

            {/* Product grid */}
            <div className="lg:col-span-3">
              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    No products found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
