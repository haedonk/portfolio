'use client'
import { useMemo } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Experience, experienceCardItems } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects, projectCardItems } from '../components/Projects'
import ResultsShelf from '../components/ResultsShelf'
import { Skills, highlightCardItems } from '../components/Skills'

export default function Home() {
  const items = useMemo(
    () => [...projectCardItems, ...highlightCardItems, ...experienceCardItems],
    []
  )

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main>
        <ResultsShelf items={items} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
