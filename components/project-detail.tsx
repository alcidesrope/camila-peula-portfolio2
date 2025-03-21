import Image from "next/image"

interface ProjectDetailProps {
  title: string
  videoUrl: string
  flyerImage: string
  description: string
  credits: {
    role: string
    name: string
  }[]
  year: string
  client?: string
}

export default function ProjectDetail({
  title,
  videoUrl,
  flyerImage,
  description,
  credits,
  year,
  client,
}: ProjectDetailProps) {
  return (
    <div className="space-y-8">
      {/* Video - Full width */}
      <div className="w-full aspect-video relative">
        <iframe
          src={videoUrl}
          className="absolute inset-0 w-full h-full"
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Flyer Image - Full width */}
      <div className="w-full">
        <Image
          src={flyerImage || "/placeholder.svg"}
          alt={`${title} - Flyer`}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>

      {/* Project Information */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Sobre el proyecto</h2>
            <p className="text-lg">{description}</p>
          </div>

          <div>
            <div className="space-y-6">
              {client && (
                <div>
                  <h3 className="text-lg font-medium mb-2">Cliente</h3>
                  <p>{client}</p>
                </div>
              )}

              <div>
                <h3 className="text-lg font-medium mb-2">Año</h3>
                <p>{year}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Créditos</h3>
                <ul className="space-y-1">
                  {credits.map((credit, index) => (
                    <li key={index}>
                      <span className="font-medium">{credit.role}:</span> {credit.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

