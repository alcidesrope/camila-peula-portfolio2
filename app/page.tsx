import type { Project } from "@/components/project-grid"
import Image from "next/image"
import Link from "next/link"

// Featured projects from different categories
const featuredProjects: (Project & { categoryPath: string })[] = [
  {
    id: "1",
    title: "Campaña Verano 2023",
    category: "publicidad",
    categoryPath: "publicidad",
    thumbnail: "/images/home/test_grande.jpg",
    slug: "campana-verano-2023",
    miniDescription: "Dirección de arte para campaña publicitaria de temporada",
  },
  {
    id: "2",
    title: "Película Drama",
    category: "peliculas",
    categoryPath: "peliculas",
    thumbnail: "/images/home/test_grande2.jpg",
    slug: "pelicula-drama",
    miniDescription: "Diseño de vestuario y dirección artística para largometraje",
  },
  {
    id: "3",
    title: "Serie Drama",
    category: "series",
    categoryPath: "series",
    thumbnail: "/images/home/test_grande3.jpg",
    slug: "serie-drama",
    miniDescription: "Concepto visual y dirección de arte para serie de televisión",
  },
]

export default function Home() {
  return (
    <div className="w-full px-0">
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

