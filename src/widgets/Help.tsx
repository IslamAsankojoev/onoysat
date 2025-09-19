'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgStar = '/2e284c0ddeeccad93bccacce9ddda4f42a151751.svg'
const imgKey = '/3ad022007a4260028bdfc4ffa228c2569c15a427.svg'
const imgGraph = '/9d13d80b759a0991ab0c3300da0d155e49a9bf7d.svg'
const imgTeacher = '/9c7c50ab9b9293cd849776908dd8d4f2b9df7973.svg'
const imgStar2 = '/9c6a37d0bb8c1acdb7d8ba62f0a6557383ecaa46.svg'
const imgCall = '/5a5773c467c656a4ec356c7f1a6abd9a36a85aaa.svg'
const imgSend = '/c5d134bac1959749e19d188fa14f9ed4b118d1d1.svg'

interface SolutionCardProps {
  icon: string
  title: string
  description: string
  index: number
}

const SolutionCard = ({ icon, title, description, index, isInView }: SolutionCardProps & { isInView: boolean }) => {
  return (
    <motion.div 
      className="relative w-[380px] h-full border border-[rgba(51,37,103,0.8)] overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: 'easeOut' 
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="flex flex-col gap-6 p-[30px] h-full"
        style={{
          background: 'linear-gradient(125.84deg, #0B042D 24.89%, #210D79 152.79%)',
        }}
      >
        <motion.div 
          className="bg-[rgba(254,254,254,0.1)] flex items-center justify-center p-2 w-fit"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1 + 0.2, 
            ease: 'easeOut' 
          }}
        >
          <div className="w-6 h-6">
            <Image src={icon} alt="icon" width={24} height={24} className="w-full h-full" />
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.1 + 0.3, 
            ease: 'easeOut' 
          }}
        >
          <Typography
            variant="bodyL"
            className="text-white-pure text-[18px] font-semibold leading-[22px]"
          >
            {title}
          </Typography>
          <Typography
            variant="bodyS"
            className="text-white-pure text-[14px] leading-[20px] w-[306px]"
          >
            {description}
          </Typography>
        </motion.div>
      </div>
    </motion.div>
  )
}

export const Help = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()
  const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation()

  const solutions = [
    {
      icon: imgStar,
      title: 'Запуск продаж с нуля / перезапуск',
      description: 'стратегия, офферы, скрипты, CRM, материалы, трафик, команда',
    },
    {
      icon: imgKey,
      title: 'Маркетинг под ключ',
      description: 'позиционирование, креативы, контент, перформанс, лидогенерация',
    },
    {
      icon: imgGraph,
      title: 'CRM и аналитика',
      description: 'внедрение, автоматизация, отчёты, воронка, контроль качества',
    },
    {
      icon: imgTeacher,
      title: 'Найм и обучение',
      description: 'рекрутинг, адаптация, скрипты, аттестации, регулярные тренинги',
    },
    {
      icon: imgStar2,
      title: 'Регламенты и управление',
      description: 'SLA, KPI, мотивация, планёрки, чек-листы, SOP',
    },
    {
      icon: imgCall,
      title: 'Аутсорс продаж / колл-центр',
      description: 'предквалификация, назначение встреч, доведение до сделки',
    },
  ]

  return (
    <div className="bg-black relative w-full py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            className="text-white-pure text-[50px] font-normal leading-[50px] font-intro"
          >
            Чем мы помогаем?
          </Typography>
        </motion.div>

        {/* Сетка карточек */}
        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16 max-w-[1180px] mx-auto"
          initial={{ opacity: 0 }}
          animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
              isInView={cardsInView}
            />
          ))}
        </motion.div>

        {/* Кнопка */}
        <motion.div 
          ref={buttonRef}
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="outline">
              <div className="flex items-center gap-3">
                <Typography variant="button" className="text-white-pure text-[16px] font-medium">
                  Посмотреть все услуги
                </Typography>
                <motion.div 
                  className="flex items-center justify-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
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
                </motion.div>
              </div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
