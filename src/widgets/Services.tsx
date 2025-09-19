'use client'

import Image from 'next/image'
import { Typography } from '@/shared/ui'

// Импорты изображений
const imgBackground = '/8e79840ab11ff2e305db63c031c592f9cfa6e0d6.png'
const imgArrow = '/729a11c42922f057ce60970f30d13de36d884bfc.svg'
const imgLine2 = '/8f580bec74fa25eba5dd9cb7c7e35695cb37ae98.svg'

interface ServiceCardProps {
  title: string
  details: Array<{
    label: string
    description: string
  }>
}

const ServiceCard = ({ title, details }: ServiceCardProps) => {
  return (
    <div className="relative border-b border-white-pure">
      <div className="flex gap-[50px] items-start justify-start px-[60px] py-[30px]">
        <div className="w-4 h-4 flex-shrink-0 mt-1">
          <Image 
            src={imgArrow} 
            alt="arrow" 
            width={16} 
            height={16}
            className="w-full h-full"
          />
        </div>
        
        <div className="flex gap-[50px] items-start justify-start flex-1">
          <div className="w-[356px] flex-shrink-0">
            <Typography variant="h2" className="text-white-pure text-[26px] leading-[26px]">
              {title}
            </Typography>
          </div>
          
          <div className="flex flex-col gap-[15px] items-start justify-center flex-1">
            {details.map((detail, index) => (
              <div key={index} className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Typography variant="bodyL" className="text-white-pure text-[18px] font-semibold leading-[22px]">
                  {detail.label}
                </Typography>
                <Typography variant="bodyS" className="text-white-pure text-[14px] leading-[20px]">
                  {detail.description}
                </Typography>
                {index < details.length - 1 && (
                  <div className="h-px w-[322px] relative">
                    <Image 
                      src={imgLine2} 
                      alt="line" 
                      width={322} 
                      height={1}
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Services = () => {
  const services = [
    {
      title: 'Отдел продаж «под ключ»',
      details: [
        {
          label: 'Что входит',
          description: 'аудит → стратегия → юнит-экономика → офферы → скрипты → CRM → материалы → найм и обучение → запуск трафика → регламенты и отчётность → еженедельные спринты'
        },
        {
          label: 'Результат',
          description: 'рабочая система, которая генерирует сделки и масштабируется без хаоса'
        },
        {
          label: 'Срок',
          description: '30–90 дней до стабильного потока сделок'
        },
        {
          label: 'KPI',
          description: 'лиды, конверсия по этапам, выручка, CAC, LTV, ROI'
        }
      ]
    },
    {
      title: 'Маркетинг «под ключ»',
      details: [
        {
          label: 'Что входит',
          description: 'позиционирование, медиаплан, креативы (видео/реилсы/баннеры), посадочные, контент-план, аналитика, перформанс (Meta/Google/TikTok/Yandex и др.), PR/UGC/инфлюенсеры'
        },
        {
          label: 'Отдельный продукт',
          description: 'ReelsBot — от 10+ видео/мес, рост охватов и заявок'
        }
      ]
    },
    {
      title: 'CRM, автоматизация и контроль',
      details: [
        {
          label: 'Стек',
          description: 'Bitrix24 / amoCRM (или по ТЗ)'
        },
        {
          label: 'Что делаем',
          description: 'карта процессов, воронки, права и роли, карточки, роботы, интеграции (телефония, мессенджеры, платёжки), BI-дашборды'
        },
        {
          label: 'Плюс',
          description: 'регламенты ввода данных, чек-листы контроля качества звонков'
        }
      ]
    },
    {
      title: 'Найм, адаптация, обучение',
      details: [
        {
          label: 'Найм',
          description: 'профиль компетенций, скрининг, интервью, тест-дей, оффер'
        },
        {
          label: 'Адаптация 14–30 дней',
          description: 'чек-листы, скрипты, shadowing, первые KPI'
        },
        {
          label: 'Обучение',
          description: '4П-продаж, диагностика, дожим, работа с возражениями, переговоры'
        },
        {
          label: 'Аттестации',
          description: 'ежемесячно, план развития, матрица грейдов'
        }
      ]
    },
    {
      title: 'Регламенты, KPI и мотивация',
      details: [
        {
          label: 'Документы',
          description: 'SOP по всем ключевым процессам, SLA на лиды и реакцию, KPI-листы, грейды, бонусные сетки (нал/бартер), правила отчётности, тайминг планёрок'
        },
        {
          label: 'Цель',
          description: 'дисциплина, предсказуемость, управляемый рост'
        }
      ]
    },
    {
      title: 'Аутсорс продаж / колл-центр',
      details: [
        {
          label: 'Модель',
          description: 'предквалификация и доведение до встречи / продажи «под ключ» на % с оборота'
        },
        {
          label: 'Контроль качества',
          description: 'записи звонков, чек-листы, A/B скриптов'
        }
      ]
    }
  ]

  return (
    <div className="bg-black relative w-full min-h-screen" style={{
      background: 'url(/8e79840ab11ff2e305db63c031c592f9cfa6e0d6.png) no-repeat center center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    
      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <Typography 
              variant="h1" 
              className="text-white-pure text-[50px] font-normal leading-[50px] font-intro text-left"
            >
              Услуги
            </Typography>
          </div>

          {/* Карточки услуг */}
          <div className="">
            <div className="border-l border-white-pure">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  details={service.details}
                />
              ))}
              
              {/* Секция с отраслями */}
              <div className="bg-accent-primary flex items-center justify-start pl-[122px] pr-[53px] py-[26px] shadow-[13.222px_13.222px_26.444px_0px_rgba(112,129,136,0.2)]">
                <div className="flex items-center gap-[16px] flex-1">
                  <Typography variant="h2" className="text-white-pure text-[26px] leading-[26px] flex-shrink-0">
                    Отрасли
                  </Typography>
                  <Typography variant="bodyS" className="text-white-pure text-[14px] leading-[20px] flex-1">
                    Мы работаем с: недвижимостью и девелопментом, туризмом и гостеприимством (глэмпинги, капсулы, отели), медициной и чек-апами, образованием и инфобизнесом, производством и B2B-услугами
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
