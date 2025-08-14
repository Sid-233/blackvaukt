import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "CyberForge transformed our security posture completely. Their AI-powered threat detection caught attacks we never would have seen coming. The team's expertise and innovative approach are unmatched in the industry.",
    highlight: "Prevented 50+ Advanced Threats"
  },
  {
    name: "Marcus Rodriguez",
    title: "Security Director",
    company: "FinanceFirst Bank",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The cloud security implementation was seamless. CyberForge's team understood our complex multi-cloud environment and delivered solutions that not only secured our infrastructure but improved our operational efficiency.",
    highlight: "Zero Security Incidents in 18 Months"
  },
  {
    name: "Dr. Emily Watson",
    title: "Chief Information Officer",
    company: "HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Their compliance expertise helped us achieve HIPAA certification ahead of schedule. The training programs empowered our entire team with security knowledge. CyberForge doesn't just provide services – they build security culture.",
    highlight: "HIPAA Compliant in 6 Weeks"
  },
  {
    name: "James Park",
    title: "VP of Engineering",
    company: "StartupScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a fast-growing startup, we needed security solutions that could scale with us. CyberForge's DevSecOps integration allowed us to maintain security without slowing down our development velocity.",
    highlight: "200% Faster Secure Deployments"
  },
  {
    name: "Lisa Thompson",
    title: "CISO",
    company: "GlobalTech Corp",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The 24/7 SOC services have been a game-changer. Real-time threat detection and response capabilities that rival Fortune 500 companies, but at a fraction of the cost of building our own security team.",
    highlight: "99.9% Uptime Achievement"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-2 mb-6 shadow-lg">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-indigo-700 font-medium">5.0 Stars from 500+ Reviews</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Client Success
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how organizations worldwide trust CyberForge to protect their digital assets 
            and accelerate their growth.
          </p>
        </div>

        {/* Main testimonial showcase */}
        <div className="max-w-5xl mx-auto mb-16">
          <div 
            className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-50"></div>
            
            {/* Quote icon */}
            <div className="absolute top-6 left-6">
              <Quote className="w-12 h-12 text-indigo-200" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Testimonial content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  {/* Highlight */}
                  <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full px-4 py-2 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2"></div>
                    <span className="text-green-700 font-semibold text-sm">
                      {testimonials[currentTestimonial].highlight}
                    </span>
                  </div>

                  {/* Author info */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-indigo-600 font-medium mb-1">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Author image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-32 h-32 rounded-2xl object-cover shadow-xl border-4 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client logos grid */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-3 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-indigo-700 font-medium">Join 1000+ Satisfied Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}
