'use client'

import React, { FC, HTMLProps } from 'react'

import clsx from 'clsx'
import { Gilroy, Intro } from '@/shared/constants'

interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'bodyL' | 'bodyS' | 'bodyItalic' | 'bodyM' | 'button'
}

const variantStyles: Record<string, string> = {
  h1: clsx('text-H1 font-bold leading-none', Intro.className),
  h2: clsx('text-H2 font-bold leading-none', Gilroy.className),
  bodyL: clsx('text-bodyL font-medium', Gilroy.className),
  bodyS: clsx('text-bodyS font-normal', Gilroy.className),
  bodyItalic: clsx('text-bodyItalic font-normal italic', Gilroy.className),
  bodyM: clsx('text-bodyM font-semibold', Gilroy.className),
  button: clsx('text-button font-medium', Gilroy.className),
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