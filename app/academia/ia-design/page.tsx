export default function IADesignCurso() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">🤖 Diseño Gráfico con IA</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-indigo-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Duración</p>
              <p className="text-2xl font-bold text-indigo-600">6 semanas</p>
            </div>
            <div className="bg-purple-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Nivel</p>
              <p className="text-2xl font-bold text-purple-600">Intermedio</p>
            </div>
            <div className="bg-pink-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Módulos</p>
              <p className="text-2xl font-bold text-pink-600">7</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Qué aprenderás</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 font-bold">✓</span>
              <span>Dominar Canva Pro: plantillas, efectos y exportación</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 font-bold">✓</span>
              <span>Usar IA generativa: Midjourney, DALL-E, Ideogram</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 font-bold">✓</span>
              <span>Crear diseños profesionales en minutos con IA</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 font-bold">✓</span>
              <span>Automatización de diseños repetitivos</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 font-bold">✓</span>
              <span>Principios de diseño + IA = resultados profesionales</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-3 font-bold">✓</span>
              <span>Monetizar tus habilidades: venta de diseños y servicios</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Módulos del Curso</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 1: Fundamentos del Diseño</h3>
              <p className="text-gray-600">Color, tipografía, composición, equilibrio visual</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 2: Canva Pro Mastery</h3>
              <p className="text-gray-600">Todas las herramientas, efectos y capacidades 2026</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 3: Generación de Imágenes con IA</h3>
              <p className="text-gray-600">Midjourney, DALL-E, Ideogram, Replika</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 4: Edición Avanzada</h3>
              <p className="text-gray-600">Remove.bg, Upscayl, interfaces IA para edición</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 5: Automatización de Diseños</h3>
              <p className="text-gray-600">Procesos batch, variables, exportación masiva</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 6: Casos Prácticos</h3>
              <p className="text-gray-600">Redes sociales, branding, marketing, packaging</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 7: Monetización</h3>
              <p className="text-gray-600">Freelance, Fiverr, Gumroad, clientes propios</p>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Herramientas Incluidas</h3>
            <p className="text-gray-700">Canva Pro, Midjourney, DALL-E 3, Figma, Adobe Express, Adobe Firefly, Runway, Cleanup.pictures</p>
          </div>

          <div className="mt-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold text-lg mb-2">💡 Bonus</h3>
            <p className="text-gray-700">Prompts profesionales listos para usar, tutoriales en video, plantillas editables, comunidad de alumnos</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition">
            📥 Descargar PDF Completo
          </button>
          <button className="flex-1 bg-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-400 transition">
            ← Volver
          </button>
        </div>
      </div>
    </main>
  );
}
