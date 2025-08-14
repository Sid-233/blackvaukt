import { Shield, Monitor, Award, Brain, Globe, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    subtitle: "VAPT Services",
    description: "Comprehensive security assessments that identify vulnerabilities before attackers do. Our ethical hackers use the same techniques as malicious actors to find weaknesses in your systems.",
    features: [
      "Web Application Testing",
      "Network Security Assessment", 
      "API Security Testing",
      "Mobile App Penetration",
      "Social Engineering Tests",
      "Wireless Network Testing"
    ],
    pricing: "Starting at $5,000",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    deliverables: ["Detailed vulnerability report", "Executive summary", "Remediation roadmap", "Retesting included"]
  },
  {
    icon: Monitor,
    title: "Security Operations Center",
    subtitle: "24/7 SOC Services",
    description: "Round-the-clock monitoring and rapid response to keep your systems secure. Our AI-powered SOC combines human expertise with machine intelligence for unparalleled protection.",
    features: [
      "24/7 Security Monitoring",
      "Threat Detection & Analysis",
      "Incident Response",
      "Forensic Investigation",
      "Compliance Reporting",
      "Threat Intelligence"
    ],
    pricing: "Starting at $3,000/month",
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-50 to-indigo-50",
    deliverables: ["Real-time dashboards", "Monthly reports", "Incident documentation", "SLA guarantees"]
  },
  {
    icon: Brain,
    title: "AI-Powered Defense",
    subtitle: "Next-Gen Protection",
    description: "Machine learning algorithms that predict and prevent cyber threats before they materialize. Experience the future of cybersecurity with our cutting-edge AI solutions.",
    features: [
      "Behavioral Analysis",
      "Anomaly Detection",
      "Predictive Security",
      "Automated Response",
      "User Entity Behavior Analytics",
      "Advanced Threat Hunting"
    ],
    pricing: "Custom Pricing",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    deliverables: ["AI model deployment", "Custom algorithms", "Training & tuning", "Performance metrics"]
  },
  {
    icon: Globe,
    title: "Cloud Security",
    subtitle: "Multi-Cloud Protection",
    description: "Comprehensive protection for your cloud infrastructure across AWS, Azure, and GCP. Secure your digital transformation with our cloud-native security solutions.",
    features: [
      "Multi-Cloud Security",
      "Container Protection",
      "DevSecOps Integration",
      "Cloud Compliance",
      "Infrastructure as Code Security",
      "Serverless Security"
    ],
    pricing: "Starting at $2,500/month",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    deliverables: ["Security architecture", "Policy enforcement", "Monitoring setup", "Compliance reports"]
  },
  {
    icon: Award,
    title: "Compliance & Governance",
    subtitle: "Regulatory Excellence",
    description: "Expert guidance to meet regulatory requirements and industry standards. Navigate complex compliance landscapes with confidence and maintain continuous compliance.",
    features: [
      "Risk Assessment",
      "Policy Development",
      "Audit Support",
      "Framework Implementation",
      "Compliance Monitoring",
      "Documentation Management"
    ],
    pricing: "Starting at $4,000",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
    deliverables: ["Compliance roadmap", "Policy documents", "Training materials", "Audit readiness"]
  },
  {
    icon: Users,
    title: "Security Training",
    subtitle: "Expert Education",
    description: "Comprehensive education programs to build your team's security expertise. From awareness training to advanced technical skills, we've got you covered.",
    features: [
      "Security Awareness Training",
      "Technical Skills Development",
      "Certification Preparation",
      "Custom Workshops",
      "Phishing Simulations",
      "E-Learning Platform"
    ],
    pricing: "Starting at $1,500",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    deliverables: ["Training materials", "Certification tracking", "Progress reports", "Skills assessment"]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

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
              <span className="text-indigo-700 font-medium">Professional Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Security Services
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                That Scale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity services designed to protect your organization 
              at every level. From penetration testing to 24/7 monitoring, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    selectedService === index ? 'ring-2 ring-indigo-400 shadow-2xl scale-105' : ''
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-indigo-600 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{service.pricing}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className={`w-4 h-4 bg-gradient-to-r ${service.color} text-white rounded-full mr-3 flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You Get:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                          <span className="text-gray-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} hover:shadow-xl text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your current security posture and identify key areas of focus." },
              { step: "02", title: "Planning", description: "Our experts develop a customized approach tailored to your specific needs." },
              { step: "03", title: "Execution", description: "We implement our security services with precision and attention to detail." },
              { step: "04", title: "Reporting", description: "You receive comprehensive reports with actionable insights and recommendations." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let's discuss your security needs and create a customized protection strategy 
              that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <span>Get Free Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <button className="px-8 py-4 bg-white border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 text-indigo-600 font-semibold rounded-xl transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
