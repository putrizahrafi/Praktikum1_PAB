console.log("------ Array Method ------");

//foreach
let arr = [10, 20, 30, 40];
arr.forEach(function(val, key) {
    console.log('Array value in index-${key} is ${val}');
});

//map
let arrSquare = arr.map((val) => val * val);
console.log(arrSquare);