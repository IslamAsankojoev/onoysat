import { Application, FAQ, ProcessCases, ProcessHero } from '@/widgets'

export default function ProcessPage() {
  return (
    <div>
      <ProcessHero />
      <ProcessCases />
      <Application />
      <FAQ />
    </div>
  )
}
