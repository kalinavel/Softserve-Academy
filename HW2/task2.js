function ticTacToeChecker(board) {

    // get the horizontals
    let horizontal1 = board[0];
    let horizontal2 = board[1];
    let horizontal3 = board[2];
    
    // get the verticals
    let vertical1 = [];
    vertical1.push(horizontal1[0], horizontal2[0], horizontal3[0]);
    let vertical2 = [];
    vertical2.push(horizontal1[1], horizontal2[1], horizontal3[1]);
    let vertical3 = [];
    vertical3.push(horizontal1[2], horizontal2[2], horizontal3[2]);
    const verticals = [];
    verticals.push(vertical1, vertical2, vertical3);

    // get the diagonals
    let diagonal1 = [];
    diagonal1.push(horizontal1[0],horizontal2[1], horizontal3[2]);
    let diagonal2 = [];
    diagonal2.push(horizontal1[2],horizontal2[1], horizontal3[0]);

    // check if there is a win within the horizontals
    let checkHorizontals = (() => {
        for (let i = 0; i < board.length; i++) {
            const horizontal = board[i];

            const checkWinnerHorizontal = horizontal.every(element => {
                if (element === horizontal[0]) {
                    return true;
                }
            });
            if (checkWinnerHorizontal && (horizontal[0] !== 0)) {
                return horizontal[0];
            }
        }
    })();
    
    // check if there is a win within the verticals
    let checkVerticals = (() => {
        for (let index = 0; index < verticals.length; index++) {
            const vertical = verticals[index];
            
            const checkWinnerVertical = vertical.every(element => {
                if (element === vertical[0]) {
                    return true;
                }
            });
            if (checkWinnerVertical && (vertical[0] !== 0)) {
                return vertical[0];
            }
        }
    })();

    // check if there is a win within the diagonals
    let checkDiagonal1 = (() => {

        const checkWinnerDiagonal1 = diagonal1.every(element => {
            if (element === diagonal1[0]) {
                return true;
            }
        });
        if (checkWinnerDiagonal1 && (diagonal1[0] !== 0)) {
            return diagonal1[0];
        }
    })();

    let checkDiagonal2 = (() => {

        const checkWinnerDiagonal2 = diagonal2.every(element => {
            if (element === diagonal2[0]) {
                return true;
            }
        });
        if (checkWinnerDiagonal2 && (diagonal2[0] !== 0)) {
            return diagonal2[0];
        }
    })();

    // show the result of the game (winner or game not finished)
    if (checkHorizontals || checkVerticals || checkDiagonal1 || checkDiagonal2) {
        return checkHorizontals || checkVerticals || checkDiagonal1 || checkDiagonal2;
    }
    else {
        return -1;
    }
}

console.log(ticTacToeChecker([[0, 0, 1],[0, 1, 2],[2, 1, 0]]));
console.log(ticTacToeChecker([[1, 2, 0],[0, 1, 2],[2, 2, 2]]));
console.log(ticTacToeChecker([[2, 1, 1],[0, 1, 2],[0, 1, 2]]));
console.log(ticTacToeChecker([[1, 2, 0],[1, 0, 1],[2, 2, 0]]));
console.log(ticTacToeChecker([[1, 0, 2],[0, 1, 2],[0, 2, 1]]));

