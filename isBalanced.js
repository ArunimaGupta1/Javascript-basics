function isBalanced(str) {
  const stack = [];

  for (let ch of str) {
    if (ch === "(") {
      stack.push(ch);
    } else if (stack.pop() !== "(") {
      console.log(false);
      return false;
    }
  }

  if (stack.length !== 0){
    console.log(false);
    return false;
  }

  console.log(true);
  return true;
}