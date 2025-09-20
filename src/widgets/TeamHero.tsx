'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgSend = '/01cfeaf1a961aa2dea706db4613c3ada3546d5cc.svg'

export const TeamHero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <motion.div
        ref={heroRef}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/team-hero-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* Overlay для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Контент */}
      <div className="container flex flex-col justify-center items-center absolute top-0 left-0 right-0 h-full py-20 mx-auto">
        <motion.div
          className="flex flex-col items-center gap-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
            >
              команда
            </Typography>
          </motion.div>

          {/* //team.png */}
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Image src={'/team.png'} alt="team" width={1000} height={1000} />
          </motion.div>

          <motion.div
            className="flex items-center gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="default" className="px-20">
                <Typography variant="button" className="flex items-center gap-2">
                  Запросить знакомство с командой проекта
                  <div className="flex items-center justify-center">
                    <div className="rotate-180 scale-y-[-100%]">
                      <div className="w-[27px] h-[27px]">
                        <Image
                          src={imgSend}
                          alt="send icon"
                          width={27}
                          height={27}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </Typography>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
