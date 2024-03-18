const arr = [1,9,10,52,13,19,1,2,-4,0,-77]

//Math methods
function minmax1(arr){
    return{
        min:Math.min(...arr),
        max:Math.max(...arr)
    }
}

//Sorting of array to get moinimum and maximum
function minmax2(arr){
    arr.sort((a,b)=>a-b);
    return{
        min:arr[0],
        max:arr[arr.length-1]
    }
}

//for of loop
function minmax3(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
        else if(arr[i]<min){
            min = arr[i]
        }
    }

    return{
        min:min,
        max:max
    }
}