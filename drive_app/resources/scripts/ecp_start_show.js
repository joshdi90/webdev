// ----------------------
const showElementBtn = document.querySelector(".show-pressure-test");
const element = document.querySelector(".ecp-start-container");

showElementBtn.addEventListener("click", () => {
  const elementData = element.getAttribute("data-hidden");
  if (elementData === "true") {
    element.setAttribute("data-hidden", false);
  } else if (elementData === "false") {
    element.setAttribute("data-hidden", true);
  }
  console.log(elementData);
});

// ECP start up steps ----------------------

let count = 2;
let countMax = 14;

const nextButton = document.querySelector(".next-step");
const prevButton = document.querySelector(".prev-step");

function nextStepEcp() {
  if (count > countMax) return;
  {
    document.querySelector(".step" + count + "").style.display = "block";
    count++;
  }
}
