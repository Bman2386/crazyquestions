import React from 'react';

const Game = (props) => {

    const joinGame = () => {
        //creates a new game instance
    }

    const createGameLoby = () => {
        //creates a lobby for players to join games
    }

    const viewAvailableLobby = () => {
        // displays available lobbies
    }
    return (
        <>
        <div>Game</div>
        <p>Welcome</p>
        <p>Description of how the game works</p>
        <button onCLick={viewAvailableLobby}>View Available Games</button>
        <button onClick={joinGame}>New Game</button>
        <button onClick={createGameLoby}>Create Game Lobby</button>
        </>
        
    )
}

export default Game