
import React from 'react';
import ArticleCard from './ArticleCard';
import { ArrowRight } from 'lucide-react';

const FeaturedArticles = () => {
  const featuredArticles = [
    {
      id: '1',
      title: 'Power of Personal Style: The Classic Touch',
      excerpt: 'The most powerful thing about fashion is that its a form of self-expression',
      image: '/media/payal_10.jpeg',
      category: 'Fashion',
      author: 'Payal Ghosh',
      date: 'September 1 2025',
      readTime: '2 min read',
      featured: true
    
    },
    // {
    //   id: '2',
    //   title: 'Minimalist Architecture: The Poetry of Empty Space',
    //   excerpt: 'Exploring how contemporary architects are using negative space and natural light to create homes that feel both monumental and intimate, redefining luxury living for the modern era.',
    //   image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    //   category: 'Architecture',
    //   author: 'Marcus Webb',
    //   date: 'Dec 12, 2023',
    //   readTime: '8 min read'
    // },
    // {
    //   id: '3',
    //   title: 'The Michelin Revolution: Beyond Three Stars',
    //   excerpt: 'Meet the visionary chefs who are transforming fine dining by challenging traditional boundaries, incorporating molecular gastronomy and sustainable sourcing into their culinary masterpieces.',
    //   image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'Culinary',
    //   author: 'Sofia Rodriguez',
    //   date: 'Dec 10, 2023',
    //   readTime: '15 min read'
    // },
    // {
    //   id: '4',
    //   title: 'Swiss Watchmaking: The Digital Age Paradox',
    //   excerpt: 'How traditional Swiss watchmakers are embracing smartwatch technology while preserving the artisanal craftsmanship that has defined luxury timepieces for centuries.',
    //   image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'Lifestyle',
    //   author: 'Viktor Petrov',
    //   date: 'Dec 8, 2023',
    //   readTime: '10 min read'
    // }
  ];

  return (
    <section className="section-luxury bg-luxury-pearl">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium uppercase tracking-wider rounded-full">
              Editor's Choice
            </span>
          </div>
          <h2 className="text-luxury-title mb-4">Featured Stories</h2>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Curated narratives that define contemporary luxury, culture, and the art of refined living. 
            Each story is carefully selected by our editorial team for its depth, insight, and cultural significance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredArticles.map((article, index) => (
            <div 
              key={article.id} 
              className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <ArticleCard {...article} featured={index === 0} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-luxury-secondary">
            Explore All Featured Stories
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
