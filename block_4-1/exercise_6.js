let input = "PAWN";
let chessPiece = input.toLowerCase();

switch (chessPiece) {
    case "pawn":
        console.log("Generally the pawn moves forward only, one square at a time. An exception is the first time a pawn is moved, it may move forward two squares.");
    break;

    case "bishop":
        console.log("The Bishop moves in a straight line diagonally on the board. It can move as many squares as wanted, until it meets the end of the board or another piece.");
    break;
    
    case "rook":
        console.log("The rook moves in a straight line either horizontally or vertically through any number of unoccupied squares, until it reaches the end of board or it is blocked by another piece.");
    break;

    case "knight":
        console.log("The knight is the only piece on the board that may jump over other pieces. The knight moves two squares horizontally or vertically and then one more square at a right-angle. The knight’s move is shaped as an “L”.");
    break;

    case "queen":
        console.log("The Queen is considered the most powerful piece on the board. It can move any number of squares in a straight line - either vertically, horizontally or diagonally.");        
    break;

    case "king":
        console.log("The king can move to any adjacent square. That is, it can move one square in any direction: horizontally, vertically, or diagonally.");
    break;

    default:
        console.log("ERROR");
    break;
}
