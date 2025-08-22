
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Users, BookOpen, Music } from 'lucide-react';

const Culture = () => {
  const cultureArticles = [
    {
      id: 'culture-1',
      title: 'Contemporary Art: The Digital Renaissance',
      excerpt: 'How technology is transforming artistic expression and creating new forms of cultural engagement.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      category: 'Culture',
      author: 'Viktor Petrov',
      date: 'Dec 21, 2023',
      readTime: '13 min read'
    },
    {
      id: 'culture-2',
      title: 'The Renaissance of Classical Music',
      excerpt: 'Young musicians and innovative venues are bringing classical music to new audiences worldwide.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culture',
      author: 'Aria Nakamura',
      date: 'Dec 19, 2023',
      readTime: '16 min read'
    },
    {
      id: 'culture-3',
      title: 'Literary Salons: Where Ideas Come Alive',
      excerpt: 'The revival of intimate literary gatherings in the world\'s most cultured cities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      category: 'Culture',
      author: 'Alexander Stone',
      date: 'Dec 17, 2023',
      readTime: '14 min read'
    },
    {
      id: 'culture-4',
      title: 'Museum Innovations: Art Meets Technology',
      excerpt: 'How leading museums are using cutting-edge technology to enhance cultural experiences.',
      image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culture',
      author: 'Dr. Catherine Dubois',
      date: 'Dec 15, 2023',
      readTime: '12 min read'
    },
    {
      id: 'culture-5',
      title: 'Cultural Festivals: Celebrating Global Heritage',
      excerpt: 'Exploring the world\'s most prestigious cultural festivals and their impact on local communities.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culture',
      author: 'Sophia Martinez',
      date: 'Dec 13, 2023',
      readTime: '18 min read'
    },
    {
      id: 'culture-6',
      title: 'Philosophy in Modern Life: Ancient Wisdom Today',
      excerpt: 'How classical philosophical teachings are being applied to contemporary luxury living.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2028&q=80',
      category: 'Culture',
      author: 'Professor Marcus Aurelius',
      date: 'Dec 11, 2023',
      readTime: '15 min read'
    }
  ];

  const cultureHighlights = [
    { icon: Users, title: 'Cultural Events', description: 'Exclusive access to premier cultural gatherings' },
    { icon: BookOpen, title: 'Literary Arts', description: 'The finest in contemporary literature' },
    { icon: Music, title: 'Performing Arts', description: 'From opera houses to intimate venues' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80"
            alt="Culture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
              Culture
            </span>
          </div>
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            Cultural <span className="text-accent italic">Renaissance</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Art, literature, music, and the cultural movements shaping our world
          </p>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureHighlights.map((highlight, index) => (
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

      {/* Culture Articles */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Latest Cultural Stories</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Explore the intersection of art, literature, and cultural innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cultureArticles.map((article, index) => (
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

export default Culture;
