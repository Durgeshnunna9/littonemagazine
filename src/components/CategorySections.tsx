
import React from 'react';
import ArticleCard from './ArticleCard';

const CategorySections = () => {
  const categories = [
    {
      name: 'Lifestyle',
      articles: [
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
          title: 'The Future of Sustainable Luxury',
          excerpt: 'How eco-consciousness is reshaping the luxury industry for the better.',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Lifestyle',
          author: 'James Morrison',
          date: 'Dec 5, 2023'
        }
      ]
    },
    {
      name: 'Culture',
      articles: [
        {
          id: '6',
          title: 'Contemporary Art\'s Digital Renaissance',
          excerpt: 'How technology is transforming the way we create and consume art.',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
          category: 'Culture',
          author: 'Aria Nakamura',
          date: 'Dec 3, 2023'
        },
        {
          id: '7',
          title: 'The Poetry of Modern Dance',
          excerpt: 'Exploring the intersection of classical technique and contemporary expression.',
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Culture',
          author: 'Viktor Petrov',
          date: 'Nov 30, 2023'
        }
      ]
    }
  ];

  return (
    <section className="section-luxury">
      <div className="container-luxury">
        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-16 last:mb-0">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-luxury-title">{category.name}</h2>
              <button className="link-luxury text-sm font-medium uppercase tracking-wider">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.articles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="animate-luxury-slide-up" 
                  style={{ animationDelay: `${(categoryIndex * 2 + index) * 0.1}s` }}
                >
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySections;
