import { useTranslation } from "react-i18next";
import { footerContent, name } from "../content/portfolio";

const Footer = () => {
    const { t } = useTranslation();

  return (
    <footer className="bg-lighter dark:bg-darker py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center text-black/80 dark:text-gray-400">
            <p>&copy; 2025 {t(name)}. {t(footerContent.paragraph)}</p>
        </div>
    </footer>
  )
}

export default Footer