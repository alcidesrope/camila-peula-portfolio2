import ProjectDetail from "@/components/project-detail"

// This would typically come from a CMS or API based on the slug
const getProjectData = (slug: string) => {
  // Mock data - in a real app, this would fetch from an API or CMS
  const projects = {
    "serie-drama": {
      title: "Serie Drama",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Una serie dramática con una dirección de arte que evoluciona a lo largo de las temporadas, reflejando el desarrollo de los personajes y la trama.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director X" },
        { role: "Fotografía", name: "Fotógrafo Y" },
      ],
      year: "2023",
      client: "Plataforma Z",
    },
    "serie-comedia": {
      title: "Serie Comedia",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      flyerImage: "/placeholder.svg?height=1200&width=1920",
      description:
        "Una serie de comedia con un diseño visual distintivo que complementa el humor y la personalidad de los personajes.",
      credits: [
        { role: "Dirección de Arte", name: "Camila Peula" },
        { role: "Dirección", name: "Director A" },
        { role: "Producción", name: "Productora B" },
      ],
      year: "2022",
      client: "Canal C",
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

