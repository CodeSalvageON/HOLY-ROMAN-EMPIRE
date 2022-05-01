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

      if (card1Selec === "card1" || card2Selec === "card1" || card3Selec === "card1") {
        $("#quest1").show();
      }

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

      if (card1Selec === "card6" || card2Selec === "card6" || card3Selec === "card6") {
        $("#quest2").show();
      }
    }, 2000);
  }

  else {
    chooseErr.innerText = "Please choose three cards first.";
  }
}

const compass = document.getElementById("compass");
const cards = document.getElementById("diet");
let isQuestMenu = false;

compass.onclick = function () {
  if (isIntDisabled === true) {
    return false;
  }
  
  if (isQuestMenu === false) {
    $("#quest-menu").slideDown(300);
    isQuestMenu = true;
  }

  else {
    $("#quest-menu").slideUp(300);
    isQuestMenu = false;
  }
}

diet.onclick = function () {
  if (isIntDisabled === true) {
    return false;
  }
          
  $("#board").fadeOut(3000);
  isIntDisabled = true;

  setTimeout(function () {
    $("#decks").fadeIn(3000);

    setTimeout(function () {
      isIntDisabled = false;
    }, 3000);
  }, 3000);
}

const backFromCards = document.getElementById("back-from-cards");
backFromCards.onclick = function () {
  $("#decks").fadeOut(3000);
  isIntDisabled = true;

  setTimeout(function () {
    $("#board").fadeIn(3000);
    
    setTimeout(function () {
      isIntDisabled = false;
    }, 3000);
  }, 3000);
}

let currentQuest = "";

$(".quest").click(function () {
  if (isIntDisabled === true) {
    return false;
  }
  
  $("#board").fadeOut(3000);
  isIntDisabled = true;

  setTimeout(function () {
    $("#quest-loader").fadeIn(3000);

    setTimeout(function () {
      isIntDisabled = false;
    }, 3000);
  }, 3000);
});

$("#quest1").click(function () {
  currentQuest = 1;
});

let isPaused = true;
let pausePlay = document.getElementById("pause-play");

pausePlay.onclick = function () {
  if (isPaused === true) {
    isPaused = false;
    pausePlay.innerText = "⏵︎ In-Play";
  }

  else {
    isPaused = true;
    pausePlay.innerText = "⏸︎ Puzzle Paused";
  }
}