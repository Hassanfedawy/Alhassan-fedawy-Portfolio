import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript/TypeScript', 'HTML/CSS']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'MongoDB', 'Prisma', 'RESTful APIs', 'Express.js']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'VS Code', 'SEO Optimization', 'Performance Tuning', 'Responsive Design']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">Skills & Technologies</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <h3 className="mb-4 text-xl font-semibold">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
