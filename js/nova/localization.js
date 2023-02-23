const i18n = msg => localization[msg]?.message;
let localization = {
   "localization": {
      "message": "en"
   },
   "app_description": {
      "message": "YouTube™ Enhancer"
   },
   "tab_map": {
      "message": "Map"
   },
   "tab_plugins": {
      "message": "Plugins"
   },
   "tab_plugins_tooltip": {
      "message": "All plugins"
   },
   "tab_other": {
      "message": "Other"
   },
   "plugins_search_placeholder": {
      "message": "Search..."
   },
   "btn_plugins_search_clear_tooltip": {
      "message": "Clear Search"
   },
   "opt_btn_save_settings": {
      "message": "Save"
   },
   "opt_btn_save_settings_process": {
      "message": "Saving..."
   },
   "opt_btn_save_settings_processed": {
      "message": "Saved!"
   },
   "opt_appearance_header": {
      "message": "Header"
   },
   "opt_appearance_player": {
      "message": "Player"
   },
   "opt_appearance_sidebar": {
      "message": "Sidebar"
   },
   "opt_appearance_details": {
      "message": "Details"
   },
   "opt_appearance_comments": {
      "message": "Comments"
   },
   "opt_appearance_other": {
      "message": "Other"
   },
   "opt_legend_settings_transfer": {
      "message": "Settings transfer:"
   },
   "opt_title_help_link": {
      "message": "More info"
   },
   "opt_btn_import_settings": {
      "message": "Import"
   },
   "opt_prompt_import_settings": {
      "message": "Not access in pop-up!\nOpen setting page?"
   },
   "opt_alert_import_successfully": {
      "message": "Settings imported successfully!"
   },
   "opt_btn_export_settings": {
      "message": "Export"
   },
   "opt_btn_reset_settings": {
      "message": "Reset"
   },
   "opt_prompt_reset_settings": {
      "message": "It is advised to backup your current settings before continuing.\nDelete all settings?"
   },
   "opt_btn_save_settings_tooltip": {
      "message": "Open tabs don't change"
   },
   "opt_btn_api_key_input": {
      "message": "API key"
   },
   "opt_api_key_generate": {
      "message": "Generate API key"
   },
   "opt_userscript_disable_setting_button": {
      "message": "Disable setting button"
   },
   "opt_userscript_disable_setting_button_tooltip": {
      "message": "On Youtube pages"
   },
   "opt_exclude_iframe": {
      "message": "Exclude iframe video"
   },
   "opt_exclude_iframe_tooltip": {
      "message": "The extension will not work in embeded video"
   },
   "opt_report_issues": {
      "message": "Show prompting to report bugs"
   },
   "opt_report_issues_tooltip": {
      "message": "Need allow pop-up on YouTube for prompting"
   },
   "opt_api_key_warn": {
      "message": "Use your [API key] for stable work"
   },
   "lang_code_tooltip": {
      "message": "Сhoice of localization"
   },
   "lang_code": {
      "message": "Language"
   },
   "github_page": {
      "message": "Source code"
   },
   "github_page_tooltip": {
      "message": "Open"
   },
   "github_page_issues": {
      "message": "Report a bugs"
   },
   "github_page_issues_tooltip": {
      "message": "To report"
   },
   "email": {
      "message": "Contact email"
   },
   "email_tooltip": {
      "message": "To feedback"
   },
   "donate_patreon_tooltip": {
      "message": "Support with Patreon"
   },
   "donate_patreon": {
      "message": "Donate (Patreon)"
   },
   "donate_buymeacoffee_tooltip": {
      "message": "Support with buymeacoffee"
   },
   "donate_buymeacoffee": {
      "message": "Donate (buymeacoffee)"
   },
   "donate_paypal_tooltip": {
      "message": "Support with Paypal"
   },
   "donate_paypal": {
      "message": "Donate (Paypal)"
   }
};

async function localizePage(code = navigator.language.substring(0, 2)) {
   //localization = await fetchLang(['en', 'ja', 'zh', 'ko', 'es', 'pt', 'tr', 'de', 'pl'].includes(code) ? code : 'en'); // code = storeData?.lang_code || Opt.lang_code

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

window.addEventListener('DOMContentLoaded', localizePage);

['be', 'ru', 'fa'].includes(navigator.language.substring(0, 2)) && location.replace('/');
