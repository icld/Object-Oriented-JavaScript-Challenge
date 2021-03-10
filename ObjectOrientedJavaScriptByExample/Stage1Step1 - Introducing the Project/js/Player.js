class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * creates token objects for player
     * @param {integer} num - Number of token objects to be created
     */

    createTokens(num) {
        const tokens = [];

        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token)
        }
    }

    // get unusedTokens() {
    //     const undroppedTokens = [];
    //     for (let i of this.tokens) {
    //         if (this.dropped = false) {
    //             let token = (i, this)
    //             undroppedTokens.push(token)
    //         }
    //     }
    //     return undroppedTokens
    // }


    // filter method returns an array 
    get unusedTokens() {
        // returns any token who's dropped property does not = true 
        return this.tokens.filter(token => !token.dropped)
    }


    get activeToken() {
        return this.unusedTokens[0];
    }

}

