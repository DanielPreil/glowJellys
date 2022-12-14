// ----- Scroll Függvények -----

function scrollToTheTop() {
  document.body.scrollTop = 0; // Safari Böngésző Igénylésére
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE és Opera Böngészők Igénylésére
}

function scrollToTheFirstTitle() {
    document.body.scrollTop = 125; // Safari Böngésző Igénylésére
    document.documentElement.scrollTop = 125; // Chrome, Firefox, IE és Opera Böngészők Igénylésére
}

function scrollToTheSecondTitle() {
    document.body.scrollTop = 600; // Safari Böngésző Igénylésére
    document.documentElement.scrollTop = 600; // Chrome, Firefox, IE és Opera Böngészők Igénylésére
}

function scrollToTheThirdTitle() {
    document.body.scrollTop = 1075; // Safari Böngésző Igénylésére
    document.documentElement.scrollTop = 1075; // Chrome, Firefox, IE és Opera Böngészők Igénylésére
}

// ----- Scroll Függvények Vége -----

// ----- Background JellyFish Music Play / Pause Függvények -----

var aud = document.getElementById("backgroundJellyFishMusicButton").children[0];
var isPlaying = false;
aud.pause();
function playPause() {
  if (isPlaying) {
    aud.pause();
  } else {
    aud.play();
  }
  isPlaying = !isPlaying;
}

// ----- Background JellyFish Music Play / Pause Függvények Vége -----