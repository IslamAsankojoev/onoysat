'use client'

import { Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgEe255Cacfa6F21Ca1049B81Bbe8A2Cef1 = '/5878512e72c11549ad1f6f7990c0814ddb0d0e39.png'

interface RoleCardProps {
  role: string
  index: number
  isInView: boolean
}

const RoleCard = ({ role, index, isInView }: RoleCardProps) => {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[25px] py-[15px] relative shrink-0 overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col font-gilroy justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">
          {role}
        </p>
      </div>
    </motion.div>
  )
}

export const TeamRoles = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.1)
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: rolesRef, isInView: rolesInView } = useScrollAnimation()

  const roles = [
    "Руководитель проекта",
    "Маркетолог‑перформанс + продюсер контента (ReelsBot)",
    "Эксперт по продажам",
    "Тимлид колл‑центра",
    "CRM‑инженер / аналитик",
    "Рекрутер"
  ]

  return (
    <div className="bg-black relative w-full py-20 overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <motion.div
        ref={heroRef}
        className="absolute flex h-[2003px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[2671px]"
        style={{ top: "calc(50% + 62.5px)", left: "calc(50% + 0.5px)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="flex-none rotate-[270deg]">
          <div 
            className="bg-center bg-cover bg-no-repeat blur-[43.2px] filter h-[2671px] w-[2003px]"
            style={{ backgroundImage: `url('${imgEe255Cacfa6F21Ca1049B81Bbe8A2Cef1}')` }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        {/* Основной контент */}
        <motion.div
          className="content-stretch flex flex-col gap-[25px] items-center w-full max-w-[1180px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Заголовок */}
          <motion.div
            ref={titleRef}
            className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[13px] pt-[15px] px-[30px] relative shrink-0"
            initial={{ opacity: 0, y: -30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div 
              className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex flex-col font-gilroy justify-center leading-[0] not-italic relative shrink-0 text-[22px] text-nowrap text-white">
              <Typography
                variant="bodyL"
                className="text-white text-[22px] leading-[normal] font-normal"
              >
                Ключевые роли под проект:
              </Typography>
            </div>
          </motion.div>

          {/* Роли */}
          <motion.div
            ref={rolesRef}
            className="content-center flex flex-wrap gap-[15px] items-center justify-center relative shrink-0 w-full"
            initial={{ opacity: 0 }}
            animate={rolesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {roles.map((role, index) => (
              <RoleCard
                key={index}
                role={role}
                index={index}
                isInView={rolesInView}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}