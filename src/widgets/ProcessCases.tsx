'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgSend = '/c5d134bac1959749e19d188fa14f9ed4b118d1d1.svg'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  isInView: boolean
  image: string
}

const ProcessStep = ({ number, title, description, isInView, image }: ProcessStepProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 },
      }}
      style={{
        background: 'linear-gradient(125.84deg, #0B042D 24.89%, #210D79 152.79%)',
        border: '1.04px solid',
        borderImageSource: 'linear-gradient(132.08deg, rgba(51, 37, 103, 0.8) 19%, rgba(51, 37, 103, 0.5) 81%)',
      }}
    >
      <motion.div
        className="flex items-center justify-center mb-6"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        <Image src={image} alt={title} width={320} height={178} />
      </motion.div>

      <Typography variant="h2" className="text-white-pure mb-4">
        {title}
      </Typography>

      <Typography variant="bodyS" className="text-white-pure">
        {description}
      </Typography>
    </motion.div>
  )
}

export const ProcessCases = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation()
  const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation()

  const processSteps = [
    {
      number: '1',
      title: 'Стратегия и план',
      description: 'офферы, каналы, команда, KPI, бюджет',
      image: '/audit.png',
    },
    {
      number: '2',
      title: 'Аудит и цели',
      description: 'интервью, воронка, юнит-экономика, гипотезы',
      image: '/strategy.png',
    },
    {
      number: '3',
      title: 'Инфраструктура',
      description: 'CRM, материалы, посадочные, скрипты',
      image: '/implementation.png',
    },
    {
      number: '4',
      title: 'Запуск трафика и продаж',
      description: 'первые лиды и сделки',
      image: '/traffic.png',
    },
    {
      number: '5',
      title: 'Спринты',
      description: 'A/B тесты, шлифуем конверсию, масштабируем',
      image: '/sprint.png',
    },
    {
      number: '6',
      title: 'Систематизация',
      description: 'регламенты, отчётность, обучение, план роста на 3–6 мес',
      image: '/systematization.png',
    },
  ]

  return (
    <div className="bg-black relative w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1180px] mx-auto">
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
              className="text-white-pure mb-4"
            >
              Процесс работы
            </Typography>
            <Typography variant="h2" className="text-white-pure">
              Артефакты на каждом этапе: ТЗ, чек-листы, регламенты, отчёты, доступы
            </Typography>
          </motion.div>

          {/* Сетка этапов */}
          <motion.div
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-16"
            initial={{ opacity: 0 }}
            animate={stepsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isInView={stepsInView}
                  image={step.image}
                />
              </motion.div>
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
              <Button className='px-10'>
                <div className="flex items-center gap-3">
                  <Typography variant="button" className="text-white-pure text-[16px] font-medium">
                    Запросить презентацию с подтверждающими материалами
                  </Typography>
                  <motion.div
                    className="flex items-center justify-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
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
    </div>
  )
}
