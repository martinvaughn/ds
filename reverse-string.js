function reverse_string(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let stackLen = stack.length;
  let reversed = "";
  for (let i = 0; i < stackLen; i++) {
    reversed += stack.pop();
  }
  return reversed;
}

function reverse_better(str) {
  let reverse = "";
  for (i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

function check_palindrome(str) {
  if (reverse_better(str) === str) { return true}
  else return false;
}

console.log("Reversed: ", reverse_better("hsiloof yats .yrgnuh yats"));
console.log("Is scoop a palindrome? ", check_palindrome("scoop"));
console.log("Is racecar a palindrome? ", check_palindrome("racecar"));
