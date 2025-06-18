
const Impact = () => {
  const stats = [
    {
      number: "2.5M",
      unit: "Toneladas",
      description: "Residuos procesados anualmente"
    },
    {
      number: "85%",
      unit: "Reducción",
      description: "En emisiones de CO₂"
    },
    {
      number: "1,200",
      unit: "Empleos",
      description: "Generados directamente"
    },
    {
      number: "50+",
      unit: "Ciudades",
      description: "Atendidas en Colombia"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Impacto en <span className="text-green-400">Colombia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cifras que demuestran nuestro compromiso con un futuro más sostenible
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-green-600 bg-opacity-20 rounded-full p-8 mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-green-300">
                  {stat.unit}
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-green-600 bg-opacity-10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-green-400">
            "Construyendo un Colombia más verde, una tonelada a la vez"
          </h3>
          <p className="text-gray-300 text-lg">
            Nuestro compromiso va más allá del reciclaje. Creamos empleos dignos, 
            fortalecemos comunidades y protegemos la biodiversidad única de nuestro país.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;
