
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="section-luxury bg-foreground text-background">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-luxury-title text-background mb-4">
              Stay in the Loop
            </h2>
            <p className="text-luxury-body text-background/80 max-w-xl mx-auto">
              Subscribe to our exclusive newsletter for the latest in luxury lifestyle, 
              fashion insights, and cultural discoveries.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-background text-foreground rounded-xl border-2 border-transparent focus:border-accent focus:outline-none transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="btn-luxury-gold whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="animate-luxury-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-xl">
                <Mail size={20} />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
