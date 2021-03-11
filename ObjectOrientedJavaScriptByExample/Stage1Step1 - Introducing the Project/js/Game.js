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
        const players = [new Player('Player 1', 1, '#e15258', true),
        new Player('Player 1', 2, '#e59a13')];
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


    /**
    * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
    */
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                this.activePlayer.activeToken.moveRight(this.board.columns)
            } else if (e.key === "ArrowDown") {
                this.playToken();
            }
        }

    }

    playToken() {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for (let space of targetColumn) {
            // if at the end of the loop, the targetSpace is null, then the column is full of spaces, 
            if (space.token === null) {
                targetSpace = space;
            }
        }
        // if not null, we found a space. drop the token 
        if (targetSpace !== null) {
            game.ready = false;
            activeToken.drop(targetSpace);
        }
        // for (let i = 0; i < this.board.spaces.length; i++) {
        //     if (this.board.spaces === null){
        //         return "empty"
        //     } else {
        //         return "full"
        //     }

        // }
    }


}