'use client'

import { ArrowIcon, Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'

const influenseFactors = ['Ниша', 'Цели', 'Сроки', 'Требуемая команда', 'Рекламный бюджет']

const pricing = [
  {
    title: 'Фикс + % от оборота',
    description: 'рекомендуемая, вы разделяете риск с нами',
  },
  {
    title: 'Только фикс',
    description: 'если нужен консалтинг и внедрение без %',
  },
  {
    title: 'Аутсорс / колл-центр',
    description: 'оплата за лид/встречу + бонус за сделки',
  },
]

export const PricingHero = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="container flex flex-col justify-center gap-20 items-center absolute top-0 left-0 right-0 h-full py-20 mx-auto">
        <motion.div
          className="flex flex-col items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="flex flex-col items-center gap-[35px] text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            >
              <Typography
                variant="h1"
                className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
              >
                Стоимость
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
          >
            {pricing.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-2 border border-accent-primary p-8 hover:bg-gradient-to-r from-accent-primary to-accent-primary transition-all duration-300 via-[#4C99FF]"
              >
                <Typography variant="h2" className="text-white text-center">
                  {item.title}
                </Typography>
                <Typography variant="bodyS" className="text-white text-center">
                  {item.description}
                </Typography>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center justify-between w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-4 justify-center w-full">
              <div className="flex items-center gap-2 border border-white/20 px-5 py-2">
                <Typography variant="bodyL" className="text-white">
                  Влияющие факторы
                </Typography>
              </div>
              {influenseFactors.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/10 px-5 py-2">
                  <Typography variant="bodyL" className="text-white">
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="default" className="px-20">
                <Typography variant="button" className="flex items-center gap-2">
                  Получить расчёт под ваш проект
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
