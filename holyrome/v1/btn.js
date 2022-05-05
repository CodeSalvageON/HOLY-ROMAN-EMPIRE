const newCrusade = document.getElementById("new");
const contCrusade = document.getElementById("cont");

const cardsTable = document.getElementsByClassName("cards-table-inline");

function disableIntAll () {
  if (isIntDisabled === true) {
    return false;
  }
}

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

$("#quest-18").show();

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

const issue = document.getElementById("issue");
const reichStag = document.getElementById("reichstag");
const dec1 = document.getElementById("dec1");
const dec2 = document.getElementById("dec2");
const dec3 = document.getElementById("dec3");

let decArray = ["A fairly large number of Greeks have immigrated to our Empire's lands since the Ottoman Empire opened it's borders.", "Several territorial princes have become corrupt and unruly. Something must be done about this!", "We should probably build more institutions in order to keep stability.", "Who should foreigners talk to when addressing the Empire?", "Should we have a permanent Army of the Holy Roman Empire?", "We should reconquer some of the territories that have seceded.", "Should we encourage our member states to have colonies?", "Many of our subjects do not know about the great Empire they belong to. This is disappointing.", "Many of the waterways and streets are unclean and filthy. Disease is rampant!", "We should have festivals and games for the general populace."];
let dec2Array = ["Let them all in!|Keep it under control.|Keep them out!", "Nothing can be done.|Threaten them.|Pay them off.", "Good idea.|Financial institutions?|No.", "The Austrians.|The Prussians.|The Imperial Diet.", "Absolutely!|Not at all.|Most of the time...", "Deus vult!|Ask nicely.|We have enough to deal with.", "Yes.|No.|More embassies instead.", "Encourage education.|Why should I care?|Fly the Imperial Standard!", "Create a health institution.|Nothing can be done.|Threaten the Cities.", "Yes.|No.|Discourage festivals."];
let dec3Array = ["/holyrome/v1/gui/city.jpeg", "/holyrome/v1/gui/perp.jpeg"];

function makeDec () {
  let randDec = Math.floor(Math.random() * 60);
}

pausePlay.onclick = function () {
  disableIntAll();

  if (isIntDisabled === true) {
    return false;
  }
  
  if (isPaused === true) {
    isPaused = false;
    pausePlay.innerText = "⏵︎ In-Play";
    $("#mein-years").show();
    makeDec();
  }

  else {
    isPaused = true;
    pausePlay.innerText = "⏸︎ Puzzle Paused";
  }
}

const diplomacy = document.getElementById("diplomacy");
const returnFromDiplomacy = document.getElementById("return-from-diplomacy");

diplomacy.onclick = function () {
  $("#decks").hide();
  $("#diplomacy-cards").show();
}

returnFromDiplomacy.onclick = function () {
  $("#diplomacy-cards").hide();
  $("#decks").show();
}