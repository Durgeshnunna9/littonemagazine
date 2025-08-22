
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-luxury">
        <div className="container-luxury max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-luxury-headline mb-4">Privacy Policy</h1>
            <p className="text-luxury-subtitle">
              Last updated: December 20, 2023
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-luxury-title mb-4">Information We Collect</h2>
            <p className="text-luxury-body mb-6">
              At Luxe Magazine, we collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us. This may include your name, email address, and preferences.
            </p>

            <h2 className="text-luxury-title mb-4">How We Use Your Information</h2>
            <p className="text-luxury-body mb-6">
              We use the information we collect to provide, maintain, and improve our services, send you newsletters 
              and updates, respond to your inquiries, and personalize your experience on our platform.
            </p>

            <h2 className="text-luxury-title mb-4">Information Sharing</h2>
            <p className="text-luxury-body mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your 
              consent, except as described in this privacy policy or as required by law.
            </p>

            <h2 className="text-luxury-title mb-4">Data Security</h2>
            <p className="text-luxury-body mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-luxury-title mb-4">Your Rights</h2>
            <p className="text-luxury-body mb-6">
              You have the right to access, update, or delete your personal information. You may also opt out of 
              receiving promotional communications from us at any time.
            </p>

            <h2 className="text-luxury-title mb-4">Contact Us</h2>
            <p className="text-luxury-body">
              If you have any questions about this Privacy Policy, please contact us at privacy@luxemagazine.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
