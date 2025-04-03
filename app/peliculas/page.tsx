import ProjectGrid, { type Project } from "@/components/project-grid"

// This would typically come from a CMS or API
const projects: Project[] = [
  {
    id: "1",
    title: "Película Drama",
    category: "peliculas",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "pelicula-drama",
    miniDescription: "Diseño de vestuario y dirección artística para largometraje",
  },
  {
    id: "2",
    title: "Película Comedia",
    category: "peliculas",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "pelicula-comedia",
    miniDescription: "Concepto visual y dirección de arte para comedia",
  },
  {
    id: "3",
    title: "Película Acción",
    category: "peliculas",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "pelicula-accion",
    miniDescription: "Dirección artística para película de acción",
  },
]

export default function PeliculasPage() {
  return (
    <div className="w-full px-0">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Películas</h1>
      </div>
      <ProjectGrid projects={projects} category="peliculas" />
    </div>
  )
}

