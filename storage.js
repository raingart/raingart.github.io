const Storage = {
   setParams: x => localStorage.setItem('store', JSON.stringify(x)),

   getParams(callback, sync_type, x) {
      const data = JSON.parse(localStorage.getItem('store'));
      callback(data?.x);
   },
};
