import Link from "next/link"
import Image from "next/image"

export type Project = {
  id: string
  title: string
  category: string
  thumbnail: string
  slug: string
  miniDescription?: string
}

interface ProjectGridProps {
  projects: Project[]
  category: string
}

export default function ProjectGrid({ projects, category }: ProjectGridProps) {
  return (
    <div className="w-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} category={category} />
      ))}
    </div>
  )
}

function ProjectCard({ project, category }: { project: Project; category: string }) {
  return (
    <Link href={`/${category}/${project.slug}`} className="group block w-full">
      <div className="overflow-hidden w-full relative">
        <div className="aspect-[21/9] w-full relative">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-white text-xl md:text-2xl font-medium">{project.title}</h3>
              {project.miniDescription && (
                <p className="text-white/90 mt-2 max-w-2xl mx-auto">{project.miniDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

