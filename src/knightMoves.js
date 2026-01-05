/**
 * Calculates the shortest path for a knight to move from start to end position
 * @param {Array} start - Starting position [x, y]
 * @param {Array} end - Ending position [x, y]
 * @returns {Array} Array of positions representing the shortest path
 */
function knightMoves(start, end) {
  // All possible knight moves (L-shaped: 2 squares in one direction, 1 in perpendicular)
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Check if position is valid on 8x8 board
  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

  // If already at destination
  if (start[0] === end[0] && start[1] === end[1]) {
    return [start];
  }

  // BFS setup
  const queue = [[start]]; // Queue of paths
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    // Try all possible knight moves
    for (const [dx, dy] of moves) {
      const next = [current[0] + dx, current[1] + dy];

      // Check if we reached the destination
      if (next[0] === end[0] && next[1] === end[1]) {
        return [...path, next];
      }

      // Check if valid and unvisited
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([...path, next]);
      }
    }
  }

  return []; // No path found (shouldn't happen on valid board)
}

/**
 * Pretty prints the knight moves result
 * @param {Array} start - Starting position
 * @param {Array} end - Ending position
 */
function printKnightMoves(start, end) {
  const path = knightMoves(start, end);
  console.log(`\n> knightMoves([${start}],[${end}])`);
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((pos) => console.log(`  [${pos}]`));
}

module.exports = { knightMoves, printKnightMoves };
