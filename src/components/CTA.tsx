
import { Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to build your
          <span className="block">dream website?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of creators who are already building amazing websites with ARPK. 
          Start your free trial today and see the magic happen.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            Start Free Trial
          </button>
          <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors">
            Schedule Demo
          </button>
        </div>
        
        <div className="mt-8 flex justify-center items-center space-x-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm">14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm">Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
