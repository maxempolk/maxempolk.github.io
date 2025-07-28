import { useTranslation } from "react-i18next";
import LngBtn from "./LngBtn";
import { useEffect } from "react";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.add('dark')
    }, [])

  return (
    <header className="bg-light dark:bg-dark fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-800">
        <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-black dark:text-accent">Maxim Polyak</a>
                <div className="items-center gap-8 flex">
                    <span className="hidden md:flex items-center gap-8">
                        <a href="#about" className="text-black dark:text-accent hover:underline">{t('header_about')}</a>
                        <a href="#skills" className="text-black dark:text-accent hover:underline">{t('header_skills')}</a>
                        <a href="#projects" className="text-black dark:text-accent hover:underline">{t('header_projects')}</a>
                        <a href="#contact" className="text-black dark:text-accent hover:underline">{t('header_contact')}</a>
                    </span>
                    <LngBtn />
                    <ToggleTheme />
                </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
                <a href="#about" className="block py-2 hover:text-accent transition-colors">О себе</a>
                <a href="#skills" className="block py-2 hover:text-accent transition-colors">Навыки</a>
                <a href="#projects" className="block py-2 hover:text-accent transition-colors">Проекты</a>
                <a href="#contact" className="block py-2 hover:text-accent transition-colors">Контакты</a>
            </div>
        </nav>
    </header>
  )
}

export default Header