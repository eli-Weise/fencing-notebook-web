const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const rating = document.querySelector("#rating");
const hand = document.querySelector("[name='hand']");
const grip = document.querySelector("[name='grip']");
const yob = document.querySelector("#yob");
const height = document.querySelector("#height");
const notes = document.querySelector("#notes");

/**
 * Fencer object constructor
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {Enumerator} rating 
 * @param {Enumerator} hand 
 * @param {Enumerator} grip 
 * @param {number} birthYear 
 * @param {Enumerator} height 
 * @param {string} notes 
 */
function Fencer(firstName, lastName, rating, hand, grip, birthYear, height, notes) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.rating = rating;
  this.hand = hand;
  this.grip = grip;
  this.birthYear = birthYear;
  this.height = height;
  this.notes = notes;

  this.toString = function () {
    return lastName.toUpperCase() + " " + firstName +
      ", rating: " + rating +
      ", hand: " + hand +
      ", grip: " + grip +
      ", birth year: " + birthYear +
      ", height: " + height +
      ", notes: " + notes;
  }
}

const opponents = [];


function addFencer(fencer) {
  opponents.push(fencer);
  console.log(opponents);
}

function displayFencers() {
  const fencerList = document.querySelector("#fencer-list");
  fencerList.innerHTML = "";

  opponents.forEach((fencer, i) => {
    const newFencer = document.createElement("div");

    const fencerInfo = document.createElement("div");
    fencerInfo.innerText = fencer.toString();
    newFencer.appendChild(fencerInfo);

    const fencerEdit = editFencer(fencer, i);
    newFencer.appendChild(fencerEdit);


    fencerList.appendChild(newFencer);
  })
}

let fencerForm = document.querySelector("#add-an-opponent");

function editFencer(fencer, i) {
  const fencerEdit = document.createElement("button");
  fencerEdit.innerText = "edit";

  fencerEdit.addEventListener("click", (event) => {
    const fencerToEdit = opponents[i];

    firstName.value = fencerToEdit.firstName;
    lastName.value = fencerToEdit.lastName;
    rating.value = fencerToEdit.rating;
    hand.value = fencerToEdit.hand;
    grip.value = fencerToEdit.grip;
    yob.value = fencerToEdit.yob;
    height.value = fencerToEdit.height;
    notes.value = fencerToEdit.notes;

    opponents.splice(i, 1);
  })

  return fencerEdit;
}

fencerForm.addEventListener("submit", (event) => {

  console.log(firstName.value + lastName.value + rating.value + hand.value + grip.value + yob.value + height.value + notes.value);

  const fencer = new Fencer(firstName.value, lastName.value, rating.value, hand.value, grip.value, yob.value, height.value, notes.value);

  addFencer(fencer);
  displayFencers();

  fencerForm.reset();


  event.preventDefault();
})