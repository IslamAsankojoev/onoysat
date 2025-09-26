'use client'

import { Typography } from '@/shared/ui/Typography'
import { ArrowIcon, Button, colors } from '@/shared'
import { Card, CardContent } from '@/shadcn/components/ui/card'
import { Input } from '@/shadcn/components/ui/input'
import { Instagram, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const Contact = () => {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      company: '',
      checkbox: false,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <section className="w-full min-h-screen bg-black relative overflow-hidden">
      <div
        style={{
          filter: 'blur(60px)',
          background:
            'url(/54953303ce45ccd87f4856fbf32d41db472eb5ce.png) no-repeat center center / cover',
        }}
        className="absolute inset-0 scale-y-[-1]"
      ></div>
      <div className="w-full max-w-[1920px] mx-auto px-4 min-h-screen flex flex-col relative z-10">
        {/* Заголовок */}
        <div className="flex justify-center pt-[164px] pb-[62px]">
          <Typography
            variant="h1"
            className="!text-[40px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
          >
            Контакты
          </Typography>
        </div>

        {/* Контактная информация */}
        <div className="flex justify-center mb-16 container mx-auto">
          <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* Телефон */}
            <div className="flex items-center gap-4">
              <Phone size={30} color={colors['white-pure']} />
              <Typography variant="h2" className="text-white">
                +7 (999) 123-45-67
              </Typography>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4">
              <Instagram size={30} color={colors['white-pure']} />
              <Typography variant="h2" className="text-white">
                @onoy_sat
              </Typography>
            </div>

            {/* Адрес */}
            <div className="flex items-center gap-4">
              <MapPin size={30} color={colors['white-pure']} />
              <Typography variant="h2" className="text-white">
                Москва, ул. Примерная, 123
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="w-full container mx-auto bg-white-pure/10 flex flex-col lg:flex-row items-start gap-8 px-25 py-14 justify-between">
            <div className="w-full flex flex-col gap-4">
              <Typography
                variant="h1"
                className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary"
              >
                Оставьте заявку
              </Typography>
              <Typography variant="h2" className="text-white/70">
                вернёмся в течение рабочего дня
              </Typography>
            </div>

            <form onSubmit={onSubmit} className="w-full max-w-[400px]">
              <Card className="bg-white-pure/10 rounded-none border-white/10 p-0">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <div>
                      <Typography variant="bodyM" className="text-white-pure">
                        Имя
                      </Typography>
                      <Input
                        placeholder="ВВедите свое имя"
                        className="bg-white-pure rounded-none h-9"
                        {...register('name', { required: 'Имя обязательно для заполнения' })}
                      />
                    </div>
                    <div>
                      <Typography variant="bodyM" className="text-white-pure">
                        Введите номер телефона
                      </Typography>
                      <Input
                        placeholder="+996"
                        className="bg-white-pure rounded-none h-9"
                        {...register('phone', { required: 'Телефон обязательно для заполнения' })}
                      />
                    </div>
                    <div>
                      <Typography variant="bodyM" className="text-white-pure">
                        Компания
                      </Typography>
                      <Input
                        placeholder="Какая ниша у вашей компании"
                        className="bg-white-pure rounded-none h-9"
                        {...register('company', {
                          required: 'Компания обязательно для заполнения',
                        })}
                      />
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="bg-white-pure rounded-none"
                        {...register('checkbox', {
                          required: 'Хочу бриф (займёт 3 минуты) обязательно для заполнения',
                        })}
                      />
                      <Typography variant="bodyM" className="text-white-pure">
                        Хочу бриф (займёт 3 минуты)
                      </Typography>
                    </div>
                  </div>
                  <Button className="w-fit mt-6">
                    Получить аудит проекта <ArrowIcon />
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>

        <Button className="w-fit my-10 mx-auto mb-20">
          Отправить свое резюме <ArrowIcon />
        </Button>
      </div>
    </section>
  )
}
