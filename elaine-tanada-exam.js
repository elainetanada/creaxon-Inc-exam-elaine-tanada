// #1
function sumArray(arr) {
    var sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

var sum_array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = sumArray(sum_array_of_numbers);
console.log(("Sum: ", sum)); //should return the sum of 145

// #2

function averageArray(arr) {
    let n = arr.length;
    let sum = 0;
    let average;

	for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    
    average = sum/n;

    return average
}

let avg_array_of_numbers = [1, 3, 9, 15, 90];
let avg = averageArray(avg_array_of_numbers);

console.log(("Average: ", avg));  //should return: Average: 23.6



// #3

function getPositives(arr)
{
    return arr.filter(function(num) {
        return num >= 0; // get only numers greater than 0
    });
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr);

console.log(("Positive Numbers: ", arr2)); //should return: [10,12,5,90,0,1]