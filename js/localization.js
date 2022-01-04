

const localization = {
   "plugins_search_placeholder": {
      "message": "Search..."
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
      "message": "custom Youtube API key"
   },
   "opt_api_key_generate": {
      "message": "Generate API key"
   },
   "opt_disable_setting_button": {
      "message": "Disable setting button"
   },
   "opt_disable_setting_button_tooltip": {
      "message": "On Youtube pages"
   },
   "opt_disable_in_frame": {
      "message": "Disable in iframe"
   },
   "opt_disable_in_frame_tooltip": {
      "message": "All plugins will not work in iframe tag"
   },
   "opt_report_issues": {
      "message": "Show prompting to report bugs"
   },
   "opt_report_issues_tooltip": {
      "message": "Allow popup on YouTube pages"
   },
   "opt_api_key_warn": {
      "message": "Use your [API key] for stable work"
   },
   "github_page": {
      "message": "Source Code"
   },
   "github_page_tooltip": {
      "message": "Open"
   },
   "github_page_issues": {
      "message": "Report Bugs"
   },
   "github_page_issues_tooltip": {
      "message": "To Report"
   },
   "donate_patreon_tooltip": {
      "message": "Support with Patreon"
   },
   "donate_patreon": {
      "message": "Donate"
   }
   "donate_buymeacoffee_tooltip": {
      "message": "Support with buymeacoffee.com"
   },
   "donate_buymeacoffee": {
      "message": "buymeacoffee"
   }
};

const i18n = msg => localization[msg]?.message;

function localizePage() {
	let html = document.getElementsByTagName('html')[0];
   html.innerHTML = internationalize(html.innerHTML)

   function internationalize(name) {
      return name.replace(/__MSG_(\w+)__/g, (m, key) => i18n(key) || `{i18n: ${key}}`);
   }
}

document.addEventListener('DOMContentLoaded', localizePage);
