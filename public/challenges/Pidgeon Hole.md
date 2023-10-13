You work for ArmTech, a company that produces industrial robotic arms. Your company is trying to move into the pet store market by making an arm that puts various animals into cages. You are tasked with programming this arm.

Write a function `pidgeonHole` that takes two arguments:

1. an array of `cages` that may or may not be filled with pets
2. an array of `pets` that you need to fit into the holes in the `cages` array

The function should return the array of cages after having filled it with pets. If there are still pets left over after the cages are filled, ignore those extra pets.

For example `pidgeonHole(['Spike', null, 'Reginald', null, 'Matilda'], ['Socks', 'Bacon', 'Willis'])` should return `['Spike', 'Socks', 'Reginald', 'Bacon', 'Matilda']`