
import React, { useEffect, useRef, useState } from 'react';

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="mission" ref={sectionRef} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8 gradient-text">
              Our Mission
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-violet-600 to-violet-400 mx-auto mb-8" />
          </div>

          <div className="glass-card rounded-3xl p-12 md:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 mb-8">
                "To empower visionary entrepreneurs with the strategic tools and insights needed to 
                transform bold ideas into market-dominating enterprises."
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-card flex items-center justify-center">
                    <i className="ph-light ph-rocket text-2xl text-violet-400"></i>
                  </div>
                  <h3 className="text-lg font-medium mb-2 tracking-tight">Innovation</h3>
                  <p className="text-white/60 text-sm font-light">Cutting-edge strategies for modern challenges</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-card flex items-center justify-center">
                    <i className="ph-light ph-target text-2xl text-violet-400"></i>
                  </div>
                  <h3 className="text-lg font-medium mb-2 tracking-tight">Precision</h3>
                  <p className="text-white/60 text-sm font-light">Data-driven decisions for optimal results</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-card flex items-center justify-center">
                    <i className="ph-light ph-crown text-2xl text-violet-400"></i>
                  </div>
                  <h3 className="text-lg font-medium mb-2 tracking-tight">Excellence</h3>
                  <p className="text-white/60 text-sm font-light">Uncompromising quality in every engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
