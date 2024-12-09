import Tarjetas from "./Tarjetas";
function Main() {
    return (
      <main className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          {/* Sección 1 */}
          <section className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Tarjetas titulo="Consumo de agua" texto = "Obtenga información valiosa sobre sus pautas de consumo de agua y descubra formas de ahorrar." imagen = "/iconogota.png"/>
            <Tarjetas titulo ="Analisis Facturación" texto ="Analice sus facturas de servicios públicos a lo largo del tiempo y detecte tendencias que le ayuden a ahorrar dinero." imagen = "/iconofactura.png"/>
            <Tarjetas titulo = "Gestión Economica" texto ="Controle su consumo eléctrico en tiempo real e identifique los aparatos que consumen más energía." imagen="dineroicono.png"/>
          </section>
        </div>

      </main>
    );
  };
  
  export default Main;