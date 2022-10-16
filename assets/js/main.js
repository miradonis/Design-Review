console.log("Test");

function bgColorBlack() {
  const changeBgColor = document.getElementById("changeBgColor");
  changeBgColor.classList.add("bg__black");
}

function bgColorWhite() {
  const changeBgColor = document.getElementById("changeBgColor");
  changeBgColor.classList.remove("bg__black");
}
