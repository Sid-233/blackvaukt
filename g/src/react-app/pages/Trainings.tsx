import { GraduationCap, Users, Clock, Award, Star, Play, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const trainings = [
  {
    title: "Red Team Operations",
    subtitle: "Advanced Offensive Security",
    description: "Master advanced penetration testing techniques and red team methodologies used by elite security professionals.",
    duration: "5 days intensive",
    level: "Advanced",
    participants: "12 max",
    price: "$4,999",
    rating: 4.9,
    reviews: 127,
    topics: [
      "Advanced Exploitation Techniques",
      "Social Engineering Operations",
      "Post-Exploitation Tactics",
      "Stealth and Persistence",
      "Red Team Tool Development",
      "Command and Control"
    ],
    prerequisites: [
      "3+ years penetration testing experience",
      "OSCP or equivalent certification",
      "Advanced networking knowledge",
      "Programming skills (Python/PowerShell)"
    ],
    deliverables: [
      "Hands-on lab environment",
      "Real-world scenarios",
      "Tool arsenal and scripts",
      "Certificate of completion"
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Blue Team Defense",
    subtitle: "SOC Operations & Incident Response",
    description: "Learn to detect, analyze, and respond to cyber threats with hands-on SOC operations training.",
    duration: "4 days",
    level: "Intermediate",
    participants: "16 max",
    price: "$3,499",
    rating: 4.8,
    reviews: 89,
    topics: [
      "SIEM Implementation & Tuning",
      "Threat Hunting Methodologies",
      "Digital Forensics Techniques",
      "Incident Response Procedures",
      "Malware Analysis Basics",
      "Log Analysis & Correlation"
    ],
    prerequisites: [
      "Basic security knowledge",
      "Network fundamentals",
      "Windows/Linux administration",
      "Understanding of TCP/IP"
    ],
    deliverables: [
      "Virtual SOC environment",
      "Incident response playbooks",
      "Forensics toolkit",
      "Industry recognition"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Cloud Security Mastery",
    subtitle: "AWS, Azure & GCP Security",
    description: "Comprehensive cloud security training covering the three major cloud platforms and DevSecOps practices.",
    duration: "3 days",
    level: "Intermediate",
    participants: "20 max",
    price: "$2,999",
    rating: 4.9,
    reviews: 156,
    topics: [
      "Cloud Security Architecture",
      "Identity & Access Management",
      "Container & Kubernetes Security",
      "DevSecOps Pipeline Integration",
      "Cloud Compliance Frameworks",
      "Incident Response in Cloud"
    ],
    prerequisites: [
      "Cloud platform experience",
      "DevOps familiarity",
      "Security fundamentals",
      "Scripting knowledge"
    ],
    deliverables: [
      "Multi-cloud lab access",
      "Security automation scripts",
      "Best practices guides",
      "Vendor certifications prep"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Security & Privacy",
    subtitle: "Next-Gen Security Technologies",
    description: "Explore the intersection of artificial intelligence and cybersecurity, including AI-powered defense and attacks.",
    duration: "3 days",
    level: "Advanced",
    participants: "15 max",
    price: "$3,999",
    rating: 4.7,
    reviews: 67,
    topics: [
      "AI/ML Security Fundamentals",
      "Adversarial Machine Learning",
      "Privacy-Preserving AI",
      "AI-Powered Threat Detection",
      "Ethical AI Implementation",
      "Future of AI Security"
    ],
    prerequisites: [
      "Security expertise",
      "Programming proficiency",
      "Statistics/ML basics",
      "Data science familiarity"
    ],
    deliverables: [
      "AI security toolkit",
      "Research lab access",
      "Case study materials",
      "Expert certification"
    ],
    color: "from-purple-500 to-indigo-500"
  }
];

const certifications = [
  {
    name: "Certified Ethical Hacker (CEH)",
    provider: "EC-Council",
    duration: "5 days",
    price: "$3,500",
    description: "Industry-standard ethical hacking certification",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "CISSP Boot Camp",
    provider: "(ISC)²",
    duration: "7 days",
    price: "$4,200",
    description: "Information security leadership certification",
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "OSCP Preparation",
    provider: "Offensive Security",
    duration: "10 days",
    price: "$5,500",
    description: "Hands-on penetration testing certification",
    color: "from-green-500 to-teal-500"
  }
];

export default function Trainings() {
  const [selectedTraining, setSelectedTraining] = useState(0);

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
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-medium">Professional Training</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Master Cybersecurity
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Skills That Matter
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Accelerate your cybersecurity career with hands-on training from industry experts. 
              Learn cutting-edge techniques and earn recognized certifications.
            </p>
          </div>

          {/* Training Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "2,500+", label: "Students Trained", icon: Users },
              { number: "95%", label: "Certification Pass Rate", icon: Award },
              { number: "4.8/5", label: "Average Rating", icon: Star },
              { number: "50+", label: "Expert Instructors", icon: GraduationCap }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-2xl p-6 text-center shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Specialized Training Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive hands-on courses designed by practitioners for practitioners.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  selectedTraining === index ? 'ring-2 ring-indigo-400 shadow-2xl scale-105' : ''
                }`}
                onClick={() => setSelectedTraining(index)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{training.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{training.rating}</span>
                        <span className="text-sm text-gray-500">({training.reviews})</span>
                      </div>
                    </div>
                    <p className="text-indigo-600 font-medium mb-3">{training.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{training.description}</p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{training.price}</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{training.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Award className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{training.level}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{training.participants}</div>
                  </div>
                </div>

                {/* Topics Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Topics:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {training.topics.slice(0, 4).map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                    {training.topics.length > 4 && (
                      <div className="text-sm text-indigo-600 font-medium">
                        +{training.topics.length - 4} more topics
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex space-x-3">
                  <button className={`flex-1 py-3 px-4 bg-gradient-to-r ${training.color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}>
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certification Preparation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast-track your certification success with our intensive boot camps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{cert.name}</h3>
                <p className="text-indigo-600 font-medium mb-4 text-center">{cert.provider}</p>
                <p className="text-gray-600 mb-6 text-center">{cert.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{cert.price}</div>
                    <div className="text-sm text-gray-500">total cost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{cert.duration}</div>
                    <div className="text-sm text-gray-500">duration</div>
                  </div>
                </div>
                
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${cert.color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose CyberForge Training?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Instructors",
                  description: "Learn from practicing cybersecurity professionals with real-world experience."
                },
                {
                  icon: Play,
                  title: "Hands-On Learning",
                  description: "Interactive labs and simulations provide practical experience you can apply immediately."
                },
                {
                  icon: Award,
                  title: "Industry Recognition",
                  description: "Our certifications are recognized by leading employers and industry organizations."
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <span>Browse All Courses</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
