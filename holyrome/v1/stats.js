let currentDiplomacy = 60;
let currentEconomy = 40;
let currentMilitary = 20;
let currentStability = 20;
let currentYear = 1700;

const diplomacyStat = document.getElementById("stat1");
const stabilityStat = document.getElementById("stat2");
const militaryStat = document.getElementById("stat3");
const economyStat = document.getElementById("stat4");

let isGoingDown1 = false;
let isGoingDown2 = false;
let isGoingDown3 = false;
let isGoingDown4 = false;

function updateStat () {
  if (isGoingDown1 === false) {
    diplomacyStat.innerHTML = "Diplomacy: <i class='green'>" + currentDiplomacy + " ▲</i>"; 
  }

  else {
    diplomacyStat.innerHTML = "Diplomacy: <i class='red'>" + currentDiplomacy + " ▼</i>";
  }

  if (isGoingDown2 === false) {
    stabilityStat.innerHTML = "Stability: <i class='green'>" + currentStability + " ▲</i>";
  }

  else {
    stabilityStat.innerHTML = "Stability: <i class='red'>" + currentStability + " ▼</i>";
  }

  if (isGoingDown3 === false) {
    militaryStat.innerHTML = "Military: <i class='green'>" + currentMilitary + " ▲</i>";
  }

  else {
    militaryStat.innerHTML = "Military: <i class='red'>" + currentMilitary + " ▼</i>";
  }

  if (isGoingDown4 === false) {
    economyStat.innerHTML = "Economy: <i class='green'>" + currentEconomy + " ▲</i>";
  }

  else {
    economyStat.innerHTML = "Economy: <i class='red'>" + currentEconomy + " ▼</i>";
  }
}

setInterval(updateStat, 150);