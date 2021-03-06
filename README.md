## Matt's Instance of 8 

### Rules
The goal of game is to rearrange the tiles so they are in order from 1 to 8. This game is made for two people, and keeps track of each player's score and determines a winner after both players have gone.

If a player gets stuck during their turn, they have the option to re-randomize the board to help them get unstuck (the timer does NOT restart).

You can play the game [here](https://mattwestenhaver.github.io/).

---
### Player Names

When the game loads, the page will prompt both players what their names are.

![Player Name](http://i.imgur.com/suTCCJz.png)

---
### Playing the Game

When the `player 1 start!` or `player 2 start!` button is clicked, the board is randomized and the timer will begin counting.

![Instance of 8 with timer](http://i.imgur.com/s5oytQQ.png)

---
### Finishing the Puzzle

When a player finishes the puzzle, an alert will pop up telling them they have finished and will show them their final time.

![Completion alert](http://i.imgur.com/fJhk4Xf.png)

---
### Which Player Won?

When both players have finished completing the puzzle, the page will display which player won, and will show both players times. The page will display the winning time first and the losing time second.

![Winner display](http://i.imgur.com/3n9zVnE.png)

---
### Bug Fixes & Future Add-Ons

1. When the `player 2 start` button is clicked, one of the randomized tiles loses its background color and border until it is moved.
2. Some of the randomized combinations are actually unsolvable, so I would like to implement a function that checks for these unsolvable combinations and continues to randomize the board until a solvable combination is displayed.
