// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

//-->1st way
function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, ""); //to replace non alphanumaric haracters with nothing
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  if (stringA.length != stringB.length) return false;

  return (
    stringA.split("").sort().join("") === stringB.split("").sort().join("")
  );
}
//TC-->O(N*log N) we made use of sorting algo
//SC->O(N) sorted string as long as input string

////-->2nd way
// function anagrams(stringA, stringB) {
//   stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
//   stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

//   if (stringA.length != stringB.length) return false;

//   let arrOfStringA = stringA.split("");
//   let arrOfStringB = stringB.split("");

//   for (let i = 0; i < arrOfStringA.length; i++) {
//     let item = arrOfStringA[i];
//     let itemCountForA = 0;
//     let itemCountForB = 0;
//     for (let j = 0; j < arrOfStringA.length; j++) {
//       if (item === arrOfStringA[j]) {
//         itemCountForA++;
//       }
//       if (item === arrOfStringB[j]) {
//         itemCountForB++;
//       }
//     }
//     if (itemCountForA != itemCountForB) return false;
//   }

//   return true;

//}//TC-> O(N+M)as we go over each element of both the array=O(N)
//SC-->O(1) fixed amount of space was required

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

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
