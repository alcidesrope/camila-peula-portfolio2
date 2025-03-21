import ProjectGrid, { type Project } from "@/components/project-grid"

// This would typically come from a CMS or API
const projects: Project[] = [
  {
    id: "1",
    title: "Cortometraje Experimental",
    category: "cortometrajes",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "cortometraje-experimental",
    miniDescription: "Propuesta estética innovadora para cortometraje",
  },
  {
    id: "2",
    title: "Cortometraje Drama",
    category: "cortometrajes",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "cortometraje-drama",
    miniDescription: "Dirección de arte para cortometraje dramático",
  },
  {
    id: "3",
    title: "Cortometraje Comedia",
    category: "cortometrajes",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "cortometraje-comedia",
    miniDescription: "Concepto visual para cortometraje de comedia",
  },
]

export default function CortometrajesPage() {
  return (
    <div className="w-full px-0 py-8">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Cortometrajes</h1>
      </div>
      <ProjectGrid projects={projects} category="cortometrajes" />
    </div>
  )
}

