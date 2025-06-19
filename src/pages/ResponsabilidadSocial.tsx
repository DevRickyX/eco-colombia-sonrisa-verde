
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Leaf, GraduationCap } from "lucide-react";

const ResponsabilidadSocial = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Responsabilidad <span className="text-green-600">Social</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nuestro compromiso va más allá del reciclaje. Trabajamos por el bienestar 
              de las comunidades y el futuro del planeta.
            </p>
          </div>
        </div>
      </section>

      {/* Programas Sociales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nuestros Programas Sociales
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Inclusión Laboral
              </h3>
              <p className="text-gray-700">
                Generamos empleos dignos para recicladores de base
              </p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 p-4 rounded-full inline-block mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Educación Ambiental
              </h3>
              <p className="text-gray-700">
                Capacitamos comunidades en prácticas sostenibles
              </p>
            </div>
            
            <div className="text-center p-6 bg-emerald-50 rounded-lg">
              <div className="bg-emerald-600 p-4 rounded-full inline-block mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Restauración
              </h3>
              <p className="text-gray-700">
                Recuperamos espacios naturales degradados
              </p>
            </div>
            
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="bg-red-600 p-4 rounded-full inline-block mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Apoyo Comunitario
              </h3>
              <p className="text-gray-700">
                Fortalecemos organizaciones locales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto Destacado */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Proyecto "Verdes Esperanzas"
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro programa insignia que ha beneficiado a más de 200 familias 
                recicladoras en Bogotá, Medellín y Cali, proporcionándoles herramientas, 
                capacitación y acceso a mercados justos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">200+ familias beneficiadas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">50 toneladas recicladas mensualmente</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">15 cooperativas fortalecidas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Naturaleza y comunidad"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impacto Social */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Ambiente natural preservado"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nuestro Impacto Social
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Creemos que la responsabilidad social corporativa es fundamental para 
                el desarrollo sostenible. Por eso, destinamos el 10% de nuestras 
                ganancias a programas de impacto social y ambiental.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 border-2 border-green-200 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <p className="text-gray-700">Empleos Generados</p>
                </div>
                <div className="text-center p-4 border-2 border-blue-200 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5,000</div>
                  <p className="text-gray-700">Personas Capacitadas</p>
                </div>
                <div className="text-center p-4 border-2 border-emerald-200 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">25</div>
                  <p className="text-gray-700">Hectáreas Restauradas</p>
                </div>
                <div className="text-center p-4 border-2 border-red-200 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">15</div>
                  <p className="text-gray-700">Comunidades Apoyadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResponsabilidadSocial;
