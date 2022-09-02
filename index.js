function hasTargetSum(array, target) {
    // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
        const diff = target - array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === diff)
                return true;
        }
    }
    return false;
}


/*
Write the Big O time complexity of your function here
It uses Quadratic time since the for loop is nested hence = O(n^2)
*/

/*
  Add your pseudocode here

  Iterate the numbers array
  create variable to store the difference between the current number and target
  iterate over the array with other numbers
  Compare equality between value in difference variable and any of the numbers in array
  If equal then return true
  Else, return false


*/

/*
  Add written explanation of your solution here

  Iterate over the numbers array
  Have a variable that stores the difference between the current number and the target
  iterate over the array with i+1
  check if any of the numbers is equal to the difference between the current number and the target
  If equal then return true
  Else, return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
