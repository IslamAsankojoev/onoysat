import { Application, FAQ } from '@/widgets'
import { CasesHero } from '@/widgets/CasesHero'

export default function CasesPage() {
  return (
    <div>
      <CasesHero />
      <Application />
      <FAQ />
    </div>
  )
}
