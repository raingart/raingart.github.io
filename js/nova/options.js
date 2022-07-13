console.debug('init options patch.js');

Conf.init = function() {
   Storage.getParams(settings => {
      PopulateForm.fill(storeData);
      this.attrDependencies();
      this.registerEventListener();
      //document.body.classList.remove('preload'); // should be hidden on the userscript side
      // auto selects value on focus
      document.body.querySelectorAll('form input[type]').forEach(i => i.addEventListener('focus', i.select));
      this.btnSubmitAnimation.submitBtns = document.body.querySelectorAll('form [type=submit]');
   }, this.storageMethod);
};
