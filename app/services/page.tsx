import { Application, FAQ, Services, ServicesHero } from '@/widgets'

export default function Home() {
  return (
    <div>
      <ServicesHero />
      <Services />
      <Application />
      <FAQ />
    </div>
  )
}
