'use client'

import { Card, CardContent } from '@/shadcn/components/ui/card'
import { Input } from '@/shadcn/components/ui/input'
import { ArrowIcon, Button, Typography } from '@/shared/ui'
import { useForm } from 'react-hook-form'

// Тип формы
interface FormData {
  name: string
  company?: string
  phone: string
  checkbox: boolean
}

export const Application = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      checkbox: false,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="bg-black relative w-full py-20">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="bg-gradient-to-br backdrop-blur-md p-16 relative overflow-hidden">
            <div
              style={{
                filter: 'blur(60px)',
                background:
                  'url(/54953303ce45ccd87f4856fbf32d41db472eb5ce.png) no-repeat center center / cover',
              }}
              className="absolute inset-0 scale-y-[-1]"
            ></div>
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              {/* Левая часть - заголовок */}
              <div className="flex-1">
                <div className="mb-8">
                  <Typography
                    variant="h1"
                    className="text-[50px] bg-clip-text text-transparent text-5xl font-extrabold bg-gradient-to-r from-white to-accent-primary mb-4"
                  >
                    Оставьте заявку
                  </Typography>
                  <Typography
                    variant="h2"
                    className="text-white-pure"
                  >
                    вернёмся в течение рабочего дня
                  </Typography>
                </div>
              </div>

              {/* Правая часть - форма */}
              <form onSubmit={onSubmit} className="w-full max-w-[400px]">
                <Card className="bg-white-pure/10 rounded-none border-white-pure/10 p-0">
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
                          {...register('phone', {
                            required: 'Телефон обязательно для заполнения',
                          })}
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
        </div>
      </div>
    </div>
  )
}
