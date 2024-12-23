let songName = document.querySelector("#song-name");
let songSinger = document.querySelector("#song-singer");
let songImage = document.querySelector(".song-image");
let playPauseImg = document.querySelector("#play-pause");
let volumeRange = document.querySelector("#volume-range");
let volSvg = document.querySelector("#vol-svg");
let songRange = document.querySelector("#song-duration");
let playlistImg = document.querySelector("#playlist-img");
let playlist = document.querySelector(".playlist");



let index = 0;
let playingSong = false;
let track = document.createElement("audio");
let songs = [
    {
        name:"Ve Kamleya",
        path:"./Songs/firstsong.mp3",
        image:"./Cover/image1.jpg",
        singer:"Arijit Singh"
    },

    {
        name:"Apna Bana Le",
        path:"./Songs/secondsong.mp3",
        image:"./Cover/image2.jpg",
        singer:"Arijit Singh"
    },

    {
        name:"Pehle Bhi Main",
        path:"./Songs/thirdsong.mp3",
        image:"./Cover/image3.jpg",
        singer:"Vishal Mishra"
    },

    {
        name:"Satranga",
        path:"./Songs/forthsong.mp3",
        image:"./Cover/image4.jpg",
        singer:"Arijit Singh"
    },
];

function loadTrack(index){
    track.src = songs[index].path;
    songName.innerHTML = songs[index].name;
    songSinger.innerHTML = songs[index].singer;
    songImage.style = `background-image: url("${songs[index].image}");`
    volume();
    duration();

    setInterval(()=>{
        songRange.max = track.duration;
        songRange.value = track.currentTime;
    },1000);

    track.load();

}

loadTrack(index);

function playPause(){
    if(playingSong == false){
        playSong()
    }
    else{
        pauseSong()
    }
}

function playSong(){
    track.play();
    playingSong = true;
    playPauseImg.src = "./Icons/pause.svg";
}

function pauseSong(){
    track.pause();
    playingSong = false;
    playPauseImg.src = "./Icons/play.svg";
}

function nextSong(){
    if(index < songs.length - 1){
        index ++ ;
        loadTrack(index);
        playSong();
    }

    else{
        index = 0;
        loadTrack(index);
        playSong();
    }
}

function previousSong(){
    if(index > 0){
        index -- ;
        loadTrack(index);
        playSong();
    }

    else{
        index = songs.length - 1 ;
        loadTrack(index);
        playSong();
    }
}


function volume(){
track.volume = volumeRange.value/100;
if(volumeRange.value == 0){
    volSvg.src = "./Icons/mute.svg";
}

else{
    volSvg.src = "./Icons/volume.svg";
}
}

function duration(){
    track.currentTime = songRange.value;
}


playlistImg.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active");
if(playlist.classList.contains("playlist-active")){
    playlistImg.src = "./Icons/cross.svg"
}
else{
    playlistImg.src = "./Icons/playlist.svg"
}
})