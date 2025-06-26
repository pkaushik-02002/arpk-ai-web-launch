
const TrustedBrands = () => {
  const brands = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "DigitalFlow", logo: "DF" },
    { name: "CloudSync", logo: "CS" },
    { name: "DataDrive", logo: "DD" },
    { name: "WebForce", logo: "WF" }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg font-medium">Trusted by innovative companies worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="flex items-center justify-center w-24 h-24 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-200 transition-colors">
                {brand.logo}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Join 10,000+ businesses that trust ARPK to power their online presence
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
