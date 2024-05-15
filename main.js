// COIN FLIP SIMULATOR

//HTML VARIABLES
let outputEl = document.getElementById("btn");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

//Button Event Listener
outputEl.addEventListener("click", btnClicked);

// Count Variables
let numHeads = 0;
let numTails = 0;

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  //Simulate coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src = 'img/heads.png'>";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src = 'img/tails.png'>";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

//Dice roll simulator

//Html variables
let outputDiceEl = document.getElementById("diceBtn");

//Button Event Listener
outputDiceEl.addEventListener("click", btnClicked2);

function btnClicked2() {
  // Generate 6 numbers
  let randNum1 = Math.floor(Math.random() * 7);
  console.log(randNum1);

  //Simulate dice roll
  if (randNum1 < 1) {
    outputDiceEl.innerHTML = "<img src = 'img/1.png'>";
  } else if (randNum1 < 2) {
    outputDiceEl.innerHTML = "<img src = 'img/2.png'>";
  } else if (randNum1 < 3) {
    outputDiceEl.innerHTML = "<img src = 'img/3.png'>";
  } else if (randNum1 < 4) {
    outputDiceEl.innerHTML = "<img src = 'img/4.png'>";
  } else if (randNum1 < 5) {
    outputDiceEl.innerHTML = "<img src = 'img/5.png'>";
  } else {
    outputDiceEl.innerHTML = "<img src = 'img/6.png'>";
  }
}

//2 DICE ROLL SIMULATOR

//HTML VARIABLES
let output2Dice = document.getElementById("diceBtn2");

//Button event listener
output2Dice.addEventListener("click", btnClicked3);

function btnClicked3() {
  let dice1 = document.getElementById("diceimages");
  let dice2 = document.getElementById("diceimages1");

  let randNum2 = Math.floor(Math.random(1) * 6 - 1) + 1;
  console.log(randNum2);

  let randNum3 = Math.floor(Math.random(1) * 6 - 1) + 1;
  console.log(randNum3);

  document.getElementById("dicesum").innerHTML = randNum2 + randNum3;

  if (randNum2 < 1) {
    dice1.src = "img/1.png";
  } else if (randNum2 < 2) {
    dice1.src = "img/2.png";
  } else if (randNum2 < 3) {
    dice1.src = "img/3.png";
  } else if (randNum2 < 4) {
    dice1.src = "img/4.png";
  } else if (randNum2 < 5) {
    dice1.src = "img/5.png";
  } else if (randNum2 < 6) {
    dice1.src = "img/6.png";
  }

  if (randNum3 < 1) {
    dice2.src = "img/1copy.png";
  } else if (randNum3 < 2) {
    dice2.src = "img/2copy.png";
  } else if (randNum3 < 3) {
    dice2.src = "img/3copy.png";
  } else if (randNum3 < 4) {
    dice2.src = "img/4copy.png";
  } else if (randNum3 < 5) {
    dice2.src = "img/5copy.png";
  } else if (randNum3 < 6) {
    dice2.src = "img/6copy.png";
  }
}
