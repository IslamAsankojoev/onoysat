'use client'

import Image from 'next/image'
import { Button, Typography } from '@/shared/ui'
import { Alexandria } from 'next/font/google'

// Импорты изображений
const imgSend = '/01cfeaf1a961aa2dea706db4613c3ada3546d5cc.svg'
const imgEllipse2 = '/fcbfe7e6f89236ee29a14f01cb0f9268a6193475.svg'
const imgHeroPattern = '/3e0b53deb7f94115e48cc969b62127244a0e8fd7.svg'
const imgSendWhite = '/3a4d2f368066f0d7d402393a08d5926beadc52ed.svg'
const imgFrame = '/7039737abe86ad8ac7bc3b1c19a46f72be6500db.svg'

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="">
        <Image
          src={imgEllipse2}
          alt="background ellipse"
          width={2588}
          height={1708}
          className="w-full h-full"
        />
      </div>

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
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-[35px] text-center">
            <div className="flex flex-col">
              <Typography
                variant="h1"
                className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
              >
                Строим отдел продаж, который приносит деньги — системно и предсказуемо
              </Typography>
            </div>
            <div className="w-[907px]">
              <Typography variant="h2" className="text-white">
                Маркетинг под ключ, CRM, найм и обучение, регламенты и аналитика. <br /> От первого
                лида до закрытой сделки — за 30–90 дней.
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <Button variant="default" className="px-20">
              <Typography variant="button" className="flex items-center gap-2">
                Получить аудит
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
              </Typography>
            </Button>
            <Button variant="white">
              <Typography variant="button">
                Запросить коммерческое предложение
              </Typography>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-start gap-6 px-[37px] py-0">
            <div className="flex flex-col items-start gap-[5px]">
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
            </div>

            <div className="flex flex-col items-start gap-[10px]">
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
            </div>

            <div className="flex flex-col items-start gap-[10px]">
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
            </div>
          </div>

          <div
            className="relative bg-[#0B042D] overflow-hidden border border-accent-primary"
            style={{
              boxShadow: '0px 0px 20px -5px #443149 inset',
            }}
          >
            <div className="flex items-start gap-[10px] p-[18px]">
              <div className="w-[43px] h-[44px] flex-shrink-0">
                <Image
                  src={imgFrame}
                  alt="frame icon"
                  width={43}
                  height={44}
                  className="w-full h-full"
                />
              </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
