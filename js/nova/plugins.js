
if (location.hash == '#demo') {
      const script = document.createElement('script');
      script.src = 'https://raw.githack.com/raingart/Nova-YouTube-extension/master/js/plugins.js';
      script.defer = true; // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer:~:text=defer,-This
      script.async = true;
      (document.head || document.documentElement).append(script);

      script.onload = () => {
         Plugins.load = function (list) {
         (list || this.list)
            .filter(n => !n.includes('/+')) // skip some plugin
            .forEach(plugin => {
               try {
                  this.injectScript('https://raw.githack.com/raingart/Nova-YouTube-extension/master/plugins/' + plugin);
               } catch (error) {
                  console.error(`plugin loading failed: ${plugin}\n${error.stack}`);
               }
            })
         }
      };
}
else {
   const Plugins = {
      load(){},
   }
}
