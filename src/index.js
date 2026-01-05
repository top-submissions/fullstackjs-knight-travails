const { printKnightMoves } = require('./knightMoves');

console.log('='.repeat(50));
console.log("KNIGHT'S TRAVAILS - Shortest Path Finder");
console.log('='.repeat(50));

// Example from the lesson
printKnightMoves([3, 3], [4, 3]);

// Simple move
printKnightMoves([0, 0], [1, 2]);

// Multiple shortest paths possible
printKnightMoves([0, 0], [3, 3]);

// Reverse path
printKnightMoves([3, 3], [0, 0]);

// Complex path across the board
printKnightMoves([0, 0], [7, 7]);

// Edge to edge
printKnightMoves([0, 0], [7, 0]);

// Same position
printKnightMoves([4, 4], [4, 4]);

console.log('\n' + '='.repeat(50));
