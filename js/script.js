const MIN_TEMP = 10;
const MAX_TEMP = 40;

let elForm = document.querySelector(".jog__form");
let elInput = elForm.querySelector(".jog__input");
let elInputChekRain = elForm.querySelector(".jog__input-check-1");
let elInputChekHall = elForm.querySelector(".jog__input-check-2");

let result = document.querySelector(".jog__result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = Number(elInput.value);
  let inputChekRain = elInputChekRain.checked;
  let inputChekHall = elInputChekHall.checked;

  if (isNaN(inputValue)) {
    result.setAttribute("class", "alert alert-danger")
    result.textContent = "ILTIMOS FAQAT SON KIRITING!!!"
  }
  else if (inputChekRain && inputChekHall) {
    result.setAttribute("class", "alert alert-success");
    result.textContent = "Tabriklaymiz siz bugun yugurishga chiqolasiz, lekin faqat Zalga, chunki yomg`ir yo`yapti";
  }
  else if (inputChekRain) {
    result.setAttribute("class", "alert alert-warning");
    result.textContent = "Afsuski bugun yugurishga chiqolmaysiz, chunki yomg`ir yog`yapti";
  }
  else if (inputChekHall) {
    result.setAttribute("class", "alert alert-success");
    result.textContent = "Tabriklaymiz siz bugun yugurishga chiqolasiz, hohlasangiz Zalga tashrif buyuring";

    if (inputValue < MIN_TEMP || inputValue > MAX_TEMP) {
      result.setAttribute("class", "alert alert-warning");
      result.textContent = "Afsuski bugun yugurishga chiqolmaysiz, Zalga ham";
    }
  }
  else if (inputValue < MIN_TEMP || inputValue > MAX_TEMP) {
    result.setAttribute("class", "alert alert-warning");
    result.textContent = "Afsuski bugun yugurishga chiqolmaysiz";
  }
  else if (inputValue >= MIN_TEMP && inputValue <= MAX_TEMP) {
    result.setAttribute("class", "alert alert-success");
    result.textContent = "Tabriklaymiz siz bugun yugurishga chiqolasiz";
  }

})

elForm.addEventListener("reset", function (evt2) {
  evt2.preventDefault();

  result.removeAttribute("class", "alert alert-success");
  result.removeAttribute("class", "alert alert-warning");
  result.removeAttribute("class", "alert alert-danger");
  result.textContent = "";
  elInput.value = "";
})