import { Application, Cases, FAQ, Help, Hero, Services } from '@/widgets'

export default function Home() {
  return (
    <div>
      <Hero />
      <Help />
      <Services />
      <Cases />
      <Application />
      <FAQ />
    </div>
  )
}
