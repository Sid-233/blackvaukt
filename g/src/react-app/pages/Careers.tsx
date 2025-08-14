export default function Careers() {
  const openings = [
    {
      title: "Senior Penetration Tester",
      department: "Security Services",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead complex penetration testing engagements for enterprise clients"
    },
    {
      title: "SOC Analyst L2",
      department: "Security Operations",
      location: "New York, NY",
      type: "Full-time",
      experience: "2-4 years",
      description: "Monitor security events and respond to incidents in our 24/7 SOC"
    },
    {
      title: "Cloud Security Engineer",
      department: "Cloud Security",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and implement cloud security solutions for AWS, Azure, and GCP"
    },
    {
      title: "Threat Intelligence Analyst",
      department: "Threat Research",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Analyze emerging threats and develop intelligence reports"
    },
    {
      title: "Security Consultant",
      department: "Advisory Services",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      description: "Provide strategic security guidance to enterprise clients"
    },
    {
      title: "Junior Security Researcher",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      experience: "1-2 years",
      description: "Research new vulnerabilities and security techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build your cybersecurity career with industry leaders and cutting-edge technology
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 sm:mb-0">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm">
                          {job.department}
                        </span>
                        <span className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {job.type}
                        </span>
                        <span className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <p className="text-gray-400 text-sm mb-4">📍 {job.location}</p>
                  </div>
                  
                  <div className="lg:ml-8 flex-shrink-0">
                    <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 w-full lg:w-auto">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Competitive salary and benefits
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Remote work opportunities
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Professional development budget
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Latest security tools and technology
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Conference and training support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Flexible work schedule
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-gray-300 mb-6">
              We foster a collaborative environment where innovation thrives and every team member 
              can make a meaningful impact on cybersecurity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 font-bold text-sm">💡</span>
                </div>
                <span className="text-gray-300">Innovation-driven mindset</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 font-bold text-sm">🤝</span>
                </div>
                <span className="text-gray-300">Collaborative team environment</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 font-bold text-sm">🎯</span>
                </div>
                <span className="text-gray-300">Mission-focused approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
