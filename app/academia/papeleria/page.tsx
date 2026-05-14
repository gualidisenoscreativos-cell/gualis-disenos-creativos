export default function PaperiaCurso() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">📄 Cómo Empezar en Papelería Creativa</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-pink-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Duración</p>
              <p className="text-2xl font-bold text-pink-600">4 semanas</p>
            </div>
            <div className="bg-orange-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Nivel</p>
              <p className="text-2xl font-bold text-orange-600">Principiante</p>
            </div>
            <div className="bg-red-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Módulos</p>
              <p className="text-2xl font-bold text-red-600">6</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Qué aprenderás</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Seleccionar materiales de calidad a mejores precios</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Lista completa de proveedores recomendados 2026</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Diseñar archivos imprimibles profesionales</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Procesos de producción eficientes</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Modelos de negocio: venta digital, física, POD</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-600 mr-3 font-bold">✓</span>
              <span>Estrategia de monetización y escala</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Módulos del Curso</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 1: Materiales y Calidad</h3>
              <p className="text-gray-600">Tipos de papel, cartón, acabados y especificaciones</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 2: Proveedores 2026</h3>
              <p className="text-gray-600">Importadores, mayoristas y plataformas de compra</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 3: Diseño Imprimible</h3>
              <p className="text-gray-600">Especificaciones técnicas, formatos, resolución</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 4: Producción</h3>
              <p className="text-gray-600">Opciones: DIY, imprenta local, POD online</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 5: Venta Digital</h3>
              <p className="text-gray-600">Gumroad, Etsy, Shopify, comunidades</p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 6: Escala y Rentabilidad</h3>
              <p className="text-gray-600">De lado a negocio, márgenes y crecimiento</p>
            </div>
          </div>

          <div className="mt-8 bg-pink-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Incluye Descargables</h3>
            <p className="text-gray-700">Lista de proveedores, plantillas de diseño, checklist de inicio, lista de materiales</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition">
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
