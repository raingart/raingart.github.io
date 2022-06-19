console.debug('init options.js');

Conf.init = settings => {
   if (settings) PopulateForm.fill(settings);
   Conf.attrDependencies();
   Conf.registerEventListener();
   // auto selects value on focus
   document.body.querySelectorAll('form input[type]').forEach(i => i.addEventListener('focus', i.select));
   Conf.btnSubmitAnimation.submitBtns = document.body.querySelectorAll('form [type=submit]');
}

