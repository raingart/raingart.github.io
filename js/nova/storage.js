let storeData;

const Storage = {
   //setParams: x => localStorage.setItem('store', JSON.stringify(x)),
   
   /*getParams(callback, sync_type, x) {
      const data = JSON.parse(localStorage.getItem('store'));
      callback(x ? data?.x : data);
   },*/
   
   setParams: x => {},
   getParams: callback => callback(storeData),
};

/*Conf.init = function() {
   PopulateForm.fill(storeData);
   this.attrDependencies();
   this.registerEventListener();
   //document.body.classList.remove('preload'); // should be hidden on the userscript side
   // auto selects value on focus
   document.body.querySelectorAll('form input[type]').forEach(i => i.addEventListener('focus', i.select));
   this.btnSubmitAnimation.submitBtns = document.body.querySelectorAll('form [type=submit]');
};*/
