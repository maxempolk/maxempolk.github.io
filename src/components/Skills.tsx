import { useTranslation } from "react-i18next";
import { skillsContent } from "../content/portfolio";

const Skills = () => {
    const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-6 bg-lighter dark:bg-darker">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-gray-400">{t(skillsContent.title)}</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {skillsContent.categories.map((el) => (
                    <div className="bg-light dark:bg-dark p-8 rounded-lg border border-gray-800" key={el.title}>
                        <h3 className="text-xl font-semibold mb-4 text-accent">{el.title}</h3>
                        <ul className="space-y-2 text-black dark:text-gray-300">
                            {el.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
        </div>
    </section>
  )
}

export default Skills