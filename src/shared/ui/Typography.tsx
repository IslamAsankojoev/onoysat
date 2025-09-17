'use client'

import React, { FC, HTMLProps } from 'react'

import clsx from 'clsx'
import { Montserrat } from 'next/font/google'

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode
  variant?: 'headingXL' | 'headingS' | 'bodyL' | 'bodyS' | 'bodyItalic' | 'captionM' | 'button'
}

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const variantStyles: Record<string, string> = {
  headingXL: clsx('text-headingXL font-bold leading-none', montserrat.className),
  headingS: clsx('text-headingS font-bold leading-none', montserrat.className),
  bodyL: clsx('text-bodyL font-medium', montserrat.className),
  bodyS: clsx('text-bodyS font-normal', montserrat.className),
  bodyItalic: clsx('text-bodyItalic font-normal italic', montserrat.className),
  captionM: clsx('text-captionM font-semibold', montserrat.className),
  button: clsx('text-button font-medium', montserrat.className),
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'bodyL',
  className,
  ...props
}) => {
  const styles = variantStyles
  const classNames = clsx(styles[variant], className)
  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  )
}
