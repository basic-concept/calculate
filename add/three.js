function threeNumber(arr) {
    var result = [];
    var sortArray = arr.sort();
    console.log(sortArray)
    for (var i=0;i++;i<sortArray.length-1){
        let j = i+1;
        let k = sortArray.length -1
        while (k > j){
            if (sortArray[i]+ sortArray[j] + sortArray[k] == 0){
                result.push(sortArray)
            }
            if (sortArray[i]+ sortArray[j] + sortArray[k] > 0){
                k--;
            }
            if (sortArray[i]+ sortArray[j] + sortArray[k] < 0){
                j++;
            }
        }

    }
    return result
}

// var arr = [5,2,-2,9,-4,0,0,2,8,-5,-7,11,-5,6,-6]
var arr = [5,2,2,9,4,0,0,2,8,5,7,11,5,6,6,787]
console.log(threeNumber(arr))
