
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { Mic, Quote, Users } from 'lucide-react';

const Interviews = () => {
  const interviews = [
    {
      id: 'interview-1',
      title: 'Maria Grazia Chiuri: Redefining Dior\'s Feminine Voice',
      excerpt: 'An intimate conversation with Dior\'s Creative Director about feminism, fashion, and the future of luxury couture in the modern world.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Fashion',
      author: 'Isabella Chen',
      date: 'Dec 20, 2023',
      readTime: '25 min read',
      featured: true
    },
    {
      id: 'interview-2',
      title: 'Philippe Starck: Design Philosophy for the Future',
      excerpt: 'The legendary designer discusses sustainability, innovation, and how luxury design must evolve to meet tomorrow\'s challenges.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      category: 'Design',
      author: 'Marcus Webb',
      date: 'Dec 18, 2023',
      readTime: '30 min read'
    },
    {
      id: 'interview-3',
      title: 'Chef Alain Ducasse: The Art of Culinary Excellence',
      excerpt: 'A rare interview with the Michelin-starred chef about his philosophy on fine dining, sustainability, and culinary innovation.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culinary',
      author: 'Sofia Rodriguez',
      date: 'Dec 16, 2023',
      readTime: '22 min read'
    },
    {
      id: 'interview-4',
      title: 'Zaha Hadid Architects: Building the Future',
      excerpt: 'The team behind the late architect\'s legacy discusses continuing her vision and pushing architectural boundaries.',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Architecture',
      author: 'Alexander Stone',
      date: 'Dec 14, 2023',
      readTime: '28 min read'
    },
    {
      id: 'interview-5',
      title: 'Bernard Arnault: The Art of Luxury Business',
      excerpt: 'LVMH\'s Chairman shares insights on building luxury empires, art patronage, and the future of premium brands.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      category: 'Business',
      author: 'Victoria Laurent',
      date: 'Dec 12, 2023',
      readTime: '35 min read'
    },
    {
      id: 'interview-6',
      title: 'Iris Apfel: A Life in Style and Color',
      excerpt: 'The fashion icon discusses her incredible journey, personal style philosophy, and advice for the next generation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      category: 'Lifestyle',
      author: 'Emma Thompson',
      date: 'Dec 10, 2023',
      readTime: '20 min read'
    }
  ];

  const interviewTypes = [
    { icon: Mic, title: 'Exclusive Interviews', description: 'One-on-one conversations with industry leaders' },
    { icon: Quote, title: 'Thought Leadership', description: 'Insights from visionaries shaping the future' },
    { icon: Users, title: 'Panel Discussions', description: 'Multi-perspective conversations on key topics' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
            alt="Interviews"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
              Exclusive Access
            </span>
          </div>
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            In-Depth <span className="text-accent italic">Interviews</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Intimate conversations with the visionaries shaping luxury, culture, and design
          </p>
        </div>
      </section>

      {/* Interview Types */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviewTypes.map((type, index) => (
              <div key={type.title} className="text-center animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <type.icon size={24} />
                </div>
                <h3 className="font-luxury font-semibold text-xl mb-2">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Latest Interviews</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Exclusive conversations with the most influential voices in luxury and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interviews.map((interview, index) => (
              <div key={interview.id} className="animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ArticleCard {...interview} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interviews;
