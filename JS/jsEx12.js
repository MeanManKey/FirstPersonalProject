function greet(name){
    console.log ("안녕 내 이름은 ",name,"이야")
    return name
}

function meetAt(year, month, day){
    if(day != null){
        return `${year},/,${month},/,${day}`
    } else if(month != null){
        return `${year}년 ${month}월`
    } else{
        return `${year}년`
    }
}
console.log(meetAt(2022))

function findSmallestElement(arr){
    result = arr[0]
    if(arr.length==0){
        return 0;
    }
    for(let i=1;i<arr.length;i++){
        if(result>arr[i]){
            result=arr[i]
        }
    }
    return result;
}
console.log(findSmallestElement([100,200,3,0,2,1]))

let unit = [50000,10000,5000,1000,500,100]
function changeCalculate(money) {
  for(let i=0;i<unit.length;i++){
    
      let num = Math.floor(money / unit[i])
      console.log(unit[i]+"X"+num)
      money = money - (unit[i]*num)
    
  }
}

changeCalculate(12300)