let count = 2;
let countMax = 14;

const nextButton = document.querySelector(".next-step");
const prevButton = document.querySelector(".prev-step");

function nextStep() {
  if (count > countMax) return;
  {
    document.querySelector(".step" + count + "").style.display = "block";
    count++;
  }
}

// reset
