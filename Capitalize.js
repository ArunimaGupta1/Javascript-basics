function capitalize1(str){
    if(typeof(str)!=='string'){
        console.log('Enter a string')
        return
    }
    console.log(str.split(" ").map((word) => word[0].toUpperCase()+word.slice(1)).join(' '));
}

function capitalize2(str){
    if(typeof(str)!=='string'){
        console.log('Enter a string')
        return
    }
    var new1 = "";
    var capitaliseNext = true;
    for(let i=0;i<str.length;i++){
      if(capitaliseNext&&str[i]!==" "){
        new1 = new1+str[i].toUpperCase();
        capitaliseNext = false
      }
      else{
        new1 = new1+str[i];
      }
      if(str[i]===' '){
        capitaliseNext = true;
      }
    }
    console.log(new1);
    return new1;
}