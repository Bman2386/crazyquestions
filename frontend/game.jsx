import React from "react"


export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            players: ['p1','p2','p3'],
            play: false,
            total: 0
        }
        
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
    render(){
            return(
                <div>
                    Number of Players 
                    <input value={this.total}/>
                </div>
            )
        }
}