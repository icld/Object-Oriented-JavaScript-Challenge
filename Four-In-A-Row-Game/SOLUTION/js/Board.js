class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        // an array of columns where each column is an array of space objects
        // we can also use this to access each column as a whole later when dropping tokens 
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            //empty array of columns
            const col = [];
            // iterate through the rows in columns and make new space objects 
            // pass the space constructor method on them
            // push new space on the column array
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                col.push(space);
            }
            // push the column back into the spaces array
            spaces.push(col)
        }
        return spaces;
    }

    // first for loop iterates through the columns.  the nested loop iterates through each space within that column 
    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}
