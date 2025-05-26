
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/ad246373-1565-4ccd-b80e-764698962231.png" 
              alt="The Kreator Syndicate" 
              className="h-10 w-auto mb-6"
            />
            <p className="text-white/60 font-light leading-relaxed max-w-md">
              Empowering visionary entrepreneurs with strategic tools and insights to transform 
              bold ideas into market-dominating enterprises.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="ph-light ph-linkedin-logo text-lg text-white/70"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="ph-light ph-twitter-logo text-lg text-white/70"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                <i className="ph-light ph-instagram-logo text-lg text-white/70"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium tracking-tight mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Acquisition Optimization</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Product Market Fit</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Sales Automation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Strategic Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium tracking-tight mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-white/60 font-light text-sm flex items-center space-x-2">
                <i className="ph-light ph-envelope text-lg"></i>
                <span>hello@kreatorsyndicate.com</span>
              </li>
              <li className="text-white/60 font-light text-sm flex items-center space-x-2">
                <i className="ph-light ph-phone text-lg"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-white/60 font-light text-sm flex items-center space-x-2">
                <i className="ph-light ph-map-pin text-lg"></i>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 font-light text-sm">
            © {currentYear} The Kreator Syndicate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-light text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
