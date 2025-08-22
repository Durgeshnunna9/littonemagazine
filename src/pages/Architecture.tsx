
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Building, Home, Compass } from 'lucide-react';

const Architecture = () => {
  const architectureArticles = [
    {
      id: 'architecture-1',
      title: 'Sustainable Architecture: Building for Tomorrow',
      excerpt: 'How architects are creating beautiful, environmentally conscious structures that redefine luxury living.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      category: 'Architecture',
      author: 'Marcus Webb',
      date: 'Dec 20, 2023',
      readTime: '12 min read'
    },
    {
      id: 'architecture-2',
      title: 'The Future of Luxury Hotels',
      excerpt: 'Innovative hospitality design that combines comfort, technology, and unforgettable experiences.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Architecture',
      author: 'Elena Rodriguez',
      date: 'Dec 18, 2023',
      readTime: '10 min read'
    },
    {
      id: 'architecture-3',
      title: 'Residential Masterpieces: Homes as Art',
      excerpt: 'Private residences that blur the line between architecture and sculpture.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Architecture',
      author: 'David Chen',
      date: 'Dec 16, 2023',
      readTime: '14 min read'
    },
    {
      id: 'architecture-4',
      title: 'Urban Planning: Cities of the Future',
      excerpt: 'Visionary urban planners are reimagining how we live, work, and connect in metropolitan environments.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Architecture',
      author: 'Dr. Maria Santos',
      date: 'Dec 14, 2023',
      readTime: '16 min read'
    },
    {
      id: 'architecture-5',
      title: 'Restoration Excellence: Preserving Architectural Heritage',
      excerpt: 'Master craftsmen and architects work together to preserve and restore historic buildings for future generations.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Architecture',
      author: 'Giovanni Rossi',
      date: 'Dec 12, 2023',
      readTime: '13 min read'
    },
    {
      id: 'architecture-6',
      title: 'Innovative Materials: The Future of Construction',
      excerpt: 'Exploring cutting-edge materials and technologies that are revolutionizing architectural design.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Architecture',
      author: 'Dr. Alex Thompson',
      date: 'Dec 10, 2023',
      readTime: '11 min read'
    }
  ];

  const architectureHighlights = [
    { icon: Building, title: 'Modern Design', description: 'Contemporary architectural marvels' },
    { icon: Home, title: 'Residential', description: 'Luxury homes and private spaces' },
    { icon: Compass, title: 'Urban Planning', description: 'Designing cities for the future' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
            alt="Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
              Architecture
            </span>
          </div>
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            Architectural <span className="text-accent italic">Innovation</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Innovative design, sustainable building, and spaces that inspire
          </p>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architectureHighlights.map((highlight, index) => (
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

      {/* Architecture Articles */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Latest Architecture Stories</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Explore the intersection of form, function, and sustainability in modern architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureArticles.map((article, index) => (
              <div key={article.id} className="animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Architecture;
