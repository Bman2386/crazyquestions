

export default class Game {
    constructor(){
        this.players = ['p1','p2','p3'];
        this.play = false;
    }
    runGame(){
        this.getPlayers()
        let asker
        if ((this.players.length > 2) && (this.play === true)){
            asker = this.players.shift()
        }

    }

    getPlayers(){
        
    }
}