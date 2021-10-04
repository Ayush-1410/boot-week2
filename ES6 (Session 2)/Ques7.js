// Write a program to flatten a nested array to single level using arrow functions.

let nest_arr = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];

let flat_arr = nest_arr.reduce((prev, curr) => {
    return prev.concat(curr);
});

console.log(flat_arr);
