let storeData;

const Storage = {
   //setParams: x => localStorage.setItem('store', JSON.stringify(x)),
   
   /*getParams(callback, sync_type, x) {
      const data = JSON.parse(localStorage.getItem('store'));
      callback(x ? data?.x : data);
   },*/
   
   getParams: callback => callback(storeData),
};
