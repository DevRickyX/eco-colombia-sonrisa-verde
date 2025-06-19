
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye } from "lucide-react";

const MisionVision = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Nuestra <span className="text-green-600">Misión y Visión</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conoce los principios que guían nuestro compromiso con el medio ambiente
            </p>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Transformar los residuos en oportunidades sostenibles para Colombia, ofreciendo 
                soluciones integrales de reciclaje que protejan el medio ambiente, generen valor 
                económico y contribuyan al desarrollo de comunidades más conscientes y responsables.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos comprometemos a ser líderes en innovación ambiental, trabajando de la mano 
                con empresas, gobiernos y ciudadanos para construir un futuro más verde y próspero 
                para las próximas generaciones.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Persona sosteniendo bombilla ecológica"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visión Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Vista aérea de montañas verdes"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ser la empresa líder en gestión integral de residuos en Colombia para el año 2030, 
                reconocida por nuestra excelencia operacional, innovación tecnológica y compromiso 
                inquebrantable con la sostenibilidad ambiental.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aspiramos a ser el referente regional en economía circular, contribuyendo 
                significativamente a la reducción de la huella de carbono del país y creando 
                un impacto positivo medible en las comunidades donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Destacados */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Nuestros Pilares Fundamentales
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-lg">Compromiso Ambiental</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-lg">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-lg">Empresas Beneficiadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MisionVision;
