// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  let floors = nFloors * 2 - 1;
  let result = [];
  for (let i = floors; i >= 1; i -= 2)
    if (i == floors) result.push("*".repeat(i));
    else
      result.push(
        " ".repeat((floors - i) / 2) +
          "*".repeat(i) +
          " ".repeat((floors - i) / 2)
      );
  return result.reverse();
}

console.log(towerBuilder(6));

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}
