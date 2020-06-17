
function startNewGame() {
    drawBoard(null); //TODO set up actual board state
}


/**
 *  Renders the entire chess board based on state
 */
function drawBoard(boardState) {

    var canvas = document.getElementById("myCanvas");
    var canvasContext = canvas.getContext("2d");

    drawBackground(canvasContext);
    drawPieces(canvasContext, boardState);
}

/**
 * Draw the checkered chess background! 
 */
function drawBackground(canvasContext) {

    // The width and height of a chess tile are captured here. 
    let width = 50;
    let height = 50;

    let isWhiteTile = false;

    // Chess boards are 64 tiles squared. 
    for (let i = 0; i < 64; i++) {

        // white black white black 2 4 5 7 10 12 13 15
        // black white black white
        // white black white black
        // black white black white
        if (i % 8 != 0) {
            isWhiteTile = !isWhiteTile;
            console.log("Alternating value at position " + i);
        }

        if (isWhiteTile) {
            continue;
        }

        // Set the rendering position. 
        let xPosition = (i % 8) * width;
        let yPosition = Math.floor(i / 8) * height; 

        canvasContext.fillRect(xPosition, yPosition, width, height);
    }
}

/**
 * Draw all the chess pieces on the board, including highlights
 */
function drawPieces(canvasContext, boardState) {
    //TODO draw pieces

    //TODO draw highlighted (selected) piece
}