
// Write a function that takes a sorted array and then searches it for a target element with binary search. 

function binarySearch(arr, target) {
  let mid = arr.length == 1 ? 0 :  Math.floor(arr.length  / 2);
  
  // base case
  if (arr[mid] == target) { return true }
  if (arr[mid] != target && arr.length == 1) {return false}

  if (arr[mid] < target) {
    let newArr = arr.slice(mid);
    return binarySearch(newArr, target);
  } 

  if (arr[mid] > target) {
    let newArr = arr.slice(0, mid);
    return binarySearch(newArr, target);
  }  
}


const answer = binarySearch([0,1,2,3,4,5,6,7,8,9,10], 10);
console.log("Found in array? ", answer)
