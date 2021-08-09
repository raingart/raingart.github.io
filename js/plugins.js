Plugins.load = function(list) {
   (list || this.list).forEach(plugin => {
      try {
         this.injectScript('https://raw.githack.com/raingart/Nova-YouTube-extension/master/plugins/' + plugin);
      } catch (error) {
         console.error(`plugin loading failed: ${plugin}\n${error.stack}`);
      }
   })
}
