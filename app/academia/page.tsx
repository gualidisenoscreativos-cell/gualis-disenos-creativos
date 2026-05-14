import Link from 'next/link';

const cursos = [
  {
    id: 'branding',
    titulo: 'Branding para Emprendedoras',
    descripcion: 'Aprende a construir una identidad visual única y estrategia de marca que conecte con tu audiencia.',
    duracion: '4 semanas',
    nivel: 'Principiante',
    icono: '✨',
    href: '/academia/branding',
  },
  {
    id: 'ventas-redes',
    titulo: 'Ventas en Redes Sociales',
    descripcion: 'Domina las estrategias más efectivas de 2026 para convertir seguidores en clientes.',
    duracion: '6 semanas',
    nivel: 'Intermedio',
    icono: '📱',
    href: '/academia/ventas-redes',
  },
  {
    id: 'finanzas',
    titulo: 'Finanzas para Emprendedoras',
    descripcion: 'Gestiona tus finanzas, presupuestos e inversión de forma inteligente y rentable.',
    duracion: '5 semanas',
    nivel: 'Principiante',
    icono: '💰',
    href: '/academia/finanzas',
  },
  {
    id: 'papeleria',
    titulo: 'Cómo Empezar en Papelería Creativa',
    descripcion: 'Guía completa: materiales, proveedores, diseños imprimibles y cómo monetizar.',
    duracion: '4 semanas',
    nivel: 'Principiante',
    icono: '📄',
    href: '/academia/papeleria',
  },
  {
    id: 'ia-design',
    titulo: 'Diseño Gráfico con IA',
    descripcion: 'Domina herramientas como Canva, Midjourney y más IA para crear diseños profesionales.',
    duracion: '6 semanas',
    nivel: 'Intermedio',
    icono: '🤖',
    href: '/academia/ia-design',
  },
];

export default function Academia() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Academia Guali</h1>
          <p className="text-xl opacity-90">Cursos creados para emprendedoras modernas que quieren crecer con IA y creatividad</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
                <div className="text-5xl mb-3">{curso.icono}</div>
                <h2 className="text-2xl font-bold text-white">{curso.titulo}</h2>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{curso.descripcion}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                    {curso.nivel}
                  </span>
                  <span className="text-gray-500">⏱️ {curso.duracion}</span>
                </div>

                <Link
                  href={curso.href}
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity mb-3"
                >
                  Ver Curso
                </Link>

                <a
                  href={`/cursos/${curso.id}.pdf`}
                  className="block w-full text-center border-2 border-purple-600 text-purple-600 font-bold py-2 rounded-lg hover:bg-purple-50 transition-colors"
                  download
                >
                  📥 Descargar PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-lg opacity-90 mb-8">
            Todos nuestros cursos incluyen contenido actualizado con las herramientas IA más modernas de 2026
          </p>
          <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
            Acceder a Academia
          </button>
        </div>
      </section>
    </main>
  );
}
