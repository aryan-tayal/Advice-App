const adviceText = document.querySelector("#adviceText");
const adviceNumber = document.querySelector("#adviceNumber > span");
const button = document.querySelector("#dice");

const writeAdvice = async () => {
  try {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        adviceNumber.innerText = data.slip.id;
        adviceText.innerText = data.slip.advice;
      });
  } catch (e) {
    console.log("ERROR!", e);
  }
};
dice.addEventListener("click", writeAdvice);
window.addEventListener("load", writeAdvice);
