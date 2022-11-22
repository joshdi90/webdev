//-------------------------------------------------
//  grade
//-------------------------------------------------
let selectGrade = document.getElementById("select-grade");
const grade = ["1:32 - 1:25", "1:49 - 1:33", "1:99 - 1:50", "Level - 1:100"];

//-------------------------------------------------
//
// number of wagons
//-------------------------------------------------
//
let numWagons = document.getElementById("num-of-wagons");

//-------------------------------------------------
// handbrake percent
//-------------------------------------------------
const handbrakePercent = [1, 0.8, 0.5, 0.3];

// results
let result = document.getElementById("results");

//-------------------------------------------------
// append grade to select element
//-------------------------------------------------

for (let i = 0; i < grade.length; i++) {
  const opt = grade[i];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  selectGrade.appendChild(el);
}
// -------- Calculation function -------------------
// ------------------------------------------------

function results() {
  // --------- 100% ---------------
  // -------------------------------
  if (numWagons.value >= 2 && selectGrade.value == grade[0]) {
    let a = numWagons.value;
    let amount = a * handbrakePercent[0];
    result.textContent = amount + " " + "Wagons";
    console.log(amount);
  }
  //   ----------80% ---------------
  // -------------------------------
  else if (numWagons.value >= 2 && selectGrade.value == grade[1]) {
    let a = numWagons.value;
    let amount = a * handbrakePercent[1];
    result.textContent = Math.ceil(amount) + " " + "Wagons";

    console.log(Math.ceil(amount));
  }
  // ----------- 50% ---------------
  // -------------------------------
  else if (numWagons.value >= 2 && selectGrade.value == grade[2]) {
    let a = numWagons.value;
    let amount = a * handbrakePercent[2];
    result.textContent = Math.ceil(amount) + " " + "Wagons";

    console.log(Math.ceil(amount));
  }
  // ----------- 30% ---------------
  // -------------------------------
  else if (numWagons.value >= 2 && selectGrade.value == grade[3]) {
    let a = numWagons.value;
    let amount = a * handbrakePercent[3];
    result.textContent = Math.ceil(amount) + " " + "Wagons";

    console.log(Math.ceil(amount));
  }
  // -------- return empty ---------
  else {
    result.textContent = " ";
  }
}
