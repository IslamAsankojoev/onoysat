'use client'

import Image from 'next/image'
import { Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgGroup = '/71ef975d6e0a81a6a2de681bb53752bb3b21a54f.svg'
const imgEllipse3 = '/97a96434fb04010c43df630ede88a2c18b19d854.svg'
const imgEllipse4 = '/166cab946cad9cc315e7b9e82a10e86c7f19abf8.svg'

interface PrincipleCardProps {
  text: string
  index: number
  isInView: boolean
}

const PrincipleCard = ({ text, index, isInView }: PrincipleCardProps) => {
  return (
    <motion.div
      className="bg-white box-border flex gap-[10px] items-center justify-center pl-[20px] pr-[30px] py-[20px] relative rounded-[600px] w-fit overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div 
        className="absolute border-2 border-[#1a1a1d] border-solid inset-0 pointer-events-none rounded-[600px] overflow-hidden"
        aria-hidden="true"
      />
      
      <motion.div
        className="bg-[#006eff] box-border flex flex-col gap-[16.667px] items-center justify-center overflow-clip px-0 py-[3.333px] relative rounded-[600px] shrink-0 size-[40px]"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: 'easeOut'
        }}
      >
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[17.5px] relative w-[25px]">
              <Image
                src={imgGroup}
                alt="check icon"
                width={25}
                height={17.5}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="flex flex-col font-gilroy justify-end leading-[0] not-italic relative shrink-0 text-[#006eff] text-[24px]"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.3,
          ease: 'easeOut'
        }}
      >
        <p className="leading-[26px] whitespace-pre">
          {text}
        </p>
      </motion.div>
    </motion.div>
  )
}

export const AboutWork = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()

  const principles = [
    "Результат важнее процесса — фиксируем цели и идём к ним спринтами",
    "Этика — честные офферы, уважение к клиенту, без «серых» схем",
    "Прозрачность — понятные отчёты, доступ к CRM и аналитике",
    "Системность — документы, регламенты, ответственность"
  ]

  return (
    <div className="bg-black relative w-full py-20 overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <motion.div
        ref={heroRef}
        className="absolute left-[1504px] size-[687px] top-[-262px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="absolute inset-[-65.502%]">
          <Image
            src={imgEllipse3}
            alt="background ellipse"
            width={687}
            height={687}
            className="w-full h-full"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Основная карточка */}
        <motion.div
          className="relative flex backdrop-blur-[7.5px] backdrop-filter bg-[rgba(255,255,255,0.1)] h-[580px] w-full mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="h-[580px] overflow-clip relative w-full flex flex-col items-center justify-center gap-10 overflow-hidden">
            {/* Фоновый элемент внутри карточки */}
            <motion.div
              className="absolute left-[-181px] size-[475px] top-[263px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="absolute inset-[-73.684%]">
                <Image
                  src={imgEllipse4}
                  alt="background pattern"
                  width={475}
                  height={475}
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Заголовок */}
            <motion.div
              ref={titleRef}
              className="bg-clip-text flex flex-col font-intro justify-center leading-[0] not-italic text-[45px] text-nowrap"
              style={{ WebkitTextFillColor: "transparent", left: "calc(50% - 257px)" }}
              initial={{ opacity: 0, y: -30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Typography
                variant="h1"
                className="text-[45px] bg-clip-text text-transparent font-normal leading-[50px] bg-gradient-to-r from-white to-accent-primary"
              >
                Принципы работы:
              </Typography>
            </motion.div>

            {/* Карточки принципов */}
            <motion.div
              ref={cardsRef}
              className="content-stretch flex flex-col gap-[15px] items-center justify-center"
              initial={{ opacity: 0 }}
              animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {principles.map((principle, index) => (
                <PrincipleCard
                  key={index}
                  text={principle}
                  index={index}
                  isInView={cardsInView}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Граница карточки */}
          <div 
            className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </div>
  )
}