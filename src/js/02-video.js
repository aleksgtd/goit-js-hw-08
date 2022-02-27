import _ from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// let event = new Event('click', { bubbles: true, cancelable: true });

// const playBtn = iframe.querySelector('button');

// console.log(playBtn);

player.on('timeupdate', _.throttle(getTime, 1000));

// console.log(localStorage['videoplayer-current-time']);

const timeGotten = localStorage['videoplayer-current-time'];

function getTime({ seconds }) {
  localStorage['videoplayer-current-time'] = seconds;
}

player.setCurrentTime(timeGotten);

// document.addEventListener('DOMContentLoaded', onAutoPlayFn);

// const body = document.querySelector('body');

// function onAutoPlayFn() {
//   if (Number(timeGotten) !== 0) {
//     body.dispatchEvent(event);

//     player.setCurrentTime(timeGotten);

//     return player.play();
//   }

//   return;
// }

// localStorage['videoplayer-current-time'] = 0;

// function playFn(seconds) {
//   if (Number(seconds) === 0) {
//     return;
//   }

//   player.play();
// }

// playFn(timeGotten);

// function setVideoTime(player, seconds) {
//   player.setCurrentTime(seconds);
//   playVideo(player);
// }

// // console.log(localStorage['videoplayer-current-time']);

// // function setVideoTime(player, seconds) {
// //   player.setCurrentTime(seconds).then(function () {
// //     return player.play();
// //   });
// // }

// setVideoTime(player, timeGotten);

// function playVideo(player) {
//   player.play();
// }
