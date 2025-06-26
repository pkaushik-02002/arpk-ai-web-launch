
const Hero = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Build Websites with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create stunning, professional websites in minutes with ARPK's AI-powered builder. 
            No coding required, just describe your vision and watch it come to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
              Start Building Free
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Watch Demo
            </button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700"
                alt="ARPK AI Website Builder Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              AI Powered
            </div>
            <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse delay-1000">
              No Code
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
