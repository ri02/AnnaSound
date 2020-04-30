
const soundClick = () =>{


const stopSound = (e) => {
  const sounds = document.querySelectorAll('.snipet');
  sounds.forEach (s => s.pause());
}

const playSound = (e) => {
    const audio = e.currentTarget.querySelector(".snipet")
    stopSound()
    e.currentTarget.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
};

const removeTransition = (e) => {
if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const sounds = Array.from(document.querySelectorAll('.sound'))
sounds.forEach( s => s.addEventListener("click", playSound));
sounds.forEach(s => s.addEventListener('transitionend', removeTransition));

}



 export {soundClick}
