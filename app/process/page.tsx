import { Application, FAQ, ProcessCases, ProcessHero } from '@/widgets'

export default function Home() {
  return (
    <div>
      <ProcessHero />
      <ProcessCases />
      <Application />
      <FAQ />
    </div>
  )
}
