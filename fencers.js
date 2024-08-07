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
}

function displayFencers() {
  const fencerList = document.querySelector("#fencer-list");
  fencerList.innerHTML = "";

  opponents.forEach((fencer) => {
    const newFencer = document.createElement("div");

    const fencerInfo = document.createElement("div");
    fencerInfo.innerText = fencer.toString();
    newFencer.appendChild(fencerInfo);

    const editFencer = document.createElement("button");
    editFencer.innerText = "edit";
    editFencer.classList.add("edit-fencer");
    newFencer.appendChild(editFencer);


    fencerList.appendChild(newFencer);
  })
}

let submitButton = document.querySelector("#add-an-opponent");

submitButton.addEventListener("submit", (event) => {


  const firstName = document.querySelector("#first_name").value;
  const lastName = document.querySelector("#last_name").value;
  const rating = document.querySelector("#rating").value;
  const hand = document.querySelector("[name='hand']").value;
  const grip = document.querySelector("[name='grip']").value;
  const yob = document.querySelector("#yob").value;
  const height = document.querySelector("#height").value;
  const notes = document.querySelector("#notes").value;

  console.log(firstName + lastName + rating + hand + grip + yob + height + notes);

  const fencer = new Fencer(firstName, lastName, rating, hand, grip, yob, height, notes);

  addFencer(fencer);
  displayFencers();

  submitButton.reset();


  event.preventDefault();
})