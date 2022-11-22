// Loco list  ----------------------------------------- -----------------------------------------
// appends to loco type dropdown ----------------------------------------- -----------------------------------------
//
//
//

let selectLoco = document.getElementById("loco-type");
const locoTypes = ["6000 class"];

for (let i = 0; i < locoTypes.length; i++) {
  const opt = locoTypes[i];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  selectLoco.appendChild(el);
}

// number of locos ----------------------------------------- -----------------------------------------
// appends to number of locos dropdown ----------------------------------------- -----------------------------------------
//
//
//

let selectNoLocos = document.getElementById("number-of-locos");
const locoAmount = ["1", "2", "3", "4"];

for (let i = 0; i < locoAmount.length; i++) {
  const opt = locoAmount[i];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  selectNoLocos.appendChild(el);
}

// ruiling grade list ----------------------------------------- -----------------------------------------
// appends to ruling grade dropdown -----------------------------------------
//
//
//

let selectRulingGrade = document.getElementById("ruling-grade");
const rulingGradeOptions = [
  "1:30",
  "1:40",
  "1:45",
  "1:50",
  "1:66",
  "1:77",
  "1:80",
];

for (let i = 0; i < rulingGradeOptions.length; i++) {
  const opt = rulingGradeOptions[i];
  let el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  selectRulingGrade.appendChild(el);
}

//
//

// check loco trailing load ---------------------------------------------------------------------------
// append result to results -----------------------------------------
//
//

let result = document.getElementById("results");
let note = document.getElementById("note");

function results() {
  // 6000 class / 1 loco / 1:30 -----------------------------------------
  if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[0]
  ) {
    result.textContent = "1189t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 locos /1:30 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[0]
  ) {
    result.textContent = "2378t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 Class / 3 locos / 1:30 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[0]
  ) {
    result.textContent = "3567t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 locos / 1:30 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[0]
  ) {
    result.textContent = "4756t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 1 loco / 1:40 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[1]
  ) {
    result.textContent = "1611t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 loco / 1:40 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[1]
  ) {
    result.textContent = "3222t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 3 loco / 1:40 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[1]
  ) {
    result.textContent = "4833t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 loco / 1:40 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[1]
  ) {
    result.textContent = "6444t";
    note.textContent = "* Note: Maximum weight may vary between regions";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 1 loco / 1:45 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[2]
  ) {
    result.textContent = "1818t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 loco / 1:45 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[2]
  ) {
    result.textContent = "3636t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 3 loco / 1:45 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[2]
  ) {
    result.textContent = "5454t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 loco / 1:45 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[2]
  ) {
    result.textContent = "7272t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 1 loco / 1:50 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[3]
  ) {
    result.textContent = "2225t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 loco / 1:50 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[3]
  ) {
    result.textContent = "4450t";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 3 loco / 1:50 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[3]
  ) {
    result.textContent = "6675t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 loco / 1:50 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[3]
  ) {
    result.textContent = "8890t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 1 loco / 1:66 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[4]
  ) {
    result.textContent = "2663t";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 loco / 1:66 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[4]
  ) {
    result.textContent = "5326t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 3 loco / 1:66 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[4]
  ) {
    result.textContent = "7989t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 loco / 1:66 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[4]
  ) {
    result.textContent = "10,652t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 1 loco / 1:77 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[5]
  ) {
    result.textContent = "3090t";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 loco / 1:77 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[5]
  ) {
    result.textContent = "6180t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 3 loco / 1:77 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[5]
  ) {
    result.textContent = "9270";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 loco / 1:77 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[5]
  ) {
    result.textContent = "12,360t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 1 loco / 1:80 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[0] &&
    selectRulingGrade.value == rulingGradeOptions[6]
  ) {
    result.textContent = "3204t";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 2 loco / 1:80 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[1] &&
    selectRulingGrade.value == rulingGradeOptions[6]
  ) {
    result.textContent = "6048t";
    note.textContent = "* Note: Maximum weight may vary between regions";

    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 3 loco / 1:80 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[2] &&
    selectRulingGrade.value == rulingGradeOptions[6]
  ) {
    result.textContent = "9072t";
    note.textContent = "* Note: Maximum weight may vary between regions";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  }
  // 6000 class / 4 loco / 1:80 -----------------------------------------
  else if (
    selectLoco.value == locoTypes[0] &&
    selectNoLocos.value == locoAmount[3] &&
    selectRulingGrade.value == rulingGradeOptions[6]
  ) {
    result.textContent = "12,360t";
    note.textContent = "* Note: Maximum weight may vary between regions";
    console.log(
      selectLoco.value +
        " " +
        selectNoLocos.value +
        " " +
        selectRulingGrade.value
    );
  } else {
    result.textContent = " ";
  }
}
