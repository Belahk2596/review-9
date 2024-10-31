const inputElement = document.querySelector("#color");
const previewButton = document.querySelector("button");
const previewContainer = document.querySelector(".preview-box");
const randomButton = document.querySelector(".random");

previewButton.addEventListener("click", function () {
  let userTypedcolor = inputElement.value;
  previewContainer.style.backgroundColor = userTypedcolor;
  previewContainer.innerText = userTypedcolor;
  inputElement.value = "";
  if (userTypedcolor === "") {
    alert("You didn't enter a color name dude.");
    return;
  }
});

const randomColors = [
  "#FFB17A",
  "#0A1128",
  "#BEE7B8",
  "#713E5A",
  "#0B4F6C",
  "#20BF55",
];

randomButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  previewContainer.style.backgroundColor = randomColors[randomIndex];
  previewContainer.innerText = randomColors[randomIndex];
});
