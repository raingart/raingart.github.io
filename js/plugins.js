const Plugins = {
   // DEBUG: true,

   list: [
      // 'plugins/_blank_plugin.js', // for example

      // 'other/-test.js',

      'player/ad-skip-button.js',
      'player/speed.js',
      'player/volume.js',
      'player/hud.js',
      'player/quality.js',
      'player/pause.js', // after quality.js
      'player/theater-mode.js',
      'player/tab-pause.js',
      'player/focused.js',
      'player/pin.js',
      'player/time-jump.js',
      // 'player/show-progress-bar.js',
      // 'player/annotations.js',
      // 'player/stop.js', // incompatible with quality.js

      'other/scroll-to-top.js',
      'other/rating-bars.js',
      'other/normalize-video-title.js',
      'other/thumbnail-clear.js',
      'other/default-tab.js',
      'other/clear-redirect.js',
      'other/wake-up.js',

      'details/expand-description.js',
      'details/channel-video-count.js',

      'comments/disable-comments.js',
      'comments/expand-comments.js',

      'sidebar/playlist-duration.js',
      'sidebar/livechat-hide.js',
   ],

   load(list) {
      (list || this.list).forEach(plugin => {
         try {
            this.injectScript('https://ghcdn.rawgit.org/raingart/Nova-YouTube-extension/master/plugins/' + plugin);
         } catch (error) {
            console.error(`plugin loading failed: ${plugin}\n${error.stack}`);
         }
      })
   },

   injectScript(source = required()) {
      const script = document.createElement('script');

      if (source.endsWith('.js')) {
         script.src = source;
         // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer:~:text=defer,-This
         script.defer = true;
         // script.async = true;

      } else {
         script.textContent = source.toString();
         // script.src = "data:text/plain;base64," + btoa(source);
         // script.src = 'data:text/javascript,' + encodeURIComponent(source)
      }

      (document.head || document.documentElement).appendChild(script);

      script.onload = () => {
         this.log('script loaded:', script.src || script.textContent.substr(0, 100));
         script.remove(script); // Remove <script> node after injectScript runs.
      };
   },

   log(...args) {
      if (this.DEBUG && args?.length) {
         console.groupCollapsed(...args);
         console.trace();
         console.groupEnd();
      }
   }
}
