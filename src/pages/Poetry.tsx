
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PoemCard from '../components/PoemCard';
import { Filter, Search, TrendingUp, Clock, Calendar } from 'lucide-react';

const Poetries = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  const categories = ['All', 'English', 'Hindi' ];
  
  const poems = [
    {
      id: '1',
      poet: 'Payal Ghosh',
      image: '/media/payal_6.jpeg',
      category: 'English',
      date: 'September 1 2025',
      readTime: '2 min read',
      trending: true
    },
    // {
    //   id: '2',
    //   poet: 'Marcus Webb',
    //   image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    //   category: 'Hindi',
    //   date: 'Dec 12, 2023',
    //   readTime: '8 min read'
    // },
    // {
    //   id: '3',
    //   poet: 'Sofia Rodriguez',
    //   image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'English',
    //   date: 'Dec 10, 2023',
    //   readTime: '15 min read',
      
    // },
    // {
    //   id: '4',
    //   title: 'Wellness Retreats for the Modern Soul: A Journey Within',
    //   excerpt: 'Discover transformative experiences at the world\'s most exclusive wellness retreats, where ancient healing practices meet contemporary luxury.',
    //   image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'Lifestyle',
    //   author: 'Emma Thompson',
    //   date: 'Dec 8, 2023',
    //   readTime: '9 min read'
    // },
    // {
    //   id: '5',
    //   title: 'Contemporary Art\'s Digital Renaissance: NFTs and Beyond',
    //   excerpt: 'How technology is transforming the way we create, collect, and experience art, from virtual galleries to blockchain-verified masterpieces.',
    //   image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80',
    //   category: 'Culture',
    //   author: 'Viktor Petrov',
    //   date: 'Dec 3, 2023',
    //   readTime: '13 min read'
    // },
    // {
    //   id: '6',
    //   title: 'The Future of Sustainable Luxury: Conscious Consumption',
    //   excerpt: 'How eco-consciousness is reshaping the luxury industry, from carbon-neutral private jets to lab-grown diamonds.',
    //   image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'Lifestyle',
    //   author: 'James Morrison',
    //   date: 'Dec 5, 2023',
    //   readTime: '11 min read',
    //   trending: true
    // },
    // {
    //   id: '7',
    //   title: 'Swiss Watchmaking: The Digital Age Paradox',
    //   excerpt: 'How traditional Swiss watchmakers are embracing smartwatch technology while preserving artisanal craftsmanship.',
    //   image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'Lifestyle',
    //   author: 'Viktor Petrov',
    //   date: 'Dec 1, 2023',
    //   readTime: '10 min read'
    // },
    // {
    //   id: '8',
    //   title: 'Antarctica Expeditions: Luxury at the End of the World',
    //   excerpt: 'Experience the raw beauty of Antarctica aboard ultra-luxury expedition vessels that combine adventure with five-star comfort.',
    //   image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    //   category: 'Travel',
    //   author: 'Marcus Webb',
    //   date: 'Nov 25, 2023',
    //   readTime: '14 min read'
    // },
    // {
    //   id: '9',
    //   title: 'Japanese Ryokans: The Art of Hospitality Perfected',
    //   excerpt: 'Discover the centuries-old tradition of Japanese hospitality through stays at the country\'s most exclusive ryokans.',
    //   image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    //   category: 'Travel',
    //   author: 'Aria Nakamura',
    //   date: 'Nov 22, 2023',
    //   readTime: '10 min read'
    // }
  ];

  const filteredPoems = selectedCategory === 'All' 
    ? poems 
    : poems.filter(poetry => poetry.category === selectedCategory);

  const trendingPoems = poems.filter(poetry => poetry.trending);

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
          <h1 className="text-luxury-headline mb-4">Poetries</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto">
            Explore our curated collection of stories that define contemporary luxury, 
            from exclusive interviews with industry leaders to in-depth explorations of cultural movements
          </p>
        </div>
      </section>

      {/* Trending Section */}
      {trendingPoems.length > 0 && (
        <section className="py-8 border-b border-border">
          <div className="container-luxury">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-accent" />
              <h2 className="font-luxury font-semibold text-xl">Trending Now</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {trendingPoems.map((poetry) => (
                <div key={`trending-${poetry.id}`} className="flex-shrink-0 w-72">
                  <PoemCard {...poetry} />
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
                {filteredPoems.length} poems found
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

      {/* Poetries Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          {filteredPoems.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-muted-foreground" />
              </div>
              <h3 className="font-luxury font-semibold text-xl mb-2">No Poems Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="btn-luxury-secondary"
              >
                Show All Poems
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPoems.map((poetry, index) => (
                <div 
                  key={poetry.id} 
                  className="animate-luxury-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PoemCard {...poetry} />
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPoems.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-luxury-secondary">
                Load More Poems
              </button>
              <p className="text-muted-foreground text-sm mt-4">
                Showing {filteredPoems.length} of {poems.length} poems
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Poetries;
