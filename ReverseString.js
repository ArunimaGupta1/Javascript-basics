var rev = "";

function reverseString(s) {
  if (typeof s !== "string") {
    console.error("Input is not a string");
    return; // Exit the function
  }
  for (x of s.trim()) {
    rev = x + rev;
  }
  console.log(rev);
  return rev;
}

function arrayMethodRverse(s) {
  rev = s.split("").reverse().join("");
  console.log(rev);
  return rev;
}

// Array forEach
// will cycle through each characters and push it on the temp variable created one by one in reversed order.
function forEachMethodReverse(s) {
  s.split("").forEach((ch) => (rev = ch + rev));
  console.log(rev);
  return rev;
}

//  Array reduce
// slightly better than above. Will use reduce and add the result to the empty string in reverse.
function reduceMethodReverse(s) {
  rev = s.split("").reduce((prev, curr) => curr + prev, "");
  console.log(rev);
  return rev;
}
