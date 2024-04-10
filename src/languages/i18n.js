// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Các ngôn ngữ được hỗ trợ
const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      // Thêm các chuỗi ngôn ngữ khác tại đây
    },
  },
  vn: {
    translation: {
      greeting: 'Xin chào!',
      // Thêm các chuỗi ngôn ngữ khác tại đây
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Ngôn ngữ mặc định
  interpolation: {
    escapeValue: false, // không cần escape chuỗi
  },
});

export default i18n;
