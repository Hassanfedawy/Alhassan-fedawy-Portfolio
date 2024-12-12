//Projects.tsx
'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SaaS Platform',
    description: 'A full-stack SaaS application with user authentication and subscription management.',
    tech: ['Next.js', 'MongoDB', 'Prisma', 'Tailwind CSS'],
    image: '/projects/saas.jpg',
    link: '#'
  },
  {
    title: 'Fitness & Meal Planner',
    description: 'Web application for generating personalized workout and meal plans.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/projects/fitness.jpg',
    link: '#'
  },
  {
    title: 'Amazon Clone',
    description: 'A frontend clone of Amazon with modern UI and responsive design.',
    tech: ['React', 'Tailwind CSS'],
    image: '/projects/amazon.jpg',
    link: '#'
  },
  {
    title: 'Airbnb Clone',
    description: 'A pixel-perfect clone of Airbnb\'s frontend interface.',
    tech: ['React', 'CSS'],
    image: '/projects/airbnb.jpg',
    link: '#'
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
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  {/* Add project image here */}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-block rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
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
