import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

  return (
    <footer className="bg-lighter dark:bg-darker py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center text-black/80 dark:text-gray-400">
            <p>&copy; 2025 {t('name')}. {t('all_rights_reserved')}</p>
        </div>
    </footer>
  )
}

export default Footer