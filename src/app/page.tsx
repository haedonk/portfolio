import ParticleBackground from '../components/ParticleBackground'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Hero />
    </main>
  )
}
