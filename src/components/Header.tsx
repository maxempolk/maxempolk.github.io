import { useTranslation } from "react-i18next";
import LngBtn from "./LngBtn";
import { useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import { headerContent } from "../content/portfolio";

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
                    <nav className="hidden md:flex items-center gap-8">
                        {headerContent.nav.map(el => 
                            <a 
                              href={el.url} 
                              className="text-black dark:text-accent hover:underline"
                              key={el.name}
                            >{t(el.name)}</a>
                        )}
                        
                    </nav>
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