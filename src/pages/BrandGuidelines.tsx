
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Type, Layout, Download } from 'lucide-react';

const BrandGuidelines = () => {
  const colorPalette = [
    { name: 'Primary White', hex: '#FFFFFF', description: 'Main background color' },
    { name: 'Luxury Black', hex: '#000000', description: 'Primary text and headers' },
    { name: 'Luxury Gold', hex: '#D4AF37', description: 'Accent and highlight color' },
    { name: 'Champagne', hex: '#F7E7CE', description: 'Subtle background sections' }
  ];

  const typography = [
    { name: 'Playfair Display', usage: 'Headlines & Display Text', example: 'The Art of Luxury' },
    { name: 'Cormorant Garamond', usage: 'Subheadings & Quotes', example: 'Elegant and timeless' },
    { name: 'Inter', usage: 'Body Text & UI Elements', example: 'Clean, readable body text for articles' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <h1 className="text-luxury-headline mb-4">Brand Guidelines</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Essential guidelines for maintaining brand consistency across all touchpoints
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Logo Usage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-luxury font-bold mb-4">
                <span className="text-foreground">LUXE</span>
                <span className="text-accent">.</span>
              </div>
              <h3 className="font-semibold mb-2">Primary Logo</h3>
              <p className="text-muted-foreground text-sm">Use on light backgrounds</p>
            </div>

            <div className="bg-black rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl font-luxury font-bold mb-4">
                <span className="text-white">LUXE</span>
                <span className="text-accent">.</span>
              </div>
              <h3 className="font-semibold mb-2 text-white">Reverse Logo</h3>
              <p className="text-white/70 text-sm">Use on dark backgrounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Palette size={24} className="text-accent" />
              <h2 className="text-luxury-title">Color Palette</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalette.map((color, index) => (
              <div key={color.name} className="animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="w-full h-32 rounded-t-xl border border-border"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="bg-white rounded-b-xl p-4 border border-t-0 border-border">
                  <h3 className="font-semibold mb-1">{color.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{color.hex}</p>
                  <p className="text-xs">{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Type size={24} className="text-accent" />
              <h2 className="text-luxury-title">Typography</h2>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {typography.map((font, index) => (
              <div key={font.name} className="bg-white rounded-2xl p-8 shadow-lg animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{font.name}</h3>
                    <p className="text-muted-foreground mb-4">{font.usage}</p>
                    <div className="text-sm text-muted-foreground">
                      Available weights: Regular, Medium, Semibold, Bold
                    </div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-3xl mb-2"
                      style={{ 
                        fontFamily: font.name === 'Playfair Display' ? 'Playfair Display' : 
                                   font.name === 'Cormorant Garamond' ? 'Cormorant Garamond' : 'Inter'
                      }}
                    >
                      {font.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Layout size={24} className="text-accent" />
            <h2 className="text-luxury-title">Complete Guidelines</h2>
          </div>
          <p className="text-luxury-subtitle mb-8">
            Download our comprehensive brand guidelines document for detailed usage instructions
          </p>
          <button className="btn-luxury-primary inline-flex items-center gap-2">
            <Download size={20} />
            Download Full Guidelines (PDF)
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandGuidelines;
