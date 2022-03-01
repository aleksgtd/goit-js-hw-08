import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const SET_TIME_KEY = 'videoplayer-current-time';

const time = localStorage[SET_TIME_KEY];

onLoadFn();

player.on('timeupdate', throttle(getTime, 1000));

function getTime({ seconds }) {
  localStorage.setItem(SET_TIME_KEY, seconds);
}

function onLoadFn() {
  if (time) {
    player
      .setCurrentTime(time)
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            console.log('RangeError!');
            break;

          default:
            // some other error occurred
            console.log('Some error!');
            break;
        }
      });
  }
}
