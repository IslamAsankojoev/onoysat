'use client'

import Image from 'next/image'
import { ArrowIcon, Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgSend = '/01cfeaf1a961aa2dea706db4613c3ada3546d5cc.svg'
const imgEllipse2 = '/af4ee9f8283046cc4514094b853008efea8a7847.png'
const imgHeroPattern = '/3e0b53deb7f94115e48cc969b62127244a0e8fd7.svg'
const imgFrame = '/7039737abe86ad8ac7bc3b1c19a46f72be6500db.svg'

const otrasli = ['Недвижимость', 'Туризм', 'Медицина', 'Образование', 'B2B']

export const ServicesHero = () => {
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

      <div className="container flex flex-col justify-center gap-44 items-center absolute top-0 left-0 right-0 h-full py-20 mx-auto">
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
                Строим отделы продаж под ключ
              </Typography>
            </motion.div>
            <motion.div
              className="w-[907px]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
            >
              <Typography variant="h2" className="text-white">
                Системы, которые приносят клиентов и увеличивают прибыль. <br />
                От стратегии до внедрения — берём на себя весь процесс
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

        <motion.div
          className="flex items-center justify-between w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4 justify-center w-full">
            <div className="flex items-center gap-2 border border-white/20 px-8 py-4">
              <Typography variant="bodyL" className="text-white">
                Отрасли
              </Typography>
            </div>
            {otrasli.map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/10 px-8 py-4">
                <Typography variant="bodyL" className="text-white">
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
