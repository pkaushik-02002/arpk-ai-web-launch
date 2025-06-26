
import { Star, Users, Layout } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Design",
      description: "Our advanced AI understands your vision and creates pixel-perfect designs that match your brand identity and business goals."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Collaborative Building",
      description: "Work seamlessly with your team in real-time. Share projects, get feedback, and iterate quickly with built-in collaboration tools."
    },
    {
      icon: <Layout className="w-8 h-8 text-green-600" />,
      title: "Responsive Templates",
      description: "Choose from hundreds of professionally designed templates that automatically adapt to any device and screen size."
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Smart Optimization",
      description: "Automatically optimize your website for speed, SEO, and conversions with our intelligent performance enhancement engine."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your website performance with comprehensive analytics and actionable recommendations for growth."
    },
    {
      icon: <Layout className="w-8 h-8 text-indigo-600" />,
      title: "One-Click Deploy",
      description: "Launch your website instantly to any hosting platform or custom domain with our seamless deployment system."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              build amazing websites
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make website creation effortless and enjoyable for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:scale-105 transform transition-transform"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl mb-6 group-hover:bg-gray-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
