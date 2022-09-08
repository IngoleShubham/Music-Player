let curr_track = document.createElemeent('audio');
let track_list = [
  {
    name: "mausam",
    artist: "Broke For Free",
    image: "Image URL",
    path: "public\assets\Songs\mausam.mp3"
  },
  {
    name: "Baras",
    artist: "Tours",
    image: "Image URL",
    path: "public\assets\Songs\Baras.mp3"
  },
  {
    name: "Khiladi",
    artist: "Chad Crouch",
    image: "Image URL",
    path: "public\assets\Songs\Khiladi.mp3",
  },
];
curr_track.src = track_list[track_index].path;
curr_track.load();

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  // playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length - 1;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
