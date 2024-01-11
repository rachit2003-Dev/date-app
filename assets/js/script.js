function moveButton() {
  var button = document.getElementById("runaway-btn");

  document.getElementById("image-none").style.display = "none";
  document.getElementById("image-display").style.display = "block";


  var buttonWidth = button.offsetWidth;
  var buttonHeight = button.offsetHeight;

  var top = getRandomNumber(window.innerHeight - buttonHeight);
  var left = getRandomNumber(window.innerWidth - buttonWidth);

  button.style.top = `${top}px`;
  button.style.left = `${left}px`;
}

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

function goTo() {
  document.location.href = 'index2.html';
}
