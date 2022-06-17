function ticTacToeChecker(board) {
    
    //Navigate the board horizontally
    const isHorizontalWinner = (symbol, board) => {
        return board.some((moves) => moves.every((move) => move === symbol));
    }
   // Next, let's check if the player has won Vertically (Columns)
    const transposeBoard = (board) => {
        return board.map((_,index) => board.map((row) => row[index]));
    }
    const isVerticalWinner = (symbol, board) => {
        return transposeBoard(board).some((moves) => moves.every((move) => move === symbol));
    }
    // Get diagonal moves from the board  This will be used to check if a particular user has won //diagonally
    const getDiagonalMoves = (board) => {

        const diagonalMoves = [];
        const equalBasedDiagonal = []; // i === j
        const sumBasedDiagonal = [] // i + j == n -1 
        
        // Check for left to right diagonal moves
        for(let row = 0; row < board.length; row++){
          for (col = 0; col < board.length; col++) {
            if (row === col) {
              equalBasedDiagonal.push(board[row][col]);
            }
          }
        }
    
        // Check for right to left diagonal moves
        for(let row = 0; row < board.length; row++){
          for (col = 0; col < board.length; col++) {
            if (row + col === board.length -1 ) {
              sumBasedDiagonal.push(board[row][col]);
            }
          }
        }
  
        diagonalMoves.push(equalBasedDiagonal,sumBasedDiagonal);
        return diagonalMoves;
    }

    // Use the diagonal moves to check if the user is a winner
    const isDiagonalWinner = (symbol,board) => {
        return getDiagonalMoves(board).some((moves) => moves.every((move) => move === symbol));
    }

    // Check the winner
    const isWinner = (symbol,board) => {
    isHorizontalWinner(symbol,board) || isVerticalWinner(symbol,board) || isDiagonalWinner(symbol,board)
    }

    // Check if all the moves have been filled 
    const isGameOver = (board) => {board.every((row) => row.every((move) => !!move))}

    // the main function to check for game winner 
    // row & col indicates user moves (position)

~   const play = function([row, col], symbol) {

        if (isGameOver(board)) {
            console.log('Game over');
            return;
        }

        if (board[row][col]) {
            console.log(`Choose another position.`);
            return;
        }
        else {
            board[row][col] = player;
        }

        if (isWinner(player, board)) {
            console.log(`Player with ${symbol} WON!`);
        }
        else {
            console.log('Go on');
        }
    };

        while(!isGameOver(board)) {
            play([row,col],symbol);
        }
}

console.log(ticTacToeChecker([[0, 0, 1],[0, 1, 2],[2, 1, 0]]));
console.log(ticTacToeChecker([[1, 2, 0],[0, 1, 2],[1, 1, 1]]));
