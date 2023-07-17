function merge_sort(arr) {   
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const arr1 = merge_sort(arr.slice(0, mid)); // 1st half
  const arr2 = merge_sort(arr.slice(mid)); // 2nd half
  
  
  const merged = merge(arr1, arr2);
  return merged;
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let final = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } 
    else { 
      final.push(arr2[j]);
      j++;
    }
  }

  final = [...final, ...arr1.slice(i)];
  final = [...final, ...arr2.slice(j)];

  return final;
  
}



console.log("Sorted array...", merge_sort([5,4,3,35,5,6,2,1]))
