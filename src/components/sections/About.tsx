import React from 'react'
import { motion } from 'framer-motion'

export function About(): React.ReactElement {
  return (
    <section 
      id="about" 
      className="w-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 -z-10 opacity-50" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          
        >
          <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="mb-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-blue-200">
            About Me
          </h2>
          <p className="mb-6 text-lg text-gray-200">
            I&apos;m a Computer Engineer turned Full Stack Developer with a passion for building
            efficient, user-friendly web applications. Specializing in Next.js, React, and
            MongoDB, I focus on creating performant applications with clean, maintainable
            code.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="mb-2 text-lg font-semibold text-teal-600 dark:text-teal-400">
                Frontend
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                React.js, Next.js, Tailwind CSS
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="mb-2 text-lg font-semibold text-teal-600 dark:text-teal-400">
                Backend
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Express.js, MongoDB, Prisma
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="mb-2 text-lg font-semibold text-teal-600 dark:text-teal-400">
                Other Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                SEO, Performance Optimization, Responsive Design, UI/UX
              </p>
            </div>
          </div>
          </div>
          </motion.div>
      </div>
    </section>
  )
}
