import React, { useState, useEffect } from "react";
import { TrendingUp, Award, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: "Active Students", value: "50K+" },
    { icon: Award, label: "Success Rate", value: "94%" },
    { icon: TrendingUp, label: "Avg Band Score", value: "7.5" }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              #1 IELTS Prep Platform 2025
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Crack IELTS with
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Confidence 🚀
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Join thousands of students achieving their dream band score with expert coaching, AI-powered tools, and unlimited practice tests.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <p className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{stat.value}</p>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Placeholder content - replace with your heroImg */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Award className="w-24 h-24 mx-auto mb-4 animate-bounce" />
                      <p className="text-2xl font-bold">Your IELTS Success</p>
                      <p className="text-lg opacity-90">Starts Here</p>
                    </div>
                  </div>
                  {/* Uncomment and use your actual image:
                  <img 
                    src={heroImg} 
                    alt="IELTS Banner" 
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="text-sm font-semibold text-gray-900">⭐ 4.9/5 Rating</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
                <p className="text-sm font-semibold text-gray-900">🔥 100% Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;