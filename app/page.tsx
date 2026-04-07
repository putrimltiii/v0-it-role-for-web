import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { PromoSection } from "@/components/home/promo-section"
import { BrandStory } from "@/components/home/brand-story"
import { Testimonials } from "@/components/home/testimonials"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoSection />
      <BrandStory />
      <Testimonials />
      <Footer />
    </main>
  )
}
