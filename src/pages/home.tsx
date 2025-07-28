import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const HomePage = () => {
  return (
    <main className="bg-white dark:bg-dark text-gray-100 font-sans">
      <Hero />
      <About />
      <Skills />
      {false && <Projects />}
      {/* TODO: вернуть проекты */}
      <Contact />
    </main>
  )
}

export default HomePage