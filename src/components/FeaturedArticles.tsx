
import React from 'react';
import ArticleCard from './ArticleCard';

const FeaturedArticles = () => {
  const featuredArticles = [
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
    }
  ];

  return (
    <section className="section-luxury bg-luxury-pearl">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <h2 className="text-luxury-title mb-4">Featured Stories</h2>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Curated narratives that define contemporary luxury and culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <div key={article.id} className="animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ArticleCard {...article} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
