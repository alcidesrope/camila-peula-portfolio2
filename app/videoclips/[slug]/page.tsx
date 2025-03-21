import ProjectDetail from "@/components/project-detail"

// This would typically come from a CMS or API based on the slug
const getProjectData = (slug: string) => {
  // Mock data - in a real app, this would fetch from an API or CMS
  const projects = {
    "videoclip-artista-a": {
      title: "Videoclip Artista A",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Un videoclip con una estética visual única que complementa la música y el estilo del artista, creando una experiencia inmersiva.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director X" },
        { role: "Fotografía", name: "Fotógrafo Y" },
      ],
      year: "2023",
      client: "Artista A",
    },
    "videoclip-banda-b": {
      title: "Videoclip Banda B",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Un videoclip para una banda de rock con una dirección de arte que captura la energía y la esencia de su música.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director A" },
        { role: "Producción", name: "Productora B" },
      ],
      year: "2022",
      client: "Banda B",
    },
    "videoclip-cantante-c": {
      title: "Videoclip Cantante C",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description: "Un videoclip con una narrativa visual potente que complementa la letra y el mensaje de la canción.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director C" },
        { role: "Coreografía", name: "Coreógrafo D" },
      ],
      year: "2021",
      client: "Cantante C",
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

