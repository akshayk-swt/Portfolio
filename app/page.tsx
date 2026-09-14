import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import TestingProcess from '@/components/TestingProcess'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import ResumeCTA from '@/components/ResumeCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TestingProcess />
        <Experience />
        <Projects />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
