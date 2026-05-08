//audios
var rickRoll = new Audio('assets/neverGonnaGiveYouUp.mp3');
var what = new Audio('assets/whatMeme.ogg');

//funcs
function playRickRoll(){
  rickRoll.play();
}

function playWhatMeme(){
  what.play();
}

function stopAll(){ //TODO: find a way to silence all audio without puting multiple audios.pause() here
  rickRoll.pause()
  what.pause()
}