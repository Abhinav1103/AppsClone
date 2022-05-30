console.log("Welcome to Spotify");
//initialize variable
let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let gif = document.getElementById("gif");
// audioElement.play();
let masterPlay = document.getElementById("masterPlay");
let songProgressBar = document.getElementById("songProgressBar");
let songItems = document.getElementsByClassName("songItem");
console.log(songItems);

let songs = [
  {
    songName: "Kalathukku nee venum0",
    filePath: "songs/0.mp3",
    cover: "covers/0.jpg",
  },
  {
    songName: "Kalathukku nee venum1",
    filePath: "songs/1.mp3",
    cover: "covers/1.jpg",
  },
  {
    songName: "Kalathukku nee venum2",
    filePath: "songs/2.mp3",
    cover: "covers/2.jpg",
  },
  {
    songName: "Kalathukku nee venum3",
    filePath: "songs/3.mp3",
    cover: "covers/3.jpg",
  },
  {
    songName: "Kalathukku nee venum4",
    filePath: "songs/4.mp3",
    cover: "covers/4.jpg",
  },
  {
    songName: "Kalathukku nee venum5",
    filePath: "songs/5.mp3",
    cover: "covers/5.jpg",
  },
  {
    songName: "Kalathukku nee venum6",
    filePath: "songs/6.mp3",
    cover: "covers/6.jpg",
  },
  {
    songName: "Kalathukku nee venum7",
    filePath: "songs/7.mp3",
    cover: "covers/7.jpg",
  },
  {
    songName: "Kalathukku nee venum8",
    filePath: "songs/8.mp3",
    cover: "covers/8.jpg",
  },
];

Array.from(songItems).forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].cover;
  console.log(element.getElementsByClassName("songName"));
  element.getElementsByClassName("songName")[0].textContent = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  //update seek bar
  song_progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  songProgressBar.value = song_progress;
});

songProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (audioElement.duration * songProgressBar.value) / 100;
  console.log(audioElement.currentTime);
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songPlayButton")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songPlayButton")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e);
      makeAllPlay();
      songIndex = e.target.id;
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");

      audioElement.src = `songs/${index}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);
