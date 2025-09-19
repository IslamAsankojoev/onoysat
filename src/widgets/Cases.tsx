'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/shared/hooks/useScrollAnimation'

// Импорты изображений
const imgCase1 = '/9b45889e435faaff79f7e9af774526313c64796d.png'
const imgCase2 = '/capsule.png'
const imgCase3 = '/3d948d928caf7909a6473df525ceb75a45939c38.png'
const imgSend = '/c5d134bac1959749e19d188fa14f9ed4b118d1d1.svg'

interface CaseCardProps {
  image: string
  title: string
  subtitle: string
  result: string
  isLarge?: boolean
  isInView: boolean
}

const CaseCard = ({ image, title, subtitle, result, isLarge = false, isInView }: CaseCardProps) => {
  if (isLarge) {
    return (
      <motion.div
        className="relative w-full border border-[rgba(51,37,103,0.8)] overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-grow flex-col h-full p-8 bg-blue-dark border border-white-glass py-10">
          <div className="flex flex-col gap-10 flex-1">
            <div className="flex flex-col gap-2">
              <Typography
                variant="h1"
                className="text-white-pure text-[18px] font-semibold leading-[22px]"
              >
                {title}
              </Typography>
              <Typography variant="h2" className="text-white-pure text-[14px] leading-[20px]">
                {subtitle}
              </Typography>
            </div>

            <div className="h-px w-[322px] bg-white-pure" />

            <div className="flex flex-col gap-2">
              <Typography variant="h1" className="text-white-pure">
                Результат:
              </Typography>
              <Typography variant="h2" className="text-white-pure">
                {result}
              </Typography>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="relative flex-grow border border-[rgba(51,37,103,0.8)] overflow-hidden"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex flex-col h-full bg-blue-dark border-white-glass">
        {/* Заголовок */}
        <div className="relative z-10 p-8 flex flex-col">
          <Typography variant="h1" className="text-white-pure !text-[50px]">
            {title}
          </Typography>
          <div className="bg-white-pure rounded-full w-fit px-4 border border-blue-dark self-end">
            <Typography variant="button" className="text-accent-primary text-[14px] leading-[20px]">
              {subtitle}
            </Typography>
          </div>
        </div>

        {/* Изображение */}
        <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px]">
          <div
            className="absolute z-1 w-2/3 h-2/3 left-0 bottom-0 rounded-full bg-accent-primary"
            style={{
              filter: 'blur(100px)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Cases = () => {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: casesRef, isInView: casesInView } = useScrollAnimation()
  const { ref: buttonRef, isInView: buttonInView } = useScrollAnimation()

  const cases = [
    {
      image: imgCase1,
      title: 'ДЕВЕЛОПЕР',
      subtitle: 'старт с нуля',
      result: '$500,000+/мес к 3-му месяцу, конверсия лида в сделку +3,1 п.п',
      isLarge: false,
      titleSize: 'text-[18px] font-semibold leading-[22px]',
    },
    {
      image: imgCase2,
      title: 'ЭКО-КАПСУЛЫ',
      subtitle: 'как инвестиционный продукт',
      result: '10 капсул в первый месяц, средний чек $50,000, ROMI 3.1',
      isLarge: true,
      titleSize: 'text-[18px] font-semibold leading-[22px]',
    },
    {
      image: imgCase3,
      title: 'МЕДИЦИНСКИЕ',
      subtitle: 'чек-апы',
      result: '+65% конверсии из консультации в платный чек-ап, CAC -27%',
      isLarge: false,
      titleSize: 'text-[18px] font-semibold leading-[22px]',
    },
  ]

  return (
    <div className="bg-black relative w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1180px] mx-auto">
          {/* Заголовок */}
          <motion.div
            ref={titleRef}
            className="text-left mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Typography
              variant="h1"
              className="text-white-pure text-[50px] font-normal leading-[50px] font-intro"
            >
              Кейсы
            </Typography>
          </motion.div>

          {/* Сетка кейсов */}
          <motion.div
            ref={casesRef}
            className="mx-auto"
            initial={{ opacity: 0 }}
            animate={casesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Первый ряд */}
            <div className="flex gap-5 mb-5">
              <CaseCard
                image={cases[0].image}
                title={cases[0].title}
                subtitle={cases[0].subtitle}
                result={cases[0].result}
                isLarge={false}
                isInView={casesInView}
              />
              <CaseCard
                image={cases[1].image}
                title={cases[1].title}
                subtitle={cases[1].subtitle}
                result={cases[1].result}
                isLarge={true}
                isInView={casesInView}
              />
            </div>

            {/* Второй ряд */}
            <div className="flex gap-5 mb-5">
              <CaseCard
                image={cases[1].image}
                title={cases[1].title}
                subtitle={cases[1].subtitle}
                result={cases[1].result}
                isLarge={true}
                isInView={casesInView}
              />
              <CaseCard
                image={cases[1].image}
                title={cases[2].title}
                subtitle={cases[2].subtitle}
                result={cases[2].result}
                isLarge={false}
                isInView={casesInView}
              />
            </div>

            {/* Third row */}
            <div className="flex gap-5">
              <CaseCard
                image={cases[2].image}
                title={cases[2].title}
                subtitle={cases[2].subtitle}
                result={cases[2].result}
                isLarge={false}
                isInView={casesInView}
              />
              <CaseCard
                image={cases[2].image}
                title={cases[2].title}
                subtitle={cases[2].subtitle}
                result={cases[2].result}
                isLarge={true}
                isInView={casesInView}
              />
            </div>
          </motion.div>

          {/* Кнопка */}
          <motion.div
            ref={buttonRef}
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={buttonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="default" className="h-[70px] w-[574px]">
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
