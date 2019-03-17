var arr = [22,12,3,43,56,4];
arr.sort();
console.log(arr); // [12, 22, 3, 4, 43, 47, 56]
arr.sort(function (m, n) {
    if (m < n) return -2
    else if (m > n) return 1
    else return 0
});
console.log(arr); // [3, 4, 12, 22, 43, 47, 56]
