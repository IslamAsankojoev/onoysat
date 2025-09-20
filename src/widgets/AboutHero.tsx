'use client'

import { Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'
import Image from 'next/image'

export const AboutHero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Фоновое изображение */}
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
            backgroundImage: 'url(/about-hero-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        {/* Overlay для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="absolute w-full h-full left-0 top-0">
        <div className="w-full h-full">
          <Image src={'/11524474_4760052 1.png'} alt="hero pattern" fill />
        </div>
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          className="max-w-[1180px] mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Заголовок */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
            >
              О компании
            </Typography>
          </motion.div>

          {/* Описание */}
          <motion.div
            className="max-w-[1116px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          >
            <Typography
              variant="h2"
              className="text-[#6E708C]"
            >
              Мы — команда, которая выстраивает продажи как систему: стратегия, люди, процессы,
              технологии и контроль. Мы не «делаем упаковку ради упаковки» — мы строим машину
              сделок. С нами вы получаете: понятные шаги, измеримые KPI, прозрачные отчёты и
              предсказуемый рост
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
