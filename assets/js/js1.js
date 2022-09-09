// JavaScript Document
var key = function (e) {
  e = e || window.event;
  event.preventDefault();
  var k = e.keyCode || e.which;
  if (k == 32) {
    stop_play();
  }
};
document.onkeydown = key;

function listener() {
  document.addEventListener(
    "play",
    function (e) {
      var audios = document.getElementsByTagName("audio");
      for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
          audios[i].pause();
          audios[i].currentTime = 0;
        }
      }
    },
    true
  );
}

function stop_play() {
  listener();
  var aud = document.getElementById("blank").play();
}

//----Call Flow Audio----
function play_callflow1() {
  listener();
  var aud = document.getElementById("callflow1").play();
}
