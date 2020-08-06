function stringPatternSearch(text, pattern) {
  text = text.split("");
  pattern = pattern.split("");
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let temp = 0;
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] === text[i]) {
        i++;
        temp++;
        if (temp === pattern.length) {
          count++;
          i -= pattern.length - 1;
        }
      }
    }
  }
  return count;
}

console.log(stringPatternSearch("abhaabha", "abha"));
