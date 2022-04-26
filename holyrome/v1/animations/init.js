let mainWin = document.getElementById("main-win");
let loader = document.getElementById("loading");

waitForElement("menu", function () {
  setTimeout(function () {
    $("#menu").fadeIn(4000);
    loader.style.display = "none";

    mainWin.style.boxShadow = "0px 0px 40px 15px #FFCC1D";
  }, 4000);
});

function fadeToIntro () {
  $("#menu").fadeOut(4000);
  mainWin.style.boxShadow = "";
  isIntDisabled = true;

  setTimeout(function () {
    $("#board").fadeIn(4000);

    setTimeout(function () {
      isIntDisabled = false;
    }, 4000);
  }, 4000);
}