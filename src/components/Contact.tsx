
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a nosotros en la misión de construir un Colombia más sostenible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Flores naranjas representando la naturaleza"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800">
                Contáctanos Hoy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-2">📧</div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600">info@ecoverde.com.co</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-2">📱</div>
                  <div className="font-semibold text-gray-800">Teléfono</div>
                  <div className="text-gray-600">+57 (1) 234-5678</div>
                </div>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="text-2xl font-bold text-yellow-600 mb-2">📍</div>
                <div className="font-semibold text-gray-800">Oficina Principal</div>
                <div className="text-gray-600">Bogotá, Colombia</div>
                <div className="text-sm text-gray-500 mt-1">Con presencia en todo el territorio nacional</div>
              </div>

              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Solicitar Cotización Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
