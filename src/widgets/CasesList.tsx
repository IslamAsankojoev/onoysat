'use client'

import Image from 'next/image'
import { ArrowIcon, Button, Typography } from '@/shared/ui'
import { motion } from 'framer-motion'
import clsx from 'clsx'

// Импорты изображений
const imgLine2 = '/7ee869c313d1c4635588a24b4c793329f7c29cdf.svg'
const imgEliteHouseLogo = '/elithouse-logo.png'

const cases = [
  {
    id: 1,
    title: 'Boru',
    titleSize: '!text-[148px]',
    category: '',
    image: '/boru.png',
    content: {
      problem: {
        title: 'Что БЫЛО?',
        items: [
          'Отсутствовал отдел продаж, заявки обрабатывались хаотично',
          'Не было CRM и понятной структуры',
        ],
      },
      solution: {
        title: 'Что сделали?',
        items: [
          'Наняли 5 менеджеров',
          'Внедрили CRM и скрипты продаж',
          'Провели оффлайн-обучение сотрудников',
        ],
      },
      result: {
        title: 'Результат:',
        items: ['Рост оборота на +50% уже на 2-й месяц', 'Выручка выросла до $400 000'],
      },
    },
  },
  {
    id: 2,
    title: <Image src={imgEliteHouseLogo} alt="Elite House" width={234} height={99} />,
    titleSize: '!text-[48px]',
    category: 'Строительная компания',
    image: '/elitehouse-card.png',
    content: {
      problem: {
        title: 'Что БЫЛО?',
        items: [
          'Несформированная команда продаж, высокая текучка кадров',
          'Отсутствие единой атмосферы внутри отдела, слабая мотивация',
          'CRM работала «для галочки»: данные терялись, сделки срывались',
          'Конверсия низкая, отчётности не было',
          'Маркетинг приносил мало лидов, при этом большие расходы',
        ],
      },
      solution: {
        title: 'Что сделали?',
        items: [
          'Наняли и обучили 20 сотрудников в отдел продаж',
          'Сформировали команду маркетинга',
          'Внедрили CRM, систему KPI и мотивации',
          'Провели оффлайн-обучение менеджеров',
          'Выстроили корпоративную атмосферу и культуру в команде',
        ],
      },
      result: {
        title: 'Результат:',
        items: [
          'Поток заявок вырос с 7 000 → 30 000 лидов',
          'Продажи увеличились в 1,5 раза — это + $1.5 млн новых продаж',
          'Сократили расходы на маркетинг на $30 000',
          'Запущено 5 новых объектов',
          'Команда работает стабильно и по сей день приносит прибыль',
        ],
      },
    },
  },
  {
    id: 3,
    title: 'Ok Construction',
    titleSize: '!text-[43px]',
    category: '',
    image: '/construction.png',
    content: {
      problem: {
        title: 'Что БЫЛО?',
        items: [
          'Продажи велись хаотично, без структуры и системы',
          'Заявки терялись, отсутствовала отчетность',
          'Не было маркетинговой команды',
          'Отсутствовала CRM-система, процессы не фиксировались',
          'Не хватало профессиональных менеджеров по продажам',
        ],
      },
      solution: {
        title: 'Что сделали?',
        items: [
          'Провели аудит и внедрили CRM',
          'Прописали регламенты и KPI',
          'Подобрали и обучили менеджеров',
        ],
      },
      result: {
        title: 'Результат:',
        items: ['Дополнительно +5 млн сомов оборота за 3 месяца'],
      },
    },
  },
  {
    id: 4,
    title: 'Nova Clinic',
    titleSize: '!text-[48px]',
    category: 'чек-апы',
    image: '/nova-clinic.png',
    content: {
      solution: {
        title: 'Что сделали?',
        items: [
          'внедрили CRM-систему',
          'назначили коммерческого директора, подключили IP-телефонию',
          'разработали стратегию на 6 месяцев',
          'наняли РОПа и 3 менеджеров',
          'прописали регламенты и обновили систему мотивации',
        ],
      },
      result: {
        title: 'Результат:',
        items: [
          'Сохранили оборот компании и выстроили систему которая стабильно работает и повышает эффективность сотрудников',
        ],
      },
    },
  },
  {
    id: 5,
    title: 'Девелопер',
    titleSize: '!text-[48px]',
    category: 'Земельный запуск',
    image: '/developer.png',
    content: {
      solution: {
        title: 'Что сделали?',
        items: ['упаковка, CRM, найм 12 менеджеров, скрипты, ReelsBot, таргет, обучение'],
      },
      result: {
        title: 'Результат:',
        items: ['$500,000+/мес к 3-му месяцу, конверсия лида в сделку +3,1 п.п'],
      },
    },
  },
  {
    id: 6,
    title: 'Эко-капсулы',
    titleSize: '!text-[48px]',
    category: 'как инвестиционный продукт',
    image: '/eco-capsules.png',
    content: {
      solution: {
        title: 'Что сделали?',
        items: ['позиционирование, воронка, скрипты под 4П, колл-центр'],
      },
      result: {
        title: 'Результат:',
        items: ['10 капсул в первый месяц, средний чек $50,000, ROMI 3.1'],
      },
    },
  },
  {
    id: 7,
    title: 'Аскар Авто Дубай',
    titleSize: '!text-[38px]',
    category: 'старт с нуля',
    image: '/askar-auto-dubai.png',
    content: {
      solution: {
        title: 'Что сделали?',
        items: [
          'Назначили коммерческого директора',
          'наняли 3 руководителей и 4 менеджеров',
          'внедрили CRM-систему и скрипты продаж',
          'провели обучение руководителей и менеджеров',
          'внедрили систему мотивации',
        ],
      },
      result: {
        title: 'Результат:',
        items: ['рост продаж автомобилей в первый месяц с 50 до 100'],
      },
    },
  },
  {
    id: 8,
    title: 'Ems academy',
    titleSize: '!text-[48px]',
    category: 'Консалтинговая компания',
    subcategory: 'по образованию за границей',
    image: '/emc-academy.png',
    content: {
      solution: {
        title: 'Что сделали?',
        items: [
          'наняли 10 сотрудников',
          'внедрили CRM и автоматизацию',
          'разработали регламенты и KPI',
          'подключили маркетинг',
        ],
      },
      result: {
        title: 'Результат:',
        items: ['рост оборота +20 000 € за 3 месяца'],
      },
    },
  },
  {
    id: 9,
    title: 'UNET Education',
    titleSize: '!text-[48px]',
    category: 'старт с нуля',
    image: '/unet-education.png',
    content: {
      solution: {
        title: 'Что сделали?',
        items: ['выстроили систему продаж и контроль через CRM', 'внедрили отчётность и KPI'],
      },
      result: {
        title: 'Результат:',
        items: ['рост конверсии и оборота более чем на 40%'],
      },
    },
  },
]

export const CasesList = () => {
  return (
    <div className="bg-black box-border content-stretch flex flex-col gap-[52px] items-center px-[360px] py-[95px] relative size-full">
      <motion.div
        className="flex flex-col font-['Intro_:Regular',_sans-serif] justify-end leading-[0] min-w-full not-italic relative shrink-0 text-[50px] text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h1" className="leading-[50px] text-white">
          Кейсы
        </Typography>
      </motion.div>

      <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[1180px]">
        {cases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            className="content-stretch flex gap-[20px] items-stretch justify-center relative shrink-0 w-full"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {/* Левая карточка с изображением */}
            <div
              className="backdrop-blur-[7.5px] backdrop-filter bg-[#1a1e2b] relative shrink-0 w-[381px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${caseItem.image})` }}
            >
              <div className="h-fit relative w-[381px] p-4 py-10">
                {/* Название проекта */}
                <div
                  className={`flex flex-col justify-center leading-[0] not-italic text-nowrap text-white`}
                >
                  <Typography
                    variant="h2"
                    className={clsx(
                      'whitespace-pre text-white !font-extrabold !capitalize',
                      caseItem.titleSize,
                    )}
                  >
                    {caseItem.title}
                  </Typography>
                </div>

                {/* Категория */}
                {caseItem.category && (
                  <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center rounded-full right-8 bottom-4 px-4 py-1">
                    <div className="absolute border-2 border-[#1a1a1d] border-solid inset-0 pointer-events-none rounded-[600px]" />
                    <Typography
                      variant="button"
                      className="text-[#0059ff] text-[16px] text-center text-nowrap"
                    >
                      {caseItem.category}
                    </Typography>
                  </div>
                )}

                {/* Подкатегория */}
                {caseItem.subcategory && (
                  <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center rounded-full right-10 -bottom-10 px-4 py-1">
                    <div className="absolute border-2 border-[#1a1a1d] border-solid inset-0 pointer-events-none rounded-[600px]" />
                    <Typography
                      variant="button"
                      className="text-[#0059ff] text-[16px] text-center text-nowrap"
                    >
                      {caseItem.subcategory}
                    </Typography>
                  </div>
                )}
              </div>
              <div className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none" />
            </div>

            {/* Правая карточка с контентом */}
            <div className="backdrop-blur-[7.5px] backdrop-filter bg-[#1a1e2b] box-border content-stretch flex flex-col gap-[25px] items-start px-[30px] py-[60px] relative shrink-0 w-[778px] min-h-[400px]">
              <div className="absolute border border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none" />

              {/* Проблема */}
              {caseItem.content.problem && (
                <>
                  <div className="content-stretch flex flex-col gap-[15px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
                    <div className="flex flex-col font-['Intro_:Regular',_sans-serif] justify-center relative shrink-0 text-[50px] text-nowrap">
                      <Typography variant="h1" className="leading-[50px] whitespace-pre text-white">
                        {caseItem.content.problem.title}
                      </Typography>
                    </div>
                    <div
                      className="flex flex-col font-['Gilroy-Regular:☞',_sans-serif] justify-center min-w-full relative shrink-0 text-[26px]"
                      style={{ width: 'min-content' }}
                    >
                      <ul className="css-ed5n1g list-disc">
                        {caseItem.content.problem.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={itemIndex === 0 ? 'mb-0 ms-[39px]' : 'ms-[39px]'}
                          >
                            <Typography variant="bodyL" className="leading-[26px] text-white">
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="h-0 relative shrink-0 w-[322px]">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <Image
                        alt=""
                        className="block max-w-none size-full"
                        src={imgLine2}
                        width={322}
                        height={1}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Решение */}
              {caseItem.content.solution && (
                <>
                  <div className="content-stretch flex flex-col gap-[15px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
                    <div className="flex flex-col font-['Intro_:Regular',_sans-serif] justify-center relative shrink-0 text-[50px] text-nowrap">
                      <Typography variant="h1" className="leading-[50px] whitespace-pre text-white">
                        {caseItem.content.solution.title}
                      </Typography>
                    </div>
                    <div
                      className="flex flex-col font-['Gilroy-Regular:☞',_sans-serif] justify-center min-w-full relative shrink-0 text-[26px]"
                      style={{ width: 'min-content' }}
                    >
                      <ul className="css-ed5n1g list-disc">
                        {caseItem.content.solution.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className={itemIndex === 0 ? 'mb-0 ms-[39px]' : 'ms-[39px]'}
                          >
                            <Typography variant="bodyL" className="leading-[26px] text-white">
                              {item}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="h-0 relative shrink-0 w-[322px]">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <Image
                        alt=""
                        className="block max-w-none size-full"
                        src={imgLine2}
                        width={322}
                        height={1}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Результат */}
              {caseItem.content.result && (
                <div className="content-stretch flex flex-col gap-[15px] items-start leading-[0] not-italic relative shrink-0 text-white w-full">
                  <div className="flex flex-col font-['Intro_:Regular',_sans-serif] justify-center relative shrink-0 text-[50px] text-nowrap">
                    <Typography variant="h1" className="leading-[50px] whitespace-pre text-white">
                      {caseItem.content.result.title}
                    </Typography>
                  </div>
                  <div
                    className="flex flex-col font-['Gilroy-Regular:☞',_sans-serif] justify-center min-w-full relative shrink-0 text-[26px]"
                    style={{ width: 'min-content' }}
                  >
                    <ul className="css-ed5n1g list-disc">
                      {caseItem.content.result.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={itemIndex === 0 ? 'mb-0 ms-[39px]' : 'ms-[39px]'}
                        >
                          <Typography variant="bodyL" className="leading-[26px] text-white">
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Кнопка */}
      <Button variant="default" className="px-20">
        <Typography variant="button" className="flex items-center gap-2">
          Запросить презентацию с подтверждающими материалами
          <ArrowIcon />
        </Typography>
      </Button>
    </div>
  )
}
