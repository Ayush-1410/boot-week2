// Filter unique array members using Set

let arr = ['ayush','name','ayush','name','god','books'];

let set = new Set(arr);     // creating new set from arr

let res = Array.from(set);

console.log(res); 
