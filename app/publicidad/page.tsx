import ProjectGrid, { type Project } from "@/components/project-grid"

// This would typically come from a CMS or API
const projects: Project[] = [
  {
    id: "1",
    title: "Campaña Verano 2023",
    category: "publicidad",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "campana-verano-2023",
    miniDescription: "Dirección de arte para campaña publicitaria de temporada",
  },
  {
    id: "2",
    title: "Spot Televisivo Marca X",
    category: "publicidad",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "spot-televisivo-marca-x",
    miniDescription: "Concepto visual y dirección artística para spot de TV",
  },
  {
    id: "3",
    title: "Comercial Producto Y",
    category: "publicidad",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "comercial-producto-y",
    miniDescription: "Diseño de escenografía y dirección de arte para comercial",
  },
  {
    id: "4",
    title: "Campaña Digital Z",
    category: "publicidad",
    thumbnail: "/placeholder.svg?height=800&width=1600",
    slug: "campana-digital-z",
    miniDescription: "Dirección artística para campaña en redes sociales",
  },
]

export default function PublicidadPage() {
  return (
    <div className="w-full px-0">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Publicidad</h1>
      </div>
      <ProjectGrid projects={projects} category="publicidad" />
    </div>
  )
}

