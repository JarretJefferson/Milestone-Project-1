let character = document.getElementById("character");
let characterPos = character.getBoundingClientRect();
let x = characterPos.left;
let y = characterPos.top;
let didYouWinSon = false;
function move() {
  let direction = null;
  function moveCharacter() {
    if (!didYouWinSon) {
      if (direction === "west") {
        x -= 1;
      }
      if (direction === "north") {
        y -= 1;
      }
      if (direction === "east") {
        x += 1;
      }
      if (direction === "south") {
        y += 1;
      }
      character.style.left = x + "px";
      character.style.top = y + "px";
    }
  }

  setInterval(moveCharacter, 1);

  document.addEventListener("keydown", function (e) {
    if (e.repeat) return;

    if (e.key === "a") {
      direction = "west";
    }
    if (e.key === "w") {
      direction = "north";
    }
    if (e.key === "d") {
      direction = "east";
    }
    if (e.key === "s") {
      direction = "south";
    }
  });

  document.addEventListener("keyup", function (e) {
    direction = null;
  });
}

function main() {
  move();
  badBoxCollision();
  winBoxCollision();
}
main();

function badBoxCollision() {
  let badBlocks = document.getElementsByClassName("badBlock");
  for (let i = 0; i < badBlocks.length; i++) {
    setInterval(() => {
      let block = badBlocks[i];
      let blockPos = block.getBoundingClientRect();
      let blockRight = blockPos.right;
      let blockLeft = blockPos.left;
      let blockTop = blockPos.top;
      let blockBottom = blockPos.bottom;
      let characterPos = character.getBoundingClientRect();
      if (
        characterPos.right > blockLeft &&
        characterPos.left < blockRight &&
        characterPos.bottom > blockTop &&
        characterPos.top < blockBottom
      ) {
        character.style.top = 0;
        character.style.left = 0;
        x = 0;
        y = 0;
        console.log("im touhcing");
        alert("YOU LOSE");
      }
      console.log(characterPos.left, blockRight);
    }, 10);
  }
}

function winBoxCollision() {
  let winBlocks = document.getElementsByClassName("winBlock");
  for (let i = 0; i < winBlocks.length; i++) {
    setInterval(() => {
      if (!didYouWinSon) {
        let block = winBlocks[i];
        let blockPos = block.getBoundingClientRect();
        let blockRight = blockPos.right;
        let blockLeft = blockPos.left;
        let blockTop = blockPos.top;
        let blockBottom = blockPos.bottom;
        let characterPos = character.getBoundingClientRect();
        if (
          characterPos.right > blockLeft &&
          characterPos.left < blockRight &&
          characterPos.bottom > blockTop &&
          characterPos.top < blockBottom
        ) {
          didYouWinSon = true;
          alert("YOU WIN!");
        }
        console.log(characterPos.left, blockRight);
      }
    }, 10);
  }
}
