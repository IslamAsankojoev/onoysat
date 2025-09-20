import { Application, Cases, FAQ, Services, ServicesHero } from '@/widgets'

export default function Home() {
  return (
    <div>
      <ServicesHero />
      <Services />
      <Cases />
      <Application />
      <FAQ />
    </div>
  )
}
