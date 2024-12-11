import React from 'react'
import { motion } from 'framer-motion'

export function About(): React.ReactElement {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold">About Me</h2>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
              I&apos;m a Computer Engineer turned Full Stack Developer with a passion for building
              efficient, user-friendly web applications. Specializing in Next.js, React, and
              MongoDB, I focus on creating performant applications with clean, maintainable
              code.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-2 font-semibold">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React.js, Next.js, Tailwind CSS
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-2 font-semibold">Backend</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Express.js, MongoDB, Prisma
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-2 font-semibold">Other Skills</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  SEO, Performance Optimization , Responsive Design , UI/UX
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
