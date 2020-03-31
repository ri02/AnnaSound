
const playSound = () => {

  const sound = document.querySelectorAll('.sound');
  sound.forEach ((s) => {
    s.addEventListener("click", (event) => {
      const sounds = document.querySelectorAll(".snipet");
      sounds.forEach ((music) => {
        music.pause();
        music.currentTime = 0;
        });
      const soundOne = event.currentTarget.querySelector(".snipet");
      soundOne.play();
    });
  });

};

 export {playSound}
