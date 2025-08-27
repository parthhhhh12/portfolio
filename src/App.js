import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Download, Code, Database, Cloud, Award, Calendar, Users, Target, BookOpen, Briefcase } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const skills = [
    { name: 'Python', proficiency: 'Advanced', description: '3+ years experience', color: 'bg-blue-500', dots: 5 },
    { name: 'PySpark', proficiency: 'Intermediate', description: 'Production experience', color: 'bg-orange-500', dots: 4 },
    { name: 'Microsoft Azure', proficiency: 'Intermediate', description: 'Certified practitioner', color: 'bg-cyan-500', dots: 4 },
    { name: 'Databricks', proficiency: 'Intermediate', description: 'Hands-on projects', color: 'bg-red-500', dots: 4 },
    { name: 'SQL', proficiency: 'Advanced', description: 'Complex queries & optimization', color: 'bg-green-500', dots: 5 },
    { name: 'Delta Lake', proficiency: 'Intermediate', description: 'ACID transactions implementation', color: 'bg-purple-500', dots: 4 },
    { name: 'ETL/ELT', proficiency: 'Intermediate', description: 'Pipeline development', color: 'bg-yellow-500', dots: 4 },
    { name: 'Java', proficiency: 'Intermediate', description: 'Object-oriented programming', color: 'bg-pink-500', dots: 3 },
  ];

  const projects = [
    {
      title: "End-to-End Data Engineering Pipeline with Medallion Architecture",
      duration: "Self-Project",
      client: "Personal Development",
      description: "Built a complete data engineering pipeline on Databricks to ingest raw data, clean and transform it, and prepare it for BI reporting following medallion architecture for business decision making.",
      tech: ["Databricks", "Delta Live Tables", "Delta Lake", "Azure Data Lake Storage Gen2", "Power BI", "Python"],
      highlights: [
        "Implemented complete medallion architecture (Bronze, Silver, Gold layers)",
        "Processed Superstore sales dataset with 18 columns and 10,000+ records from Kaggle",
        "Built automated data pipeline for cleaning and transforming raw CSV data",
        "Created comprehensive Power BI reports analyzing sales by segments and top customers",
        "Analyzed delivery speed impact on total sales using advanced analytics functions",
        "Utilized Delta Lake for reliable and scalable data storage with ACID compliance"
      ],
      businessObjective: "To clean and transform source dataset stored in silver layer following medallion architecture and create analysis for total sales by segments, top customers, and delivery speed impact on sales."
    },
    {
      title: "Azure-Based Data Ingestion and Transformation",
      duration: "July 2025 - August 2025",
      client: "Industry Case Study (Training Program)",
      description: "Designed and implemented an end-to-end cloud data pipeline to automate the ingestion, transformation, and storage of structured and semi-structured data.",
      tech: ["Azure Data Factory", "Azure Data Lake Storage Gen2", "Azure Blob Storage", "Databricks", "PySpark"],
      highlights: [
        "Ingested product catalog data from Excel files using ADF Copy Data activity",
        "Built parallel ingestion pipeline for daily website traffic logs (CSV/JSON)",
        "Developed PySpark logic for data cleansing and transformation",
        "Implemented Bronze, Silver, Gold data layer architecture"
      ]
    }
  ];

  const certifications = [
    "AWS Certified: AWS Academy Cloud Developing",
    "Industry-recognized Cloud Computing Training Program",
    "HackerRank SQL Intermediate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                P
              </div>
              <span className="font-bold text-xl">Parth</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-blue-400 ${activeSection === section ? 'text-blue-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <img src='/img.jpeg' alt='Parth' className='w-32 h-32 mx-auto rounded-full mb-2 object-cover' />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Parth
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-300">
            Associate Data Engineer
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Specialized in Azure | Databricks | Python | SQL | PySpark
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Briefcase size={20} />
              View My Work
            </button>
            <a href='/resume.docx' download="resume.docx" className="border border-gray-400 hover:border-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-blue-400" size={24} />
                  Professional Summary
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Aspiring Data Engineer with hands-on training in modern data engineering technologies, 
                  currently gaining practical experience in PySpark, Databricks, and Microsoft Azure. 
                  Actively learning and implementing key ETL/ELT processes, with a solid understanding 
                  of big data fundamentals, distributed computing, and scalable data pipelines.
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <BookOpen className="text-green-400" size={24} />
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="font-semibold text-white">Bachelor of Technology</p>
                  <p className="text-gray-300">Computer Science Engineering</p>
                  <p className="text-gray-400">University of Petroleum and Energy Studies (UPES)</p>
                  <p className="text-blue-400">Specialization: Cloud Computing</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Award className="text-yellow-400" size={24} />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-600 rounded">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Key Strengths</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cloud-native data engineering solutions</li>
                  <li>• ETL/ELT pipeline development</li>
                  <li>• Big data processing with PySpark</li>
                  <li>• Azure ecosystem expertise</li>
                  <li>• Delta Lake implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">
            Skills & Technologies
          </h2>
          
          {/* Skills with Proficiency Levels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    skill.proficiency === 'Advanced' 
                      ? 'bg-green-600 text-white' 
                      : skill.proficiency === 'Intermediate'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-600 text-white'
                  }`}>
                    {skill.proficiency}
                  </span>
                </div>
                
                {/* Proficiency Dots */}
                <div className="flex gap-2">
                  {[...Array(5)].map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        dotIndex < skill.dots
                          ? skill.color
                          : 'bg-gray-600'
                      }`}
                    ></div>
                  ))}
                </div>
                
                <div className="mt-3 text-xs text-gray-500">
                  Proficiency Level: {skill.dots}/5
                </div>
              </div>
            ))}
          </div>
          
          {/* Technology Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Cloud className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Cloud Platforms</h3>
              <p className="text-gray-300 mb-4">Microsoft Azure, AWS</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Azure Data Factory', 'ADLS Gen2', 'Azure Blob Storage', 'AWS Academy'].map((tech) => (
                  <span key={tech} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Database className="text-purple-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
              <p className="text-gray-300 mb-4">ETL/ELT pipelines, Data Modeling</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['PySpark', 'Databricks', 'Delta Lake', 'Data Orchestration'].map((tech) => (
                  <span key={tech} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Code className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Programming</h3>
              <p className="text-gray-300 mb-4">Python, SQL, Java</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Python', 'SQL', 'Java', 'Git'].map((tech) => (
                  <span key={tech} className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">
            Recent Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-blue-400" size={20} />
                      <span className="text-blue-400 font-semibold">{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-green-400" size={20} />
                      <span className="text-gray-300">{project.client}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.businessObjective && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Business Objective:</h4>
                      <p className="text-gray-300 bg-gray-600 p-3 rounded italic">
                        {project.businessObjective}
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Key Achievements:</h4>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-600 rounded">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800 rounded-lg p-8">
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm actively seeking opportunities in data engineering roles where I can apply my 
                  cloud-native skills and continue growing in the field of big data and analytics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                    <span>parthsingh1253@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                    <Phone className="text-green-400" size={24} />
                    <span>+91 8527713603</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                    <MapPin className="text-red-400" size={24} />
                    <span>Gurugram, Haryana, India</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-6xl font-bold mb-8">
                P
              </div>
              <div className="flex justify-center gap-6">
                <a href='https://github.com/parthhhhh12' target='_blank' className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors">
                  <Github size={24} />
                </a>
                <a href='https://www.linkedin.com/in/singh05e/' target='_blank' className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Parth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;