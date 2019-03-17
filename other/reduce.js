var arr = [1,1,2,3,4];

var cal = arr.reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator+ currentValue)
    return accumulator+ currentValue;
}); // 10

console.log(cal)
