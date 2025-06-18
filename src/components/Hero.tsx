
import { Button } from "@/components/ui/button";
import { Recycle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-600 p-4 rounded-full">
            <Recycle className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          EcoVerde <span className="text-green-600">Colombia</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transformamos residuos en oportunidades para un futuro más sostenible. 
          Somos líderes en reciclaje y gestión ambiental en Colombia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Conoce Nuestros Servicios
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Contactar Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
