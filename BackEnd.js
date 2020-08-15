var music_names = ["Him and I.mp3 ", "On and on.mp3"];
var backgrounds = ["background", "background1"];
var songTitle = document.getElementById('SongTitle')
let play_btn = document.querySelector("#play");
let prev_btn = document.querySelector("#pre");
let next_btn = document.querySelector("#next");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img")
let total_time = 0;
let currentTime = 0;
let isPlaying = false;
let song = new Audio();
var currentSong = 0;
window.onload = playSong;

function playSong(){
    song.src = music_names[currentSong];
    SongTitle.textContent =  music_names[currentSong];
    console.log(song)

}
  play_btn.addEventListener('click',function(){
      if(!isPlaying){
          song.play();
          isPlaying = true;
          total_time = song.duration;
          range.max = total_time;
          play_img.src = "pause.png";
      }else{
          song.pause();
          isPlaying = false;
          play_img.src = "play.png";
      }
     song.addEventListener('ended',function(){
          song.currentTime = 0
          song.pause();
          isPlaying = false;
          range.value = 0;
          play_img.src = "play.png";
      })
      song.addEventListener('timeupdate',function(){
          range.value = song.currentTime;
      })
      range.addEventListener('change',function(){
          song.currentTime = range.value;
      })


        next_btn.addEventListener('click',function(){
          currentSong++;
          if(currentSong == 2){
            currentSong = 0;
          }
            playSong();
            song.play();
            isPlaying = true;
            total_time = song.duration;
            range.max = total_time;
            play_img.src = "pause.png"

        })
        prev_btn.addEventListener('click',function(){
          currentSong--;
          if(currentSong < 0){
            currentSong = 0;
          }
          playSong();
          song.play();
          isPlaying = true;
          total_time = song.duration;
          range.max = total_time;
          play_img.src = "pause.png"
        })

    })
