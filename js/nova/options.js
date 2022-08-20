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

window.addEventListener('load', () => {
   return;
   document.addEventListener('submit', form => {
      let newSettings = {};

      for (let [key, value] of new FormData(form.target)) {
         if (newSettings.hasOwnProperty(key)) { // SerializedArray
            newSettings[key] += ',' + value; // add new
            newSettings[key] = newSettings[key].split(','); // to array [old, new]

         } else {
            newSettings[key] = value;
         };
      }

      //console.log(newSettings);
      
      (async () => {
        const rawResponse = await fetch('https://', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSettings)
        });
        //const content = await rawResponse.json();
        //console.log(content);
      })();
      
   });
});
