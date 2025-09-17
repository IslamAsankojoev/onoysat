import localFont from 'next/font/local'

export const Gilroy = localFont({
  src: [
    {
      path: './../../../public/fonts/Gilroy/Gilroy-ExtraBold.otf',
      weight: '800',
      style: 'bold',
    },
    {
      path: './../../../public/fonts/Gilroy/Gilroy-Light.otf',
      weight: '300',
      style: 'light',
    },
  ],
})


export const Intro = localFont({
  src: [
    {
      path: './../../../public/fonts/Intro/IntroDemo-BlackCAPS.otf',
      weight: '900',
      style: 'black',
    },
  ],
})