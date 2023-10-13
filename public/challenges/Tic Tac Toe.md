Thanks to the success of your Pokemon Go-inspired game, you just got hired at BumpFrog, a games studio. To get yourself ready for your first task, you decide to make the perfect AI for a game of Tic Tac Toe, one that never loses.

Write a function `move` that takes two arguments:

1. the current state of the board as an array of 9 spaces filled with `null`, `'X'`, or `'O'`
2. and the AI's piece (`'X'` or `'O'`)

The function should return the index at which the AI should place its piece.

For example:
```js
move(['X', null, 'O',
     null,  'X', null,
      'O', null, null], 'O')
```  

should return `8`

*note: only "defense" is tested for in this challenge
