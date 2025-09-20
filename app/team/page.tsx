import { Application, FAQ, TeamHero, TeamRoles } from '@/widgets'

export default function Home() {
  return (
    <div>
      <TeamHero />
      <TeamRoles />
      <Application />
      <FAQ />
    </div>
  )
}
