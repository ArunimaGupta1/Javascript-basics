function isAnagram1(stringA, stringB) {
  const normalise = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };
  console.log(normalise(stringA) === normalise(stringB));
  return normalise(stringA) === normalise(stringB);
}

function createCharMap(str) {
  const map = {};
  const normalisedString = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of normalisedString) {
    map[char] = (map[char] || 0) + 1;
  }

  return map;
}

function isAnagram2(stringA, stringB) {
  const charMapA = createCharMap(stringA);
  const charMapB = createCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    console.log(false);
    return false;
  }

  for (let ch in charMapA) {
    // To iterate over an object's keys, we should use a for...in loop instead of a for...of loop.
    if (charMapA.hasOwnProperty(ch)) {
      //  We added an additional check charMapA.hasOwnProperty(char) to ensure that the property belongs to the object, which is a good practice when iterating over object properties to avoid iterating over inherited properties.
      if (charMapA[ch] !== charMapB[ch]) {
        console.log(false);
        return false;
      }
    }
  }
  console.log(true);
  return true;
}
