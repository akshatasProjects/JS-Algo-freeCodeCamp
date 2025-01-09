let xp = 0;
let health = 100;
let gold = 50;

let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["Stick"];

const button1 = document.querySelector("button1");
const button2 = document.querySelector("button2");
const button3 = document.querySelector("button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations  = [
  {
    name:"town square", 
   "button text":["Go to store","Go to cave","Fight dragon"],
   "button functions":[goStore, goCave, fightDragon],
   text: "You are in the town square. You see a sign that says \"Store\"."
  },

  {
    name : "store",
    "button text":["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
    "button functions":[buyHealth, buyWeapon, goTown],
    text:"You enter the store."
  }

];

function update(location){
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}



function goTown(){
  // button1.innerText = "Go to store";
  // button2.innerText = "Go to cave";
  // button3.innerText = "Fight dragon";
  // button1.onclick = goStore;
  // button2.onclick = goCave;
  // button3.onclick = fightDragon;
  // text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

// Create an empty function named goStore.

function goStore() {
  // step 32
  // console.log("Going to store.");
  
  //step39
  /*button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)"
  button3.innerText = "Go to town square"*/

  //Step40
  

  //STEP 41
  text.innerText = "You enter the store."
}

//--------------step33
function goCave() {
  
}

//-----------------Step34
function fightDragon() {
  // console.log("Fighting dragon.");
  
}

// ---------------Step 35---------------------
// initialize buttons
Go to town square
// ---------------Step 36---------------------
button1.onclick = goStore;
//-----------------Step 37-------------------------
button2.onclick = goCave;
button3.onclick = fightDragon;

//------------------Step 38-----------------------------
// add line to function goStore Buy 10 health (10 gold)

// Step 39
// Now, add a line that updates the text of
// button2 to say "Buy weapon (30 gold)"
// and update the text of button3 to say ""


/* STEP 42
Create three new empty 
functions called buyHealth, buyWeapon, and goTown.

*/
function buyHealth(){}
function buyWeapon(){}


// LEFT AT STEP 60