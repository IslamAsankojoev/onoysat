'use client'

import Image from 'next/image'
import { ArrowIcon, Button, Typography } from '@/shared/ui'
import { Alexandria } from 'next/font/google'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

const imgEllipse2 = '/fcbfe7e6f89236ee29a14f01cb0f9268a6193475.svg'
const imgHeroPattern = '/3e0b53deb7f94115e48cc969b62127244a0e8fd7.svg'
const imgFrame = '/7039737abe86ad8ac7bc3b1c19a46f72be6500db.svg'

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const Hero = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <motion.div
        ref={heroRef}
        className=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src={imgEllipse2}
          alt="background ellipse"
          width={2588}
          height={1708}
          className="w-full h-full"
        />
      </motion.div>

      <div
        className="absolute w-[9322px] h-[2593px] -translate-x-1/2 -translate-y-1/2"
        style={{
          top: 'calc(50% + 376.5px)',
          left: 'calc(50% + 0.5px)',
        }}
      >
        <Image
          src={imgHeroPattern}
          alt="hero pattern"
          width={9322}
          height={2593}
          className="w-full h-full"
        />
      </div>

      <div className="container flex flex-col justify-between items-center absolute top-0 left-0 right-0 h-full py-20 mx-auto">
        <div />
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
                Строим отдел продаж, который приносит деньги — системно и предсказуемо
              </Typography>
            </motion.div>
            <motion.div
              className="w-[907px]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
            >
              <Typography variant="h2" className="text-white">
                Маркетинг под ключ, CRM, найм и обучение, регламенты и аналитика. <br /> От первого
                лида до закрытой сделки — за 30–90 дней.
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="white">
                <Typography variant="button">Запросить коммерческое предложение</Typography>
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
          <motion.div
            className="flex items-start gap-6 px-[37px] py-0"
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.3, delay: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              className="flex flex-col items-start gap-[5px]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            >
              <div className="font-alexandria text-rating text-light-grey leading-[40px]">
                <Typography
                  variant="h1"
                  className={`text-white text-[50px] ${alexandria.className}`}
                >
                  50+
                </Typography>
              </div>
              <div className="font-gilroy text-ratingLabel text-grey-text">
                <Typography variant="bodyL" className="text-[#4D5C83]">
                  компанийF
                </Typography>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-[10px]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            >
              <div className="font-alexandria text-rating text-light-grey leading-[40px]">
                <Typography
                  variant="h1"
                  className={`text-white text-[50px] ${alexandria.className}`}
                >
                  $100M+
                </Typography>
              </div>
              <div className="font-gilroy text-ratingLabel text-grey-text">
                <Typography variant="bodyL" className="text-[#4D5C83]">
                  <p>суммарного</p>
                  <p>оборота проектов</p>
                </Typography>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-[10px]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            >
              <div className="font-alexandria text-rating text-light-grey leading-[40px]">
                <Typography
                  variant="h1"
                  className={`text-white text-[50px] ${alexandria.className}`}
                >
                  6+
                </Typography>
              </div>
              <div className="font-gilroy text-ratingLabel text-grey-text">
                <Typography variant="bodyL" className="text-[#4D5C83]">
                  лет в консалтинге
                </Typography>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative bg-[#0B042D] overflow-hidden border border-accent-primary"
            style={{
              boxShadow: '0px 0px 20px -5px #443149 inset',
            }}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-[10px] p-[18px]">
              <motion.div
                className="w-[43px] h-[44px] flex-shrink-0"
                initial={{ rotate: -10 }}
                animate={heroInView ? { rotate: 0 } : { rotate: -10 }}
                transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
              >
                <Image
                  src={imgFrame}
                  alt="frame icon"
                  width={43}
                  height={44}
                  className="w-full h-full"
                />
              </motion.div>
              <div className="flex flex-col items-start text-light-grey">
                <div className="font-gilroy text-cardTitle font-medium leading-[16px]">
                  <Typography variant="bodyS" className="text-white">
                    Работаем прозрачно
                  </Typography>
                </div>
                <div className="font-gilroy text-cardText leading-[20px] w-[238px]">
                  <Typography variant="bodyS" className="text-white">
                    план → KPI → спринты → результат
                  </Typography>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
