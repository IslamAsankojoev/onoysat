'use client'

import { Particles, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Контент */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <motion.div
          className="max-w-[1180px] mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              className="!text-[150px] bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-white to-accent-primary"
            >
              404
            </Typography>
          </motion.div>
          <motion.div
            className="mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          >
            <Typography variant="bodyL" className="text-white !leading-[26px]">
              Страница не найдена <br />вы можете вернуться на <br /> <Link href="/" className='underline'>главную страницу</Link>
            </Typography>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute z-1 inset-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.01}
          particleBaseSize={60}
          // moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/about-hero-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>
    </div>
  )
}
