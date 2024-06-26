// DESCRIPTION:
// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
// If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum

function add(arr) {
  let newArr = [];
  let sum = 0;
  newArr.push(arr[0]);
  for (let i = 0; i < arr.length - 1; i++)
    newArr.push(arr[i + 1] + (sum += arr[i]));
  return newArr;
}

console.log(add([1, 2, 3, 4, 5])); //[1, 3, 6, 10, 15]
