import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlobeAltIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const { t, i18n } = useTranslation();

  const handleToggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'vn' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <header
      className={` p-4 flex justify-between items-center ${
        isDarkMode
          ? 'bg-gray-900 text-white'
          : 'bg-white text-black  border border-black border-t-0'
      }`}
    >
      {/* Logo or Brand */}
      <div className={`text-xl font-bold flex items-center gap-4 `}>
        <svg
          width='37'
          height='31'
          viewBox='0 0 37 31'
          fill={`${isDarkMode ? 'white' : '#CF23B8'}`}
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.4787 5.40351C16.3958 4.29828 16.493 2.52152 17.562 1.59118C18.5409 0.74477 20.1028 0.800731 21.0816 1.80103C25.9965 6.6976 30.9184 11.5872 35.8333 16.4837C35.9305 16.5607 37.1037 17.491 36.9926 18.96C36.9232 19.8764 36.4025 20.4779 36.222 20.6668C33.6743 23.276 31.1197 25.8851 28.572 28.4943L27.378 29.6415C27.1975 29.8164 26.9615 30.0053 26.6699 30.1661C26.4755 30.2711 26.302 30.334 26.2464 30.355C26.1007 30.404 25.9757 30.439 25.8716 30.4599C25.6564 29.5995 25.4134 28.1446 25.705 26.3818C25.9202 25.0947 26.3436 24.0874 26.7046 23.4019C27.0448 22.8563 27.4682 22.2477 27.9958 21.6181C28.4887 21.0375 28.9677 20.5409 29.4189 20.1352C29.5439 19.9743 29.8701 19.4846 29.884 18.7781C29.8979 18.1066 29.6202 17.6239 29.5092 17.4491C28.7455 16.6866 27.9819 15.9311 27.2183 15.1687L24.4415 18.0087L22.3103 15.8612C22.1993 15.7423 21.6717 15.1477 21.7133 14.2733C21.7342 13.7067 21.9841 13.308 22.1021 13.1331C22.2548 12.9582 22.4075 12.7833 22.5603 12.6085C22.706 12.3496 22.9004 11.9089 22.8518 11.3843C22.7893 10.7128 22.3589 10.2511 22.1576 10.0413C20.2833 8.08263 18.8394 6.78854 17.4787 5.40351Z'
            fill={`${isDarkMode ? 'white' : '#CF23B8'}`}
          ></path>
          <path
            d='M21.586 18.6851C19.6302 16.7004 17.6675 14.7226 15.7118 12.7449C15.628 12.6393 15.2439 12.1537 15.2858 11.4358C15.3277 10.6687 15.8376 10.2112 15.9284 10.1338C17.4301 8.63464 18.9248 7.14255 20.4265 5.65046C21.6907 4.55954 21.6907 2.64516 20.6291 1.65278C19.9306 1.00527 18.8689 0.822279 17.933 1.18122C17.444 1.36422 17.1297 1.64574 17.0319 1.73724C16.0192 2.69443 10.0822 8.62759 1.98689 16.7989C1.90307 16.8693 0.806475 17.8898 1.02999 19.3678C1.19063 20.4235 1.93101 21.0218 2.10563 21.1626C4.89253 23.9919 7.67942 26.8283 10.4663 29.6576C10.613 29.7843 11.7725 30.7204 13.2951 30.3896C14.3498 30.1644 14.9575 29.4535 15.1461 29.2212C17.2624 27.0253 19.3858 24.8224 21.5021 22.6265C21.6349 22.4928 22.3473 21.7538 22.3403 20.5854C22.3263 19.5297 21.7326 18.847 21.586 18.6851ZM16.0122 20.7403C14.9295 21.8664 13.8469 22.9925 12.7643 24.1186C12.7503 24.1327 12.7154 24.1679 12.6595 24.1819C12.5897 24.203 12.5338 24.1819 12.5128 24.1749C11.2137 22.8658 9.91453 21.5567 8.60839 20.2406C8.48965 20.0646 8.11247 19.4523 8.19629 18.6147C8.25915 17.9813 8.54553 17.5449 8.68522 17.3619C9.37671 16.6933 10.0612 16.0247 10.7527 15.3561L10.8365 15.2998L16.0122 20.5784C16.0192 20.5854 16.0401 20.6136 16.0401 20.6558C16.0401 20.7051 16.0122 20.7332 16.0122 20.7403Z'
            fill={`${isDarkMode ? 'white' : '#CF23B8'}`}
            stroke-miterlimit='10'
          ></path>
        </svg>
        <span className='uppercase mt-1'>digital fortress</span>
      </div>

      {/* Navigation Bar */}
      <nav className='space-x-4'>
        <a href='#' className='hover:text-gray-400'>
          {t('home')}
        </a>
        <a href='#' className='hover:text-gray-400'>
          {t('about')}
        </a>
        <a href='#' className='hover:text-gray-400'>
          {t('services')}
        </a>
        <a href='login' className='hover:text-gray-400'>
          {t('contact')}
        </a>
      </nav>

      <div>
        {/* Toggle Language Change */}
        <button
          className='focus:outline-none hover:text-gray-400 mr-3'
          onClick={handleToggleLanguage}
        >
          <GlobeAltIcon className='h-6 w-6' />
        </button>

        {/* Toggle Dark/Light Mode Change */}
        <button
          className='focus:outline-none hover:text-gray-400'
          onClick={handleToggle}
        >
          {isDarkMode ? (
            <SunIcon className='h-6 w-6' />
          ) : (
            <MoonIcon className='h-6 w-6' />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
