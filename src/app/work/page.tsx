'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Project card component
const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  image, 
  link 
}: { 
  title: string; 
  description: string; 
  tech: string[]; 
  image: string; 
  link: string;
}) => {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-64 bg-gray-700 overflow-hidden relative">
        <Image 
          src={image} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          quality={100}
          className="object-contain object-center hover:scale-105 transition-all duration-500"
          priority={true}
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{description}</p>
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="text-sm bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center font-semibold shadow-lg"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}

export default function WorkPage() {
  // Projects data
  const projects = [
    {
      title: "Recipe AI – Intelligent Recipe Search Platform",
      description: "Full-stack web application that enables users to search, discover, and save recipes using semantic AI-powered search. Uses vector embeddings for natural language queries and processes 100,000+ recipes with a Spring Batch pipeline.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "AI Embeddings", "Java", "TypeScript"],
      image: "/images/projects/recipeAi.png",
      link: "https://recipes.haedonkaufman.com"
    }
  ];

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
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-2 text-white text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Work
        </motion.h1>
        <motion.div
          className="h-1 w-24 bg-white mx-auto mb-16"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        
        <div className="flex justify-center">
          <div className="max-w-xl w-full">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
