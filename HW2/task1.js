
function findChair(arr, numberOfChairsNeeded) {

    let foundChairs = [];
    let chairSum = 0;

    if (numberOfChairsNeeded == 0) {
        return `Game On`;
    }
    
    for (let room = 0; room < arr.length; room++) {
        const rooms = arr[room];
        let freeChairs = rooms[1] - rooms[0].length;

        if (freeChairs < 0) {
            freeChairs = 0;
        }

        foundChairs.push(freeChairs);
        chairSum = foundChairs.reduce((total, num) => total + num);
        
        if (numberOfChairsNeeded == chairSum) {
            return foundChairs;
        }
    }
    
    if (numberOfChairsNeeded > chairSum) {
        return `Not enough!`;
    }
    
}

// meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]
// meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'
// meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'

console.log(findChair([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(findChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(findChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
console.log(findChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));