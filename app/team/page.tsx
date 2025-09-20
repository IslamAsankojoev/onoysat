import { Application, FAQ, TeamHero, TeamRoles } from '@/widgets'

export default function TeamPage() {
  return (
    <div>
      <TeamHero />
      <TeamRoles />
      <Application />
      <FAQ />
    </div>
  )
}
