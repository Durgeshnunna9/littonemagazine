
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Download, Image, FileText, Award } from 'lucide-react';

const PressKit = () => {
  const resources = [
    {
      type: 'Logo Package',
      icon: Image,
      description: 'High-resolution logos in various formats',
      files: ['PNG', 'SVG', 'EPS'],
      size: '2.3 MB'
    },
    {
      type: 'Brand Guidelines',
      icon: FileText,
      description: 'Complete brand style guide and usage rules',
      files: ['PDF'],
      size: '5.1 MB'
    },
    {
      type: 'Press Release',
      icon: FileText,
      description: 'Latest company news and announcements',
      files: ['PDF', 'DOC'],
      size: '1.2 MB'
    },
    {
      type: 'Media Kit',
      icon: Award,
      description: 'Company facts, statistics, and achievements',
      files: ['PDF'],
      size: '3.8 MB'
    }
  ];

  const companyFacts = [
    { label: 'Founded', value: '2018' },
    { label: 'Headquarters', value: 'New York, NY' },
    { label: 'Monthly Readers', value: '500K+' },
    { label: 'Countries Reached', value: '50+' },
    { label: 'Team Members', value: '25+' },
    { label: 'Industry Awards', value: '15+' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <h1 className="text-luxury-headline mb-4">Press Kit</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Essential resources for media professionals and partners
          </p>
        </div>
      </section>

      {/* Company Facts */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Company at a Glance</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyFacts.map((fact, index) => (
              <div key={fact.label} className="text-center animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-2xl font-luxury font-bold mb-2">{fact.value}</div>
                <div className="text-muted-foreground text-sm">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Download Resources</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Access our complete brand assets and company information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <div key={resource.type} className="bg-white rounded-2xl p-8 shadow-lg animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <resource.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-luxury font-semibold text-xl mb-2">{resource.type}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>Formats: {resource.files.join(', ')}</span>
                      <span>•</span>
                      <span>Size: {resource.size}</span>
                    </div>
                  </div>
                </div>
                <button className="btn-luxury-secondary w-full inline-flex items-center justify-center gap-2">
                  <Download size={16} />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-luxury">
        <div className="container-luxury max-w-2xl mx-auto text-center">
          <h2 className="text-luxury-title mb-4">Media Inquiries</h2>
          <p className="text-luxury-subtitle mb-8">
            For additional resources or press inquiries, please contact our media team
          </p>
          <div className="space-y-4">
            <p>
              <strong>Press Contact:</strong><br />
              Isabella Chen, Editor-in-Chief<br />
              <a href="mailto:press@luxemagazine.com" className="link-luxury">press@luxemagazine.com</a><br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressKit;
