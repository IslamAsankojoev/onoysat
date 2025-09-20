import { Application, FAQ, Services, ServicesHero } from '@/widgets'

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <Services />
      <Application />
      <FAQ />
    </div>
  )
}
