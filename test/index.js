var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    line = readline().split(" ")[0]
    var length = line.length;
    var lines = line;
    let j=0;
    while(j<length){
        if(lines[j] == lines[j+1]){
            if(((j+2)<length)&&(lines[j+1] == lines[j+2])){
                let first = lines.slice(0,j);
                let last = lines.slice(j+1);
                lines = first + last;
                print(lines);
            }else{
                j++;
            }
            if (((j+3)<length)&&(lines[j+1]!== lines[j+2])&&(lines[j+2] == lines[j+3])){
                let first = lines.slice(0,j+1);
                let last = lines.slice(j+2);
                lines = first + last;
                print(lines)
            } else {
                j++;
            }
        } else {
            j++;
        }
    }
}
