import { useTranslation } from "react-i18next";
import { aboutContent } from "../content/portfolio";

const About = () => {
    const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-gray-400">{t(aboutContent.title)}</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="w-64 h-64 bg-gray-800 rounded-lg mx-auto mb-8 flex items-center justify-center">
                        <span className="text-6xl text-gray-600">👨‍💻</span>
                    </div>
                </div>
                <div>
                    <p className="text-black/80 dark:text-gray-400 mb-6 leading-relaxed">
                        {t(aboutContent.paragraph)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {aboutContent.stack.map((tech) => (
                            <span key={tech} className="bg-gray-800 text-white dark:text-gray-400 px-3 py-1 rounded-full text-sm">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About