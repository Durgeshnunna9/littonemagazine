
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
    title: 'Power of Personal Style: The Classic Touch',
    subtitle: 'The most powerful thing about fashion is that its a form of self-expression',
    image: '/media/payal_1.jpeg',
    category: 'Fashion',
    author: 'Payal Ghosh',
    date: 'September 1 2025',
    readTime: '2 min read',
    content: `
      <p>Fashion changes every season, but personal style lasts forever. Trends may come and go, but style is a steady reflection of who we are. It is more than clothes it is about confidence, personality, and self-expression.

        My own style has always been classic. For me, simplicity is not boring it is elegance in its truest form. A white shirt, a little black dress, or a well-fitted blazer speaks louder than any short-lived trend. Classic fashion doesn't need to be loud; it stands out quietly. I believe that. "Real style starts with simplicity, grows with class, and lasts with elegance."

        The beauty of classic fashion is that it never goes out of place. It fits everywhere in the office, at a dinner party, or even on a casual outing. A pearl necklace passed down through family, a timeless trench coat, or soft. neutral shades each one carries a touch of grace. While fashion often pushes us to keep up, the classic style reminds us to stay grounded and true to ourselves.</p>
      
      <blockquote class="font-elegant text-xl italic text-center py-8 px-4 border-l-4 border-accent my-8">
        "Fashion is not just about clothing; it is about expressing who we are. The classic touch is timeless and powerful, a reflection of our authentic selves that never goes out of style."
        <cite class="block text-base text-muted-foreground mt-4 not-italic">— Anonymous</cite>
      </blockquote>
      
      <p>Personal style is powerful because it gives us confidence. When I dress in a way that feels like me, I carry myself differently. My steps are firmer. my presence stronger. Clothes stop being just fabric they become part of who I am. The classic style, especially, feels like wearing quiet confidence with grace.

        At the end of the day, fashion only dresses us, but style defines us. For me, choosing a classic look is not just about appearance it is about staying connected to who I am. In its simplicity, I feel strong. In its elegance, I feel free And in its timelessness, I find the power to express myself without saying a word.

      </p>
      <h1 className="text-2xl font-bold">HOW MUCH DOES IT COST YOU TO ALIGN YOUR PERSONAL STYLE WITH YOUR AUTHENTIC SELF, AND HOW DOES THIS IMPACT YOUR INTERACTIONS WITH OTHERS</h1>
    `
  };

  // const relatedArticles = [
  //   {
  //     id: '2',
  //     title: 'Minimalist Architecture: Form Follows Function',
  //     excerpt: 'A deep dive into the world of contemporary minimalist design.',
  //     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
  //     category: 'Architecture',
  //     author: 'Marcus Webb',
  //     date: 'Dec 12, 2023'
  //   },
  //   {
  //     id: '3',
  //     title: 'The Art of Michelin Gastronomy',
  //     excerpt: 'Behind the scenes with world-renowned chefs.',
  //     image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  //     category: 'Culinary',
  //     author: 'Sofia Rodriguez',
  //     date: 'Dec 10, 2023'
  //   }
  // ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Image */}
      <section className="relative h-auto md:h-[60vh] overflow-hidden bg-grey-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-contain "
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute top-6 left-6 ">
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
      {/* <section className="section-luxury bg-luxury-pearl">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Article;
