
let playpauseBtn = document.querySelector(".playpause-track");

let isPlaying = false;
function playpauseTrack() {
  var audio = document.getElementById("audio");
        if (!isPlaying) playTrack();
        else pauseTrack();
        // while(isPlaying = true){
        //   console.log(audio.currentTime);
        // }
        document.querySelector(".song-name").innerHTML = "Mausam";
      }
function playTrack() {
  audio.play();
  isPlaying = true;
  // var time = Math.floor(audio.currentTime * 100 / audio.duration);
  // console.log(time);
  // document.getElementById("timeline").value = time;
  playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
  document.getElementsByClassName("song-name").innerHTML = "Mr & Mrs Khiladi Song ...";
  // document.querySelector(.song-name).innerHTML = "mausam song";
}
function runTimeline(){
  var timelineLength = Math.floor((audio.currentTime * 100) / audio.duration);
  // document.querySelector(#timeline).max = timelineLength;

}
// runTimeline();
function seekTo(){
  var seekto = (audio.currentTime * 100) / audio.duration;
  audio.currentTime = seekto;
}
// audio.onTimeUpdate = function(e){
//   console.log("playing", 100* audio.currentTime / audio.duration);
// }
function pauseTrack(){
  // pause the track
  audio.pause();
  isPlaying = false;
  // replace icon with play icon
  playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}

// function playpauseTrack(){
//   var audio = new audio("public\assets\Songs\mausam.mp3");
//   audio.play();
//   console.log("working");
// }
// function makesound(){
//   var audio = new audio("public\assets\Songs\mausam.mp3");
//   audio.play();
//   break;
// }
// song.addEventListener("click", function(){
//   makesound();
// })
function prevTrack(){
  console.log("working");
}
function nextTrack(){
  console.log("working");
}


// Welcome Message script
const d = new Date();
var time = d.getHours();
function welcome(){
  if(time>=0 && time<6){
    document.getElementById("welcome-text").innerHTML = "Good Night ✨";
  }
  else if (time>=6 && time<12) {
    document.getElementById("welcome-text").innerHTML = "Good Mornig ☕";
  }
  else if (time>=12 && time<16) {
    document.getElementById("welcome-text").innerHTML = "Good Afternoon 🍴";
  }
  else if (time>=16 && time<=20) {
    document.getElementById("welcome-text").innerHTML = "Good Evening 🏃‍♂️";
  }
  else{
    document.getElementById("welcome-text").innerHTML = "Good Night 😴";
  }
}
welcome();

function quote(){
  document.getElementById("welcome-text").innerHTML = "Have a Nice Day";
}




// timeline sync
if (document.getElementById('audio') != null) {
    var a = document.getElementById("audio").duration;
    console.log(a);
}
var volumeSlider = document.getElementsByClassName("volume-slider");
function setVolume(){
  audio.volume = volumeSlider.value / 100;
}

// var a = document.getElementById("audio").duration;
// var b = document.getElementById("audio").currentTime;
// console.log(b);
// var b = a/100;
// document.getElementById("timeline").max = a;
