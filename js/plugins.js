const Plugins = {
      list: [
      // 'plugins/_blank_plugin.js', // for example

      'player/ad-skip-button.js',
      'player/speed.js',
      'player/volume.js',
      'player/hud.js',
      'player/quality.js',
      'player/autopause.js', // after quality.js
      'player/theater-mode.js',
      'player/pause-background.js',
      'player/hotkeys-focused.js',
      'player/pin.js',
      'player/time-jump.js',
      'player/time-remaining.js',
      'player/float-progress-bar.js',
      'player/no-sleep.js',
      'player/loop.js',
      'player/time-resume.js',
      // 'player/-thumb-pause.js',
      'player/custom-menu.js',
      // 'player/stop.js', // incompatible with quality.js

      'other/thumbs-clear.js',
      'other/thumbs-title-normalize.js',
      'other/thumbs-rating.js',
      'other/thumbs-watched.js', // outdated
      'other/channel-tab.js',
      'other/redirect-clear.js',
      'other/title-time.js',
      'other/scroll-to-top.js',

      'details/description.js',
      'details/videos-count.js',
      // 'details/quick-menu.js',

      'comments/visibility.js',
      'comments/expand.js',
      'comments/square-avatars.js',

      'sidebar/playlist-duration.js',
      'sidebar/playlist-reverse.js',
      'sidebar/livechat.js',

      'header/unfixed.js',
      'header/short.js',
      'header/logo.js',
   ],

   load(list) {
      (list || this.list).forEach(plugin => {
         try {
            this.injectScript('https://raw.githack.com/raingart/Nova-YouTube-extension/master/plugins/' + plugin);
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
         //console.log('script loaded:', script.src || script.textContent.substr(0, 100));
         script.remove(script); // Remove <script> node after injectScript runs.
      };
   },
}
