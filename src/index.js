import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
    const game = new Game(root)
    game.runGame()

})
