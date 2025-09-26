import { Application, FAQ } from '@/widgets'
import { CasesHero } from '@/widgets/CasesHero'
import { CasesList } from '@/widgets/CasesList'

export default function CasesPage() {
  return (
    <div>
      <CasesHero />
      <CasesList />
      <Application />
      <FAQ />
    </div>
  )
}
