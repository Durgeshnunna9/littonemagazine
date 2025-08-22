
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Categories',
      links: [
        { label: 'Fashion', href: '/category/fashion' },
        { label: 'Lifestyle', href: '/category/lifestyle' },
        { label: 'Culture', href: '/category/culture' },
        { label: 'Architecture', href: '/category/architecture' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'Privacy Policy', href: '/privacy' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Newsletter', href: '/newsletter' },
        { label: 'Advertise', href: '/advertise' },
        { label: 'Press Kit', href: '/press' },
        { label: 'Brand Guidelines', href: '/brand' }
      ]
    }
  ];

  const socialIcons = [
    { Icon: Instagram, href: 'https://instagram.com' },
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Facebook, href: 'https://facebook.com' },
    { Icon: Youtube, href: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-luxury-pearl border-t border-border">
      <div className="container-luxury section-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="text-luxury-title font-luxury font-bold mb-4 block">
              <span className="text-foreground">LUXE</span>
              <span className="text-accent">.</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Defining contemporary luxury through exceptional storytelling 
              and cultural insight.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-accent transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-luxury font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm font-elegant">
              © 2023 Luxe Magazine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
