
import { Recycle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Recycle className="h-8 w-8 text-green-400 mr-3" />
              <span className="text-2xl font-bold">EcoVerde Colombia</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Liderando la transformación hacia una Colombia más sostenible a través 
              de soluciones innovadoras de reciclaje y gestión ambiental.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">@</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Reciclaje Industrial</li>
              <li className="hover:text-white transition-colors cursor-pointer">Gestión de Residuos</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consultoría Ambiental</li>
              <li className="hover:text-white transition-colors cursor-pointer">Capacitación</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Sobre Nosotros</li>
              <li className="hover:text-white transition-colors cursor-pointer">Nuestro Equipo</li>
              <li className="hover:text-white transition-colors cursor-pointer">Certificaciones</li>
              <li className="hover:text-white transition-colors cursor-pointer">Trabaja con Nosotros</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EcoVerde Colombia. Todos los derechos reservados. 
            <span className="text-green-400 ml-2">🇨🇴 Hecho con amor en Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
