export default function FinanzasCurso() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-green-600 mb-4">💰 Finanzas para Emprendedoras</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-green-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Duración</p>
              <p className="text-2xl font-bold text-green-600">5 semanas</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Nivel</p>
              <p className="text-2xl font-bold text-yellow-600">Principiante</p>
            </div>
            <div className="bg-pink-100 p-4 rounded text-center">
              <p className="text-sm text-gray-600">Módulos</p>
              <p className="text-2xl font-bold text-pink-600">5</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Qué aprenderás</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">✓</span>
              <span>Crear un presupuesto realista para tu negocio</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">✓</span>
              <span>Gestión de flujo de caja y proyecciones financieras</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">✓</span>
              <span>Impuestos, facturación y contabilidad básica</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">✓</span>
              <span>Inversión estratégica en tu negocio</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 font-bold">✓</span>
              <span>Rentabilidad, márgenes y pricing estratégico</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Módulos del Curso</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 1: Fundamentos Financieros</h3>
              <p className="text-gray-600">Ingresos, gastos, ganancias y punto de equilibrio</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 2: Presupuesto y Proyecciones</h3>
              <p className="text-gray-600">Planificación financiera para 12 meses</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 3: Impuestos y Legalidad</h3>
              <p className="text-gray-600">Facturación, retenciones, IVA, monotributo</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 4: Pricing y Rentabilidad</h3>
              <p className="text-gray-600">Definir precios que generen ganancia real</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4 py-2">
              <h3 className="font-bold text-lg">Módulo 5: Inversión Inteligente</h3>
              <p className="text-gray-600">Dónde invertir para crecer sin endeudarse</p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Herramientas Incluidas</h3>
            <p className="text-gray-700">Excel/Google Sheets, Wave, Zoho Books, planillas descargables</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
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
