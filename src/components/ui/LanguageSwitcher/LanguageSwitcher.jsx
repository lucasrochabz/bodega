import { useTranslation } from 'react-i18next';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { LANGUAGES } from '@/constants/languages';
import styles from './LanguageSwitcher.module.css';

const languageOptions = [
  { code: LANGUAGES.PT_BR, label: '🇧🇷 PT' },
  { code: LANGUAGES.EN_US, label: '🇺🇸 EN' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  };

  const currentLang = i18n.language;

  return (
    <div className={styles.lang}>
      {languageOptions.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLang(code)}
          className={currentLang === code ? styles.active : ''}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
