'use client'

import { Button, Typography } from '@/shared/ui'
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
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      company: '',
      phone: '',
      checkbox: false,
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Обработка отправки формы
      console.log('Form submitted:', data)
      // Здесь можно добавить API запрос
      // await submitForm(data)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="bg-black relative w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1178px] mx-auto">
          <div className="bg-gradient-to-br backdrop-blur-md p-16 relative overflow-hidden">
            <div
              style={{
                filter: 'blur(60px)',
                background:
                  'url(/54953303ce45ccd87f4856fbf32d41db472eb5ce.png) no-repeat center center / cover',
              }}
              className="absolute inset-0"
            ></div>
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              {/* Левая часть - заголовок */}
              <div className="flex-1">
                <div className="mb-8">
                  <Typography
                    variant="h1"
                    className="text-white-pure text-[50px] font-normal leading-[50px] font-intro mb-4"
                  >
                    Оставьте заявку
                  </Typography>
                  <Typography
                    variant="bodyL"
                    className="text-white-pure text-[26px] leading-[26px]"
                  >
                    вернёмся в течение рабочего дня
                  </Typography>
                </div>
              </div>

              {/* Правая часть - форма */}
              <div className="flex-1 max-w-[400px] bg-[#FEFEFE1A] p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <Typography
                      variant="bodyM"
                      className="text-white-pure text-[16px] leading-[16px]"
                    >
                      Имя
                    </Typography>
                    <input
                      type="text"
                      placeholder="Введите свое имя"
                      {...register('name', { required: 'Имя обязательно для заполнения' })}
                      className={`w-full px-4 py-3 bg-white border text-black placeholder-grey-input focus:outline-none focus:border-accent-primary transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography
                      variant="bodyM"
                      className="text-white-pure text-[16px] leading-[16px]"
                    >
                      Введите номер телефона
                    </Typography>
                    <input
                      type="tel"
                      placeholder="+996"
                      {...register('phone', { required: 'Телефон обязателен для заполнения' })}
                      className={`w-full px-4 py-3 bg-white border text-black placeholder-grey-input focus:outline-none focus:border-accent-primary transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-white/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Typography
                      variant="bodyM"
                      className="text-white-pure text-[16px] leading-[16px]"
                    >
                      Компания
                    </Typography>
                    <input
                      type="text"
                      placeholder="Какая ниша у вашей компании"
                      {...register('company')}
                      className="w-full px-4 py-3 bg-white border text-black placeholder-grey-input focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>

                  <div className="flex gap-2">
                    <input type="checkbox" {...register('checkbox')} />
                    <Typography
                      variant="bodyM"
                      className="text-white-pure text-[16px] leading-[16px]"
                    >
                      Хочу бриф (займёт 3 минуты)
                    </Typography>
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    disabled={isSubmitting}
                    className="w-full h-[70px] text-[16px] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
