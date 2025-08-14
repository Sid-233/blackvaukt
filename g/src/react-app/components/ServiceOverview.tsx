import { Shield, Monitor, Award, Zap, Brain, Globe, Users } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Advanced security assessments that identify vulnerabilities before attackers do",
    features: ["Web App Testing", "Network Security", "API Security", "Mobile Apps"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Monitor,
    title: "Security Operations",
    description: "24/7 monitoring and rapid response to keep your systems secure",
    features: ["SOC Services", "Threat Detection", "Incident Response", "Forensics"],
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50"
  },
  {
    icon: Brain,
    title: "AI-Powered Defense",
    description: "Machine learning algorithms that predict and prevent cyber threats",
    features: ["Behavioral Analysis", "Anomaly Detection", "Predictive Security", "Automated Response"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    icon: Globe,
    title: "Cloud Security",
    description: "Comprehensive protection for your cloud infrastructure and applications",
    features: ["Multi-Cloud Security", "Container Protection", "DevSecOps", "Compliance"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  },
  {
    icon: Award,
    title: "Compliance & Governance",
    description: "Expert guidance to meet regulatory requirements and industry standards",
    features: ["Risk Assessment", "Policy Management", "Audit Support", "Frameworks"],
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50"
  },
  {
    icon: Users,
    title: "Security Training",
    description: "Comprehensive education programs to build your security expertise",
    features: ["Professional Training", "Certification Prep", "Custom Workshops", "E-Learning"],
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50"
  }
];

export default function ServiceOverview() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-medium">Comprehensive Security Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Security Services
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
              That Scale
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From small startups to enterprise corporations, our adaptive security solutions 
            grow with your business and evolve with emerging threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden ${
                  hoveredService === index ? 'shadow-2xl scale-105' : 'shadow-lg'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-sm"
                        style={{ 
                          animationDelay: `${featureIndex * 0.1}s`,
                          opacity: hoveredService === index ? 1 : 0.7
                        }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 transition-all duration-300 ${
                          hoveredService === index ? 'scale-125' : ''
                        }`}></div>
                        <span className={`transition-colors duration-300 ${
                          hoveredService === index ? 'text-gray-900 font-medium' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Floating decoration */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${service.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Security Solution?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts work with you to design and implement tailored security strategies 
              that address your unique challenges and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-white border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 text-indigo-600 font-semibold rounded-xl transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
