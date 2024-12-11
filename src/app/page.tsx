'use client'

import { Link } from 'react-scroll'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
        <div className="container mx-auto flex justify-center space-x-6 p-4">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {section}
            </Link>
          ))}
        </div>
      </nav>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
