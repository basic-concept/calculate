var arr = [3,1,2,5,4,6,9,7,10,8]
function quickSort(m,n) {
    let temp = arr[m]
    let i = m;
    let j = n;
    if (i > j){
        return
    }
    while (i!=j){
        while (arr[j]>=temp&&i<j){
            j--;
        }
        while (arr[i]<=temp&& i<j){
            i++;
        }
        if (i<j){
            let temp1 = arr[j];
            arr[j] = arr[i];
            arr[i] = temp1;
        }
    }

    arr[m] = arr[i];
    arr[i] = temp;
    console.log(i)
    console.log(arr)
    quickSort(m,i-1)
    quickSort(i+1,n)
}

quickSort(0,arr.length -1)
