'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import './print.css'

export default function ResumePage() {
  // Resume sections data
  const resumeData = {
    summary: "Results-driven Software Engineer with 3+ years of experience designing, developing, and deploying scalable microservices architectures and cloud-native applications in Agile environments. Adept in Java 17, Spring Boot, Kafka, and Kubernetes, with proven success in CI/CD automation, API development, container orchestration, and cloud deployment using OpenShift OCP. Known for reducing operational costs, improving system performance, and leading high-impact digital banking projects.",
    
    experience: [
      {
        title: "Software Engineer",
        company: "PNC Bank",
        period: "2022 - Present",
        responsibilities: [
          "Developed and maintained 50+ Java-based Spring Boot microservices and Kafka event-driven consumers, achieving 5000+ TPS per service to support PNC's SMS banking platform via Syniverse.",
          "Designed and deployed cloud-native services on OpenShift OCP, following a single-pod deployment model to ensure high availability and fault tolerance.",
          "Led a migration initiative for 15+ legacy applications, modernizing infrastructure and reducing system failures by 40%.",
          "Pioneered the Auto Enrollment feature for phone banking, reaching 100% project completion and improving customer onboarding via phone by 25%.",
          "Drove performance improvements by profiling and optimizing JVM resource usage, reducing memory and CPU consumption by 30%.",
          "Integrated OAuth2/Ping authentication and implemented Hazelcast caching, Dynatrace APM, and LogScale for end-to-end observability.",
          "Built and managed Jenkins CI/CD pipelines, increasing deployment velocity by 20% and ensuring continuous delivery across environments.",
          "Acted as the SME (Subject Matter Expert) for department knowledge, troubleshooting, and peer mentoring."
        ]
      },
      {
        title: "Assistant Manager",
        company: "The Libertine Pub",
        period: "2021 - 2022",
        responsibilities: [
          "Trained 90% of incoming employees on opening and closing responsibilities.",
          "Managed high-pressure, high-traffic environments while maintaining professionalism.",
          "Reduced waste and costs by 10% through implementing proper measurement techniques."
        ]
      },
      {
        title: "Operations Coordinator",
        company: "The Litigation Practice Group",
        period: "2020 - 2021",
        responsibilities: [
          "Developed scheduling policies that increased productivity by 30%.",
          "Created weekly production status reports, improving employee response by 30%.",
          "Analyzed shift reports to understand trends, delivering recommendations that improved customer outcomes by 15%."
        ]
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "Oregon State University",
        year: "2025",
        details: "Specialization: Artificial Intelligence and Cyber Security"
      },
      {
        degree: "Associates of Computer Science",
        institution: "Cuesta College",
        year: "2022",
        details: "Emphasis on Java, Python, C, microcomputer architecture, and discrete mathematics"
      }
    ],
    
    skills: {
      technical: [
        "Java", "Python", "SQL", "JavaScript", "Node.js",
        "Spring Boot", "JUnit", "Groovy", "RESTful APIs",
        "OpenShift Kubernetes (OCP)", "Jenkins", "Docker", 
        "CI/CD", "OAuth2", "Hazelcast", "PingIdentity",
        "Kafka", "Oracle DB", "PostgreSQL", "LogScale", "Dynatrace",
        "Bitbucket", "Gradle", "Maven", "Git", "SonarQube"
      ],
      soft: [
        "Problem Solving", "Technical Leadership", 
        "Agile Methodologies", "System Design", 
        "Performance Optimization", "Microservice Architecture"
      ]
    },
    
    projects: [
      {
        title: "Recipe AI Web Platform",
        period: "2024 - Present",
        details: [
          "Developing a full-stack recipe search platform using Spring Boot, PostgreSQL, and Angular, with a focus on semantic search and AI-assisted content processing.",
          "Parsed and processed 100,000+ recipes from publicly available sources; cleaned and standardized data before storing in a relational database for high-performance querying.",
          "Built a Spring Batch pipeline to detect and update malformed or missing data, integrating with Together AI models for title reformatting, instruction cleanup, summarization, and vector embedding generation.",
          "Enabled vector similarity search using embedding-powered queries for relevant recipe retrieval.",
          "Integrated local processing and cloud deployment pipelines to balance cost-efficiency and performance.",
          "Architected backend services with JWT-based authentication, rate limiting, and CI/CD for modular deployments.",
          "Deployed frontend with GitHub Pages and backend with Render, supporting a scalable microservice-oriented architecture."
        ]
      }
    ],
    
    contact: {
      location: "Pittsburgh, PA",
      phone: "+1-805-441-7738",
      email: "haka9670@gmail.com",
      linkedin: "linkedin.com/in/haedonkaufman"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-8 pb-20 px-6">
      <div className="container mx-auto mb-12">
        <motion.div 
          className="flex items-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center text-white hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="ml-auto">
            <button 
              onClick={() => window.print()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Print Resume
            </button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        <header className="mb-12 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2 text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Haedon Kaufman
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Engineer
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span>{resumeData.contact.email}</span>
            <span className="hidden sm:inline">•</span>
            <span>{resumeData.contact.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>{resumeData.contact.location}</span>
            <span className="hidden sm:inline">•</span>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              {resumeData.contact.linkedin}
            </a>
          </motion.div>
        </header>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Summary</h2>
          <p className="text-gray-300 leading-relaxed">{resumeData.summary}</p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Education</h2>
          {resumeData.education.map((edu, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <div className="flex justify-between items-center">
                <p className="text-blue-400">{edu.institution}</p>
                <p className="text-gray-400">{edu.year}</p>
              </div>
              <p className="text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Skills</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-300 mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.technical.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-300 mb-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.soft.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-700 pb-2">Projects</h2>
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {resumeData.contact.location}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {resumeData.contact.phone}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {resumeData.contact.email}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                {resumeData.contact.linkedin}
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
