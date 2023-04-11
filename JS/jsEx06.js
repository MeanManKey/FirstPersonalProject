let age = 21
let licence = false

if(age>20){
    if(licence==true){
        console.log("운전이 가능합니다")
    }else{
        console.log("면허를 따세용")
    }
} else if(age>=18){
    console.log("오토바이 운전이 가능합니다")
}else{
    console.log("운전 불가능합니다")
}