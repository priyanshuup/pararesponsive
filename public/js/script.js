const musicbtn = document.querySelector(".ri-play-circle-line")
const audioplay = document.getElementById("autoplay")

const musiccontainer = document.querySelector("#musiccontainer")
const musicbstop = document.querySelector(".ri-pause-circle-line")
const musicbtnclose = document.querySelector("#musiccontainer .ri-close-fill")

const cntnrtxt = document.querySelector(".cntnrtxt")
const hindinpunjabi = document.querySelector("#hindinpunjabi")
const english = document.querySelector("#English")

const popuphindi = document.querySelector(".popuphindi")
const popupenglish = document.querySelector(".popupenglish")
const io = document.querySelector("#io")
const poph = document.querySelector("#poph")
const audio = document.querySelector("#events .audio");

musicbtn.addEventListener("click", function(){
    audio.play();
    musiccontainer.style.display = "flex";
    musiccontainer.style.opacity = "1";
    cntnrtxt.style.top ='75%'
    cntnrtxt.style.opacity='0'
    musicbtnclose.style.display = "block"
    audioplay.play();
});

musicbtnclose.addEventListener("click", function(){
    audio.play();
    audioplay.pause();
    popuphindi.style.display = "none";
    document.querySelector(".popupenglish").style.display = "none";
    musiccontainer.style.display = "none"
    musicbtnclose.style.display = "none"
    cntnrtxt.style.top='50%'
    cntnrtxt.style.opacity='1'

})

hindinpunjabi.addEventListener("click",function(){
    audio.play();
    popuphindi.style.display = "flex";
    hindinpunjabi.style.opacity = "0.1"
    english.style.opacity = "0.1"
    cntnrtxt.style.opacity = "0.1"
    musicbtnclose.style.display = "none"
    popupenglish.style.display = "none"
});

english.addEventListener("click",function(){
    audio.play();
    popupenglish.style.display = "flex";
    hindinpunjabi.style.opacity = "0.1"
    english.style.opacity = "0.1"
    cntnrtxt.style.opacity = "0.1"
    musicbtnclose.style.display = "none"
    popuphindi.style.display = "none"
})

io.addEventListener("click",function(){
    audio.play();
    popupenglish.style.display = "none";
    popuphindi.style.display = "none";
    io.style.cursor = "pointer";
    hindinpunjabi.style.opacity = "1"
    english.style.opacity = "1"
    cntnrtxt.style.opacity = "1"
    musicbtnclose.style.opacity = "1"
    musicbtnclose.style.display = "flex"
});

poph.addEventListener("click",function(){
    audio.play()
    popuphindi.style.display = "none";
    hindinpunjabi.style.opacity = "1"
    poph.style.cursor="pointer"
    english.style.opacity = "1"
    cntnrtxt.style.opacity = "1"
    musicbtnclose.style.display = "flex"
    musicbtnclose.style.cursor = "pointer";
}); 

var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display = "none"
})