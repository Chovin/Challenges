It's Christmas, which means gift exchange time! In preparation, your friends want you to write a program to determine who gets whose present. At the gift exchange, everyone will be given a random number, then they will sit in a circle and give their present the the person sitting to the left (or right) of them by a certain amount of spaces.

Write a function `giftExchange` which takes two arguments:

1. `nums`: a list of numbers that represents the random numbers your friends receive
2. `amount` an integer representing how many spaces each present should move. Negative integers move presents to the left while positive integers move them to the right

The function should return the list of numbers shifted `amount` times in the corresponding direction.

For example, `giftExchange([0,2,1,3,4], -1)` should return `[2,1,3,4,0]`