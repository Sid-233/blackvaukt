export default function Clients() {
  const clients = [
    {
      name: "TechCorp Global",
      logo: "https://img.icons8.com/color/100/microsoft.png",
      industry: "Technology",
      services: "VAPT, SOC Services"
    },
    {
      name: "FinanceSecure Inc",
      logo: "https://img.icons8.com/color/100/bank.png",
      industry: "Financial Services",
      services: "Compliance, Risk Assessment"
    },
    {
      name: "HealthTech Solutions",
      logo: "https://img.icons8.com/color/100/health-book.png",
      industry: "Healthcare",
      services: "HIPAA Compliance, Security Training"
    },
    {
      name: "CloudFirst Enterprise",
      logo: "https://img.icons8.com/color/100/cloud.png",
      industry: "Cloud Services",
      services: "Cloud Security, DevSecOps"
    },
    {
      name: "RetailSecure",
      logo: "https://img.icons8.com/color/100/shopping-cart.png",
      industry: "Retail",
      services: "PCI-DSS, Web App Testing"
    },
    {
      name: "EduProtect University",
      logo: "https://img.icons8.com/color/100/graduation-cap.png",
      industry: "Education",
      services: "Network Security, Training"
    }
  ];

  const testimonials = [
    {
      quote: "Black Vault Security's expertise in cloud security helped us migrate safely to AWS while maintaining the highest security standards.",
      author: "James Wilson",
      title: "CTO, CloudFirst Enterprise",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Their SOC services have been invaluable. We've seen a 90% reduction in security incidents since partnering with them.",
      author: "Maria Rodriguez",
      title: "CISO, TechCorp Global",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The compliance guidance for HIPAA was exceptional. They made a complex process straightforward and achievable.",
      author: "Dr. Sarah Kim",
      title: "IT Director, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Our Clients
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by leading organizations across industries to protect their digital assets
          </p>
        </div>

        {/* Client Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 text-center group">
                <div className="mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-16 h-16 mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-green-400 mb-2">{client.industry}</p>
                <p className="text-gray-400 text-sm">{client.services}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-green-400/30"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-green-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.8%</div>
              <div className="text-gray-300">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-gray-300">Security Assessments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Security Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-400/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Client Family?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help secure your organization's digital assets.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
