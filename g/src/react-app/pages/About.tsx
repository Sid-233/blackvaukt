import { Users, Target, Lightbulb, Shield, Award, Zap, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Every decision is made with security as the top priority.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously pushing the boundaries of cybersecurity technology.",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Users,
    title: "Client Success",
    description: "Your success is our success. We're partners in protection.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering world-class security solutions and services.",
    color: "from-orange-500 to-red-500"
  }
];

const team = [
  {
    name: "Dr. Alex Chen",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    expertise: "20+ years in cybersecurity leadership",
    education: "PhD Computer Science, Stanford"
  },
  {
    name: "Sarah Rodriguez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    expertise: "AI/ML Security Research",
    education: "MS Cybersecurity, MIT"
  },
  {
    name: "Marcus Johnson",
    role: "VP of Security Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    expertise: "Former NSA Cyber Operations",
    education: "BS Computer Engineering, USMA"
  },
  {
    name: "Dr. Emily Park",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    expertise: "Quantum Cryptography Pioneer",
    education: "PhD Mathematics, Caltech"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-full px-6 py-2 mb-6 shadow-lg">
              <Zap className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-medium">About CyberForge</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Forging the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                of Cybersecurity
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded by cybersecurity veterans, CyberForge combines cutting-edge technology 
              with deep expertise to protect organizations in an increasingly connected world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To democratize enterprise-grade cybersecurity by making advanced protection 
                  accessible to organizations of all sizes. We believe every business deserves 
                  the same level of security that protects the world's largest corporations.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A world where cybersecurity is proactive, not reactive. Where AI-powered 
                  systems predict and prevent threats before they materialize, enabling 
                  businesses to innovate fearlessly in the digital landscape.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop"
                alt="CyberForge Team"
                className="w-full h-96 lg:h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the cybersecurity experts leading the charge in protecting organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl object-cover mx-auto shadow-lg border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl mx-auto w-24 h-24"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-sm text-gray-600 mb-2">
                  {member.expertise}
                </p>
                
                <p className="text-xs text-gray-500">
                  {member.education}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Forge Your Security Future?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the organizations that trust CyberForge to protect their most valuable digital assets. 
              Let's discuss how we can secure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <button className="px-8 py-4 bg-white border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 text-indigo-600 font-semibold rounded-xl transition-all duration-300">
                Learn About Our Process
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
