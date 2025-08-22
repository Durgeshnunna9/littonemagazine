
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Heart, Home, Sparkles } from 'lucide-react';

const Lifestyle = () => {
  const lifestyleArticles = [
    {
      id: 'lifestyle-1',
      title: 'Wellness Retreats: Finding Balance in Luxury',
      excerpt: 'The world\'s most exclusive wellness destinations where luxury meets mindfulness and personal transformation.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Emma Thompson',
      date: 'Dec 19, 2023',
      readTime: '15 min read'
    },
    {
      id: 'lifestyle-2',
      title: 'The Art of Luxury Home Design',
      excerpt: 'How interior designers are creating spaces that reflect personal style while maintaining timeless elegance.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      category: 'Lifestyle',
      author: 'James Morrison',
      date: 'Dec 17, 2023',
      readTime: '11 min read'
    },
    {
      id: 'lifestyle-3',
      title: 'Premium Skincare: The Science Behind Beauty',
      excerpt: 'Exploring the innovative technologies and rare ingredients that define the luxury beauty industry.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
      category: 'Lifestyle',
      author: 'Dr. Sarah Chen',
      date: 'Dec 15, 2023',
      readTime: '9 min read'
    },
    {
      id: 'lifestyle-4',
      title: 'Culinary Excellence: The Art of Fine Dining',
      excerpt: 'Behind the scenes with Michelin-starred chefs who are redefining the luxury dining experience.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Chef Antoine Dubois',
      date: 'Dec 13, 2023',
      readTime: '20 min read'
    },
    {
      id: 'lifestyle-5',
      title: 'Luxury Fitness: Personal Wellness Revolution',
      excerpt: 'How high-end fitness and wellness programs are transforming personal health and lifestyle.',
      image: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Marina Volkov',
      date: 'Dec 11, 2023',
      readTime: '13 min read'
    },
    {
      id: 'lifestyle-6',
      title: 'The Art of Entertaining: Hosting in Style',
      excerpt: 'Mastering the art of luxury entertaining with tips from the world\'s most celebrated hosts.',
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Charlotte Windsor',
      date: 'Dec 9, 2023',
      readTime: '16 min read'
    }
  ];

  const lifestyleHighlights = [
    { icon: Heart, title: 'Wellness', description: 'Mind, body, and soul in harmony' },
    { icon: Home, title: 'Luxury Living', description: 'Creating beautiful spaces' },
    { icon: Sparkles, title: 'Personal Style', description: 'Defining your unique aesthetic' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
              Lifestyle
            </span>
          </div>
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            Luxury <span className="text-accent italic">Living</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Wellness, design, and the pursuit of excellence in daily life
          </p>
        </div>
      </section>

      {/* Lifestyle Highlights */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyleHighlights.map((highlight, index) => (
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

      {/* Lifestyle Articles */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Latest Lifestyle Stories</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Discover the art of living well with insights into wellness, design, and personal style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifestyleArticles.map((article, index) => (
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

export default Lifestyle;
