
import React, { useEffect, useRef, useState } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "What makes The Kreator Syndicate different from other agencies?",
      answer: "We focus exclusively on startups and scale-ups, bringing deep expertise in the unique challenges of early-stage companies. Our data-driven approach combines cutting-edge technology with proven methodologies to deliver measurable results."
    },
    {
      question: "How long does it typically take to see results?",
      answer: "Most clients see initial improvements within 30-60 days, with significant transformations occurring within 90-120 days. However, timelines vary based on your current state and specific goals."
    },
    {
      question: "Do you work with companies in specific industries?",
      answer: "While we work across various industries, we specialize in B2B SaaS, fintech, healthtech, and e-commerce companies. Our frameworks are adaptable to most business models."
    },
    {
      question: "What's included in your engagement process?",
      answer: "Each engagement includes comprehensive auditing, strategic planning, implementation support, performance monitoring, and ongoing optimization. We provide dedicated project management and regular reporting."
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured through key metrics including customer acquisition cost (CAC), lifetime value (LTV), conversion rates, revenue growth, and ROI. We establish clear KPIs at the beginning of each engagement."
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-8">
              Frequently Asked
              <span className="block gradient-text">Questions</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-violet-600 to-violet-400 mx-auto mb-8" />
            <p className="text-xl text-white/60 font-light">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-light tracking-tight text-white pr-4">
                    {faq.question}
                  </h3>
                  <i className={`ph-light ${openFAQ === index ? 'ph-minus' : 'ph-plus'} text-xl text-violet-400 flex-shrink-0 transition-transform duration-300`}></i>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className="text-white/70 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 font-light mb-6">
              Still have questions? We'd love to help.
            </p>
            <button className="neumorphic-btn px-8 py-3 rounded-xl text-white font-medium tracking-tight inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <i className="ph-light ph-chat-circle text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
