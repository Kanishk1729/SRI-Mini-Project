console.log("testing")

//initialization of variables
let sIndex = 1;
let a1 = new Audio('../music/1.mp3');
let msplay = document.getElementById('msply');
let progressbar = document.getElementById('playbar');
let songobj = Array.from(document.getElementsByClassName('songs'));
let currplay = Array.from(document.getElementsByClassName('songitemplay'));
let bottomsong = document.getElementById('bottomsong');
let songs = [
    {songname : "Abyss Watchers", filepath: "../music/1.mp3", coverpath: "../image_res/logo1.jpg"},
    {songname : "Oceiros", filepath: "../music/2.mp3", coverpath: "../image_res/logo2.jpg"},
    {songname : "Iundex Gundyr", filepath: "../music/3.mp3", coverpath: "../image_res/logo3.png"},
    {songname : "Dark souls", filepath: "../music/4.mp3", coverpath: "../image_res/logo4.jpg"},
    {songname : "Pontiff Sulyvhan", filepath: "../music/5.mp3", coverpath: "../image_res/logo5.jpg"},
    {songname : "Crystle sage", filepath: "../music/6.mp3", coverpath: "../image_res/logo2.jpg"},
    {songname : "Farron Watchdogs", filepath: "../music/7.mp3", coverpath: "../image_res/logo4.jpg"},
]

songobj.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
});

//Handle play/pause
msplay.addEventListener('click', ()=>{
    if(a1.paused || a1.currentTime<=0)
    {
        a1.play();
        bottomsong.innerText = songs[sIndex-1].songname;
        msplay.classList.remove('fa-play-circle');
        msplay.classList.add('fa-pause-circle');
        currplay[sIndex-1].classList.remove('fa-play-circle');
        currplay[sIndex-1].classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        a1.pause();
        allplaybutton();
        msplay.classList.remove('fa-pause-circle');
        msplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to events
a1.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((a1.currentTime/a1.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    a1.currentTime = progressbar.value*a1.duration/100;
})

const allplaybutton = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    })
}

currplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allplaybutton();
        sIndex = parseInt(e.target.id);
        a1.src = `../music/${sIndex}.mp3`;
        bottomsong.innerText = songs[sIndex-1].songname;
        a1.currentTime = 0;
        a1.play();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        msplay.classList.remove('fa-play-circle');
        msplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementById('previous').addEventListener('click',(e)=>{
    allplaybutton();
    sIndex = (sIndex-1)%7 ? (sIndex-1)%7 : 7;
    a1.src = `../music/${sIndex}.mp3`;
    bottomsong.innerText = songs[sIndex-1].songname;
    a1.currentTime = 0;
    a1.play();
    currplay[sIndex-1].classList.remove('fa-play-circle');
    currplay[sIndex-1].classList.add('fa-pause-circle');
    msplay.classList.remove('fa-play-circle');
    msplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

document.getElementById('next').addEventListener('click',(e)=>{
    allplaybutton();
    sIndex = (sIndex+1)%7 ? (sIndex+1)%7 : 7;
    a1.src = `../music/${sIndex}.mp3`;
    bottomsong.innerText = songs[sIndex-1].songname;
    a1.currentTime = 0;
    a1.play();
    currplay[sIndex-1].classList.remove('fa-play-circle');
    currplay[sIndex-1].classList.add('fa-pause-circle');
    msplay.classList.remove('fa-play-circle');
    msplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})