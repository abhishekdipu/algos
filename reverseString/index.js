// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

//1st way
// function reverse(str) {
//   let strArray = str.split(""); //changes string in char array
////   let strArray = [...str]; //changes string in char array
//   let revArray = strArray.reverse(); //revered the char array
//   let revString = revArray.join(""); //joined each char of char array
//   return revString;
// }

// //1st way in concize
// function reverse(str) {
//   return (revString = str.split("").reverse().join(""));
// }

// //2nd way when reverse() is not allowed
// function reverse(str) {
//   let rev = "";
//   for (let i = 0; i < str.length; i++) {
//     rev = str[i] + rev;
//   }
//   return rev;
// }

//3rd way - using reduce method
function reverse(str) {
  return str.split("").reduce((accumataor, currentValue) => {
    return currentValue + accumataor;
  }, "");
}

//3rd way in consise - using reduce method
function reverse(str) {
  return str
    .split("")
    .reduce((accumataor, currentValue) => currentValue + accumataor);
}

//Time Complexity: O(N) as we go over every character in input string
//space complexity: O(N) as output sting is same as input string

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
  it("reverse() correctly reverses string", () => {
    assert.equal(reverse("ffaa"), "aaff");
    assert.equal(reverse("  aaff"), "ffaa  ");
  });
});

mocha.run();
