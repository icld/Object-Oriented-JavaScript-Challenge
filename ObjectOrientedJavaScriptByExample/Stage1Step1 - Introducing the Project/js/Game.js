class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false
    }

    // get activePlayer() {
    //     let player = []
    //     for (let i of this.players) {
    //         if (this.active === true) {
    //             player.push(this.player)
    //         }
    //     }
    //     return player
    // }

    // the find method returns the first match
    get activePlayer() {
        return this.players.find(player => player.active);
    }


    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true), new Player('Player 1', 2, '#e59a13')];
        return players;
    }

    /* 
    *Gets game read for play
    */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }
}