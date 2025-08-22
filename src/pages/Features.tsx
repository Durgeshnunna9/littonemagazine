
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Star, Award, TrendingUp } from 'lucide-react';

const Features = () => {
  const featuredStories = [
    {
      id: 'feature-1',
      title: 'The Art of Sustainable Luxury: Redefining Opulence',
      excerpt: 'How leading luxury brands are embracing sustainability without compromising on elegance, creating pieces that are both beautiful and environmentally conscious.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Sustainability',
      author: 'Emma Richardson',
      date: 'Dec 18, 2023',
      readTime: '15 min read',
      featured: true
    },
    {
      id: 'feature-2',
      title: 'Digital Renaissance: NFTs Meet Traditional Art',
      excerpt: 'Exploring how blockchain technology is revolutionizing art collection and creating new forms of luxury ownership in the digital age.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      category: 'Digital Art',
      author: 'Marcus Chen',
      date: 'Dec 16, 2023',
      readTime: '12 min read'
    },
    {
      id: 'feature-3',
      title: 'The Psychology of Luxury: What Drives Premium Desire',
      excerpt: 'A deep dive into the psychological factors that make luxury goods so appealing and how brands cultivate desire through storytelling.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
      category: 'Psychology',
      author: 'Dr. Sarah Williams',
      date: 'Dec 14, 2023',
      readTime: '18 min read'
    },
    {
      id: 'feature-4',
      title: 'Craftsmanship Renaissance: The Return to Handmade',
      excerpt: 'Why luxury consumers are increasingly valuing handcrafted items and traditional techniques in an automated world.',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Craftsmanship',
      author: 'Alessandro Rossi',
      date: 'Dec 12, 2023',
      readTime: '14 min read'
    },
    {
      id: 'feature-5',
      title: 'Luxury Travel Post-Pandemic: New Horizons',
      excerpt: 'How the luxury travel industry has adapted and what exclusive experiences await discerning travelers in the new era.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      category: 'Travel',
      author: 'Victoria Laurent',
      date: 'Dec 10, 2023',
      readTime: '16 min read'
    },
    {
      id: 'feature-6',
      title: 'The Future of Luxury Automobiles: Electric Elegance',
      excerpt: 'How luxury car manufacturers are reimagining performance and elegance in the electric vehicle revolution.',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      category: 'Automotive',
      author: 'James Morrison',
      date: 'Dec 8, 2023',
      readTime: '13 min read'
    }
  ];

  const highlights = [
    { icon: Star, title: 'Editor\'s Choice', description: 'Handpicked by our editorial team' },
    { icon: Award, title: 'Award Winners', description: 'Stories that defined the industry' },
    { icon: TrendingUp, title: 'Trending Now', description: 'Most read this month' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
            alt="Featured Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
              Premium Content
            </span>
          </div>
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            Featured <span className="text-accent italic">Stories</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            In-depth explorations of luxury, culture, and the art of refined living
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={highlight.title} className="text-center animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <highlight.icon size={24} />
                </div>
                <h3 className="font-luxury font-semibold text-xl mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Featured Articles</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Our most compelling stories that have shaped conversations in luxury and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <div key={story.id} className="animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ArticleCard {...story} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
