

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.on(
    'timeupdate',
    throttle(function (data) {
      localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
  );


  loadPlayer();

  function loadPlayer() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (!currentTime) return;

  player.setCurrentTime((Number(currentTime))).then(function(seconds) {


}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
}
