var first = document.getElementById("first");
var intervalId;

function startBlinking() {
  intervalId = setInterval(changeColor, 50);
}

function stopBlinking() {
  clearInterval(intervalId);
}

function changeColor() {
  if (first.style.backgroundColor === "red") {
    first.style.backgroundColor = "white";
  } else {
    first.style.backgroundColor = "red";
  }
}