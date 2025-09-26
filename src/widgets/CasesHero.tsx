'use client'

import { ArrowIcon, Button, Typography } from '@/shared/ui'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

const imgElitHouse = '/elithouse.png'
const imgEcocapsula = '/ecocapsula.png'
const imgMedic = '/medic.png'

const imgElitHouseLogo = '/elithouse-logo.png'

const cases = [
  {
    title: <Image src={imgElitHouseLogo} alt="Elit House" width={234} height={99} />,
    subtitle: 'Строительная компания',
    image: imgElitHouse,
  },
  {
    title: 'Эко-капсулы',
    subtitle: 'как инвестиционный продукт',
    image: imgEcocapsula,
  },
  {
    title: 'Медицинские',
    subtitle: 'чек-апы',
    image: imgMedic,
  },
]

export const CasesHero = () => {
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
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
            >
              <Typography
                variant="h1"
                className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary pt-40"
              >
                Реальные кейсы — реальные результаты
              </Typography>
              <Typography variant="h2" className="text-white">
                Мы выстраиваем отделы продаж, которые приносят прибыль. Ознакомьтесь с примерами
                внедрённых решений для наших клиентов
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div className="flex gap-5">
            {cases.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 relative bg-contain bg-center bg-no-repeat w-[380px] h-[420px] px-8 py-10 border border-white-pure"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="relative">
                  <Typography variant="h1" className={clsx('text-white', index === 2 && '!text-4xl')}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="button"
                    className="text-accent-primary bg-white-pure rounded-full px-4 border-2 border-black py-0 absolute -bottom-3 right-0"
                  >
                    {item.subtitle}
                  </Typography>
                </div>
              </div>
            ))}
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
