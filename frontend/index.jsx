import Game from './game.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './root'

document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");
    const game = new Game()
    game.runGame()

    ReactDOM.render(<game/>, root)  
})
