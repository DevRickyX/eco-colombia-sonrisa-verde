
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Recycle, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-full">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">
              EcoVerde <span className="text-green-600">Colombia</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('impacto')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Impacto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-green-600 hover:bg-green-700 text-white px-6"
            >
              Cotiza Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('impacto')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
              >
                Impacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-green-600 hover:bg-green-700 text-white mt-4"
              >
                Cotiza Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
