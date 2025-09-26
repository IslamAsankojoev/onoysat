'use client'

import Image from 'next/image'
import { Typography } from '@/shared/ui'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { colors } from '@/shared'

// Импорты изображений
const imgLogo = '/0b42a7fe04288663ffe78debef4adaae3100becd.svg'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a href={href} className="block py-3 transition-colors hover:text-white-pure">
      <Typography
        variant="bodyM"
        className="text-[#42474e] text-[18px] leading-[22px] font-semibold"
      >
        {children}
      </Typography>
    </a>
  )
}

interface FooterSectionProps {
  title: string
  links: Array<{ label: string; href: string }>
}

const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Typography variant="h2" className="text-white-pure text-[26px] leading-[26px]">
        {title}
      </Typography>
      <div className="flex flex-col">
        {links.map((link, index) => (
          <FooterLink key={index} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  )
}

export const Footer = () => {
  const productsLinks = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/services' },
    { label: 'Отрасли', href: '/industries' },
    { label: 'Кейсы', href: '/cases' },
    { label: 'Процесс работы', href: '/process' },
    { label: 'Стоимость', href: '/pricing' },
  ]

  const companyLinks = [
    { label: 'О нас', href: '/about' },
    { label: 'Команда', href: '/team' },
    { label: 'Вакансии', href: '/careers' },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contact' },
  ]

  return (
    <div className="bg-black w-full py-[100px]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            {/* Логотип */}
            <div className="flex flex-col gap-8">
              <div className="w-20 h-20">
                <Image
                  src={imgLogo}
                  alt="OnoySat Logo"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Навигационные секции */}
            <div className="flex flex-col lg:flex-row gap-6 flex-1 max-w-[736px] justify-around">
              <FooterSection title="Products" links={productsLinks} />
              <FooterSection title="Компания" links={companyLinks} />
            </div>

            {/* Социальные сети */}
            <div className="flex flex-col items-center justify-center gap-4">
              <Instagram size={25} color={colors['accent-primary']} />
              <Facebook size={25} color={colors['accent-primary']} />
              <Youtube size={25} color={colors['accent-primary']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
