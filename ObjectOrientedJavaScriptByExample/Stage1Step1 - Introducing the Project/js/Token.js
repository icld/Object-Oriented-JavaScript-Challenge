class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    get htmlToken() {
        return document.getElementById(this.id)
    }

    drawHTMLToken() {
        const token = document.createElement('div');
        // appends div to existing element
        document.getElementById('game-board-underlay').appendChild(token);
        // set class and id attributes and style
        token.setAttribute('id', this.id)
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color
    }

}
