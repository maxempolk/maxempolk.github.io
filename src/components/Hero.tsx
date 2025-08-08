import { useTranslation } from 'react-i18next';
import { heroContent, name, projectsContent } from '../content/portfolio';

const Hero = () => {
    const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-black dark:text-gray-400">{t(heroContent.greeting)}</span>
            <br />
            <span className="text-accent">{t(name)}</span>
        </h1>
        <p className="text-xl md:text-2xl text-black/80 dark:text-gray-400 mb-8">
            Fullstack Web Developer
        </p>
        <p className="text-black/80 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t(heroContent.paragraph)}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {
                projectsContent.projects.length != 0 && <a href="#projects" className="bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
                    {t(heroContent.ctaProjects)}
                </a>
            }
            <a href="#contact" className="border border-gray-600 hover:border-accent text-black/80 dark:text-gray-400 hover:text-accent px-8 py-3 rounded-lg transition-colors">
                {t(heroContent.ctaContact)}
            </a>
        </div>
    </div>
  </section>
  )
}

export default Hero