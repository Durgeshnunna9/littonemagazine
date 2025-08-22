
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds for demo
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Early access to our most compelling stories and interviews'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join a curated community of luxury enthusiasts and tastemakers'
    },
    {
      icon: TrendingUp,
      title: 'Trend Insights',
      description: 'Weekly insights on emerging trends in luxury and culture'
    }
  ];

  return (
    <section className="section-luxury bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 75% 75%, #D4AF37 0%, transparent 50%)`,
          backgroundSize: '200px 200px'
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent text-sm font-medium uppercase tracking-wider rounded-full mb-6">
              <Mail size={16} />
              Exclusive Newsletter
            </div>
            
            <h2 className="text-luxury-title text-white mb-4">
              Join Our Inner Circle
            </h2>
            
            <p className="text-luxury-subtitle text-white/80 mb-8">
              Subscribe to receive curated insights, exclusive interviews, and behind-the-scenes content 
              from the world of luxury culture. Join over 50,000 discerning readers worldwide.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center animate-luxury-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 text-accent rounded-full mb-4">
                  <benefit.icon size={20} />
                </div>
                <h3 className="font-luxury font-semibold text-lg mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="animate-luxury-fade-in text-center p-6">
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="font-luxury font-semibold text-xl mb-2 text-white">
                  Welcome to Luxe!
                </h3>
                <p className="text-white/70">
                  Thank you for subscribing. Check your inbox for a welcome message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="animate-luxury-slide-up">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-accent text-accent-foreground font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                <p className="text-white/50 text-xs mt-4 text-center">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>50,000+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>Weekly delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>4.9/5 reader rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
