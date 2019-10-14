upButton = document.getElementById("up");
downButton = document.getElementById("down");
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");
box = document.getElementById("box");

inputBox = document.getElementById("input-box");
inputValue = document.getElementById("input-value");

var move_size = 10;

var show_input = false;

function moveUp(size = move_size) {
  box.style.top = move(box.style.top, -size);
}

function moveDown(size = move_size) {
  box.style.top = move(box.style.top, size);
}

function moveLeft(size = move_size) {
  box.style.left = move(box.style.left, -size);
}

function moveRight(size = move_size) {
  box.style.left = move(box.style.left, size);
}

document.addEventListener("keydown", e => {
  if (!show_input) {
    switch (e.key) {
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      default:
        console.log(e.key);
        break;
    }
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case " ":
      toggleInput();
      break;
  }
});

function toggleInput() {
  show_input = !show_input;
  if (show_input) {
    inputBox.style.display = "flex";
    inputValue.focus();
    inputValue.value = "";
  } else {
    inputBox.style.display = "none";
  }
  console.log(move_size);
}

inputValue.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    move_size = parseInt(inputValue.value.trim());
    // console.log("HERE");
    toggleInput();
  }
});

function move(str, amount) {
  original = parseInt(str.slice(0, -2), 10);
  // console.log(isNaN(original))
  newValue = !isNaN(original) ? original + amount : amount;
  // console.log(newValue)
  return `${newValue}px`;
}

upButton.addEventListener("click", () => {
  moveUp();
});

downButton.addEventListener("click", () => {
  moveDown();
});

leftButton.addEventListener("click", () => {
  moveLeft();
});

rightButton.addEventListener("click", () => {
  moveRight();
});
