
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, Users, Globe, Award } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Fashion Editor',
      department: 'Editorial',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead our fashion coverage with exclusive access to runway shows, designer interviews, and trend forecasting.'
    },
    {
      title: 'Digital Content Manager',
      department: 'Digital',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage our digital content strategy across social media platforms and website optimization.'
    },
    {
      title: 'Art Director',
      department: 'Creative',
      location: 'Paris, France',
      type: 'Full-time',
      description: 'Shape the visual identity of our magazine through innovative layouts and creative direction.'
    },
    {
      title: 'Freelance Writer',
      department: 'Editorial',
      location: 'Remote',
      type: 'Contract',
      description: 'Contribute compelling stories on luxury lifestyle, culture, and emerging trends.'
    }
  ];

  const benefits = [
    { icon: Globe, title: 'Global Opportunities', description: 'Work with international teams and cover events worldwide' },
    { icon: Users, title: 'Creative Community', description: 'Join a passionate team of industry professionals' },
    { icon: Award, title: 'Industry Access', description: 'Exclusive access to luxury events and personalities' },
    { icon: Briefcase, title: 'Career Growth', description: 'Professional development and advancement opportunities' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium uppercase tracking-wider rounded-full">
              Join Our Team
            </span>
          </div>
          <h1 className="text-luxury-headline mb-4">Careers at Luxe</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Be part of a team that defines contemporary luxury through exceptional storytelling and cultural insight
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Why Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-luxury font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Open Positions</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Discover opportunities to shape the future of luxury media
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <div key={position.title} className="bg-white rounded-2xl p-8 shadow-lg animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="font-luxury font-semibold text-2xl mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="btn-luxury-primary mt-4 md:mt-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
