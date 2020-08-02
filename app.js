// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  console.log("fff");
  str = str.split("");
  let max = 0;
  let maxElement = "h";
  for (let i = 0; i < str.length; i++) {
    console.log("fff" + i);
    let currentElementCount = 0;
    for (let j = 0; j < str.length; j++) {
      console.log("fff" + j);
      if (str[i] == str[j]) currentElementCount++;
    }
    if (max <= currentElementCount) {
      max = currentElementCount;
      maxElement = str[i];
    }
  }
  return maxElement;
}

console.log("hello");
let data = maxChar("3344567");
console.log(`data ${data}`);
