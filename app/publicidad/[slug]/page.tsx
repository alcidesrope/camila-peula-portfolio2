import ProjectDetail from "@/components/project-detail"

// This would typically come from a CMS or API based on the slug
const getProjectData = (slug: string) => {
  // Mock data - in a real app, this would fetch from an API or CMS
  const projects = {
    "campana-verano-2023": {
      title: "Campaña Verano 2023",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Campaña publicitaria para la temporada de verano 2023, destacando los nuevos productos de la marca con un enfoque fresco y vibrante que captura la esencia del verano.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director X" },
        { role: "Fotografía", name: "Fotógrafo Y" },
      ],
      year: "2023",
      client: "Marca Z",
    },
    "spot-televisivo-marca-x": {
      title: "Spot Televisivo Marca X",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Spot televisivo para Marca X, presentando su nueva línea de productos con un enfoque innovador y atractivo para el público objetivo.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director A" },
        { role: "Producción", name: "Productora B" },
      ],
      year: "2022",
      client: "Marca X",
    },
    "comercial-producto-y": {
      title: "Comercial Producto Y",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Comercial para el Producto Y, con un enfoque visual que destaca las características y beneficios del producto.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director C" },
        { role: "Fotografía", name: "Fotógrafo D" },
      ],
      year: "2022",
      client: "Empresa Y",
    },
    "campana-digital-z": {
      title: "Campaña Digital Z",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Campaña digital para la marca Z, con un enfoque visual moderno y dinámico adaptado a plataformas digitales.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director E" },
        { role: "Diseño Digital", name: "Diseñador F" },
      ],
      year: "2023",
      client: "Marca Z",
    },
  }

  // Type assertion to handle the dynamic key
  return projects[slug as keyof typeof projects] || null
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectData = getProjectData(params.slug)

  if (!projectData) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
        <p>El proyecto que estás buscando no existe o ha sido eliminado.</p>
      </div>
    )
  }

  return (
    <div className="w-full px-0">
      <ProjectDetail {...projectData} />
    </div>
  )
}

