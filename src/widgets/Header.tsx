'use client'

import Image from 'next/image'

import logo from '@/public/logo.png'
import { Button, routeMap, Typography } from '@/shared'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shadcn/components/ui/sheet'
import { TextAlignJustify } from 'lucide-react'

export const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (path: string) => {
    router.push(path)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:h-24 h-16 flex items-center border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Image src={logo} alt="logo" width={50} height={50} />
          <div className="items-center gap-4 hidden md:flex">
            {Object.values(routeMap).map((route) => (
              <Link key={route.path} href={route.path}>
                <Typography
                  variant="bodyS"
                  className={clsx(
                    pathname === route.path ? 'text-accent-primary underline' : 'text-white',
                  )}
                >
                  {route.title}
                </Typography>
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <TextAlignJustify className="text-white" />
            </SheetTrigger>
            <SheetContent className="bg-blue-dark/75 backdrop-blur-md border-none p-4">
              <div className="flex flex-col gap-2 pt-10">
                {Object.values(routeMap).map((route) => (
                  <Button
                    key={route.path}
                    variant="white"
                    size='sm'
                    onClick={() => handleClick(route.path)}
                  >
                    <Typography variant="button">
                      {route.title}
                    </Typography>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
