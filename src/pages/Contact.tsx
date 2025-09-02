
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send(
      'service_uywma0h',       // from EmailJS dashboard
      'template_nsgwya9',      // your email template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      '5tJjmHnrVmuCPnhud'           // public key from EmailJS
    )
    .then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'littonemagazine777@gmail.com',
      href: 'mailto:littonemagazine777@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7330866686',
      href: 'tel:+91 7330866686'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Mumbai, India',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Page Header */}
      <section className="section-luxury bg-luxury-pearl">
        <div className="container-luxury text-center">
          <h1 className="text-luxury-headline mb-4 animate-luxury-fade-in">Contact Us</h1>
          <p className="text-luxury-subtitle max-w-2xl mx-auto animate-luxury-slide-up">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-luxury">
        <div className="container-luxury max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-luxury-slide-up">
              <h2 className="text-luxury-title mb-8">Send us a message</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-luxury-primary inline-flex items-center gap-2 group"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="animate-luxury-fade-in text-center py-12">
                  <div className="inline-flex items-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-xl mb-4">
                    <Send size={20} />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="animate-luxury-slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-luxury-title mb-8">Get in touch</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{info.label}</h3>
                      {info.href === '#' ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-accent transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-luxury-pearl p-8 rounded-2xl">
                <h3 className="font-luxury font-semibold text-xl mb-4">Editorial Submissions</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in contributing to The Lite Tone Magazine? We welcome story pitches, 
                  photography submissions, and collaboration proposals from talented creators.
                </p>
                <p 
                  className="link-luxury font-medium"
                >
                  littonemagazine777@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
