const start = document.getElementById("start");
const level = document.getElementsByName("level"); // [Easy, Normal, Hard]
const game = document.getElementById("game");
const gameArea = document.getElementById("game-area");
const bombs = [];
const points = document.getElementsByClassName("point");
const bombIcon = "<img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Bomb_icon.svg' class='bomb'></img>"
const overlays = document.getElementsByClassName("overlay");


selectLevel();


function selectLevel() {

  for (let i = 0; i < level.length; i++) {

    ((index) => {

      level[index].addEventListener("click", () => {

        start.classList.add("d-none");

        let boxesNumber;

        switch (index) {

          case index = 0: // Easy
            boxesNumber = 100;
            break;

          case index = 1: // Normal
            boxesNumber = 80;
            break;

          case index = 2: // Hard
            boxesNumber = 50;
            break;

        }

        startGame(boxesNumber);

      });

    })(i)

  }

}

function startGame(boxesNumber) {

  createMinesweeper(boxesNumber);

  while (bombs.length < 16) {

    let number = randomNumber(1, boxesNumber);

    if (doubleNumber(number, bombs) == false) {
      bombs.push(number);
    }

  }

  for (let i = 0; i < points.length; i++) {
    points[i] = parseInt(points[i].innerHTML = 1);
  }

  for (let j = 0; j < points.length; j++) {

    let boxNumbers = j + 1;

    if (doubleNumber(boxNumbers, bombs)) {
      points[j].innerHTML = bombIcon;
    }

  }

  let counter = 0;

  let score = document.getElementById("score");

  score.innerHTML = "Score: ";

  for (let i = 0; i < overlays.length; i++) {

    ((index) => {

      overlays[index].addEventListener("click", () => {

        overlays[index].style.opacity = "0";

        overlays[index].style.pointerEvents = "none";

        let clicked = index + 1;

        if (doubleNumber(clicked, bombs)) {

          alert("Game Over");
          // alert(`Score ${counter}/${max - 16}`);

          let box = document.getElementById("game-grid");

          box.style.pointerEvents = "none";

          Array.from(overlays).forEach((element) => {
            element.classList.add("opacity");
          })

        } else {
          counter++;
        }

        // score.innerHTML = `Score: ${counter}`;
        score.innerHTML = `Score: ${counter}/${boxesNumber - 16}`;

      })

    })(i);

  }

}

function createMinesweeper(boxesNumber) {

  game.classList.remove("d-none");

  gameArea.innerHTML = "<h2 id='score' class='mb-5'></h2>";

  gameArea.innerHTML += "<div id='game-grid' class='row'></div>";

  let boxes = "";

  for (let i = 0; i < boxesNumber; i++) {
    boxes += "<div class='box'>" + "<div class='overlay'></div>" + "<div class='point'></div>" + "</div>";
  }

  let gameGrid = document.getElementById('game-grid');

  gameGrid.innerHTML += boxes;

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function doubleNumber(element, array) {

  let found = false;

  for (i = 0; i < array.length; i++) {

    if (element == array[i]) {
      found = true;
      return found;
    }

  }

  return found;
}
