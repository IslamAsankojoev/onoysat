import { Application, FAQ } from '@/widgets'
import { BlogHero } from '@/widgets/BlogHero'

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <Application />
      <FAQ />
    </div>
  )
}
