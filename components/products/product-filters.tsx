"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { categories, subcategories, sortOptions } from "@/lib/data/products"
import { cn } from "@/lib/utils"

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get("category") || "all"
  const currentSort = searchParams.get("sort") || "newest"
  const isSale = searchParams.get("sale") === "true"

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== "all") {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Category filters */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
          Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => updateFilter("category", category.value)}
              className={cn(
                "px-4 py-2 text-sm border transition-colors",
                currentCategory === category.value
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border hover:border-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory filters */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
          Type
        </h3>
        <div className="flex flex-wrap gap-2">
          {subcategories.map((sub) => (
            <button
              key={sub.value}
              onClick={() => updateFilter("subcategory", sub.value)}
              className={cn(
                "px-3 py-1.5 text-xs border transition-colors",
                searchParams.get("subcategory") === sub.value
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              )}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sale filter */}
      <div>
        <button
          onClick={() => updateFilter("sale", isSale ? null : "true")}
          className={cn(
            "px-4 py-2 text-sm border transition-colors",
            isSale
              ? "bg-accent text-accent-foreground border-accent"
              : "bg-transparent text-foreground border-border hover:border-foreground"
          )}
        >
          On Sale
        </button>
      </div>

      {/* Sort */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
          Sort By
        </h3>
        <select
          value={currentSort}
          onChange={(e) => updateFilter("sort", e.target.value)}
          className="w-full bg-input border border-border px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Clear filters */}
      {(currentCategory !== "all" || searchParams.get("subcategory") || isSale) && (
        <button
          onClick={() => router.push("/products")}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}
