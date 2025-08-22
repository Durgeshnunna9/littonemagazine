
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

const Fashion = () => {
  const fashionArticles = [
    {
      id: 'fashion-1',
      title: 'Sustainable Couture: The Green Revolution in High Fashion',
      excerpt: 'How luxury fashion houses are embracing eco-friendly practices without compromising on elegance and craftsmanship.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Isabella Chen',
      date: 'Dec 20, 2023',
      readTime: '8 min read'
    },
    {
      id: 'fashion-2',
      title: 'The New York Fashion Week: Behind the Scenes',
      excerpt: 'Exclusive access to the most anticipated shows and the stories that shaped this season\'s narrative.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
      category: 'Fashion',
      author: 'Marcus Webb',
      date: 'Dec 18, 2023',
      readTime: '12 min read'
    },
    {
      id: 'fashion-3',
      title: 'Emerging Designers to Watch in 2024',
      excerpt: 'Meet the next generation of fashion visionaries who are redefining luxury and pushing creative boundaries.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
      category: 'Fashion',
      author: 'Sofia Rodriguez',
      date: 'Dec 16, 2023',
      readTime: '10 min read'
    },
    {
      id: 'fashion-4',
      title: 'Vintage Luxury: Timeless Pieces Making a Comeback',
      excerpt: 'Exploring the resurgence of vintage fashion and how classic pieces are influencing contemporary design.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Victoria Laurent',
      date: 'Dec 14, 2023',
      readTime: '15 min read'
    },
    {
      id: 'fashion-5',
      title: 'The Craftsmanship Behind Haute Couture',
      excerpt: 'Inside the ateliers where master artisans create the world\'s most exquisite garments, stitch by stitch.',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Alessandro Rossi',
      date: 'Dec 12, 2023',
      readTime: '18 min read'
    },
    {
      id: 'fashion-6',
      title: 'Street Style Meets High Fashion',
      excerpt: 'How street fashion continues to influence luxury brands and reshape the industry\'s creative direction.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Maya Patel',
      date: 'Dec 10, 2023',
      readTime: '11 min read'
    }
  ];

  const fashionHighlights = [
    { icon: Sparkles, title: 'Haute Couture', description: 'Exclusive access to runway shows' },
    { icon: TrendingUp, title: 'Fashion Trends', description: 'What\'s next in luxury fashion' },
    { icon: Award, title: 'Designer Spotlights', description: 'Meet the creative minds behind the brands' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
              Fashion
            </span>
          </div>
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            Haute <span className="text-accent italic">Couture</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Discover the latest in luxury fashion, from runway exclusives to emerging designers
          </p>
        </div>
      </section>

      {/* Fashion Highlights */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fashionHighlights.map((highlight, index) => (
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

      {/* Fashion Articles */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Latest Fashion Stories</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              From sustainable fashion to haute couture, explore the world of luxury fashion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fashionArticles.map((article, index) => (
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

export default Fashion;
