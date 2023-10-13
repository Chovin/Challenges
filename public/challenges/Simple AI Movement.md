Your first task at BumpFrog, the games studio you just started at, is to help write an enemy AI for a turn-based tile-based game they're making. This AI is simple. On its turn, it should always move towards the player.

Write the function `move` that takes the following arguments and returns the point (array of x and y tile coordinates) at which the emeny will move to by the end if its turn.

1. the point (array of x and y tile coordinates) that the enemy is at currently
2. the point (array of x and y tile coordinates) that the player is at currently
3. the maximum distance that the enemy can move per turn

*note: if the player is within the maximum distance that the enemy can move to, the enemy should move up to and touching the player (both cardinal and diagonal to the player is considered touching)

*hint: you might need to google parts of this, but what would you google?