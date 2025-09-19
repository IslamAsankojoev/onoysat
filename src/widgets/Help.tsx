'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'

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
}

const SolutionCard = ({ icon, title, description }: SolutionCardProps) => {
  return (
    <div className="relative w-[380px] h-full border border-[rgba(51,37,103,0.8)] overflow-hidden">
      <div
        className="flex flex-col gap-6 p-[30px] h-full"
        style={{
          background: 'linear-gradient(125.84deg, #0B042D 24.89%, #210D79 152.79%)',
        }}
      >
        <div className="bg-[rgba(254,254,254,0.1)] flex items-center justify-center p-2 w-fit">
          <div className="w-6 h-6">
            <Image src={icon} alt="icon" width={24} height={24} className="w-full h-full" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
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
        </div>
      </div>
    </div>
  )
}

export const Help = () => {
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
        <div className="text-center mb-16">
          <Typography
            variant="h1"
            className="text-white-pure text-[50px] font-normal leading-[50px] font-intro"
          >
            Чем мы помогаем?
          </Typography>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16 max-w-[1180px] mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>

        {/* Кнопка */}
        <div className="flex justify-center">
          <Button variant="outline">
            <div className="flex items-center gap-3">
              <Typography variant="button" className="text-white-pure text-[16px] font-medium">
                Посмотреть все услуги
              </Typography>
              <div className="flex items-center justify-center">
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
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
