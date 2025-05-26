
import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content: "The Kreator Syndicate transformed our acquisition strategy completely. Their data-driven approach helped us scale from 10K to 500K monthly recurring revenue.",
      result: "5000% Revenue Growth",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, CloudScale",
      content: "Working with Kreator was a game-changer. They didn't just optimize our sales funnel - they revolutionized our entire go-to-market strategy.",
      result: "300% Conversion Rate Increase",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "CMO, DataSync",
      content: "The automation systems they implemented saved us 40 hours per week while doubling our lead quality. Absolutely incredible results.",
      result: "40 Hours/Week Saved",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8">
              Client Success
              <span className="block gradient-text">Stories</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-violet-600 to-violet-400 mx-auto" />
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="glass-card rounded-3xl p-12 md:p-16 mx-4">
                      <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                          <img 
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mx-auto mb-6 ring-2 ring-violet-500/20"
                          />
                          <div className="flex justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="ph-fill ph-star text-yellow-400 text-xl"></i>
                            ))}
                          </div>
                        </div>

                        <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-white/80 mb-8">
                          "{testimonial.content}"
                        </blockquote>

                        <div className="mb-6">
                          <div className="inline-block bg-gradient-to-r from-violet-600 to-violet-400 rounded-full px-6 py-2">
                            <span className="text-white font-medium text-sm tracking-tight">
                              {testimonial.result}
                            </span>
                          </div>
                        </div>

                        <div>
                          <div className="font-medium text-white tracking-tight">{testimonial.name}</div>
                          <div className="text-white/60 text-sm font-light">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-violet-500 scale-125' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
