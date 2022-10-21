const start = document.getElementById("start");
const level = document.getElementsByName("level"); // [Easy, Normal, Hard]
const game = document.getElementById("game");
const gameArea = document.getElementById("game-area");


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
