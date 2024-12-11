'use client'

import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence, MotionProps } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertTriangle, MapPin, Mail, Phone } from 'lucide-react'

import AnimatedButton from '@/components/ui/AnimatedButton'
import AnimatedCard from '@/components/ui/AnimatedCard'
import Tooltip from '@/components/ui/Tooltip'
import { MotionForm } from '@/components/ui/MotionForm'

type ContactStatus = 'idle' | 'sending' | 'success' | 'error'

type ContactInfo = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function Contact(): React.ReactElement {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [status, setStatus] = useState<ContactStatus>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = useCallback((): boolean => {
    if (!name || !email || !message) {
      setStatus('error')
      return false
    }
    return true
  }, [name, email, message])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('sending')

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (error) {
      console.error('Email send error:', error)
      setStatus('error')
    }
  }, [validateForm])

  const contactInfo: ContactInfo[] = [
    { 
      icon: MapPin, 
      title: 'Location', 
      description: 'Cairo, Egypt' 
    },
    { 
      icon: Mail, 
      title: 'Email',
      description: 'alhassanmoustafa577@gmail.com' 
    },
    { 
      icon: Phone, 
      title: 'Phone',
      description: '+20 1092606059' 
    }
  ]

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 -z-10 animate-gradient-xy" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Information */}
        <AnimatedCard 
          variant="gradient" 
          hoverEffect="float"
          className="p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Contact <span className="text-primary">Information</span>
          </h2>
          
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Tooltip key={index} text={info.title} position="right">
                <div className="flex items-center space-x-4 p-3 bg-background/50 rounded-lg hover:bg-primary/10 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                  <span className="text-muted-foreground">{info.description}</span>
                </div>
              </Tooltip>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for collaboration or opportunities!
            </p>
          </div>
        </AnimatedCard>
        
        {/* Contact Form */}
        <AnimatedCard 
          variant="elevated" 
          hoverEffect="glow"
          className="p-8"
        >
          <MotionForm 
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Send Me a <span className="text-primary">Message</span>
            </h2>
            
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary/50 transition-all"
              />
              
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary/50 transition-all"
              />
              
              <textarea 
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            
            <div className="text-center">
              <AnimatedButton 
                type="submit" 
                variant="primary" 
                size="lg" 
                animationType="pulse"
                disabled={status === 'sending'}
                className="w-full"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </AnimatedButton>
              
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    
                  >
                    <p className="text-green-600 mt-4">
                    Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <p className="text-red-600 mt-4">
                    Oops! Something went wrong. Please try again.
                    </p>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </MotionForm>
        </AnimatedCard>
      </div>
    </section>
  )
}
