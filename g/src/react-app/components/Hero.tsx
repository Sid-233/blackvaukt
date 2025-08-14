import { ArrowRight, Shield, Sparkles, Zap, Users, Award } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl opacity-20 animate-float-delayed"></div>
        
        {/* Morphing blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-30 morphing-blob"></div>
      </div>

      {/* Interactive cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-50 blur-sm transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      ></div>

      {/* Floating icons */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
            <Shield className="w-8 h-8 text-indigo-500" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
            <Zap className="w-7 h-7 text-purple-500" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-pink-500" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 animate-slide-in-bottom">
          <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-3 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse-custom"></div>
            <span className="text-indigo-700 font-medium">Trusted by 1000+ Companies</span>
            <div className="flex -space-x-1">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-in-bottom">
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Forge Your
          </span>
          <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
            Cyber Defense
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-in-bottom">
          Next-generation cybersecurity solutions that protect, innovate, and transform your digital landscape. 
          Experience the future of security today.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
          <Link
            to="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link
            to="/services"
            className="group px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-indigo-600 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 hover:border-indigo-300"
          >
            <div className="flex items-center space-x-2">
              <span>Explore Solutions</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-slide-in-bottom">
          <div className="group bg-white/60 backdrop-blur-sm border border-indigo-200 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Protected Organizations</div>
          </div>
          
          <div className="group bg-white/60 backdrop-blur-sm border border-purple-200 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Threat Detection Rate</div>
          </div>
          
          <div className="group bg-white/60 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Security Monitoring</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-indigo-500 rounded-full animate-pulse-custom"></div>
          </div>
          <span className="text-sm text-indigo-500 font-medium">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
