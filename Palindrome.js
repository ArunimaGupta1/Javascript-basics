function checkPalindrome(s) {
  x = s.split("").reverse().join("") == s.trim();
  console.log(x);
  return x;
}


// Array forEach
// iterative solution that avoids array reverse() and join() methods
function isPalindrome(s) {
  if (typeof s !== "string") {
    console.error("Input is not a string");
    return; // Exit the function
  }
  s = s.split("").join("");
  l = s.length;
  x = true;
  for (let i = 0; i < l / 2; i++) {
    if (s[i] !== s[l - i - 1]) {
      x = false;
    }
  }
  console.log(x);
  return x;
}
