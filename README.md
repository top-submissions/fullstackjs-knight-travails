# Knight's Travails

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-Lesson-red)](https://www.theodinproject.com/lessons/javascript-knights-travails)

> A hands-on exploration of graph theory and pathfinding algorithms using the classic chess knight problem. This repository documents my learning journey through implementing Breadth-First Search to solve real-world graph traversal challenges as part of The Odin Project curriculum.

## 📋 Table of Contents

- [Knight's Travails](#knights-travails)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
  - [📚 What I Learned](#-what-i-learned)

## ✨ Features

- **Shortest Path Algorithm** - Implements BFS to guarantee the shortest possible path between any two squares on a chessboard
- **Smart Movement Validation** - Automatically validates knight moves and prevents illegal moves off the board
- **Multiple Path Support** - Handles cases where multiple shortest paths exist and returns one valid solution
- **Clean Visual Output** - Displays the complete path with move count in an easy-to-read format
- **Edge Case Handling** - Works correctly with same start/end positions and all board boundary scenarios

## 🚀 Getting Started

Want to run this project locally? Here's how:

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn package manager
- Basic understanding of JavaScript and command line

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/top-submissions/fullstackjs-knight-travails.git
   ```

2. Navigate to the project directory

   ```bash
   cd fullstackjs-knight-travails
   ```

3. Install dependencies (if any are added in the future)

   ```bash
   npm install
   ```

### Running the Project

1. Run the example demonstrations

   ```bash
   node src/index.js
   ```

2. Use in your own code

   ```javascript
   const { knightMoves, printKnightMoves } = require('./src/knightMoves');
   
   // Get the path array
   const path = knightMoves([0, 0], [7, 7]);
   
   // Pretty print the result
   printKnightMoves([3, 3], [4, 3]);
   ```

3. Try your own test cases by modifying `src/index.js`

## 📚 What I Learned

- **Graph Theory Fundamentals** - Understanding how to represent problems as graphs with nodes (board squares) and edges (valid moves)
- **BFS vs DFS** - Why Breadth-First Search guarantees shortest paths in unweighted graphs, while Depth-First Search could explore infinitely long paths first
- **Queue Data Structure** - Implementing FIFO (First-In-First-Out) processing for level-order graph traversal
- **Set for Optimization** - Using Sets for O(1) lookup time when tracking visited nodes instead of array searching
- **Coordinate Systems** - Working with 2D grid coordinates and validating movement boundaries
- **Algorithm Complexity** - Analyzing time and space complexity: O(n²) for an n×n board
- **Path Reconstruction** - Building the complete path by tracking each position as we explore
- **Implicit Graphs** - Solving graph problems without explicitly building graph data structures

---

<div align="center">

Built with 💡 and ☕ as part of my journey through <a href="https://www.theodinproject.com/">The Odin Project</a>

</div>
