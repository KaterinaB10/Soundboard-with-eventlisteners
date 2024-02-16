//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here:  */
// import referanceWord from "the location of the file"
// Remember:
// to use type="module" for this js file when using imports
// to use assert {type: "json"} if using a json file
// examples of how the structure can look is in the data folder;
//* ////////////////////////////////////// */
// import soundFiles from "../data/sounds.json" assert { type: "json" };
// console.log(soundFiles);
// const soundsArr = Object.values(soundFiles);
// console.log(soundsArr);

import { sounds } from "../data/sounds.js";
console.log(sounds);

import { soundsSecond } from "../data/soundsSecond.js";
console.log(soundsSecond);

import { soundsThird } from "../data/soundsThird.js";
console.log(soundsThird);

import { soundsForth } from "../data/soundsForth.js";
console.log(soundsForth);

//*1. Catch the html element with id drumkit: */
//* ////////////////////////////////////// */

const drumkit = document.getElementById("drumkit");

//*2. Write a console log for the fetched sounds so you know how the structure is and how you can use it */
//* ////////////////////////////////////// */

console.log(sounds[0].file);
console.log(sounds[0].key);

//*3. Create the function with a parameter that is refering to the sound used that does the following: */

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const row3 = document.querySelector(".row3");
const row4 = document.querySelector(".row4");

//3.1. make a variable that creates a button element with .createElement
// add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed

// let button = document.createElement("button");
// button.classList.add("btn");
// row1.appendChild(button);
// button.textContent = sounds[0].key;

//3.2. make a variables that create an audio element with .createElement
//the audio element that is created should have the src equal to the file source
//the audio element that is created should have the id equal to the textcontent created in 3.1.

// let audio = document.createElement("audio");
// audio.setAttribute("autoplay", "");
// audio.src = sounds[0].file;
// button.appendChild(audio);

// button.addEventListener("click", function () {
//   console.log("Clicked");
//   audio.play();
// });

//3.3. add an eventlistner to the whole page that:
//actives when pressing a keyboard key (first parameter of the eventlistener)
//runs a nameless function with parameter event (refering to the key pressed)

sounds.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound.key;
  row1.appendChild(button);

  button.addEventListener("click", () => {
    const audio = new Audio(sound.file);
    button.appendChild(audio);
    audio.play();

    console.log("Clicked");
  });
});

soundsSecond.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound.key;
  row2.appendChild(button);

  button.addEventListener("click", () => {
    const audio = new Audio(sound.file);
    button.appendChild(audio);
    audio.play();

    console.log("Clicked");
  });
});

soundsThird.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound.key;
  row3.appendChild(button);

  button.addEventListener("click", () => {
    const audio = new Audio(sound.file);
    button.appendChild(audio);
    audio.play();

    console.log("Clicked");
  });
});

soundsForth.forEach((sound) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound.key;
  row4.appendChild(button);

  button.addEventListener("click", () => {
    const audio = new Audio(sound.file);
    button.appendChild(audio);
    audio.play();

    console.log("Clicked");
  });
});

let button = document.querySelector("btn");
// addEventListener("keydown", function()) = true;

// if (button)

// 3.3.1. inside of the eventlistner:

// create a variable that refers to the key pressed
// make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
// if the conditional is true, play the audio element that you created in 3.2.

//3.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
//actives when releasing a keyboard key (first parameter of the eventlistener)

// 3.4.1. inside of the eventlistner:

// pauses the audio element
// sets the current time of the audio element to 0

//3.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

//3.6. append the created button and audio element to the html element you refered in 1.

//* ///////////////////////////////////////////////////////////////////////////////////////////// */

//*4. Create a function that loops over the sounds (from the data file you created). Use that function created in 3. to use the logic there to create the buttons. I prefer that you use .forEach or .map */

//* ////////////////////////////////////// */

//*4. Call on the function that loops over the sounds and creates the buttons */

//* ////////////////////////////////////// */
