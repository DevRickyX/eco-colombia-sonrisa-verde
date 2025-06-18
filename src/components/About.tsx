
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Comprometidos con el 
              <span className="text-green-600"> Medio Ambiente</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Desde 2010, EcoVerde Colombia ha sido pionera en soluciones de reciclaje 
              innovadoras que transforman los desafíos ambientales en oportunidades de 
              crecimiento sostenible.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Trabajamos con empresas, gobiernos locales y comunidades para crear 
              un impacto positivo duradero en nuestro país, promoviendo la economía 
              circular y la conservación de recursos naturales.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Empresas Atendidas</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Montañas verdes de Colombia"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-gray-800">🇨🇴</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">Orgullosamente Colombiano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
