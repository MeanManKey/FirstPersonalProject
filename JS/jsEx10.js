let sum=0;
for(let i=1;i<=100;i++){
    sum+=i
}
console.log(sum)

for(let i=1;i<=100;i+=2){
    console.log(i)
}

for(let i=0;i<=5;i++){
    for(let j=0;j<=9;j++){
        if(i==3||i==6||i==9){
            if(j==3||j==6||j==9){
                console.log("짝짝")
            }else{
                console.log("짝")
            }
        }else{
            if(j==3||j==6||j==9){
                console.log("짝")
            }else{
                console.log(i*10+j)
            }
        }
    }
}

let num=11
if(num==1){
    console.log(false)
}else {
    for(let i=2;i<num;i++){
        if(num%i==0){
            console.log(false)
            break;
        }else{
            console.log(true)
        }
    }
}

for(let i=1;i<=50;i++){ //2번문제 답안
    let stringValue = i.toString()
    let result=""
    for(let j=0;j<stringValue.length;j++){
        if(stringValue[j]=="3"||stringValue[j]=="6"||stringValue[j]=="9"){
            result = result+"짝"
        }
    }
    console.log(result.length>0?result:i)
}