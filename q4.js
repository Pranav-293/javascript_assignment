// JavaScript program to converts a specified number to an array of digits.

function numToArray(num){
    let str = num.toString();
    const arr = [];
    for(let i = 0;i<str.length;i++){
            arr[i] = parseInt(str[i]); 
    }
    return arr;
}

console.log(numToArray(0));
console.log(numToArray(18));
console.log(numToArray(10));
console.log(numToArray(0809857));
console.log(numToArray(34e6));

