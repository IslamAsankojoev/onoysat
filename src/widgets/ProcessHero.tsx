'use client'

import Image from 'next/image'
import { ArrowIcon, Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgSend = '/01cfeaf1a961aa2dea706db4613c3ada3546d5cc.svg'
const imgEllipse2 = '/grid-pattern.png'

export const ProcessHero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <motion.div ref={heroRef} className="">
        <Image
          src={imgEllipse2}
          alt="background ellipse"
          width={2588}
          height={1708}
          className="w-full h-full"
        />
      </motion.div>

      <div className="container flex flex-col justify-center gap-20 items-center absolute top-0 left-0 right-0 h-full py-20 mx-auto">
        <motion.div
          className="flex flex-col items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="flex flex-col items-center gap-[35px] text-center"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            >
              <Typography
                variant="h1"
                className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
              >
                Прозрачный процесс работы
              </Typography>
            </motion.div>
            <motion.div
              className="w-[907px]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
            >
              <Typography variant="h2" className="text-white">
              Наш процесс построен так, чтобы каждый этап приближал к росту продаж: аудит, стратегия, внедрение, обучение и результат
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="default" className="px-20">
                <Typography variant="button" className="flex items-center gap-2">
                  Получить аудит
                  <ArrowIcon />
                </Typography>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
      </div>
    </div>
  )
}