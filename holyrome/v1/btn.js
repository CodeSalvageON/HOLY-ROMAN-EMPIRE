const newCrusade = document.getElementById("new");
const contCrusade = document.getElementById("cont");

$(".scroll").click(function () {
  if (isIntDisabled === true) {
    return false;
  }
});

newCrusade.onclick = function () {
  austriaAnthem.play();
  fadeToIntro();
}