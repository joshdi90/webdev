/* Check effective retention time - add comments bellow
- to-do: fix 420 start pressure 22/11/22
-
-
-
-
-
*/

// ---------------------- Variables ----------------------------//

const startPressure = document.querySelector(".start-pressure");
const finishPressure = document.querySelector(".finish-pressure");

// results displays results in div on page

const results = document.querySelector(".ecp-pressure-results");
const calculate = document.querySelector(".ecp-start-btn");
const statment = "Minutes";

// function to check effective retention time with addEventListener('click)

calculate.addEventListener("click", () => {
  // ------------- 420+ ------------------------------//

  if (startPressure.value >= 421 && finishPressure.value >= 421) {
    results.textContent = "201+" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 413 &&
    finishPressure.value < 421
  ) {
    results.textContent = "201" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 407 &&
    finishPressure.value < 413
  ) {
    results.textContent = "101" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 400 &&
    finishPressure.value < 406
  ) {
    results.textContent = "67" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 393 &&
    finishPressure.value < 399
  ) {
    results.textContent = "50" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 386 &&
    finishPressure.value < 393
  ) {
    results.textContent = "40" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 379 &&
    finishPressure.value < 386
  ) {
    results.textContent = "34" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 372 &&
    finishPressure.value < 379
  ) {
    results.textContent = "29" + " " + statment;
  } else if (
    startPressure.value >= 421 &&
    finishPressure.value > 364 &&
    finishPressure.value < 372
  ) {
    results.textContent = "32" + " " + statment;
  }
  // -------------- start pressure 414 ------------------ //
  else if (
    startPressure.value >= 414 &&
    startPressure.value < 421 &&
    finishPressure.value > 413
  ) {
    results.textContent = "191+" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 421 &&
    finishPressure.value >= 407 &&
    finishPressure.value < 414
  ) {
    results.textContent = "191" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 421 &&
    finishPressure.value >= 400 &&
    finishPressure.value < 407
  ) {
    results.textContent = "96" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 421 &&
    finishPressure.value >= 393 &&
    finishPressure.value < 400
  ) {
    results.textContent = "64" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 421 &&
    finishPressure.value >= 386 &&
    finishPressure.value < 393
  ) {
    results.textContent = "48" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 421 &&
    finishPressure.value >= 379 &&
    finishPressure.value < 386
  ) {
    results.textContent = "38" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 420 &&
    finishPressure.value >= 372 &&
    finishPressure.value < 379
  ) {
    results.textContent = "32" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 414 &&
    startPressure.value < 420 &&
    finishPressure.value >= 365 &&
    finishPressure.value < 372
  ) {
    results.textContent = "27" + " " + statment;
    console.log(results);
  }
  // ------------------- start pressure 407---------------- //
  else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 407
  ) {
    results.textContent = "181+" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 400 &&
    finishPressure.value < 407
  ) {
    results.textContent = "181" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 393 &&
    finishPressure.value < 400
  ) {
    results.textContent = "91" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 386 &&
    finishPressure.value < 393
  ) {
    results.textContent = "60" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 379 &&
    finishPressure.value < 386
  ) {
    results.textContent = "45" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 372 &&
    finishPressure.value < 379
  ) {
    results.textContent = "36" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 407 &&
    startPressure.value < 414 &&
    finishPressure.value >= 365 &&
    finishPressure.value < 372
  ) {
    results.textContent = "30" + " " + statment;
    console.log(results);
  }
  // ------------------ start pressure 393 ----------------- //
  else if (
    startPressure.value >= 393 &&
    startPressure.value < 407 &&
    finishPressure.value >= 393
  ) {
    results.textContent = "161+" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 393 &&
    startPressure.value < 407 &&
    finishPressure.value >= 386 &&
    finishPressure.value < 393
  ) {
    results.textContent = "161" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 393 &&
    startPressure.value < 407 &&
    finishPressure.value >= 379 &&
    finishPressure.value < 386
  ) {
    results.textContent = "81" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 393 &&
    startPressure.value < 407 &&
    finishPressure.value >= 372 &&
    finishPressure.value < 379
  ) {
    results.textContent = "54" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 393 &&
    startPressure.value < 407 &&
    finishPressure.value >= 365 &&
    finishPressure.value < 372
  ) {
    results.textContent = "40" + " " + statment;
    console.log(results);
  }
  // ---------------- start pressure 386 --------------- //
  else if (
    startPressure.value >= 386 &&
    startPressure.value < 393 &&
    finishPressure.value >= 386
  ) {
    results.textContent = "151+" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 386 &&
    startPressure.value < 393 &&
    finishPressure.value >= 379 &&
    finishPressure.value < 386
  ) {
    results.textContent = "151" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 386 &&
    startPressure.value < 393 &&
    finishPressure.value >= 372 &&
    finishPressure.value < 379
  ) {
    results.textContent = "76" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 386 &&
    startPressure.value < 393 &&
    finishPressure.value >= 365 &&
    finishPressure.value < 372
  ) {
    results.textContent = "50" + " " + statment;
    console.log(results);
  }
  //  ------------------- start pressure 379 -------------------- //
  else if (
    startPressure.value >= 379 &&
    startPressure.value < 386 &&
    finishPressure.value >= 379
  ) {
    results.textContent = "141+" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 379 &&
    startPressure.value < 386 &&
    finishPressure.value >= 372 &&
    finishPressure.value < 379
  ) {
    results.textContent = "141" + " " + statment;
    console.log(results);
  } else if (
    startPressure.value >= 379 &&
    startPressure.value < 386 &&
    finishPressure.value >= 365 &&
    finishPressure.value < 372
  ) {
    results.textContent = "71" + " " + statment;
    console.log(results);
  }
});
