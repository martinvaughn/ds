// Receive a string and then return the frequency of each character within the string.
function freq(str) {
  // create an empty dictionary.
  const dict = {};

  // loop through the str, check if the entry exists. If it does then add 1 to the current value in the dict
  // if it doesnt exist, then create that entry as a 1;
  for (i = 0; i < str.length; i++) {
    if (dict[str[i]]) {dict[str[i]] = dict[str[i]] + 1;}
    else dict[str[i]] = 1;
  }

  console.log("DICT: ", dict);
}

function freq_prettier(str) {
  const dict = {}

  for (const char of str) {
    if (dict[char]) {dict[char] += 1 }
    else {dict[char] = 1}
  }
  console.log("DICT: ", dict);
}

freq_prettier("theyettisiinymyspaghetti");
