import ProjectDetail from "@/components/project-detail"

// This would typically come from a CMS or API based on the slug
const getProjectData = (slug: string) => {
  // Mock data - in a real app, this would fetch from an API or CMS
  const projects = {
    "cortometraje-experimental": {
      title: "Cortometraje Experimental",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Un cortometraje experimental que desafía las convenciones visuales, con una dirección de arte innovadora y arriesgada.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director X" },
        { role: "Fotografía", name: "Fotógrafo Y" },
      ],
      year: "2023",
    },
    "cortometraje-drama": {
      title: "Cortometraje Drama",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Un cortometraje dramático con una estética visual minimalista que potencia la intensidad emocional de la historia.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director A" },
        { role: "Producción", name: "Productora B" },
      ],
      year: "2022",
    },
    "cortometraje-comedia": {
      title: "Cortometraje Comedia",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Un cortometraje de comedia con un diseño visual colorido y dinámico que complementa el tono humorístico.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director C" },
        { role: "Edición", name: "Editor D" },
      ],
      year: "2021",
    },
  }

  // Type assertion to handle the dynamic key
  return projects[slug as keyof typeof projects] || null
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectData = getProjectData(params.slug)

  if (!projectData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
        <p>El proyecto que estás buscando no existe o ha sido eliminado.</p>
      </div>
    )
  }

  return (
    <div className="w-full px-0 py-8">
      <ProjectDetail {...projectData} />
    </div>
  )
}

