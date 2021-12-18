
//Classes For Pieces
class Piece {
    constructor(colour, char) {
        this.colour = colour
        this.char = char
        this.hasMoved = false
    }
}

class Pawn extends Piece {
    constructor(colour) {
        if (colour == 0) {
            super(colour, "\u2657")
        } else {
            super(colour, "\u265D")
        }
        this.type = "Pawn"
        this.value = 100
    }

    check_position(board, position, future_position) {
        if (this.colour = 0) { //White
            if (((position[1] - 1) == (future_position[1])) && (position[0] == future_position[0])) {
                return(!board[future_position])
            }
            if (((position[1] - 1) == (future_position[1])) && ((Math.abs(position[0] - future_position[0]) == 1))) {
                if (board[future_position] == null) {
                    return(false)
                }
                return(!((board(future_position).colour) == (this.colour)))
            }
            if ((((position[1] - 2) == future_position[1])) && (position[0] == future_position[0])) {
                if (position[1] != 6) {
                    return(false)
                }
                return(!board[future_position] && !board[[position[0], position[1] - 1]])
            }
        }
        if (this.colour = 1) { //Black
            if (((position[1] + 1) == future_position[1]) && (position[0] == future_position[0])) {
                return(!board[future_position])
            }
            if (((position[1] + 1) == future_position[1]) && (position[0] == future_position[0])) {
                if (board[future_position] = null) {
                    return(false)
                }
                return(!((board(future_position).colour) == (this.colour)))
            }
            if (((position[1] + 2) == future_position[1]) && (position[0] == future_position[0])) {
                if (position[1] != 1) {
                    return(false)
                }
                return(!board[future_position] && !board[[position[0], position[1] + 1]])
            }
        return(true)
        }
    }

    calculate_moves(board, position) {
        legal_moves = []
        if (this.colour = 0) { //White
            if (this.check_position(board, position, [position[0], position[1] - 1])) {
                legal_moves.push([position[0], position[1] - 1])
            }
            if (this.check_position(board, position, [position[0], position[1] - 2])) {
                legal_moves.push([position[0], position[1] - 2])
            }
            if ((this.check_position(board, position, [position[0] + 1, position[1] - 1]))) {
                legal_moves.push([position[0] + 1, position[1] - 1])
            }
            if ((this.check_position(board, position, [position[0] - 1, position[1] - 1]))) {
                legal_moves.push([position[0] - 1, position[1] - 1])
            }
        } else if (this.colour = 1) { //Black
            if (this.check_position(board, position, [position[0], position[1] + 1])) {
                legal_moves.push([position[0], position[1] + 1])
            }
            if (this.check_position(board, position, [position[0], position[1] + 2])) {
                legal_moves.push([position[0], position[1] + 2])
            }
            if ((this.check_position(board, position, [position[0] + 1, position[1] + 1]))) {
                legal_moves.push([position[0] + 1, position[1] + 1])
            }
            if ((this.check_position(board, position, [position[0] - 1, position[1] + 1]))) {
                legal_moves.push([position[0] - 1, position[1] + 1])
            }
        }
        
        return(legal_moves)
    }

}

class Knight extends Piece {
    constructor(colour) {
        super()
        this.type = "Knight"
        this.value = 300
        this.colour = colour
        if (colour == 0) {
            this.char = "\u2658"
        } else {
            this.char = "\u265E"
        }
    }

    check_position(board, position, future_position) {
        if (((Math.abs(position[0] - future_position[0])) = 2) && ((Math.abs(position[1] - future_position[1]) = 1))) {
            if (board[future_position] = null) {
                return(true)
            }
            return(!((board[future_position].colour) = this.colour))
        }
        if (((Math.abs(position[0] - future_position[0])) = 1) && ((Math.abs(position[1] - future_position[1]) = 2))) {
            if (board[future_position] = null) {
                return(true)
            }
            return(!((board[future_position].colour) = this.colour))
        }
    }
    
    calculate_moves(board, position) {
        legal_moves = []
        if (this.check_position(board, position, [position[0] + 2, position[1] + 1])) {
            legal_moves.push([position[0] + 2, position[1] + 1])
        }
        if (this.check_position(board, position, [position[0] + 2, position[1] - 1])) {
            legal_moves.push([position[0] + 2, position[1] - 1])
        }
        if (this.check_position(board, position, [position[0] + 1, position[1] + 2])) {
            legal_moves.push([position[0] + 1, position[1] + 2])
        }
        if (this.check_position(board, position, [position[0] + 1, position[1] - 2])) {
            legal_moves.push([position[0] + 1, position[1] - 2])
        }
        if (this.check_position(board, position, [position[0] - 1, position[1] + 2])) {
            legal_moves.push([position[0] - 1, position[1] + 2])
        }
        if (this.check_position(board, position, [position[0] - 1, position[1] - 2])) {
            legal_moves.push([position[0] - 1, position[1] - 2])
        }
        if (this.check_position(board, position, [position[0] - 2, position[1] + 1])) {
            legal_moves.push([position[0] - 2, position[1] + 1])
        }
        if (this.check_position(board, position, (position[0] - 2, position[1] - 1))) {
            legal_moves.push([position[0] - 2, position[1] - 1])
        }
        
        return(legal_moves)
    }
}

class Rook extends Piece {
    constructor(colour) {
        super()
        this.type = "Rook"
        this.value = 500
        this.colour = colour
        if (colour == 0) {
            this.char = "\u2656"
        } else {
            this.char = "\u265C"
        }
    }

    calculate_moves(board, position) {
        legal_moves = []
        for (let i = position[0] + 1; i < 8; i++) {
            if (board[i, position[1]] = null) {
                legal_moves.push([i, position[1]])
            } else if ((board[i , position[1]]) && (board[i, position[1]].colour) != this.colour) {
                legal_moves.push([i, position[1]])
                break
            } else {
                break
            }
        }
        for (let i = position[0] - 1; i > -1; i--) {
            if (board[i, position[1]] = null) {
                legal_moves.push([i, position[1]])
            } else if ((board[i , position[1]]) && (board[i, position[1]].colour) != this.colour) {
                legal_moves.push([i, position[1]])
                break
            } else {
                break
            }
        }
        for (let i = position[1] + 1; i < 8; i++) {
            if (board[i, position[0]] = null) {
                legal_moves.push([i, position[0]])
            } else if ((board[i , position[0]]) && (board[i, position[0]].colour) != this.colour) {
                legal_moves.push([i, position[0]])
                break
            } else {
                break
            }
        }
        for (let i = position[0] - 1; i > -1; i--) {
            if (board[i, position[0]] = null) {
                legal_moves.push([i, position[0]])
            } else if ((board[i , position[0]]) && (board[i, position[0]].colour) != this.colour) {
                legal_moves.push([i, position[0]])
                break
            } else {
                break
            }
        } 
        return(legal_moves)
    }
}

class Bishop extends Piece {
    constructor(colour) {
        super()
        this.type = "Bishop"
        this.value = 330
        this.colour = colour
        if (colour == 0) {
            this.char = "\u2657"
        } else {
            this.char = "\u265D"
        }
    }

    calculate_moves(board, position) {
        legal_moves = []
        for (let i = 1; i < 8; i++) {
            if (board[position[0] + i, position[1] + i] = null) {
                legal_moves.push([position[0] + i, position[1] + i])
            } else if (board[position[0] + i, position[1] + i] && (board[position[0] + i, position[1] + i].colour != this.colour)) {
                legal_moves.push([position[0] + i, position[1] + i])
                break
            } else {
                break
            }
        }
        for (let i = 1; i < 8; i++) {
            if (board[position[0] + i, position[1] - i] = null) {
                legal_moves.push([position[0] + i, position[1] - i])
            } else if (board[position[0] + i, position[1] - i] && (board[position[0] + i, position[1] - i].colour != this.colour)) {
                legal_moves.push([position[0] + i, position[1] - i])
                break
            } else {
                break
            }
        }
        for (let i = 1; i < 8; i++) {
            if (board[position[0] - i, position[1] + i] = null) {
                legal_moves.push([position[0] - i, position[1] + i])
            } else if (board[position[0] - i, position[1] + i] && (board[position[0] - i, position[1] + i].colour != this.colour)) {
                legal_moves.push([position[0] - i, position[1] + i])
                break
            } else {
                break
            }
        }
        for (let i = 1; i < 8; i++) {
            if (board[position[0] - i, position[1] - i] = null) {
                legal_moves.push([position[0] - i, position[1] - i])
            } else if (board[position[0] - i, position[1] - i] && (board[position[0] - i, position[1] - i].colour != this.colour)) {
                legal_moves.push([position[0] - i, position[1] - i])
                break
            } else {
                break
            }
        }

        return(legal_moves)
    }
}

class Queen extends Piece {
    constructor(colour) {
        super()
        this.type = "Queen"
        this.value = 900
        this.colour = colour
        if (this.colour == 0) {
            this.char = "\u2655"
        } else {
            this.char = "\u265B"
        }
    }

    calculate_moves(board, position) {
        legal_moves = []
        for (let i = 1; i < 8; i++) {
            if (board[position[0] + i, position[1] + i] = null) {
                legal_moves.push([position[0] + i, position[1] + i])
            } else if (board[position[0] + i, position[1] + i] && (board[position[0] + i, position[1] + i].colour != this.colour)) {
                legal_moves.push([position[0] + i, position[1] + i])
                break
            } else {
                break
            }
        }
        for (let i = 1; i < 8; i++) {
            if (board[position[0] + i, position[1] - i] = null) {
                legal_moves.push([position[0] + i, position[1] - i])
            } else if (board[position[0] + i, position[1] - i] && (board[position[0] + i, position[1] - i].colour != this.colour)) {
                legal_moves.push([position[0] + i, position[1] - i])
                break
            } else {
                break
            }
        }
        for (let i = 1; i < 8; i++) {
            if (board[position[0] - i, position[1] + i] = null) {
                legal_moves.push([position[0] - i, position[1] + i])
            } else if (board[position[0] - i, position[1] + i] && (board[position[0] - i, position[1] + i].colour != this.colour)) {
                legal_moves.push([position[0] - i, position[1] + i])
                break
            } else {
                break
            }
        }
        for (let i = 1; i < 8; i++) {
            if (board[position[0] - i, position[1] - i] = null) {
                legal_moves.push([position[0] - i, position[1] - i])
            } else if (board[position[0] - i, position[1] - i] && (board[position[0] - i, position[1] - i].colour != this.colour)) {
                legal_moves.push([position[0] - i, position[1] - i])
                break
            } else {
                break
            }
        }
        for (let i = position[0] + 1; i < 8; i++) {
            if (board[i, position[1]] = null) {
                legal_moves.push([i, position[1]])
            } else if ((board[i , position[1]]) && (board[i, position[1]].colour) != this.colour) {
                legal_moves.push([i, position[1]])
                break
            } else {
                break
            }
        }
        for (let i = position[0] - 1; i > -1; i--) {
            if (board[i, position[1]] = null) {
                legal_moves.push([i, position[1]])
            } else if ((board[i , position[1]]) && (board[i, position[1]].colour) != this.colour) {
                legal_moves.push([i, position[1]])
                break
            } else {
                break
            }
        }
        for (let i = position[1] + 1; i < 8; i++) {
            if (board[i, position[0]] = null) {
                legal_moves.push([i, position[0]])
            } else if ((board[i , position[0]]) && (board[i, position[0]].colour) != this.colour) {
                legal_moves.push([i, position[0]])
                break
            } else {
                break
            }
        }
        for (let i = position[0] - 1; i > -1; i--) {
            if (board[i, position[0]] = null) {
                legal_moves.push([i, position[0]])
            } else if ((board[i , position[0]]) && (board[i, position[0]].colour) != this.colour) {
                legal_moves.push([i, position[0]])
                break
            } else {
                break
            }
        } 
        return(legal_moves)
    }
}

//Generate Board
var c = document.getElementById("chessBoard");
var ctx = c.getContext("2d");
for (let i = 1; i < 8; i++) {
    ctx.moveTo(80 * i, 0);
    ctx.lineTo(80 * i, 640);
    ctx.stroke();
}
for (let i = 1; i < 8; i++) {
    ctx.moveTo(0, 80 * i);
    ctx.lineTo(640, 80 * i);
    ctx.stroke();
}

//Functions
function updateBoard(boardPos) {
    ctx.font = "120px Arial"
    
    //ctx.fillText("\u2654`", 10, 10)
    
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if (board[[j,i]] != undefined) {
                ctx.fillText(board[[j,i]].char, ((i - 1) * 80), ((j) * 80))
            }
        }
    }
}



//Handle Game
//All game handling occurs here except for drawing the board

//Initilize Board Dict
board = {}
board[[1,1]] = new Rook(1)
board[[1,2]] = new Knight(1)
board[[1,3]] = new Bishop(1)
board[[1,4]] = new Queen(1)
//board[[1,5]] = new King(1)
board[[1,6]] = new Bishop(1)
board[[1,7]] = new Knight(1)
board[[1,8]] = new Rook(1)
for (let i = 1; i < 9; i++) {
    board[[2,i]] = new Pawn(1)
}
for (let i = 1; i < 9; i++) {
    board[[7,i]] = new Pawn(0)
}
board[[8,1]] = new Rook(0)
board[[8,2]] = new Knight(0)
board[[8,3]] = new Bishop(0)
board[[8,4]] = new Queen(0)
//board[[8,5]] = new King(0)
board[[8,6]] = new Bishop(0)
board[[8,7]] = new Knight(0)
board[[8,8]] = new Rook(0)

updateBoard(board)