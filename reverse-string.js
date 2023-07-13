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

console.log("Reversed: ", reverse_better("hsiloof yats .yrgnuh yats"));
