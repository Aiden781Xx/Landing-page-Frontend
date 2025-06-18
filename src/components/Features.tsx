import React from 'react';
import { Shield, Truck, Star, Headphones, Clock, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All products come with our comprehensive quality guarantee and warranty protection.',
      color: 'blue'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Free express shipping on orders over $100. Get your products delivered in 2-3 days.',
      color: 'green'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Carefully curated products from top brands, ensuring the highest quality standards.',
      color: 'purple'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated customer support team is available round the clock to assist you.',
      color: 'orange'
    },
    {
      icon: Clock,
      title: 'Easy Returns',
      description: '30-day hassle-free return policy. Not satisfied? Return it for a full refund.',
      color: 'red'
    },
    {
      icon: Award,
      title: 'Trusted Brand',
      description: 'Award-winning service with thousands of satisfied customers worldwide.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're committed to providing the best shopping experience with premium products, 
            exceptional service, and unmatched value for our customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${getColorClasses(feature.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer">
            Experience the Difference Today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;