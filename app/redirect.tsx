import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Camila Peula</h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Directora de Arte y Vestuario con experiencia en publicidad, cine, series, cortometrajes y videoclips.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard title="Publicidad" href="/publicidad" imageSrc="/placeholder.svg?height=600&width=800" />
        <CategoryCard title="Películas" href="/peliculas" imageSrc="/placeholder.svg?height=600&width=800" />
        <CategoryCard title="Series" href="/series" imageSrc="/placeholder.svg?height=600&width=800" />
        <CategoryCard title="Cortometrajes" href="/cortometrajes" imageSrc="/placeholder.svg?height=600&width=800" />
        <CategoryCard title="Videoclips" href="/videoclips" imageSrc="/placeholder.svg?height=600&width=800" />
        <CategoryCard title="Info" href="/info" imageSrc="/placeholder.svg?height=600&width=800" />
      </div>
    </div>
  )
}

function CategoryCard({ title, href, imageSrc }: { title: string; href: string; imageSrc: string }) {
  return (
    <Link href={href} className="group block overflow-hidden">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
          <h2 className="text-white text-xl font-medium">{title}</h2>
        </div>
      </div>
    </Link>
  )
}

