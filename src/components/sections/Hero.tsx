'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import AnimatedButton from '@/components/ui/AnimatedButton'
import AnimatedCard from '@/components/ui/AnimatedCard'
import Tooltip from '@/components/ui/Tooltip'

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  tooltip: string;
}

export function Hero(): React.ReactElement {
  const socialLinks: SocialLink[] = React.useMemo(() => [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com/hassanmoustafa",
      tooltip: "GitHub Profile"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/hassan-moustafa-dev",
      tooltip: "LinkedIn Profile"
    }
  ], [])

  const handleDownloadCV = React.useCallback(() => {
    window.open('/resume.pdf', '_blank')
  }, [])

  const handleContactScroll = React.useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10 animate-gradient-xy" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Card */}
        <AnimatedCard 
          variant="gradient" 
          hoverEffect="float"
          className="flex flex-col items-center text-center p-8 space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div  className="relative">
            <div className="mb-4 h-24 w-24 rounded-full bg-primary-500 shadow-neon dark:shadow-neon-dark flex items-center justify-center">
              <span className="text-4xl font-bold text-white">HH</span>
            </div>
            </div>
          </motion.div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Hassan's Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Full Stack Developer | Computer Engineer | Building Innovative Web Solutions
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <Tooltip key={index} text={link.tooltip} position="bottom">
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.icon}
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </AnimatedCard>
        
        {/* Hero Content */}
        <div className="space-y-6">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2  className="text-4xl md:text-5xl font-bold leading-tight">
            Transforming Ideas into 
            <span className="text-primary"> Digital Solutions</span>
            </h2>
          </motion.h2>
          
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground">
            Crafting innovative web applications with cutting-edge technologies. 
            Passionate about creating efficient, scalable, and user-friendly solutions.
            </p>
          </motion.p>
          
          <div className="flex space-x-4">
            <AnimatedButton 
              variant="primary" 
              size="lg" 
              animationType="pulse"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 w-5 h-5" />
              Download CV
            </AnimatedButton>
            
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