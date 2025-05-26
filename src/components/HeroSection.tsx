
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 leading-none">
            Elevate Your
            <span className="block gradient-text text-glow">Startup Vision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            We transform ambitious startups into market leaders through strategic acquisition optimization, 
            product-market fit mastery, and intelligent sales automation.
          </p>
          
          <button className="neumorphic-btn px-12 py-4 rounded-2xl text-white font-medium tracking-tight text-lg inline-flex items-center space-x-3 group">
            <span>Get Started</span>
            <i className="ph-light ph-arrow-right text-xl group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-violet-500 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-violet-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-violet-600 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;
