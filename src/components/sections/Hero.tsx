'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import AnimatedButton from '@/components/ui/AnimatedButton'
import AnimatedCard from '@/components/ui/AnimatedCard'

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  tooltip: string;
}

export function Hero(): React.ReactElement {
  const socialLinks: SocialLink[] = React.useMemo(() => [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com/Hassanfedawy",
      tooltip: "GitHub Profile"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/alhassan-fedawy-02a353321/",
      tooltip: "LinkedIn Profile"
    }
  ], [])



  const handleContactScroll = React.useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 -z-10 animate-gradient-xy" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Card */}
        <AnimatedCard 
          variant="gradient" 
          hoverEffect="float"
          className="flex flex-col items-center text-center p-8 space-y-6 bg-white shadow-lg rounded-xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="mb-4 h-24 w-24 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 shadow-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AF</span>
              </div>
            </div>
          </motion.div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-2 text-gray-900">
              Alhassan Fedawy
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Full Stack Developer | Computer Engineer | Building Innovative Web Solutions
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group text-gray-700 hover:text-teal-500 transition-colors"
                >
                  {link.icon}
                  {/* Hover Info */}
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {link.tooltip}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AnimatedCard>
        
        {/* Hero Content */}
        <div className="space-y-8">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Transforming Ideas into 
              <span className="text-teal-500"> Digital Solutions</span>
            </div>
          </motion.h2>
          
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-xl text-gray-700">
              Crafting innovative web applications with cutting-edge technologies. 
              Passionate about creating efficient, scalable, and user-friendly solutions.
            </div>
          </motion.p>
          
          <div className="flex space-x-4">

            
            <AnimatedButton 
              variant="outline" 
              size="lg" 
              animationType="float"
              onClick={handleContactScroll}
            >
              Contact Me
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
