
import React from 'react';
import ArticleCard from './ArticleCard';
import { ArrowRight, Sparkles, TrendingUp, Users, Camera } from 'lucide-react';

const CategorySections = () => {
  const categories = [
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Sparkles,
      description: 'Haute couture, emerging designers, and the art of personal style',
      color: 'from-pink-500 to-rose-500',
      articles: [
        {
          id: 'fashion-1',
          title: 'Power of Personal Style: The Classic Touch',
          excerpt: 'The most powerful thing about fashion is that its a form of self-expression',
          image: '/media/payal_4.jpeg',
          category: 'Fashion',
          author: 'Payal Ghosh',
          date: 'September 1 2025',
          readTime: '2 min read',
        },
        // {
        //   id: 'fashion-2',
        //   title: 'The New York Fashion Week: Behind the Scenes',
        //   excerpt: 'Exclusive access to the most anticipated shows and the stories that shaped this season\'s narrative.',
        //   image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
        //   category: 'Fashion',
        //   author: 'Marcus Webb',
        //   date: 'Dec 18, 2023',
        //   readTime: '12 min read'
        // },
        // {
        //   id: 'fashion-3',
        //   title: 'Emerging Designers to Watch in 2024',
        //   excerpt: 'Meet the next generation of fashion visionaries who are redefining luxury and pushing creative boundaries.',
        //   image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80',
        //   category: 'Fashion',
        //   author: 'Sofia Rodriguez',
        //   date: 'Dec 16, 2023',
        //   readTime: '10 min read'
        // }
      ]
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      icon: TrendingUp,
      description: 'Wellness, luxury living, and the pursuit of excellence in daily life',
      color: 'from-emerald-500 to-teal-500',
      articles: [
        // {
        //   id: 'lifestyle-1',
        //   title: 'Wellness Retreats: Finding Balance in Luxury',
        //   excerpt: 'The world\'s most exclusive wellness destinations where luxury meets mindfulness and personal transformation.',
        //   image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        //   category: 'Lifestyle',
        //   author: 'Emma Thompson',
        //   date: 'Dec 19, 2023',
        //   readTime: '15 min read'
        // },
        // {
        //   id: 'lifestyle-2',
        //   title: 'The Art of Luxury Home Design',
        //   excerpt: 'How interior designers are creating spaces that reflect personal style while maintaining timeless elegance.',
        //   image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
        //   category: 'Lifestyle',
        //   author: 'James Morrison',
        //   date: 'Dec 17, 2023',
        //   readTime: '11 min read'
        // },
        // {
        //   id: 'lifestyle-3',
        //   title: 'Premium Skincare: The Science Behind Beauty',
        //   excerpt: 'Exploring the innovative technologies and rare ingredients that define the luxury beauty industry.',
        //   image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
        //   category: 'Lifestyle',
        //   author: 'Dr. Sarah Chen',
        //   date: 'Dec 15, 2023',
        //   readTime: '9 min read'
        // }
      ]
    },
    {
      id: 'culture',
      name: 'Culture',
      icon: Users,
      description: 'Art, literature, music, and the cultural movements shaping our world',
      color: 'from-purple-500 to-indigo-500',
      articles: [
        // {
        //   id: 'culture-1',
        //   title: 'Contemporary Art: The Digital Renaissance',
        //   excerpt: 'How technology is transforming artistic expression and creating new forms of cultural engagement.',
        //   image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
        //   category: 'Culture',
        //   author: 'Viktor Petrov',
        //   date: 'Dec 21, 2023',
        //   readTime: '13 min read'
        // },
        // {
        //   id: 'culture-2',
        //   title: 'The Renaissance of Classical Music',
        //   excerpt: 'Young musicians and innovative venues are bringing classical music to new audiences worldwide.',
        //   image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        //   category: 'Culture',
        //   author: 'Aria Nakamura',
        //   date: 'Dec 19, 2023',
        //   readTime: '16 min read'
        // },
        // {
        //   id: 'culture-3',
        //   title: 'Literary Salons: Where Ideas Come Alive',
        //   excerpt: 'The revival of intimate literary gatherings in the world\'s most cultured cities.',
        //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        //   category: 'Culture',
        //   author: 'Alexander Stone',
        //   date: 'Dec 17, 2023',
        //   readTime: '14 min read'
        // }
      ]
    },
    {
      id: 'architecture',
      name: 'Architecture',
      icon: Camera,
      description: 'Innovative design, sustainable building, and spaces that inspire',
      color: 'from-orange-500 to-red-500',
      articles: [
        // {
        //   id: 'architecture-1',
        //   title: 'Sustainable Architecture: Building for Tomorrow',
        //   excerpt: 'How architects are creating beautiful, environmentally conscious structures that redefine luxury living.',
        //   image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
        //   category: 'Architecture',
        //   author: 'Marcus Webb',
        //   date: 'Dec 20, 2023',
        //   readTime: '12 min read'
        // },
        // {
        //   id: 'architecture-2',
        //   title: 'The Future of Luxury Hotels',
        //   excerpt: 'Innovative hospitality design that combines comfort, technology, and unforgettable experiences.',
        //   image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        //   category: 'Architecture',
        //   author: 'Elena Rodriguez',
        //   date: 'Dec 18, 2023',
        //   readTime: '10 min read'
        // },
        // {
        //   id: 'architecture-3',
        //   title: 'Residential Masterpieces: Homes as Art',
        //   excerpt: 'Private residences that blur the line between architecture and sculpture.',
        //   image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        //   category: 'Architecture',
        //   author: 'David Chen',
        //   date: 'Dec 16, 2023',
        //   readTime: '14 min read'
        // }
      ]
    }
  ];

  return (
    <section className="section-luxury">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium uppercase tracking-wider rounded-full">
              Editorial Categories
            </span>
          </div>
          <h2 className="text-luxury-title mb-4">Explore by Interest</h2>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Dive deep into the subjects that define contemporary luxury culture, 
            from haute couture to architectural marvels
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <div key={category.id} className="animate-luxury-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}>
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-luxury-title">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <button className="btn-luxury-secondary group">
                  View All {category.name}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Articles Grid */}
              {category.articles.length > 0 ? (
                category.articles.map((article, articleIndex) => (
                  <div
                    key={article.id}
                    className="animate-luxury-slide-up grid grid-cols-4"
                    style={{
                      animationDelay: `${(categoryIndex * 0.2) + (articleIndex * 0.1)}s`,
                    }}
                  >
                    <ArticleCard {...article} />
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16 border border-dashed border-gray-300 rounded-2xl">
                  <span className="text-lg font-semibold text-gray-600">
                    🚧 Coming Soon
                  </span>
                  <p className="text-gray-500 text-sm mt-2">
                    Articles for this category will be available soon.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-luxury-pearl rounded-2xl p-12">
            <h3 className="text-luxury-title mb-4">Discover More Stories</h3>
            <p className="text-luxury-subtitle mb-8 max-w-2xl mx-auto">
              Explore our complete archive of luxury lifestyle content, 
              featuring exclusive interviews, behind-the-scenes access, and cultural insights
            </p>
            <button className="btn-luxury-primary">
              Browse All Articles
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySections;
