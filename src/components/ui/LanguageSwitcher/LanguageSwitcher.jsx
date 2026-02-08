import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);

    localStorage.setItem('lang', lang);
  };

  const currentLang = i18n.language;

  return (
    <div className={styles.lang}>
      <button
        onClick={() => changeLang('pt-BR')}
        className={currentLang === 'pt-BR' ? styles.active : ''}
      >
        🇧🇷 PT
      </button>
      <button
        onClick={() => changeLang('en-US')}
        className={currentLang === 'en-US' ? styles.active : ''}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
