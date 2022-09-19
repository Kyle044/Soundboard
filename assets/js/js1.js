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

// INTRODUCTION
function play_int1() {
  listener();
  var aud = document.getElementById("int1").play();
}
function play_int2() {
  listener();
  var aud = document.getElementById("int2").play();
}
function play_int3() {
  listener();
  var aud = document.getElementById("int3").play();
}
function play_int4() {
  listener();
  var aud = document.getElementById("int4").play();
}
function play_int5() {
  listener();
  var aud = document.getElementById("int5").play();
}
function play_int6() {
  listener();
  var aud = document.getElementById("int6").play();
}
function play_int7() {
  listener();
  var aud = document.getElementById("int7").play();
}
function play_int8() {
  listener();
  var aud = document.getElementById("int8").play();
}
function play_int9() {
  listener();
  var aud = document.getElementById("int9").play();
}
function play_int10() {
  listener();
  var aud = document.getElementById("int10").play();
}
function play_int11() {
  listener();
  var aud = document.getElementById("int11").play();
}
function play_int12() {
  listener();
  var aud = document.getElementById("int12").play();
}

function play_int13() {
  listener();
  var aud = document.getElementById("int13").play();
}
function play_int14() {
  listener();
  var aud = document.getElementById("int14").play();
}
// HELP PAGE

function play_help1() {
  listener();
  var aud = document.getElementById("help1").play();
}
function play_help2() {
  listener();
  var aud = document.getElementById("help2").play();
}
function play_help3() {
  listener();
  var aud = document.getElementById("help3").play();
}
function play_help4() {
  listener();
  var aud = document.getElementById("help4").play();
}
function play_help5() {
  listener();
  var aud = document.getElementById("help5").play();
}
function play_help6() {
  listener();
  var aud = document.getElementById("help6").play();
}
function play_help7() {
  listener();
  var aud = document.getElementById("help7").play();
}
function play_help8() {
  listener();
  var aud = document.getElementById("help8").play();
}
function play_help9() {
  listener();
  var aud = document.getElementById("help8").play();
}

// Qualifying Questions

function play_q1() {
  listener();
  var aud = document.getElementById("q1").play();
}

function play_q2() {
  listener();
  var aud = document.getElementById("q2").play();
}
function play_q3() {
  listener();
  var aud = document.getElementById("q3").play();
}
function play_q4() {
  listener();
  var aud = document.getElementById("q4").play();
}
function play_q5() {
  listener();
  var aud = document.getElementById("q5").play();
}
function play_q6() {
  listener();
  var aud = document.getElementById("q6").play();
}
function play_q7() {
  listener();
  var aud = document.getElementById("q7").play();
}
function play_q8() {
  listener();
  var aud = document.getElementById("q8").play();
}
function play_q9() {
  listener();
  var aud = document.getElementById("q9").play();
}
function play_q10() {
  listener();
  var aud = document.getElementById("q10").play();
}
function play_q11() {
  listener();
  var aud = document.getElementById("q11").play();
}
function play_q12() {
  listener();
  var aud = document.getElementById("q12").play();
}
function play_q13() {
  listener();
  var aud = document.getElementById("q13").play();
}
function play_q14() {
  listener();
  var aud = document.getElementById("q14").play();
}
// Closing

function play_c1() {
  listener();
  var aud = document.getElementById("c1").play();
}
function play_c2() {
  listener();
  var aud = document.getElementById("c2").play();
}
function play_c3() {
  listener();
  var aud = document.getElementById("c3").play();
}
function play_c4() {
  listener();
  var aud = document.getElementById("c4").play();
}
function play_c5() {
  listener();
  var aud = document.getElementById("c5").play();
}
function play_c6() {
  listener();
  var aud = document.getElementById("c6").play();
}
function play_c7() {
  listener();
  var aud = document.getElementById("c7").play();
}
function play_c8() {
  listener();
  var aud = document.getElementById("c8").play();
}
function play_c9() {
  listener();
  var aud = document.getElementById("c9").play();
}

//Customer ask

function play_ca1() {
  listener();
  var aud = document.getElementById("ca1").play();
}
function play_ca2() {
  listener();
  var aud = document.getElementById("ca2").play();
}
function play_ca3() {
  listener();
  var aud = document.getElementById("ca3").play();
}
function play_ca4() {
  listener();
  var aud = document.getElementById("ca4").play();
}
function play_ca5() {
  listener();
  var aud = document.getElementById("ca5").play();
}

function play_ca6() {
  listener();
  var aud = document.getElementById("ca6").play();
}
function play_ca7() {
  listener();
  var aud = document.getElementById("ca7").play();
}
function play_ca8() {
  listener();
  var aud = document.getElementById("ca8").play();
}
function play_ca9() {
  listener();
  var aud = document.getElementById("ca9").play();
}
function play_ca10() {
  listener();
  var aud = document.getElementById("ca10").play();
}
function play_ca11() {
  listener();
  var aud = document.getElementById("ca11").play();
}
function play_ca12() {
  listener();
  var aud = document.getElementById("ca12").play();
}

// NOT INTERESTED
function play_ni1() {
  listener();
  var aud = document.getElementById("ni1").play();
}
function play_ni2() {
  listener();
  var aud = document.getElementById("ni2").play();
}
function play_ni3() {
  listener();
  var aud = document.getElementById("ni3").play();
}
function play_ni4() {
  listener();
  var aud = document.getElementById("ni4").play();
}
function play_ni5() {
  listener();
  var aud = document.getElementById("ni5").play();
}
function play_ni6() {
  listener();
  var aud = document.getElementById("ni6").play();
}
function play_ni7() {
  listener();
  var aud = document.getElementById("ni7").play();
}
function play_ni8() {
  listener();
  var aud = document.getElementById("ni8").play();
}
function play_ni9() {
  listener();
  var aud = document.getElementById("ni9").play();
}
function play_ni10() {
  listener();
  var aud = document.getElementById("ni10").play();
}
function play_ni11() {
  listener();
  var aud = document.getElementById("ni11").play();
}
function play_ni12() {
  listener();
  var aud = document.getElementById("ni12").play();
}
function play_ni13() {
  listener();
  var aud = document.getElementById("ni13").play();
}
function play_ni14() {
  listener();
  var aud = document.getElementById("ni14").play();
}
function play_ni15() {
  listener();
  var aud = document.getElementById("ni15").play();
}
function play_ni16() {
  listener();
  var aud = document.getElementById("ni16").play();
}
function play_ni17() {
  listener();
  var aud = document.getElementById("ni17").play();
}
function play_ni18() {
  listener();
  var aud = document.getElementById("ni18").play();
}
function play_ni19() {
  listener();
  var aud = document.getElementById("ni19").play();
}
function play_ni20() {
  listener();
  var aud = document.getElementById("ni20").play();
}
function play_ni21() {
  listener();
  var aud = document.getElementById("ni21").play();
}
function play_ni22() {
  listener();
  var aud = document.getElementById("ni22").play();
}
function play_ni23() {
  listener();
  var aud = document.getElementById("ni23").play();
}
function play_ni24() {
  listener();
  var aud = document.getElementById("ni24").play();
}
function play_ni25() {
  listener();
  var aud = document.getElementById("ni25").play();
}

// Phonetics
function play_ph1() {
  listener();
  var aud = document.getElementById("ph1").play();
}
function play_ph2() {
  listener();
  var aud = document.getElementById("ph2").play();
}
function play_ph3() {
  listener();
  var aud = document.getElementById("ph3").play();
}
function play_ph4() {
  listener();
  var aud = document.getElementById("ph4").play();
}
function play_ph5() {
  listener();
  var aud = document.getElementById("ph5").play();
}
function play_ph6() {
  listener();
  var aud = document.getElementById("ph6").play();
}
function play_ph7() {
  listener();
  var aud = document.getElementById("ph7").play();
}
function play_ph8() {
  listener();
  var aud = document.getElementById("ph8").play();
}
function play_ph9() {
  listener();
  var aud = document.getElementById("ph9").play();
}
function play_ph10() {
  listener();
  var aud = document.getElementById("ph10").play();
}
function play_ph11() {
  listener();
  var aud = document.getElementById("ph11").play();
}
function play_ph12() {
  listener();
  var aud = document.getElementById("ph12").play();
}
function play_ph13() {
  listener();
  var aud = document.getElementById("ph13").play();
}
function play_ph14() {
  listener();
  var aud = document.getElementById("ph14").play();
}
function play_ph15() {
  listener();
  var aud = document.getElementById("ph15").play();
}
function play_ph16() {
  listener();
  var aud = document.getElementById("ph16").play();
}
function play_ph17() {
  listener();
  var aud = document.getElementById("ph17").play();
}
function play_ph18() {
  listener();
  var aud = document.getElementById("ph18").play();
}
function play_ph19() {
  listener();
  var aud = document.getElementById("ph19").play();
}
function play_ph20() {
  listener();
  var aud = document.getElementById("ph20").play();
}
function play_ph21() {
  listener();
  var aud = document.getElementById("ph21").play();
}
function play_ph22() {
  listener();
  var aud = document.getElementById("ph22").play();
}
function play_ph23() {
  listener();
  var aud = document.getElementById("ph23").play();
}
function play_ph24() {
  listener();
  var aud = document.getElementById("ph24").play();
}
function play_ph25() {
  listener();
  var aud = document.getElementById("ph25").play();
}
function play_ph26() {
  listener();
  var aud = document.getElementById("ph26").play();
}

// Numbers
function play_num1() {
  listener();
  var aud = document.getElementById("num1").play();
}
function play_num2() {
  listener();
  var aud = document.getElementById("num2").play();
}
function play_num3() {
  listener();
  var aud = document.getElementById("num3").play();
}
function play_num4() {
  listener();
  var aud = document.getElementById("num4").play();
}
function play_num5() {
  listener();
  var aud = document.getElementById("num5").play();
}
function play_num6() {
  listener();
  var aud = document.getElementById("num6").play();
}
function play_num7() {
  listener();
  var aud = document.getElementById("num7").play();
}
function play_num8() {
  listener();
  var aud = document.getElementById("num8").play();
}
function play_num9() {
  listener();
  var aud = document.getElementById("num9").play();
}
function play_num10() {
  listener();
  var aud = document.getElementById("num10").play();
}
function play_num11() {
  listener();
  var aud = document.getElementById("num11").play();
}

// FILLERS

function play_f1() {
  listener();
  var aud = document.getElementById("f1").play();
}
function play_f2() {
  listener();
  var aud = document.getElementById("f2").play();
}
function play_f3() {
  listener();
  var aud = document.getElementById("f3").play();
}
function play_f4() {
  listener();
  var aud = document.getElementById("f4").play();
}
function play_f5() {
  listener();
  var aud = document.getElementById("f5").play();
}
function play_f6() {
  listener();
  var aud = document.getElementById("f6").play();
}
function play_f7() {
  listener();
  var aud = document.getElementById("f7").play();
}
function play_f8() {
  listener();
  var aud = document.getElementById("f8").play();
}
function play_f9() {
  listener();
  var aud = document.getElementById("f9").play();
}
function play_f10() {
  listener();
  var aud = document.getElementById("f10").play();
}
function play_f11() {
  listener();
  var aud = document.getElementById("f11").play();
}
function play_f12() {
  listener();
  var aud = document.getElementById("f12").play();
}
function play_f13() {
  listener();
  var aud = document.getElementById("f13").play();
}
function play_f14() {
  listener();
  var aud = document.getElementById("f14").play();
}
function play_f15() {
  listener();
  var aud = document.getElementById("f15").play();
}
function play_f16() {
  listener();
  var aud = document.getElementById("f16").play();
}
function play_f17() {
  listener();
  var aud = document.getElementById("f17").play();
}
function play_f18() {
  listener();
  var aud = document.getElementById("f18").play();
}

// probing
function play_prob1() {
  listener();
  var aud = document.getElementById("prob1").play();
}
function play_prob2() {
  listener();
  var aud = document.getElementById("prob2").play();
}

function play_prob3() {
  listener();
  var aud = document.getElementById("prob3").play();
}

function play_prob4() {
  listener();
  var aud = document.getElementById("prob4").play();
}

function play_prob5() {
  listener();
  var aud = document.getElementById("prob5").play();
}

function play_prob6() {
  listener();
  var aud = document.getElementById("prob6").play();
}

function play_prob7() {
  listener();
  var aud = document.getElementById("prob7").play();
}

function play_prob8() {
  listener();
  var aud = document.getElementById("prob8").play();
}

function play_prob9() {
  listener();
  var aud = document.getElementById("prob9").play();
}

function play_prob10() {
  listener();
  var aud = document.getElementById("prob10").play();
}
