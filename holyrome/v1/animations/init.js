let mainWin = document.getElementById("main-win");
let loader = document.getElementById("loading");

waitForElement("menu", function () {
  setTimeout(function () {
    $("#menu").fadeIn(4000);
    loader.style.display = "none";

    mainWin.style.boxShadow = "0px 0px 40px 15px #FFCC1D";
  }, 4000);
});