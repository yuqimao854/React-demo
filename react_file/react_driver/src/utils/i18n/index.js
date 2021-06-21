import i18n from 'react-native-i18n';

import en from './en';

import zh from './zh';

import ja from './ja'
const config = async () => {
  const lang = await global.storage
    .load({key: 'lang',id:'1001'})
    .then(ret => {
      return ret;
    })
    .catch(err => {
      return 'zh';
    });
  console.log(lang, 'lang');

  i18n.defaultLocale = 'en';
  
  i18n.locale = lang;
    
  i18n.fallbacks = true;

  i18n.translations = {
    zh,
    en,
    ja,
  };
//  console.log(i18n.translations)
};

config();



export {i18n};
