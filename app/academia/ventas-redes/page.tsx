export default function VentasRedesCurso() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">📱 Ventas en Redes Sociales</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Duración</p>
              <p className="text-2xl font-bold text-blue-600">6 semanas</p>
            </div>
            <div className="bg-green-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Nivel</p>
              <p className="text-2xl font-bold text-green-600">Intermedio</p>
            </div>
            <div className="bg-pink-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Módulos</p>
              <p className="text-2xl font-bold text-pink-600">6</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Qué aprenderás</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Estrategia de contenido que convierte en 2026</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Algoritmos de Instagram, TikTok, Facebook y LinkedIn</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Crear funnel de ventas en redes sociales</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Community management efectivo y automatización</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Publicidad pagada con ROI positivo</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 font-bold">✓</span>
              <span>Usar IA para crear contenido viral</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Módulos del Curso</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 1: Análisis de Plataformas 2026</h3>
              <p className="text-gray-600">Cambios en algoritmos y nuevas tendencias</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 2: Estrategia de Contenido</h3>
              <p className="text-gray-600">Pilares de contenido y calendario editorial</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 3: Funnel de Ventas Social</h3>
              <p className="text-gray-600">Conocimiento → Interés → Decisión → Compra</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 4: Publicidad Pagada</h3>
              <p className="text-gray-600">Meta Ads, TikTok Ads, LinkedIn Ads</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 5: IA y Automatización</h3>
              <p className="text-gray-600">ChatGPT, Jasper, Copy.AI para contenido</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 6: Analítica y Optimización</h3>
              <p className="text-gray-600">Métricas que importan y cómo mejorar</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Herramientas Incluidas</h3>
            <p className="text-gray-700">Meta Business Suite, Later, Buffer, Hootsuite, ChatGPT, Canva</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
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
