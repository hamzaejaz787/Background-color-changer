const colorInput = document.querySelector(".color-input");
const colorButton = document.querySelector(".color-btn");
const genRandom = document.querySelector(".generate-random");

colorButton.addEventListener("click", (event) => {
  //Prevent form from submitting
  event.preventDefault();

  const newColor = document.createElement("div");
  newColor.innerHTML = colorInput.value;
  document.body.style.backgroundColor = newColor.innerHTML;
});

genRandom.addEventListener("click", (event) => {
  event.preventDefault();
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
  colorInput.value = `#${randomColor}`;
});
