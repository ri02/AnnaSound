
const playSound = () => {

const button = document.querySelector('#sound');

button.addEventListener("click", (event) => {
   var soundOne = document.getElementById("wip");
   soundOne.play();
   console.log("Test");
});

 };

 export {playSound}
