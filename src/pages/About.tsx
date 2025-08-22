
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Isabella Chen',
      role: 'Editor-in-Chief',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: 'Former Vogue editor with 15 years of experience in luxury lifestyle journalism.'
    },
    {
      name: 'Marcus Webb',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      bio: 'Award-winning designer specializing in editorial layouts and brand aesthetics.'
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Senior Writer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      bio: 'Acclaimed journalist covering culture, fashion, and contemporary art.'
    },
    {
      name: 'James Morrison',
      role: 'Photography Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: 'Fashion and lifestyle photographer with work featured in major publications worldwide.'
    }
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Monthly Readers' },
    { icon: Globe, value: '50+', label: 'Countries Reached' },
    { icon: Award, value: '15+', label: 'Industry Awards' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
            alt="About Luxe Magazine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-luxury-headline text-white mb-6 animate-luxury-fade-in">
            About <span className="text-accent italic">Luxe</span>
          </h1>
          <p className="text-luxury-subtitle text-white/90 animate-luxury-slide-up">
            Defining contemporary luxury through exceptional storytelling and cultural insight
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-luxury">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <div className="animate-luxury-fade-in">
            <h2 className="text-luxury-title mb-8">Our Mission</h2>
            <p className="text-luxury-body mb-8 text-lg leading-relaxed">
              At Luxe Magazine, we believe that luxury is not just about material possessions—it's about 
              experiences, craftsmanship, and the pursuit of excellence in all its forms. We curate stories 
              that celebrate the artisans, creators, and visionaries who shape our cultural landscape.
            </p>
            <p className="text-luxury-body text-lg leading-relaxed">
              Our commitment extends beyond beautiful imagery and compelling narratives. We champion 
              sustainability, diversity, and innovation within the luxury sector, showcasing how traditional 
              craftsmanship can evolve to meet contemporary values.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-luxury-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-luxury font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-luxury">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Our Team</h2>
            <p className="text-luxury-subtitle max-w-2xl mx-auto">
              Meet the passionate individuals behind our editorial excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="text-center group animate-luxury-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="font-luxury font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-luxury-title mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-luxury-slide-up">
              <h3 className="font-luxury font-semibold text-xl mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest editorial standards, celebrating craftsmanship and artistry in all their forms.
              </p>
            </div>
            
            <div className="text-center animate-luxury-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-luxury font-semibold text-xl mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and fresh perspectives while honoring traditional expertise.
              </p>
            </div>
            
            <div className="text-center animate-luxury-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-luxury font-semibold text-xl mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We promote responsible luxury that considers environmental and social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
