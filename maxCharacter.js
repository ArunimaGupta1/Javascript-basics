function maxCharacter(str) {

  if (typeof str !== "string") {
    console.log("It is not a string");
    return;
  }

  let map = {};
  var mx = -1;
  var c = '';
  for (let i=0;i<str.length;i++) {
    ch=str[i].toLocaleLowerCase();
    if(ch === " ") {
    }
    else if(map[ch]){
        map[ch] = map[ch]+1;
    }
    else{
        map[ch] = 1;
    }
  }
 
  //console.log(map);
  
  for(let ch of Object.keys(map)){

    if(map[ch]>mx){

      //console.log(map[ch]);
      mx = map[ch];
      c = ch;
    }
  }

  console.log("Answer is "+ c);
  return c;
}
