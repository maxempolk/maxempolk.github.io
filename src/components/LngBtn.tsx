import { useTranslation } from 'react-i18next';

const LngBtn = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const triggerLanguage = () => {
    changeLanguage(i18n.language === 'ukr' ? 'en' : 'ukr');
  };

  return (
    <button
    onClick={triggerLanguage}
    className={`
      rounded-md text-3xl font-mono 
      hover:opacity-60 transition-opacity
      cursor-pointer
    `}
  >
    {i18n.language === 'ukr' ? '🇬🇧' : '🇺🇦'}
  </button>
  );
};

export default LngBtn;