export default function BrandingCurso() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">✨ Branding para Emprendedoras</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-purple-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Duración</p>
              <p className="text-2xl font-bold text-purple-600">4 semanas</p>
            </div>
            <div className="bg-blue-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Nivel</p>
              <p className="text-2xl font-bold text-blue-600">Principiante</p>
            </div>
            <div className="bg-pink-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Módulos</p>
              <p className="text-2xl font-bold text-pink-600">5</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Qué aprenderás</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-purple-600 mr-3 font-bold">✓</span>
              <span>Definir tu propuesta de valor única y diferenciadora</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3 font-bold">✓</span>
              <span>Crear una identidad visual coherente (logo, colores, tipografía)</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3 font-bold">✓</span>
              <span>Desarrollar tu voz y tono de comunicación</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3 font-bold">✓</span>
              <span>Estrategia de posicionamiento en redes sociales</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3 font-bold">✓</span>
              <span>Crear un manual de marca profesional</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Módulos del Curso</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 1: Fundamentos del Branding</h3>
              <p className="text-gray-600">Historia de marca, valores, misión y visión</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 2: Identidad Visual</h3>
              <p className="text-gray-600">Diseño de logo, paleta de colores, tipografía</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 3: Comunicación de Marca</h3>
              <p className="text-gray-600">Voz, tono y mensaje diferenciador</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 4: Presencia en Redes</h3>
              <p className="text-gray-600">Estrategia visual y consistencia</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 5: Manual de Marca</h3>
              <p className="text-gray-600">Crear tu guía de marca completa</p>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Herramientas Incluidas</h3>
            <p className="text-gray-700">Canva Pro, Adobe Express, Figma, Procreate</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition">
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
