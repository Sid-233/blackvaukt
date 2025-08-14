import { Play, Clock, Users, Award, Star, BookOpen, Download, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Web Application Penetration Testing",
    subtitle: "Complete VAPT Mastery",
    description: "Master the art of web application security testing with hands-on labs covering OWASP Top 10 and beyond.",
    price: "$299",
    originalPrice: "$449",
    level: "Beginner to Intermediate",
    duration: "40+ hours",
    lessons: 45,
    students: 1247,
    rating: 4.8,
    reviews: 342,
    instructor: "Sarah Chen",
    instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    features: [
      "40+ video lessons",
      "Hands-on labs",
      "Real-world scenarios",
      "Lifetime access",
      "Certificate of completion",
      "24/7 community support"
    ],
    curriculum: [
      "Introduction to Web Security",
      "Reconnaissance and Information Gathering",
      "OWASP Top 10 Vulnerabilities",
      "SQL Injection Techniques",
      "Cross-Site Scripting (XSS)",
      "Authentication Bypasses",
      "Authorization Flaws",
      "Advanced Exploitation Techniques"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Ethical Hacking & Penetration Testing",
    subtitle: "CEH Preparation Course",
    description: "Comprehensive ethical hacking course preparing you for the CEH certification and real-world penetration testing.",
    price: "$399",
    originalPrice: "$599",
    level: "Intermediate",
    duration: "60+ hours",
    lessons: 78,
    students: 2156,
    rating: 4.9,
    reviews: 518,
    instructor: "Marcus Rodriguez",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    features: [
      "60+ comprehensive lessons",
      "Virtual lab environment",
      "CEH exam preparation",
      "Tools and techniques",
      "Industry certification",
      "Career guidance"
    ],
    curriculum: [
      "Ethical Hacking Fundamentals",
      "Footprinting and Reconnaissance",
      "Scanning and Enumeration",
      "System Hacking",
      "Malware and Trojans",
      "Social Engineering",
      "Denial of Service Attacks",
      "Wireless Network Hacking"
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Cloud Security Fundamentals",
    subtitle: "AWS, Azure & GCP Security",
    description: "Learn to secure cloud environments across major platforms with practical examples and best practices.",
    price: "$249",
    originalPrice: "$349",
    level: "Beginner",
    duration: "25+ hours",
    lessons: 32,
    students: 876,
    rating: 4.7,
    reviews: 234,
    instructor: "Dr. Emily Park",
    instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    features: [
      "Multi-cloud coverage",
      "Hands-on exercises",
      "Best practices guide",
      "Industry case studies",
      "Implementation templates",
      "Expert Q&A sessions"
    ],
    curriculum: [
      "Cloud Security Overview",
      "AWS Security Services",
      "Azure Security Center",
      "Google Cloud Security",
      "Identity and Access Management",
      "Data Protection in Cloud",
      "Compliance Frameworks",
      "Incident Response in Cloud"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Digital Forensics & Incident Response",
    subtitle: "DFIR Professional Track",
    description: "Comprehensive training in digital forensics and incident response for security professionals.",
    price: "$349",
    originalPrice: "$499",
    level: "Intermediate to Advanced",
    duration: "50+ hours",
    lessons: 62,
    students: 543,
    rating: 4.9,
    reviews: 167,
    instructor: "James Wilson",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    features: [
      "Forensics tools training",
      "Evidence handling",
      "Legal considerations",
      "Case study analysis",
      "Report writing",
      "Court testimony prep"
    ],
    curriculum: [
      "Digital Forensics Fundamentals",
      "Evidence Acquisition",
      "File System Analysis",
      "Memory Forensics",
      "Network Forensics",
      "Mobile Device Forensics",
      "Incident Response Procedures",
      "Legal and Ethical Issues"
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Malware Analysis & Reverse Engineering",
    subtitle: "Advanced Threat Analysis",
    description: "Learn to analyze and reverse engineer malware to understand attack techniques and develop countermeasures.",
    price: "$399",
    originalPrice: "$549",
    level: "Advanced",
    duration: "45+ hours",
    lessons: 55,
    students: 321,
    rating: 4.8,
    reviews: 89,
    instructor: "Lisa Thompson",
    instructorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    features: [
      "Reverse engineering tools",
      "Static and dynamic analysis",
      "Malware samples",
      "Analysis techniques",
      "Threat intelligence",
      "Research methodologies"
    ],
    curriculum: [
      "Malware Analysis Basics",
      "Static Analysis Techniques",
      "Dynamic Analysis Methods",
      "Debuggers and Disassemblers",
      "Packed Malware Analysis",
      "Advanced Evasion Techniques",
      "Threat Intelligence Integration",
      "Research and Documentation"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Security Awareness for Everyone",
    subtitle: "Basic Cybersecurity Training",
    description: "Essential cybersecurity knowledge for employees and individuals to stay safe in the digital world.",
    price: "$49",
    originalPrice: "$99",
    level: "Beginner",
    duration: "8+ hours",
    lessons: 15,
    students: 4567,
    rating: 4.6,
    reviews: 892,
    instructor: "Alex Morgan",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    features: [
      "Easy to understand",
      "Real-world examples",
      "Interactive quizzes",
      "Practical tips",
      "Mobile-friendly",
      "Team licensing available"
    ],
    curriculum: [
      "Cybersecurity Basics",
      "Password Security",
      "Email Security",
      "Safe Web Browsing",
      "Social Media Safety",
      "Mobile Device Security",
      "Remote Work Security",
      "Incident Reporting"
    ],
    color: "from-teal-500 to-blue-500"
  }
];

const learningPaths = [
  {
    title: "Penetration Tester Path",
    description: "Complete pathway from beginner to professional penetration tester",
    courses: 4,
    duration: "6 months",
    price: "$899"
  },
  {
    title: "SOC Analyst Path",
    description: "Master security operations and incident response",
    courses: 3,
    duration: "4 months",
    price: "$699"
  },
  {
    title: "Cloud Security Expert Path",
    description: "Become a cloud security specialist across all major platforms",
    courses: 5,
    duration: "8 months",
    price: "$1,199"
  }
];

export default function Courses() {
  

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
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-medium">Online Learning</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Learn at Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Own Pace
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Master cybersecurity with our comprehensive online courses. 
              Learn from industry experts, practice in safe environments, and advance your career.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "15,000+", label: "Students Enrolled", icon: Users },
              { number: "50+", label: "Expert-Led Courses", icon: BookOpen },
              { number: "4.8/5", label: "Average Rating", icon: Star },
              { number: "95%", label: "Completion Rate", icon: Award }
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

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Popular Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of students mastering cybersecurity skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
                
              >
                {/* Course Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 bg-gradient-to-r ${course.color} text-white text-sm font-medium rounded-full`}>
                        {course.level}
                      </span>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-indigo-600 font-medium text-sm mb-3">
                    {course.subtitle}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <button className={`px-6 py-2 bg-gradient-to-r ${course.color} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Career Learning Paths
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning journeys to accelerate your cybersecurity career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                  <span>{path.courses} courses</span>
                  <span>{path.duration}</span>
                </div>
                
                <div className="text-2xl font-bold text-gray-900 mb-6">{path.price}</div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Learning Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Training */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Training Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom training programs designed for your organization's specific needs and compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  icon: Users,
                  title: "Team Training",
                  description: "Bulk licensing and group management for teams of any size."
                },
                {
                  icon: Award,
                  title: "Custom Content",
                  description: "Tailored courses specific to your industry and use cases."
                },
                {
                  icon: Download,
                  title: "Progress Tracking",
                  description: "Detailed analytics and reporting on team progress and completion."
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

            <div className="text-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center space-x-2">
                  <span>Contact for Enterprise Pricing</span>
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
