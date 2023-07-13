function bsearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) { return -1 }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) { return mid }

  if (arr[mid] > target) { return bsearch(arr, target, 0, mid - 1) }

  if (arr[mid] < target) { return bsearch(arr, target, mid + 1) }  
   
}



const i = bsearch([0,1,2,3,4], 0);
console.log("Found at: ", i);
