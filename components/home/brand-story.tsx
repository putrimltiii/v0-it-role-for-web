import Link from "next/link"
import { ArrowRight } from "lucide-react"

const features = [
  {
    title: "Premium Quality",
    description: "Menggunakan bahan cotton combed, linen, dan polyester premium untuk kenyamanan maksimal.",
  },
  {
    title: "Original Design",
    description: "Semua desain merupakan karya original tim kreatif UrbanWeave Indonesia.",
  },
  {
    title: "Size Inclusive",
    description: "Tersedia dalam ukuran XS hingga 3XL untuk semua bentuk tubuh.",
  },
  {
    title: "Fast Delivery",
    description: "Proses pengiriman cepat 1-2 hari kerja ke seluruh Indonesia.",
  },
]

export function BrandStory() {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              About Us
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">
              Fashion yang Mencerminkan Identitas Anak Muda Indonesia
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              UrbanWeave adalah brand fashion lokal Indonesia yang mengedepankan gaya urban streetwear 
              dengan kualitas premium namun tetap terjangkau. Nama &quot;UrbanWeave&quot; mencerminkan identitas brand: 
              &quot;Urban&quot; untuk gaya perkotaan yang dinamis dan modern, serta &quot;Weave&quot; yang berarti anyaman 
              atau tenun — melambangkan kualitas material yang terjalin dengan sempurna dalam setiap produk.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-8 text-sm tracking-wider uppercase text-foreground hover:text-muted-foreground transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border-l border-border pl-6">
                <h3 className="font-medium text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
