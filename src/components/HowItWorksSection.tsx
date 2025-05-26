
import React, { useEffect, useRef, useState } from 'react';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Optimize Acquisition",
      description: "Transform your customer acquisition with data-driven strategies that maximize ROI and minimize cost per acquisition.",
      icon: "ph-chart-line-up",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Product Market Fit",
      description: "Achieve perfect alignment between your product and market demands through comprehensive market analysis and user research.",
      icon: "ph-target",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Automate Your Sales",
      description: "Implement intelligent automation systems that nurture leads, close deals, and scale your revenue without scaling your team.",
      icon: "ph-robot",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8">
              How We
              <span className="block gradient-text">Transform Startups</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-violet-600 to-violet-400 mx-auto mb-8" />
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto">
              Our proven three-pillar approach has helped hundreds of startups achieve exponential growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`glass-card rounded-3xl p-8 group hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center mb-4">
                    <i className={`ph-light ${service.icon} text-2xl text-violet-400`}></i>
                  </div>
                  <h3 className="text-2xl font-light tracking-tight mb-4 text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-white/60 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="inline-flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors font-light text-sm tracking-tight group">
                  <span>Learn More</span>
                  <i className="ph-light ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
