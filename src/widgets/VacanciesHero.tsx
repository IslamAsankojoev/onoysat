'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const img = '/5dcb4b4f0009215d09e5d9b1a207a53df73eb2aa.svg'

export const VacanciesHero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)

  return (
    <div className="bg-black relative w-full h-screen overflow-hidden">
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
            backgroundImage: 'url(/vacancies-hero-bg.jpg)',
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
          className="flex flex-col items-center gap-20 text-center"
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
              Вакансии
            </Typography>
          </motion.div>

          <div className="flex gap-10 w-full">
            {/* 592d0e84cfca497d586efbfa6c091aebb6a8c8fe.jpg */}

            <motion.div
              className="flex-1/4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              <Image src={'/puzzle.png'} alt="vacancies" width={1000} height={1000} />
            </motion.div>

            <div className="flex flex-col gap-4 flex-1/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center gap-2 border border-accent-primary p-4 hover:bg-gradient-to-r from-accent-primary to-accent-primary transition-all duration-300 via-[#4C99FF]"
              >
                <Typography variant="bodyM" className="text-white">
                  Ищем: менеджеров по продажам, руководителей групп, колл-центр специалистов,
                  маркетологов‑перформанс, продюсеров видео, CRM‑инженеров
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center gap-2 border border-accent-primary p-4 hover:bg-gradient-to-r from-accent-primary to-accent-primary transition-all duration-300 via-[#4C99FF]"
              >
                <Typography variant="bodyM" className="text-white">
                  Мы даём: грейды и рост, обучение, чёткие KPI, бонусы за результат
                </Typography>
              </motion.div>
            </div>
          </div>

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
                  Отправить резюме
                  <div className="flex items-center justify-center">
                    <div className="rotate-180 scale-y-[-100%]">
                      <div className="w-[27px] h-[27px]">
                        <Image
                          src={img}
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
