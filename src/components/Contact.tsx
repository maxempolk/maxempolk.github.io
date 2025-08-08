import { useTranslation } from "react-i18next";
import { contactContent } from "../content/portfolio";

const Contact = () => {
    const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-6 bg-lighter dark:bg-darker">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-gray-400">{t(contactContent.title)}</h2>
            <p className="text-black/80 dark:text-gray-400 mb-12 text-lg">
                {t(contactContent.paragraph)}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                {contactContent.contacts.map( el => 
                    <a 
                        href={el.value} 
                        className="flex items-center text-accent hover:text-blue-400 transition-colors"
                        key={el.text}
                    >
                        {el.icon}
                        {el.text}
                    </a>
                )}
            </div>
        </div>
    </section>
  )
}

export default Contact