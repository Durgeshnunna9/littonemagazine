
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Filter, Search, TrendingUp, Clock, Calendar } from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  const categories = ['All', 'Fashion', 'Lifestyle', 'Culture', 'Architecture', 'Culinary', 'Travel'];
  
  const articles = [
    {
      id: '1',
      title: 'The Renaissance of Haute Couture: Where Dreams Meet Reality',
      excerpt: 'An exclusive behind-the-scenes look at how Paris\' most prestigious ateliers are blending centuries-old craftsmanship with cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Isabella Chen',
      date: 'Dec 15, 2023',
      readTime: '12 min read',
      trending: true
    },
    {
      id: '2',
      title: 'Minimalist Architecture: The Poetry of Empty Space',
      excerpt: 'Exploring how contemporary architects are using negative space and natural light to create homes that feel both monumental and intimate.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      category: 'Architecture',
      author: 'Marcus Webb',
      date: 'Dec 12, 2023',
      readTime: '8 min read'
    },
    {
      id: '3',
      title: 'The Michelin Revolution: Beyond Three Stars',
      excerpt: 'Meet the visionary chefs who are transforming fine dining by challenging traditional boundaries and incorporating molecular gastronomy.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culinary',
      author: 'Sofia Rodriguez',
      date: 'Dec 10, 2023',
      readTime: '15 min read',
      trending: true
    },
    {
      id: '4',
      title: 'Wellness Retreats for the Modern Soul: A Journey Within',
      excerpt: 'Discover transformative experiences at the world\'s most exclusive wellness retreats, where ancient healing practices meet contemporary luxury.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Emma Thompson',
      date: 'Dec 8, 2023',
      readTime: '9 min read'
    },
    {
      id: '5',
      title: 'Contemporary Art\'s Digital Renaissance: NFTs and Beyond',
      excerpt: 'How technology is transforming the way we create, collect, and experience art, from virtual galleries to blockchain-verified masterpieces.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
      category: 'Culture',
      author: 'Viktor Petrov',
      date: 'Dec 3, 2023',
      readTime: '13 min read'
    },
    {
      id: '6',
      title: 'The Future of Sustainable Luxury: Conscious Consumption',
      excerpt: 'How eco-consciousness is reshaping the luxury industry, from carbon-neutral private jets to lab-grown diamonds.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'James Morrison',
      date: 'Dec 5, 2023',
      readTime: '11 min read',
      trending: true
    },
    {
      id: '7',
      title: 'Swiss Watchmaking: The Digital Age Paradox',
      excerpt: 'How traditional Swiss watchmakers are embracing smartwatch technology while preserving artisanal craftsmanship.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Lifestyle',
      author: 'Viktor Petrov',
      date: 'Dec 1, 2023',
      readTime: '10 min read'
    },
    {
      id: '8',
      title: 'Antarctica Expeditions: Luxury at the End of the World',
      excerpt: 'Experience the raw beauty of Antarctica aboard ultra-luxury expedition vessels that combine adventure with five-star comfort.',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      category: 'Travel',
      author: 'Marcus Webb',
      date: 'Nov 25, 2023',
      readTime: '14 min read'
    },
    {
      id: '9',
      title: 'Japanese Ryokans: The Art of Hospitality Perfected',
      excerpt: 'Discover the centuries-old tradition of Japanese hospitality through stays at the country\'s most exclusive ryokans.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Travel',
      author: 'Aria Nakamura',
      date: 'Nov 22, 2023',
      readTime: '10 min read'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const trendingArticles = articles.filter(article => article.trending);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium uppercase tracking-wider rounded-full">
              Editorial Collection
            </span>
          </div>
          <h1 className="text-luxury-headline mb-4">Articles</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Explore our curated collection of stories that define contemporary luxury, 
            from exclusive interviews with industry leaders to in-depth explorations of cultural movements
          </p>
        </div>
      </section>

      {/* Trending Section */}
      {trendingArticles.length > 0 && (
        <section className="py-8 border-b border-border">
          <div className="container-luxury">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-accent" />
              <h2 className="font-luxury font-semibold text-xl">Trending Now</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {trendingArticles.map((article) => (
                <div key={`trending-${article.id}`} className="flex-shrink-0 w-72">
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Filter size={20} />
              <span className="font-medium">Filter & Sort:</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                {filteredArticles.length} articles found
              </span>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Most Popular</option>
                <option value="readTime">Quick Reads</option>
              </select>
            </div>
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
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-muted-foreground" />
              </div>
              <h3 className="font-luxury font-semibold text-xl mb-2">No Articles Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="btn-luxury-secondary"
              >
                Show All Articles
              </button>
            </div>
          ) : (
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
          )}

          {/* Load More Button */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-luxury-secondary">
                Load More Articles
              </button>
              <p className="text-muted-foreground text-sm mt-4">
                Showing {filteredArticles.length} of {articles.length} articles
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
