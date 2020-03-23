
const playSound = () => {

  const sound = document.querySelectorAll('.sound');
  sound.forEach ((s) => {
    s.addEventListener("click", (event) => {
      const soundOne = event.currentTarget.querySelector(".snipet");
      soundOne.play();
    });
  });

};

 export {playSound}
