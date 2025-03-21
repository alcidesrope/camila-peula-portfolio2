import Image from "next/image"

export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Camila Peula</h1>

        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Camila Peula"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            Camila Peula es una destacada Directora de Arte y Vestuario con amplia experiencia en la industria
            audiovisual.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Trayectoria</h2>
          <p>
            Con más de X años de experiencia, Camila ha trabajado en diversos proyectos que abarcan desde publicidad y
            comerciales hasta películas, series, cortometrajes y videoclips.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Enfoque Creativo</h2>
          <p>
            Su enfoque se caracteriza por una meticulosa atención al detalle y una visión única que aporta profundidad
            visual a cada proyecto en el que participa.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Colaboraciones</h2>
          <p>
            A lo largo de su carrera, ha colaborado con reconocidos directores, productoras y marcas, contribuyendo
            significativamente al éxito visual de cada producción.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contacto</h2>
          <p>
            Email: camila@ejemplo.com
            <br />
            Instagram: @camilapeula
          </p>
        </div>
      </div>
    </div>
  )
}

