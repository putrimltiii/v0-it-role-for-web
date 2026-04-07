import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PromoSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Promo 1 - Limited Edition */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-secondary overflow-hidden group">
            <Image
              src="/images/promo-limited.jpg"
              alt="Limited Edition Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs tracking-[0.3em] uppercase text-accent">
                Limited Edition
              </span>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-foreground max-w-xs">
                Exclusive Drops
              </h3>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
                Koleksi terbatas yang hanya tersedia untuk waktu singkat. 
                Jangan sampai kehabisan.
              </p>
              <Button asChild className="mt-6 w-fit bg-primary text-primary-foreground hover:bg-primary/90 px-6 text-xs tracking-wider uppercase">
                <Link href="/collections/limited">
                  Shop Limited Edition
                </Link>
              </Button>
            </div>
          </div>

          {/* Promo 2 - Sale */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-accent overflow-hidden group">
            <Image
              src="/images/promo-sale.jpg"
              alt="Sale Collection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-accent/70" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
              <span className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">
                End of Season
              </span>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-accent-foreground max-w-xs">
                Up to 50% Off
              </h3>
              <p className="mt-4 text-sm text-accent-foreground/80 max-w-xs leading-relaxed">
                Dapatkan diskon hingga 50% untuk koleksi pilihan. 
                Promo berlaku sampai stok habis.
              </p>
              <Button asChild className="mt-6 w-fit bg-accent-foreground text-accent hover:bg-accent-foreground/90 px-6 text-xs tracking-wider uppercase">
                <Link href="/products?sale=true">
                  Shop Sale
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
