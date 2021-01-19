const colorInput = document.querySelector(".color-input");
const colorButton = document.querySelector(".color-btn");

colorButton.addEventListener("click", (event) => {
  //Prevent form from submitting
  event.preventDefault();

  const newColor = document.createElement("div");
  newColor.innerHTML = colorInput.value;
  document.body.style.backgroundColor = newColor.innerHTML;
});
