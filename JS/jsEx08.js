let menu = 2

switch(menu){
    case 1:
        console.log("물건 사기")
        break;
    case 2:
        console.log("잔고 확인")
        break;
    case 3:
        console.log("히스토리 확인")
        break;
    case 4:
        console.log("홈으로 돌아가기")
        break;
}
let menu2 = 8
let answer = menu2<=3?"범위 안에 숫자입니다" : "범위 밖에 숫자입니다"
console.log(answer)