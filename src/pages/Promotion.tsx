
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, TrendingUp, Users, Globe } from 'lucide-react';

const Promotions = () => {
  const stats = [
    { icon: Users, value: '500K+', label: 'Monthly Readers' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: TrendingUp, value: '85%', label: 'Engagement Rate' },
    { icon: Target, value: '15M+', label: 'Annual Impressions' }
  ];

  const packages = [
    {
      name: 'Premium Banner',
      description: 'High-visibility banner placement on homepage and article pages',
      features: ['Homepage placement', '1M+ impressions', 'Performance analytics', 'Mobile optimized'],
      price: 'Starting at $5,000/month'
    },
    {
      name: 'Sponsored Content',
      description: 'Native advertising that blends seamlessly with editorial content',
      features: ['Editorial-style format', 'Social media promotion', 'SEO optimized', 'Long-term visibility'],
      price: 'Starting at $8,000/article'
    },
    {
      name: 'Newsletter Sponsorship',
      description: 'Exclusive placement in our weekly luxury lifestyle newsletter',
      features: ['50K+ subscribers', 'Dedicated section', 'Click tracking', 'Premium audience'],
      price: 'Starting at $3,000/week'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <h1 className="text-luxury-headline mb-4">Advertise with Luxe</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Reach an affluent, engaged audience of luxury enthusiasts and tastemakers
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-luxury font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Advertising Packages</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Choose the perfect package to showcase your luxury brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={pkg.name} className="bg-white rounded-2xl p-8 shadow-lg animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="font-luxury font-semibold text-2xl mb-4">{pkg.name}</h3>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xl font-luxury font-semibold mb-6">{pkg.price}</div>
                <button className="btn-luxury-primary w-full">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-luxury">
        <div className="container-luxury max-w-2xl mx-auto text-center">
          <h2 className="text-luxury-title mb-4">Ready to Partner?</h2>
          <p className="text-luxury-subtitle mb-8">
            Let's discuss how we can help elevate your brand to our discerning audience
          </p>
          <button className="btn-luxury-primary">
            Contact Our Sales Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;
