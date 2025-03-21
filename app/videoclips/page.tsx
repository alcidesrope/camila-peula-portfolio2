import ProjectGrid, { type Project } from "@/components/project-grid"

// This would typically come from a CMS or API
const projects: Project[] = [
  {
    id: "1",
    title: "Videoclip Artista A",
    category: "videoclips",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "videoclip-artista-a",
    miniDescription: "Dirección artística y concepto visual para videoclip musical",
  },
  {
    id: "2",
    title: "Videoclip Banda B",
    category: "videoclips",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "videoclip-banda-b",
    miniDescription: "Diseño de escenografía para videoclip de banda de rock",
  },
  {
    id: "3",
    title: "Videoclip Cantante C",
    category: "videoclips",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "videoclip-cantante-c",
    miniDescription: "Dirección de arte y vestuario para videoclip",
  },
]

export default function VideoclipsPage() {
  return (
    <div className="w-full px-0">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Videoclips</h1>
      </div>
      <ProjectGrid projects={projects} category="videoclips" />
    </div>
  )
}

