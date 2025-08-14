import { Shield, Award, Zap, Globe } from "lucide-react";

const partners = [
  {
    name: "Microsoft Security",
    logo: "https://img.icons8.com/color/100/microsoft.png",
    category: "Technology Partner"
  },
  {
    name: "AWS Security",
    logo: "https://img.icons8.com/color/100/amazon-web-services.png",
    category: "Cloud Partner"
  },
  {
    name: "Google Cloud",
    logo: "https://img.icons8.com/color/100/google-cloud.png",
    category: "Cloud Partner"
  },
  {
    name: "Cisco Security",
    logo: "https://img.icons8.com/color/100/cisco.png",
    category: "Network Partner"
  },
  {
    name: "IBM Security",
    logo: "https://img.icons8.com/color/100/ibm.png",
    category: "Enterprise Partner"
  },
  {
    name: "Palo Alto Networks",
    logo: "https://img.icons8.com/color/100/firewall.png",
    category: "Security Partner"
  }
];

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    icon: Shield,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "SOC 2 Type II",
    description: "Security & Availability",
    icon: Award,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "CISSP Certified",
    description: "Professional Security Experts",
    icon: Zap,
    color: "from-purple-500 to-indigo-500"
  },
  {
    name: "GDPR Compliant",
    description: "Data Protection Standards",
    icon: Globe,
    color: "from-orange-500 to-red-500"
  }
];

export default function Partners() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-100 to-red-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Partners Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-medium">Trusted Partnerships</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Industry Partners
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We collaborate with leading technology companies to deliver cutting-edge security solutions.
          </p>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Certified Excellence</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our commitment to excellence is validated by industry-leading certifications and compliance standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {cert.name}
                    </h3>
                    
                    <p className="text-gray-600">
                      {cert.description}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Partner with Excellence?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of satisfied clients who trust CyberForge for their most critical security needs. 
              Let's discuss how we can protect and empower your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-white border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 text-indigo-600 font-semibold rounded-xl transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
