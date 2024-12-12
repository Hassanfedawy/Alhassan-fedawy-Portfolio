'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';

const projects = [
  {
    title: 'SaaS Platform',
    description: 'A full-stack SaaS application with user authentication and subscription management.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'Tailwind CSS'],
    image: '/projects/pingmaster.png',
    link: 'https://pingmaster1-pink.vercel.app/'
  },
  {
    title: 'Fitness & Meal Planner',
    description: 'Web application for generating personalized workout and meal plans.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/projects/befit.png',
    link: 'https://befit1.vercel.app/'
  },
  {
    title: 'Amazon Clone',
    description: 'A frontend clone of Amazon with modern UI and responsive design.',
    tech: ['React', 'Tailwind CSS'],
    image: '/projects/amazon.png',
    link: 'https://amazonclone-rosy-omega.vercel.app/'
  },
  {
    title: 'Airbnb Clone',
    description: 'A pixel-perfect clone of Airbnb\'s frontend interface.',
    tech: ['React', 'CSS'],
    image: '/projects/airbnb.png',
    link: 'https://air-bnb-clone-rose.vercel.app/'
  }
]

export function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              Featured Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                      <Image
                        src={project.image}
                      alt={project.title}
                        width={500}
                        height={500}
                        objectFit='contain'
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-block rounded-lg bg-teal-500 px-4 py-2 text-white transition-all hover:bg-teal-600 transform duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
