
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Gift, Star, Clock } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    { icon: Mail, title: 'Weekly Digest', description: 'Curated luxury content delivered every Thursday' },
    { icon: Gift, title: 'Exclusive Access', description: 'First access to limited content and events' },
    { icon: Star, title: 'Premium Insights', description: 'Behind-the-scenes stories and industry insights' },
    { icon: Clock, title: 'Early Access', description: 'Read new articles before they go public' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            Stay <span className="text-accent italic">Connected</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Join thousands of luxury enthusiasts who receive our weekly digest
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Newsletter Benefits</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Discover what makes our newsletter the preferred choice for luxury connoisseurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center animate-luxury-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <benefit.icon size={24} />
                </div>
                <h3 className="font-luxury font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-luxury">
        <div className="container-luxury max-w-2xl mx-auto text-center">
          <h2 className="text-luxury-title mb-4">Subscribe Now</h2>
          <p className="text-luxury-subtitle mb-8">
            Join our exclusive community and never miss a story that matters
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-2 border-border rounded-xl focus:border-accent focus:outline-none"
                required
              />
              <button
                type="submit"
                className="btn-luxury-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="animate-luxury-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-xl mb-4">
                <Mail size={20} />
                <span className="font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-muted-foreground">
                Welcome to the Luxe community. Check your inbox for a confirmation email.
              </p>
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy and Terms of Service. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
