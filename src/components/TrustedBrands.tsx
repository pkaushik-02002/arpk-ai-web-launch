
const TrustedBrands = () => {
  const brands = [
    { name: "Stripe", logo: "/lovable-uploads/d8948162-d91d-438e-a011-3d2cf84e49ff.png" },
    { name: "Webflow", logo: "/lovable-uploads/261a493e-7c21-41b2-8dc9-745f8e974795.png" },
    { name: "Linear", logo: "/lovable-uploads/dc921b98-c3eb-48e8-a30e-3f4687930251.png" },
    { name: "Focusrite", logo: "/lovable-uploads/012da69e-c1dd-41c8-870a-06220b748a24.png" },
    { name: "Figma", logo: "/lovable-uploads/05bd6bea-3ef3-47dd-894f-6c6858b71e43.png" },
    { name: "Figma Light", logo: "/lovable-uploads/3350963d-5150-49bc-8d24-323b1e51d6c0.png" }
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg font-medium">Trusted by innovative companies worldwide</p>
        </div>
        
        {/* Marquee container */}
        <div className="relative">
          <div className="flex animate-marquee space-x-16 items-center">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-h-12 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
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
