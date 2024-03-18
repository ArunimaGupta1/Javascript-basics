function removeDuplicate(arr){
    return [...new Set(arr)]
}

a = [1,2,2,2,3,3,4,4,4,5,5,5]
console.log(a);
console.log(removeDuplicate(a));
console.log(removeDuplicate2(a));

function removeDuplicate2(array) {
    const map = {}
  
    for (const char of array) {
      if (map[char]) {
        map[char]++
      } else {
         map[char] = 1
      }
    }
  
    return Object.keys(map)
  }