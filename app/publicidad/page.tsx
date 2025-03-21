import type { Project } from "@/components/project-grid"
import Image from "next/image"
import Link from "next/link"

// Featured projects from different categories
const featuredProjects: (Project & { categoryPath: string })[] = [
  {
    id: "1",
    title: "Hay excusas que matan",
    category: "publicidad",
    categoryPath: "publicidad",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "hay-excusas-que-matan",
    miniDescription: "Dirección de arte para campaña",
  },
  {
    id: "2",
    title: "Película Drama",
    category: "peliculas",
    categoryPath: "peliculas",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "pelicula-drama",
    miniDescription: "Diseño de vestuario y dirección artística para largometraje",
  },
  {
    id: "3",
    title: "Serie Drama",
    category: "series",
    categoryPath: "series",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "serie-drama",
    miniDescription: "Concepto visual y dirección de arte para serie de televisión",
  },
  {
    id: "4",
    title: "Cortometraje Experimental",
    category: "cortometrajes",
    categoryPath: "cortometrajes",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "cortometraje-experimental",
    miniDescription: "Propuesta estética innovadora para cortometraje",
  },
  {
    id: "5",
    title: "Videoclip Artista A",
    category: "videoclips",
    categoryPath: "videoclips",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "videoclip-artista-a",
    miniDescription: "Dirección artística y concepto visual para videoclip musical",
  },
]

export default function Home() {
  return (
    <div className="w-full px-0 py-8">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Trabajos Destacados</h1>
      </div>

      <div className="w-full">
        {featuredProjects.map((project) => (
          <Link
            key={`${project.category}-${project.id}`}
            href={`/${project.categoryPath}/${project.slug}`}
            className="group block w-full"
          >
            <div className="overflow-hidden w-full relative">
              <div className="aspect-[21/9] w-full relative">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-white text-xl md:text-2xl font-medium">{project.title}</h3>
                    {project.miniDescription && (
                      <p className="text-white/90 mt-2 max-w-2xl mx-auto">{project.miniDescription}</p>
                    )}
                    <p className="text-white/80 text-sm mt-2">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

