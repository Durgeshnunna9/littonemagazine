
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PoemCard from '../components/PoemCard';
import { Calendar, User, Share2, Facebook, Twitter } from 'lucide-react';

const Poem = () => {
  const { id } = useParams();

  // Mock article data
  const poem = {
    id: '1',
    poet: 'Payal Ghosh',
    image: '../media/banner_1.jpg',
    category: 'English',
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
      <section className="relative h-80 md:h-[40vh] overflow-hidden bg-grey-900">
        <img
          src={poem.image}
          alt={poem.poet}
          className="w-full h-full object-contain "
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute top-6 left-6">
          <Link 
            to="/poetry"
            className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white transition-colors duration-300"
          >
            ← Back to Poems
          </Link>
        </div>
      </section>

      {/* Poem Content */}
      <article className="section-luxury">
        <div className="container-luxury max-w-4xl mx-auto">
          {/* Poem Header */}
          <header className="text-center mb-12 animate-luxury-fade-in">
            <div className="mb-4">
              <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
                {poem.category}
              </span>
            </div>
            
            <h1 className="text-luxury-headline mb-4">
              {poem.poet}
            </h1>
            
            {/* <p className="text-luxury-subtitle mb-8">
              {poem.subtitle}
            </p> */}
            
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              {/* <span className="flex items-center gap-2">
                <User size={16} />
                {poem.poet}
              </span> */}
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {poem.date}
              </span>
              <span>{poem.readTime}</span>
            </div>
          </header>

          {/* Poem Body */}
          <div className="animate-luxury-slide-up">
            <div 
              className="prose prose-lg max-w-none text-luxury-body leading-relaxed">
                <h1 className="text-4xl text-center pb-4 text-luxury-headline"> Yes it was love</h1>
                <p className='text-center'>
                    I don't know when I first heard your name, <br />
                    A name so common, yet never the same. <br />

                    Spoken by you, it felt so rare, <br />
                    A melody drifting in the air. <br />
                    <br />

                    Then I saw your art, your gentle hand, <br />
                    Lines and colors I couldn't withstand. <br />

                    I fell for your world, your mind so free, <br />
                    A beauty beyond what eyes could see. <br />
                    <br />

                    I knew nothing, yet knew it all, <br />
                    Like echoes from a time long gone. <br />
                    Was this love, or just a dream? <br />
                    A feeling too deep, too unseen. <br />
                    <br />

                    I asked for friendship, nothing more,<br />
                    Afraid to knock on love's closed door. <br />
                    But silence stood where words should be, <br />
                    And I thought, maybe you're not for me. <br />
                    <br />

                    So I left, I let you go, <br />
                    Buried feelings you'd never know. <br />
                    But years passed, and there you were, <br />
                    A ghost turned real, standing near. <br />
                    <br />

                    Was I dreaming? Was this true?<br />
                    Heartbeats raced as I looked at you.<br />
                    No more doubts, no more fears, <br />
                    Yes, it was love, through all these years. <br />
                    <br />
                </p>
            </div>
              {/* dangerouslySetInnerHTML={{ __html: poem.content }} */}
            <div>
                <blockquote className="font-elegant text-xl italic text-center py-8 px-4 border-l-4 border-accent my-8">
                    "Fashion is not just about clothing; it is about expressing who we are. The classic touch is timeless and powerful, a reflection of our authentic selves that never goes out of style."
                    <cite className="block text-base text-muted-foreground mt-4 not-italic">— Anonymous</cite>
                </blockquote>
            </div>
            <div 
              className="prose prose-lg max-w-none text-luxury-body leading-relaxed">
                <h1 className="text-4xl text-center pb-4 text-luxury-headline"> Fading Embers</h1>
                <p className='text-center'>
                    I had so much to say, but words got stuck, <br />
                    As I watched you leave, my heart in a heavy lock. <br />
                    <br />

                    You prayed for my solace, but I was drowning deep, <br />
                    My heart lost in a sea, my tears a endless sleep. <br />
                    <br />
                    
                    Now I'm torn, between letting go and holding tight, <br />
                    Between memories and the dark of night. <br />
                    <br />

                    Even if we never meet again, I'll bear the pain, <br />
                    Of losing you, of living without you, in vain. <br />
                    <br />

                    This is how much I want to stay, <br />
                    To hold on to the past, to keep our love alive today <br />
                    <br />
                </p>
            </div>
            <div>
                <blockquote className="font-elegant text-xl italic text-center py-8 px-4 border-l-4 border-accent my-8">
                    "Your eyes hold everything my soul thrists for"
                    <cite className="block text-base text-muted-foreground mt-4 not-italic">— Anonymous</cite>
                </blockquote>
            </div>
            {/*Poem 3 */}
            <div 
              className="prose prose-lg max-w-none text-luxury-body leading-relaxed">
                <h1 className="text-4xl text-center pb-4 text-luxury-headline"> Becoming My Own Home</h1>
                <p className='text-center'>
                    I gave my heart, my soul, my time, <br />
                    To love that never felt like mine. <br />
                    I bent, I broke, I lost my way, <br />
                    In hopes that he would always stay. <br />
                    <br />

                    I changed my laugh, my dreams, my light, <br />
                    Dimmed myself to make him shine bright.<br />
                    <br />

                    But love should never cost my name<br />
                    I won't play that losing game.<br />
                    <br />

                    Now I stand where sorrow grew, <br />
                    Tracing scars I never knew. <br />
                    Softly whispering, "It's okay, <br />
                    You deserve to heal someday." <br />
                    <br />
                    No more chasing, no more pleas, <br />
                    No more drowning just to breathe. <br />
                    I am here, and I am whole,<br />
                    I am enough-body and soul. <br />
                    <br />
                    The love I gave, I'll give to me, <br />
                    My first priority, finally free. <br />
                    <br />
                </p>
            </div>

            {/* Social Share */}
            <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border">
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 size={16} />
                Share this poem:
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

export default Poem;
