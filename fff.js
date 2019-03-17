var str = "wooooooow"
var arr = [...str]
for ( var i=0; i<arr.length; i++ ) {
    for (var j=0; j<arr.length; j++){
        if (arr[j] == arr[j+1]){
            if ( arr[j+1] == arr[j+2]){
                arr.splice( j, 1 );
                j--;
            }
        }
        // if ( arr[j] == arr[j+1] && arr[j+1] == arr[j+2]) {
        //     arr.splice( j, 1 );
        //     j--;
        // }
        // if ( arr[j] == arr[j+1] && arr[j+2] == arr[j+3] && arr[j+1] !== arr[i+2]) {
        //     arr.splice( j+2, 1 );
        //     j--;
        // }
    }
}
console.log(arr)



// var string = "helloo";
// var string1 = "ABAB"
// let reg = /([A-Za-z]{2})([A-Za-z]{2})/g
//
//
// // console.log(string.match(reg))
// // if(string.match(reg)){
// //     string.replace(reg,'$1')
// // }
//
// console.log(string.replace(/([A-Za-z]{2})([A-Za-z]{2})/g,'$1 $2[0]'));
//
// // var str = '123-mm';
// // var strReg = str.replace(/(\d+)-([A-Za-z]+)/g,'$2');
// // console.log(strReg)//mm  上面那段$2这个就是表示正则第二组个匹配到的内容

