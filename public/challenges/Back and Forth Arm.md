You're programming an assembly line robotic arm. It's placed above a conveyer belt and centers packages on that conveyer belt. You are to make this arm more efficient by telling it where to center itself based on where the most recent line of packages come down the belt. The thing that makes this more difficult is that the sensor on the robotic arm only returns the distance the arm is away from each package, as in regardless of if the package is to the left or right of the arm, the number will always be positive. Luckily packages always come down the belt alternating on the left and then on the right of the robotic arm.

Write a function `centerArm` which takes an array of package distances and returns where the arm should move horizontally to after each package such that the arm only needs to move the least distance to process the line of packages.

For example `centerArm([1,1,2,2])` should return `0` because the arm is already centered along the line of packages.

*note: the first package is always to the left of the arm and returning -1 would move the arm 1 unit to the left above the belt.



