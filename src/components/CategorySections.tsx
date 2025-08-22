
import React from 'react';
import ArticleCard from './ArticleCard';
import { ArrowRight, Sparkles, Palette, Globe, Building } from 'lucide-react';

const CategorySections = () => {
  const categories = [
    {
      name: 'Lifestyle',
      icon: Sparkles,
      description: 'Wellness, travel, and the art of refined living',
      articles: [
        {
          id: '5',
          title: 'Wellness Retreats for the Modern Soul: A Journey Within',
          excerpt: 'Discover transformative experiences at the world\'s most exclusive wellness retreats, where ancient healing practices meet contemporary luxury in breathtaking natural settings.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Lifestyle',
          author: 'Emma Thompson',
          date: 'Dec 8, 2023',
          readTime: '9 min read'
        },
        {
          id: '6',
          title: 'The Future of Sustainable Luxury: Conscious Consumption',
          excerpt: 'How eco-consciousness is reshaping the luxury industry, from carbon-neutral private jets to lab-grown diamonds that rival nature\'s finest creations.',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Lifestyle',
          author: 'James Morrison',
          date: 'Dec 5, 2023',
          readTime: '11 min read'
        },
        {
          id: '7',
          title: 'Private Island Escapes: The Ultimate Luxury Experience',
          excerpt: 'Explore the world\'s most exclusive private island resorts where pristine beaches, personalized service, and complete privacy create the ultimate luxury escape.',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Lifestyle',
          author: 'Aria Nakamura',
          date: 'Dec 3, 2023',
          readTime: '7 min read'
        }
      ]
    },
    {
      name: 'Culture',
      icon: Palette,
      description: 'Art, literature, and cultural movements shaping our world',
      articles: [
        {
          id: '8',
          title: 'Contemporary Art\'s Digital Renaissance: NFTs and Beyond',
          excerpt: 'How technology is transforming the way we create, collect, and experience art, from virtual galleries to blockchain-verified masterpieces.',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
          category: 'Culture',
          author: 'Viktor Petrov',
          date: 'Dec 3, 2023',
          readTime: '13 min read'
        },
        {
          id: '9',
          title: 'The Poetry of Modern Dance: Movement as Language',
          excerpt: 'Exploring the intersection of classical ballet technique and contemporary expression through the lens of today\'s most innovative choreographers.',
          image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Culture',
          author: 'Sofia Rodriguez',
          date: 'Nov 30, 2023',
          readTime: '8 min read'
        },
        {
          id: '10',
          title: 'Literary Salons: The Revival of Intellectual Gatherings',
          excerpt: 'How modern literary salons are creating intimate spaces for intellectual discourse, bringing together writers, thinkers, and cultural influencers.',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Culture',
          author: 'Isabella Chen',
          date: 'Nov 28, 2023',
          readTime: '6 min read'
        }
      ]
    },
    {
      name: 'Travel',
      icon: Globe,
      description: 'Exclusive destinations and transformative journeys',
      articles: [
        {
          id: '11',
          title: 'Antarctica Expeditions: Luxury at the End of the World',
          excerpt: 'Experience the raw beauty of Antarctica aboard ultra-luxury expedition vessels that combine adventure with five-star comfort and environmental responsibility.',
          image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
          category: 'Travel',
          author: 'Marcus Webb',
          date: 'Nov 25, 2023',
          readTime: '14 min read'
        },
        {
          id: '12',
          title: 'Japanese Ryokans: The Art of Hospitality Perfected',
          excerpt: 'Discover the centuries-old tradition of Japanese hospitality through stays at the country\'s most exclusive ryokans, where every detail is a meditation on perfection.',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          category: 'Travel',
          author: 'Aria Nakamura',
          date: 'Nov 22, 2023',
          readTime: '10 min read'
        }
      ]
    },
    {
      name: 'Architecture',
      icon: Building,
      description: 'Innovative design and architectural excellence',
      articles: [
        {
          id: '13',
          title: 'Floating Architecture: Cities on Water',
          excerpt: 'Pioneering architects are creating floating communities that challenge our understanding of urban living while addressing climate change and rising sea levels.',
          image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
          category: 'Architecture',
          author: 'James Morrison',
          date: 'Nov 20, 2023',
          readTime: '12 min read'
        },
        {
          id: '14',
          title: 'Biophilic Design: Nature as Architecture',
          excerpt: 'How leading architects are incorporating living elements into their designs, creating spaces that blur the boundaries between indoor and outdoor environments.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
          category: 'Architecture',
          author: 'Emma Thompson',
          date: 'Nov 18, 2023',
          readTime: '9 min read'
        }
      ]
    }
  ];

  return (
    <section className="section-luxury">
      <div className="container-luxury">
        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-20 last:mb-0">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                  <category.icon size={24} className="text-accent" />
                </div>
                <div>
                  <h2 className="text-luxury-title">{category.name}</h2>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>
              <button className="link-luxury text-sm font-medium uppercase tracking-wider group">
                View All
                <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.articles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="animate-luxury-slide-up" 
                  style={{ animationDelay: `${(categoryIndex * 3 + index) * 0.1}s` }}
                >
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Newsletter Teaser */}
        <div className="text-center mt-16 p-8 bg-luxury-pearl rounded-2xl">
          <h3 className="text-luxury-subtitle mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our exclusive community of luxury enthusiasts and receive weekly insights, 
            behind-the-scenes content, and early access to our most compelling stories.
          </p>
          <button className="btn-luxury-primary">
            Subscribe to Our Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySections;
