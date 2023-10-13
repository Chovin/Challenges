Julius Caesar liked your Caesar Cipher function (if you haven't done it, this is him from the future. trust). He wants you to make a version so that he can talk to his chefs in code when he asks for custom Caesar salads. The one you made before is too confusing for the chefs though, so instead of shifting each character by 13, shift each Caesar salad ingredient by the day of the week it is.

In other words, write a function `saladCipher` that takes a list of Caesar salad ingredients as well as the day of the week (0-6 inclusive) and that returns the list of ingredients where each item is the shifted item based on the recipe for a Caesar salad.

The recipe is as follows:

1. Romaine
2. Parmesan
3. Croutons
4. Garlic
5. Dijon
6. Worcestershire
7. Lemon
8. Vinegar
9. Salt
10. Pepper

For example `saladCipher(['Salt', 'Lemon', 'Garlic'], 4)` should return `['Croutons', 'Romaine', 'Vinegar']`