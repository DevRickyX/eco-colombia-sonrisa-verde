
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Handshake, Lightbulb, Recycle, Award, Globe } from "lucide-react";

const Valores = () => {
  const valores = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Actuamos con transparencia y honestidad en cada una de nuestras operaciones, construyendo confianza con nuestros clientes y comunidades.",
      color: "bg-blue-600"
    },
    {
      icon: Handshake,
      title: "Compromiso",
      description: "Nos dedicamos completamente a cumplir nuestras promesas y superar las expectativas de todos nuestros stakeholders.",
      color: "bg-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Buscamos constantemente nuevas tecnologías y métodos para mejorar nuestros procesos y generar mayor impacto positivo.",
      color: "bg-yellow-600"
    },
    {
      icon: Recycle,
      title: "Sostenibilidad",
      description: "Trabajamos por un futuro donde los recursos se aprovechen al máximo y los residuos se conviertan en nuevas oportunidades.",
      color: "bg-emerald-600"
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos esforzamos por alcanzar los más altos estándares de calidad en cada proyecto y servicio que ofrecemos.",
      color: "bg-purple-600"
    },
    {
      icon: Globe,
      title: "Responsabilidad",
      description: "Asumimos la responsabilidad de nuestro impacto en el medio ambiente y la sociedad, actuando como agentes de cambio positivo.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Nuestros <span className="text-green-600">Valores</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Los principios fundamentales que guían cada decisión y acción 
              en EcoVerde Colombia
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Flores naranjas representando crecimiento y valores"
              className="rounded-lg shadow-2xl w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Valores Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className={`${valor.color} p-4 rounded-full inline-block mb-6`}>
                  <valor.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {valor.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura Organizacional */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nuestra Cultura Organizacional
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Estos valores se reflejan en cada aspecto de nuestra organización
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Trabajo en Equipo
                    </h4>
                    <p className="text-gray-700">
                      Fomentamos la colaboración y el respeto mutuo entre todos 
                      los miembros de nuestro equipo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Aprendizaje Continuo
                    </h4>
                    <p className="text-gray-700">
                      Promovemos el desarrollo profesional y personal de nuestros 
                      colaboradores a través de capacitación constante.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Diversidad e Inclusión
                    </h4>
                    <p className="text-gray-700">
                      Valoramos la diversidad de perspectivas y experiencias 
                      como motor de innovación y crecimiento.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-emerald-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Equilibrio Vida-Trabajo
                    </h4>
                    <p className="text-gray-700">
                      Creemos en la importancia del bienestar personal para 
                      lograr la excelencia profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Vista panorámica de montañas verdes"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Compartes Nuestros Valores?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestro equipo y sé parte del cambio hacia un futuro más sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Trabaja con Nosotros
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Conoce Más
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Valores;
