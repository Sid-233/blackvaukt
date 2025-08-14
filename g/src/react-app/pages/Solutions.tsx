import { Building, Cloud, Smartphone, Globe, Factory, GraduationCap, Zap, ArrowRight, CheckCircle, Users } from "lucide-react";
import { useState } from "react";
import React from "react";

const solutions = [
  {
    icon: Building,
    title: "Enterprise Security",
    subtitle: "For Large Organizations",
    description: "Comprehensive security solutions designed for large enterprises with complex infrastructure and regulatory requirements.",
    challenges: [
      "Complex multi-layered infrastructure",
      "Regulatory compliance requirements",
      "Large attack surface",
      "Multiple stakeholder coordination"
    ],
    solutions: [
      "Zero Trust Architecture",
      "Advanced Threat Protection",
      "Identity & Access Management",
      "Compliance Automation",
      "Executive Dashboards",
      "Risk Management Platform"
    ],
    benefits: [
      "99.9% threat detection accuracy",
      "50% reduction in security incidents",
      "Automated compliance reporting",
      "Real-time risk visibility"
    ],
    color: "from-blue-500 to-cyan-500",
    clientSize: "1000+ employees"
  },
  {
    icon: Cloud,
    title: "Cloud-First Security",
    subtitle: "For Digital Natives",
    description: "Native cloud security solutions for organizations born in the cloud or undergoing digital transformation.",
    challenges: [
      "Multi-cloud complexity",
      "DevOps integration needs",
      "Scalability requirements",
      "Container security concerns"
    ],
    solutions: [
      "Cloud-Native SIEM",
      "Container Security Platform",
      "DevSecOps Integration",
      "API Security Gateway",
      "Serverless Protection",
      "Infrastructure as Code Security"
    ],
    benefits: [
      "Seamless DevOps integration",
      "Auto-scaling security controls",
      "Reduced deployment time by 60%",
      "Cost optimization through automation"
    ],
    color: "from-purple-500 to-indigo-500",
    clientSize: "100-1000 employees"
  },
  {
    icon: Smartphone,
    title: "Startup Security",
    subtitle: "For Growing Companies",
    description: "Affordable, scalable security solutions that grow with your startup while protecting your innovations and customer data.",
    challenges: [
      "Limited security budget",
      "Fast-paced growth",
      "Resource constraints",
      "Investor security requirements"
    ],
    solutions: [
      "Essential Security Stack",
      "Automated Vulnerability Management",
      "Employee Security Training",
      "Incident Response Plan",
      "Compliance Quick-Start",
      "Security-as-a-Service"
    ],
    benefits: [
      "Enterprise-grade security at startup prices",
      "Quick implementation (< 30 days)",
      "Investor-ready security posture",
      "Predictable monthly costs"
    ],
    color: "from-green-500 to-emerald-500",
    clientSize: "10-100 employees"
  },
  {
    icon: Globe,
    title: "Government & Public Sector",
    subtitle: "For Public Organizations",
    description: "Specialized security solutions meeting the unique requirements of government agencies and public sector organizations.",
    challenges: [
      "Strict regulatory requirements",
      "Legacy system integration",
      "High security clearance needs",
      "Budget constraints"
    ],
    solutions: [
      "FedRAMP Compliant Solutions",
      "Air-Gapped Security Systems",
      "Classified Data Protection",
      "Legacy System Hardening",
      "Insider Threat Detection",
      "Continuity of Operations"
    ],
    benefits: [
      "Full regulatory compliance",
      "Enhanced national security",
      "Improved citizen data protection",
      "Modernized security infrastructure"
    ],
    color: "from-red-500 to-pink-500",
    clientSize: "Government agencies"
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    subtitle: "For Critical Infrastructure",
    description: "Specialized OT/IT security solutions protecting critical infrastructure and manufacturing operations from cyber threats.",
    challenges: [
      "OT/IT convergence risks",
      "Legacy industrial systems",
      "Safety-critical operations",
      "Supply chain vulnerabilities"
    ],
    solutions: [
      "OT Security Monitoring",
      "Industrial Network Segmentation",
      "SCADA System Protection",
      "Supply Chain Security",
      "Safety System Integrity",
      "Incident Response for OT"
    ],
    benefits: [
      "Operational continuity protection",
      "Safety system reliability",
      "Supply chain risk reduction",
      "Regulatory compliance (NERC, ICS)"
    ],
    color: "from-orange-500 to-red-500",
    clientSize: "Manufacturing facilities"
  },
  {
    icon: GraduationCap,
    title: "Education & Healthcare",
    subtitle: "For Sensitive Data Protection",
    description: "Specialized security solutions for educational institutions and healthcare organizations handling sensitive personal data.",
    challenges: [
      "FERPA/HIPAA compliance",
      "Student/patient data protection",
      "Research data security",
      "Limited IT resources"
    ],
    solutions: [
      "Data Loss Prevention",
      "Endpoint Protection",
      "Email Security Gateway",
      "Research Data Encryption",
      "Privacy Impact Assessments",
      "Incident Response Training"
    ],
    benefits: [
      "HIPAA/FERPA compliance",
      "Protected research assets",
      "Reduced data breach risk",
      "Enhanced reputation protection"
    ],
    color: "from-teal-500 to-blue-500",
    clientSize: "Educational/Healthcare institutions"
  }
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(0);

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
              <span className="text-indigo-700 font-medium">Tailored Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Industry-Specific
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every industry faces unique cybersecurity challenges. Our specialized solutions 
              are designed to address your specific risks, compliance requirements, and operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    selectedSolution === index ? 'ring-2 ring-indigo-400 shadow-2xl scale-105' : ''
                  }`}
                  onClick={() => setSelectedSolution(index)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-indigo-600 font-medium mb-3 text-sm">
                    {solution.subtitle}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{solution.clientSize}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Solution View */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Challenges */}
              <div>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${solutions[selectedSolution].color} rounded-xl flex items-center justify-center mr-4`}>
                    {React.createElement(solutions[selectedSolution].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{solutions[selectedSolution].title}</h2>
                    <p className="text-indigo-600 font-medium">{solutions[selectedSolution].subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {solutions[selectedSolution].description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Common Challenges</h3>
                  <div className="space-y-3">
                    {solutions[selectedSolution].challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Solutions & Benefits */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solutions</h3>
                  <div className="space-y-3">
                    {solutions[selectedSolution].solutions.map((solutionItem, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-gray-700">{solutionItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {solutions[selectedSolution].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-6 h-6 bg-gradient-to-r ${solutions[selectedSolution].color} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-4 px-6 bg-gradient-to-r ${solutions[selectedSolution].color} hover:shadow-xl text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2`}>
                  <span>Get Custom Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Implementation Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures smooth deployment and maximum value from your security investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { phase: "Assessment", description: "Comprehensive analysis of your current security posture and industry-specific risks." },
              { phase: "Strategy", description: "Development of a tailored security strategy aligned with your business objectives." },
              { phase: "Design", description: "Detailed solution architecture and implementation roadmap creation." },
              { phase: "Deploy", description: "Phased implementation with minimal disruption to your operations." },
              { phase: "Optimize", description: "Continuous monitoring, tuning, and improvement of your security posture." }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.phase}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform translate-x-4"></div>
                )}
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
              Ready for a Custom Security Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every organization is unique. Let's create a security solution that perfectly fits 
              your industry, size, and specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <span>Start Your Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <button className="px-8 py-4 bg-white border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 text-indigo-600 font-semibold rounded-xl transition-all duration-300">
                Download Solution Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
