const newCrusade = document.getElementById("new");
const contCrusade = document.getElementById("cont");

const cardsTable = document.getElementsByClassName("cards-table-inline");

$(".scroll").click(function () {
  if (isIntDisabled === true) {
    return false;
  }
});

$(".cards-table-inline").click(function () {
  if (isIntDisabled === true) {
    return false;
  }
});

$("button").click(function () {
  if (isIntDisabled === true) {
    return false;
  }
});

$(".interface").click(function () {
  if (isIntDisabled === true) {
    return false;
  }
});

newCrusade.onclick = function () {
  austriaAnthem.play();
  fadeToIntro();
}

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");

let card1Click = 0;
let card2Click = 0;
let card3Click = 0;

let card1Selec = "";
let card2Selec = "";
let card3Selec = "";

const chooseCards = document.getElementById("choose-cards");

function cardSelectFunc (which) {
  if (which === card1Selec || which === card2Selec || which === card3Selec) {
    card1Selec = "";
    card2Selec = "";
    card3Selec = "";
    card1Click = 0;
    card2Click = 0;
    card3Click = 0;

    for (i = 0; i < cardsTable.length; i++) {
      cardsTable[i].style.border = "2px solid brown";
    }
    
    return false;
  }
  
  if (card1Click === 0) {
    card1Click = 1;
    card1Selec = which;
    document.getElementById(which).style.border = "2px solid black";
  }

  else {
    if (card2Click === 0) {
      card2Click = 1;
      card2Selec = which;
      document.getElementById(which).style.border = "2px solid black";
    }

    else {
      if (card3Click === 0) {
        card3Click = 1;
        card3Selec = which;
        document.getElementById(which).style.border = "2px solid black";
      }

      else {
        document.getElementById(which).style.border = "2px solid black";
        document.getElementById(card3Selec).style.border = "2px solid brown";
        card3Selec = which;
      }
    }
  }
}

card1.onclick = function () {
  cardSelectFunc("card1");
}

card2.onclick = function () {
  cardSelectFunc("card2");
}

card3.onclick = function () {
  cardSelectFunc("card3");
}

card4.onclick = function () {
  cardSelectFunc("card4");
}

card5.onclick = function () {
  cardSelectFunc("card5");
}

card6.onclick = function () {
  cardSelectFunc("card6");
}

let chooseErr = document.getElementById("choose-err");

chooseCards.onclick = function () {
  if (card1Click === 1 && card2Click === 1 && card3Click === 1) {
    $("#intro1").fadeOut(2000);
    isIntDisabled = true;

    setTimeout(function () {
      isIntDisabled = false;

      if (card1Selec === "card2" || card2Selec === "card2" || card3Selec === "card2") {
        currentDiplomacy -= 10;
        currentEconomy -= 5;
        currentStability += 15;

        isGoingDown1 = true;
        isGoingDown4 = true;
      }

      if (card1Selec === "card4" || card2Selec === "card4" || card3Selec === "card4") {
        currentMilitary += 5;
        isGoingDown3 = false;
      }

      if (card1Selec === "card5" || card2Selec === "card5" || card3Selec === "card5") {
        currentEconomy += 5;
        isGoingDown4 = false;
      }
    }, 2000);
  }

  else {
    chooseErr.innerText = "Please choose three cards first.";
  }
}

const compass = document.getElementById("compass");
let isQuestMenu = false;

compass.onclick = function () {
  if (isQuestMenu === false) {
    $("#quest-menu").slideDown(300);
    isQuestMenu = true;
  }

  else {
    $("#quest-menu").slideUp(300);
    isQuestMenu = false;
  }
}