
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury lifestyle"
          className="w-full h-full object-cover blur-xs"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Fixed visibility */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto opacity-100 ">
        <div className="mb-6">
          <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium uppercase tracking-wider rounded-full">
            Featured Story
          </span>
        </div>
        
        <h1 className="text-luxury-headline text-white mb-6">
        Power of Personal Style: <br /><span className="text-accent italic">The Classic Touch</span>
        </h1>
        
        <p className="text-luxury-subtitle text-white/90 mb-8 max-w-3xl mx-auto">
          The most powerful thing about fashion is that its a form of self-expression.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="btn-luxury-primary group" onClick={() => window.location.href = '/article/1'}>
            Read Full Story
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          
          {/* <button className="btn-luxury-secondary group">
            <Play size={16} className="mr-2" />
            Watch Video
          </button> */}
        </div>

        {/* Story Meta */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/70">
          <span>By Payal Ghosh</span>
          <span>•</span>
          <span>September 1, 2025 </span>
          <span>•</span>
          <span>2 min read</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
