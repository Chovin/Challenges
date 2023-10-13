You're making a survival crafting game and you're currently working on the food / hunger system. Your character gets hungrier while sleeping so it's important to know how much time is left until the character loses all their hunger bar. Hunger only goes up when the player eats, so you decide that every time they eat, you should calculate how much time is left.

Write a function `eat` that takes the current hunger percentage (0 means the hunger bar is empty as in the character cannot get any hungrier) and the name of the food the player is eating. The function should return the amount of seconds left after eating until the hunger bar is completely empty again. The hunger bar can't go above 100% and it takes 5 seconds for the hunger bar to reduce by 1%.

The list of foods and the amount they contribute to the hunger bar is as follows:

Apple: 5  
Bread: 10  
Cookie: 7  
Cake: 40  
Steak: 75  
Stew: 90

For example, `eat(50, "Cake")` should return `450`