
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Filter } from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fashion', 'Lifestyle', 'Culture', 'Architecture', 'Culinary'];
  
  const articles = [
    {
      id: '1',
      title: 'The Renaissance of Haute Couture',
      excerpt: 'Exploring how traditional craftsmanship meets contemporary design in today\'s fashion landscape.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Isabella Chen',
      date: 'Dec 15, 2023'
    },
    {
      id: '2',
      title: 'Minimalist Architecture: Form Follows Function',
      excerpt: 'A deep dive into the world of contemporary minimalist design and its impact on modern living.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      category: 'Architecture',
      author: 'Marcus Webb',
      date: 'Dec 12, 2023'
    },
    {
      id: '3',
      title: 'The Art of Michelin Gastronomy',
      excerpt: 'Behind the scenes with world-renowned chefs redefining culinary excellence.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culinary',
      author: 'Sofia Rodriguez',
      date: 'Dec 10, 2023'
    },
    {
      id: '4',
      title: 'Wellness Retreats for the Modern Soul',
      excerpt: 'Discover transformative experiences that blend luxury with mindful living.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Emma Thompson',
      date: 'Dec 8, 2023'
    },
    {
      id: '5',
      title: 'Contemporary Art\'s Digital Renaissance',
      excerpt: 'How technology is transforming the way we create and consume art.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      category: 'Culture',
      author: 'Aria Nakamura',
      date: 'Dec 3, 2023'
    },
    {
      id: '6',
      title: 'The Future of Sustainable Luxury',
      excerpt: 'How eco-consciousness is reshaping the luxury industry for the better.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'James Morrison',
      date: 'Dec 5, 2023'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <h1 className="text-luxury-headline mb-4">Articles</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Explore our curated collection of stories that define contemporary luxury
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container-luxury">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Filter size={20} />
              <span className="font-medium">Filter by category:</span>
            </div>
            <span className="text-muted-foreground text-sm">
              {filteredArticles.length} articles found
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="animate-luxury-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

export default Articles;
