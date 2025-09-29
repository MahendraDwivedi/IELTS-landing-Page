import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp } from "lucide-react";

const testimonials = [
  { 
    name: "Ananya Sharma", 
    review: "I scored Band 8! The mock tests felt just like the real exam. The detailed feedback helped me understand exactly where I needed to improve.",
    role: "Software Engineer",
    score: "8.0",
    image: "AS",
    location: "Mumbai, India",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "Ravi Kumar", 
    review: "The AI feedback was super accurate and helped me improve fast. Within 3 months, I went from Band 6 to Band 7.5. Highly recommend!",
    role: "Medical Student",
    score: "7.5",
    image: "RK",
    location: "Delhi, India",
    color: "from-purple-500 to-pink-500"
  },
  { 
    name: "Sophia Chen", 
    review: "Amazing teachers! The speaking practice boosted my confidence tremendously. I never thought I could speak so fluently in English.",
    role: "Marketing Manager",
    score: "8.5",
    image: "SC",
    location: "Singapore",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Michael Johnson", 
    review: "The study materials are comprehensive and easy to follow. I achieved my target score in just 2 months of consistent practice.",
    role: "Business Analyst",
    score: "7.0",
    image: "MJ",
    location: "London, UK",
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "Priya Patel", 
    review: "Best investment I made for my career! The writing feedback was incredibly detailed and helped me structure my essays perfectly.",
    role: "Nurse",
    score: "7.5",
    image: "PP",
    location: "Toronto, Canada",
    color: "from-indigo-500 to-purple-500"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative px-6 lg:px-8 py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">Student Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What Our Students
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream IELTS scores
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Award, label: "Success Rate", value: "94%", color: "text-blue-600" },
            { icon: TrendingUp, label: "Avg Score Increase", value: "+1.5", color: "text-purple-600" },
            { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-yellow-500" },
            { icon: Award, label: "Band 8+ Achievers", value: "2,500+", color: "text-green-600" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Desktop view - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className={`transform transition-all duration-500 ${
                    isCenter ? 'scale-105 z-10' : 'scale-95 opacity-75'
                  }`}
                >
                  <TestimonialCard testimonial={testimonial} isCenter={isCenter} />
                </div>
              );
            })}
          </div>

          {/* Mobile view - 1 card */}
          <div className="md:hidden mb-8">
            <TestimonialCard testimonial={testimonials[currentIndex]} isCenter={true} />
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ready to join our successful students?</p>
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <span>Start Your Journey</span>
            <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, isCenter }) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
      isCenter ? 'border-2 border-blue-200' : ''
    }`}>
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-16 h-16 text-gray-400" />
      </div>

      <div className="relative p-8">
        {/* Header with avatar and score */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
              {testimonial.image}
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center border-2 border-white`}>
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
            </div>

            {/* Name and role */}
            <div>
              <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-gray-400">{testimonial.location}</p>
            </div>
          </div>

          {/* Score badge */}
          <div className={`flex flex-col items-center px-4 py-2 bg-gradient-to-br ${testimonial.color} rounded-xl text-white shadow-lg`}>
            <span className="text-xs font-semibold">Band Score</span>
            <span className="text-2xl font-bold">{testimonial.score}</span>
          </div>
        </div>

        {/* Review text */}
        <p className="text-gray-600 leading-relaxed mb-6 italic">
          "{testimonial.review}"
        </p>

        {/* Star rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className={`h-1 bg-gradient-to-r ${testimonial.color}`}></div>
    </div>
  );
};

export default Testimonials;