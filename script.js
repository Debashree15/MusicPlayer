console.log("Welcome to Sukoon!");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let song=[{songName:"Salam-e-Ishq",filePath:"1.mp3",coverPath:"1.jpg"}]

//audioElement.play();
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity=1

  }
  else{
    audioElement.pause()
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle')
    gif.style.opacity=0
  }
  })
audioElement.addEventListener('timeupdate',()=>{

prog=parseInt((audioElement.currentTime/audioElement.duration)*100)

myProgressBar.value=prog
})
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=myProgressBar.value  * audioElement.duration/100;
})