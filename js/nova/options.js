console.debug('init options patch.js');

Conf.init = settings => {
   if (settings?.lang_code) Opt.lang_code = settings.lang_code; // locale predefinitions
   if (settings) PopulateForm.fill(settings);
   Conf.attrDependencies();
   Conf.registerEventListener();
   // auto selects value on focus
   document.body.querySelectorAll('form input[type]').forEach(i => i.addEventListener('focus', i.select));
   Conf.btnSubmitAnimation.submitBtns = document.body.querySelectorAll('form [type=submit]');
}

