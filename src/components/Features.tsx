
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-black dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              build amazing websites
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to make website creation effortless and enjoyable for everyone
          </p>
        </div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

export default Features;
