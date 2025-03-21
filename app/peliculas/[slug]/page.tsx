import ProjectDetail from "@/components/project-detail"

// This would typically come from a CMS or API based on the slug
const getProjectData = (slug: string) => {
  // Mock data - in a real app, this would fetch from an API or CMS
  const projects = {
    "pelicula-drama": {
      title: "Película Drama",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Una película dramática que explora temas profundos y emocionales, con una dirección de arte que refleja la intensidad de la narrativa.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director X" },
        { role: "Fotografía", name: "Fotógrafo Y" },
      ],
      year: "2023",
      client: "Productora Z",
    },
    "pelicula-comedia": {
      title: "Película Comedia",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Una comedia ligera con un enfoque visual colorido y vibrante que complementa el tono humorístico de la historia.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director A" },
        { role: "Producción", name: "Productora B" },
      ],
      year: "2022",
    },
    "pelicula-accion": {
      title: "Película Acción",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Una película de acción con escenarios dinámicos y una estética visual que intensifica las secuencias de acción.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director C" },
        { role: "Efectos Visuales", name: "Estudio D" },
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

