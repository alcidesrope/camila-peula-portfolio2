import ProjectGrid, { type Project } from "@/components/project-grid"

// This would typically come from a CMS or API
const projects: Project[] = [
  {
    id: "1",
    title: "Serie Drama",
    category: "series",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "serie-drama",
    miniDescription: "Concepto visual y dirección de arte para serie de televisión",
  },
  {
    id: "2",
    title: "Serie Comedia",
    category: "series",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "serie-comedia",
    miniDescription: "Diseño de vestuario y dirección artística para serie de comedia",
  },
]

export default function SeriesPage() {
  return (
    <div className="w-full px-0 py-8">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Series</h1>
      </div>
      <ProjectGrid projects={projects} category="series" />
    </div>
  )
}

