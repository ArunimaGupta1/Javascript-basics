var c = "";

//Character method
function countV(x) {
  var a = 0;
  var text = x.value.trim().toLowerCase();
  console.log(text);
  for (let y = 0; y < text.length; y++) {
    c = text.charAt(y);
    if (c == "a" || c == "i" || c == "o" || c == "e" || c == "u") a++;
  }

  console.log(a);
}

// String match method
// String.match method retrieves the result of matching a string against a regular expression.
function countStringMatch(x) {
  var text = x.value.trim();
  console.log(text.match(/[aeiou]/gi) ? text.match(/[aeiou]/gi).length : 0);
}

// for-of AND Array includes
// this is a good alternative instead of using solution above. Basically, replace regex test and utilize array includes instead.
function forOfAndString(x) {
  // Check if x is a string
  if (typeof x !== "string") {
    console.error("Input is not a string");
    return; // Exit the function
  }

  // Initialize a variable to count vowels
  let vowelsCount = 0;

  // Define an array containing lowercase vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Iterate through each character of the input string
  for (let c of x) {
    // Check if the current character is a vowel (case-insensitive)
    if (vowels.includes(c.toLowerCase())) {
      // If it's a vowel, increment the count
      vowelsCount++;
    }
  }

  // Output the total count of vowels
  console.log(vowelsCount);
}
