
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Calendar, User, Share2, Facebook, Twitter } from 'lucide-react';

const Article = () => {
  const { id } = useParams();

  // Mock article data
  const article = {
    id: '1',
    title: 'The Renaissance of Haute Couture: Where Tradition Meets Innovation',
    subtitle: 'Exploring how traditional craftsmanship meets contemporary design in today\'s fashion landscape',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Fashion',
    author: 'Isabella Chen',
    date: 'December 15, 2023',
    readTime: '8 min read',
    content: `
      <p>In the ever-evolving world of fashion, haute couture remains the pinnacle of sartorial artistry. This season, we witness a fascinating renaissance where centuries-old techniques merge seamlessly with cutting-edge innovation, creating garments that are both timeless and thoroughly contemporary.</p>
      
      <p>The ateliers of Paris, long considered the guardians of traditional craftsmanship, are embracing new technologies while maintaining their commitment to hand-sewn excellence. From 3D printing delicate lace patterns to using sustainable materials in ways never before imagined, today's couturiers are redefining what luxury means in the 21st century.</p>
      
      <blockquote class="font-elegant text-xl italic text-center py-8 px-4 border-l-4 border-accent my-8">
        "Couture is not just about creating beautiful clothes; it's about preserving a cultural heritage while pushing the boundaries of what's possible."
        <cite class="block text-base text-muted-foreground mt-4 not-italic">— Maria Grazia Chiuri, Creative Director</cite>
      </blockquote>
      
      <p>The modern atelier is a place where tradition and innovation dance together in perfect harmony. Master craftspeople, some with decades of experience, work alongside young designers fluent in digital design tools. This intergenerational collaboration is producing some of the most exciting work we've seen in years.</p>
      
      <p>Sustainability, once considered antithetical to luxury, is now driving innovation in the most prestigious fashion houses. Designers are experimenting with lab-grown silk, recycled precious metals, and innovative dyeing techniques that require minimal water and produce zero waste.</p>
      
      <p>As we look toward the future, it's clear that haute couture will continue to evolve while maintaining its essential character: the celebration of human craftsmanship and the pursuit of absolute beauty in clothing.</p>
    `
  };

  const relatedArticles = [
    {
      id: '2',
      title: 'Minimalist Architecture: Form Follows Function',
      excerpt: 'A deep dive into the world of contemporary minimalist design.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      category: 'Architecture',
      author: 'Marcus Webb',
      date: 'Dec 12, 2023'
    },
    {
      id: '3',
      title: 'The Art of Michelin Gastronomy',
      excerpt: 'Behind the scenes with world-renowned chefs.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culinary',
      author: 'Sofia Rodriguez',
      date: 'Dec 10, 2023'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Image */}
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute top-6 left-6">
          <Link 
            to="/articles"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white transition-colors duration-300"
          >
            ← Back to Articles
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-luxury">
        <div className="container-luxury max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="text-center mb-12 animate-luxury-fade-in">
            <div className="mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-luxury-headline mb-4">
              {article.title}
            </h1>
            
            <p className="text-luxury-subtitle mb-8">
              {article.subtitle}
            </p>
            
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={16} />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {article.date}
              </span>
              <span>{article.readTime}</span>
            </div>
          </header>

          {/* Article Body */}
          <div className="animate-luxury-slide-up">
            <div 
              className="prose prose-lg max-w-none text-luxury-body leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Social Share */}
            <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 size={16} />
                Share this article:
              </span>
              <button className="p-2 hover:text-accent transition-colors duration-300">
                <Facebook size={20} />
              </button>
              <button className="p-2 hover:text-accent transition-colors duration-300">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <h2 className="text-luxury-title text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((article, index) => (
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

export default Article;
