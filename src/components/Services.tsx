
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Trash2, Trash } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Recycle,
      title: "Reciclaje Industrial",
      description: "Procesamiento especializado de residuos industriales con tecnología de punta y procesos certificados.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Trash2,
      title: "Gestión de Residuos",
      description: "Recolección, clasificación y tratamiento integral de residuos sólidos urbanos e industriales.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Trash,
      title: "Consultoría Ambiental",
      description: "Asesoría especializada en planes de manejo ambiental y certificaciones de sostenibilidad.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de reciclaje y gestión ambiental 
            adaptadas a las necesidades de Colombia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
