import { Briefcase, Clock, Users, Award, MapPin, Calendar, ArrowRight, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    title: "Penetration Testing Internship",
    subtitle: "Ethical Hacking Track",
    description: "Gain hands-on experience in vulnerability assessment and penetration testing under the guidance of senior security professionals.",
    duration: "6 months",
    location: "San Francisco / Remote",
    type: "Full-time",
    spots: "8 positions",
    startDate: "Summer 2024",
    requirements: [
      "Computer Science or related field",
      "Basic networking fundamentals",
      "Programming experience (Python/JavaScript)",
      "Interest in cybersecurity",
      "Strong analytical thinking"
    ],
    skills: [
      "Web application testing",
      "Network security assessment",
      "Vulnerability scanning",
      "Report writing",
      "Client communication",
      "Tool mastery (Burp Suite, Nmap, etc.)"
    ],
    projects: [
      "Real client assessments",
      "Custom tool development",
      "Research projects",
      "Security presentations"
    ],
    mentorship: "1:1 weekly sessions with senior penetration testers",
    stipend: "$3,500/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "SOC Analyst Internship",
    subtitle: "Security Operations Track",
    description: "Learn security monitoring, incident response, and threat hunting in our state-of-the-art Security Operations Center.",
    duration: "6 months",
    location: "New York / Hybrid",
    type: "Full-time",
    spots: "6 positions",
    startDate: "Fall 2024",
    requirements: [
      "Information Security studies",
      "Understanding of TCP/IP",
      "Basic scripting knowledge",
      "SIEM familiarity (preferred)",
      "Detail-oriented mindset"
    ],
    skills: [
      "SIEM operations (Splunk, QRadar)",
      "Log analysis and correlation",
      "Incident response procedures",
      "Threat intelligence analysis",
      "Digital forensics basics",
      "Security automation scripting"
    ],
    projects: [
      "24/7 SOC monitoring",
      "Incident investigations",
      "Playbook development",
      "Threat hunting campaigns"
    ],
    mentorship: "Rotation through all SOC teams with dedicated mentors",
    stipend: "$3,200/month",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Cloud Security Internship",
    subtitle: "DevSecOps Track",
    description: "Work on cloud security architecture and DevSecOps implementation across AWS, Azure, and GCP environments.",
    duration: "4 months",
    location: "Remote",
    type: "Full-time",
    spots: "5 positions",
    startDate: "Spring 2024",
    requirements: [
      "Cloud platform experience",
      "DevOps/CI-CD knowledge",
      "Infrastructure as Code familiarity",
      "Programming skills (Go, Python)",
      "Agile methodology experience"
    ],
    skills: [
      "Multi-cloud security architecture",
      "Container and Kubernetes security",
      "Infrastructure as Code security",
      "CI/CD pipeline security",
      "Cloud compliance frameworks",
      "Security automation development"
    ],
    projects: [
      "Cloud security assessments",
      "Security automation tools",
      "Compliance reporting systems",
      "Architecture documentation"
    ],
    mentorship: "Cross-functional team collaboration with cloud architects",
    stipend: "$4,000/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Security Research Internship",
    subtitle: "Emerging Technologies Track",
    description: "Research and develop AI-powered security solutions while exploring the security implications of artificial intelligence.",
    duration: "6 months",
    location: "San Francisco / On-site",
    type: "Full-time",
    spots: "3 positions",
    startDate: "Summer 2024",
    requirements: [
      "Computer Science/ML background",
      "Python/R programming expertise",
      "Machine learning fundamentals",
      "Research methodology experience",
      "Academic excellence (3.5+ GPA)"
    ],
    skills: [
      "Machine learning security",
      "Adversarial AI techniques",
      "Behavioral analysis algorithms",
      "Data science for security",
      "Research publication writing",
      "AI model security assessment"
    ],
    projects: [
      "ML security research papers",
      "AI detection algorithms",
      "Adversarial attack simulations",
      "Conference presentations"
    ],
    mentorship: "Direct collaboration with Ph.D. researchers and published authors",
    stipend: "$4,500/month",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Free training and exam vouchers for relevant cybersecurity certifications"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "One-on-one guidance from senior security professionals and industry leaders"
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description: "Work on actual client projects and contribute to meaningful security initiatives"
  },
  {
    icon: Star,
    title: "Career Development",
    description: "Personalized career coaching and professional development workshops"
  }
];

export default function Internships() {
  const [selectedProgram, setSelectedProgram] = useState(0);

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
              <Briefcase className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-medium">Launch Your Career</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Cybersecurity
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Internships
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Accelerate your cybersecurity career with hands-on experience at CyberForge. 
              Learn from industry experts while contributing to real security projects.
            </p>
          </div>

          {/* Program Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "95%", label: "Conversion to Full-Time", icon: Award },
              { number: "6 months", label: "Average Program Duration", icon: Clock },
              { number: "1:3", label: "Mentor to Intern Ratio", icon: Users },
              { number: "$3,800", label: "Average Monthly Stipend", icon: Briefcase }
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

      {/* Internship Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Internship Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your specialization and start building expertise in cutting-edge cybersecurity domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  selectedProgram === index ? 'ring-2 ring-indigo-400 shadow-2xl scale-105' : ''
                }`}
                onClick={() => setSelectedProgram(index)}
              >
                {/* Program Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-3">{program.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{program.stipend}</div>
                    <div className="text-sm text-gray-500">monthly stipend</div>
                  </div>
                </div>

                {/* Program Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.location}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.spots}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Calendar className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900">{program.startDate}</div>
                  </div>
                </div>

                {/* Skills Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills You'll Develop:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {program.skills.slice(0, 4).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                    {program.skills.length > 4 && (
                      <div className="text-sm text-indigo-600 font-medium">
                        +{program.skills.length - 4} more skills
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}>
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program View */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {programs[selectedProgram].title}
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <div className="space-y-3">
                    {programs[selectedProgram].requirements.map((req, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Projects</h3>
                  <div className="space-y-3">
                    {programs[selectedProgram].projects.map((project, index) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-6 h-6 bg-gradient-to-r ${programs[selectedProgram].color} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Skill Set</h3>
                  <div className="space-y-3">
                    {programs[selectedProgram].skills.map((skill, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mentorship Program</h3>
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl">
                    <p className="text-gray-700 font-medium">
                      {programs[selectedProgram].mentorship}
                    </p>
                  </div>
                </div>

                <button className={`w-full py-4 px-6 bg-gradient-to-r ${programs[selectedProgram].color} text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}>
                  <span>Apply for This Position</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Intern With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a program designed to accelerate your cybersecurity career with unparalleled learning opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Launch Your Career?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our application process is designed to identify passionate, talented individuals 
                who are ready to make an impact in cybersecurity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {[
                { step: "Apply", description: "Submit your application with resume, cover letter, and portfolio." },
                { step: "Screen", description: "Initial phone screening to discuss your background and interests." },
                { step: "Interview", description: "Technical and behavioral interviews with our team members." },
                { step: "Onboard", description: "Welcome to the team! Begin your cybersecurity journey with us." }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.step}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <span>Start Your Application</span>
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
