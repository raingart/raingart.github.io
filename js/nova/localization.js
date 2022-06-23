
// localization.js
const i18n = msg => localization[msg]?.message;
let localization = {};

async function localizePage(code = navigator.language.substring(0, 2)) {
   localization = await fetchLang(['en', 'ja', 'zh', 'ko', 'es', 'pt', 'tr', 'de', 'pl'].includes(code) ? code : 'en'); // code = storeData?.lang_code || Opt.lang_code

   let html = document.getElementsByTagName('html')[0];
   html.innerHTML = internationalize(html.innerHTML);

   function internationalize(name) {
      return name.replace(/__MSG_(\w+)__/g, (m, key) => i18n(key) || `{i18n: ${key}}`);
   }

   async function fetchLang(code) {
      return await fetch(`https://raw.githubusercontent.com/raingart/Nova-YouTube-extension/master/_locales/${code}/messages.json`)
         .then(res => res.json())
         .catch(reason => console.error('Error get keys:', reason)); // warn
   };
}

//window.addEventListener('DOMContentLoaded', localizePage);

['be', 'ru', 'ua'].includes(navigator.language.substring(0, 2)) && location.replace('/');

