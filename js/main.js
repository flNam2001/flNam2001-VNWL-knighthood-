const memberImages = document.querySelectorAll('.member-img');
let activeImg = document.querySelector('#active-img');
const sliderTracks = document.querySelectorAll('.slide-track');
const links = document.querySelectorAll('#navbar-mobile a');

memberImages.forEach(function(memberImage) {
    memberImage.addEventListener('click', function() {
        let src = this.getAttribute('src');
        activeImg.setAttribute('src', src);
        activeImg.classList.add('animated-zoom');
        setTimeout(function() {
            if(activeImg.classList.contains('animated-zoom')) {
                activeImg.classList.remove('animated-zoom')
            }
        }, 500)
    })
})

document.getElementById("dropdown").addEventListener("click", openMenu);
document.getElementById("nonbar").addEventListener("click", closemenu);

function openMenu () {
    document.getElementById("nonbar").style.width="50%";
    document.getElementById("navbar-mobile").style.width="50%";
}

function closemenu (){
    document.getElementById("navbar-mobile").style.width="0%";
    document.getElementById("nonbar").style.width="0%";
}

links.forEach(function(link) {
    link.addEventListener('click', closemenu)
})

//==========mode audio================

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pulse = document.getElementById('pulse')
const rings = document.getElementsByClassName('ring')

function playSong() {
    pulse.style.transform = 'scale(1.2)'
    play.querySelector('.fas').classList.remove('fa-play')
    play.querySelector('.fas').classList.add('fa-pause')
    play.classList.add('play')
    audio.play()
}

function pauseSong() {
    pulse.style.transform = 'scale(1)'
    play.querySelector('.fas').classList.remove('fa-pause')
    play.querySelector('.fas').classList.add('fa-play')
    play.classList.remove('play')
    audio.pause()
}

play.addEventListener("click", () => {
    const isPlaying = play.classList.contains("play")
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})