const Storage = {
   setParams: x => localStorage.setItem('store', x),

   getParams(callback, sync_type, x) {
      const data = localStorage.getItem('store');
      callback(data?.x);
   },
};
