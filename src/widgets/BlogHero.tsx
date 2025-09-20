'use client'

import { Typography } from '@/shared/ui/Typography'
import { Card, CardContent } from '@/shadcn/components/ui/card'
import Image from 'next/image'
import { Button } from '@/shared'

export const BlogHero = () => {
  return (
    <section className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-4 min-h-screen flex flex-col">
        {/* Заголовок */}
        <div className="flex justify-center pt-[164px] pb-[62px]">
          <Typography
            variant="h1"
            className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
          >
            Блог
          </Typography>
        </div>

        {/* Сетка контента */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[1128px] h-auto lg:h-[828px] flex flex-col lg:flex-row gap-4 lg:gap-0">
            {/* Левая колонка - карточки блога */}
            <div className="w-full lg:w-[361.5px] flex flex-col gap-[20px]">
              <BlogCard
                title="Как запустить отдел продаж за 30–90 дней"
                description="диагноз → презентация → дожим → сделка"
              />
              <BlogCard title="Скрипты 4П" description="диагноз → презентация → дожим → сделка" />
              <BlogCard title="Контент, который реально продаёт" description="(кейсы ReelsBot)" />
            </div>

            {/* Центральная колонка - большая карточка SRM */}
            <div className="w-full lg:w-[381px] lg:mx-[12px] order-first lg:order-none">
              <div className="relative w-full h-[400px] lg:h-[674px] bg-gradient-to-br bg-blue-dark overflow-hidden border-1 border-white-pure py-10">
                {/* Контент */}
                <div className="relative z-10 flex flex-col justify-center lg:justify-start text-center">
                  <Typography variant="h1" className="!text-[160px] text-white">
                    SRM
                  </Typography>
                  <Typography
                    variant="button"
                    className="absolute top-1/2 left-1/2 w-fit text-nowrap flex items-center justify-center lg:justify-start rounded-full bg-white-pure px-2 text-center -translate-x-1/2 -translate-y-1/2 text-accent-primary border border-accent-primary"
                  >
                    ошибки внедрения и как их избежать
                  </Typography>
                </div>

                {/* Изображение */}
                <div className="absolute top-0 right-0 w-[550px] h-[550px] hidden lg:block translate-y-1/2">
                  <div className="absolute inset-0 rounded-full scale-[0.7] bg-accent-primary blur-3xl" />

                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={'/45dc1a5149f1120363af20db52bddc8f0e061d73.png'}
                      alt="srm"
                      width={550}
                      height={550}
                      className="hue-rotate-[332deg]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - карточки блога */}
            <div className="w-full lg:w-[361.5px] flex flex-col gap-[20px]">
              <BlogCard title="KPI" description="которые двигают выручку,а не «для галочки»" />
              <BlogCard
                title="Юнит‑экономика в недвижимости / медицине / образовании"
                description=""
              />
              <BlogCard
                title="Бартер в сделках"
                description="как считать и мотивировать отдел продаж"
              />
            </div>
          </div>
        </div>

        {/* Кнопка */}
        <div className="flex justify-center pb-20 -mt-40 pt-8">
          <Button>Смотреть все статьи</Button>
        </div>
      </div>
    </section>
  )
}

// Компонент карточки блога
const BlogCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full lg:w-[361.5px] h-[250px] overflow-hidden bg-blue-dark relative rounded-none border-none">
      <CardContent className="p-8 h-full flex flex-col justify-center gap-10">
        <Typography variant="h2" className="text-white-pure">
          {title}
        </Typography>
        <Typography variant="button" className="text-[#90A0B1]">
          {description}
        </Typography>
        <div className="absolute bg-accent-primary blur-3xl w-40 h-40 left-0 bottom-0 -translate-x-1/2 translate-y-1/2" />
      </CardContent>
    </Card>
  )
}
