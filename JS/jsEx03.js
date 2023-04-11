let fruit = ["banana", "apple", "grape", "mango"]
//배열: 관련있는 데이터들을 하나의 변수로 선언하는것
console.log(fruit)
console.log(fruit[0])
//컴퓨터는 숫자를 0부터 센다
//배열에 아이템은 인덱스로 순서를 메기는데 0부터 사용
fruit[0]="cherry"
console.log(fruit)

fruit.pop()
console.log(fruit)
fruit.push("pineapple")
console.log(fruit)

console.log(fruit.includes("apple"))
//해당 데이터가 배열에 존재하는지 알려주는 함수
console.log(fruit.indexOf("apple"))
//해당 데이터의 인덱스번호를 알려주는 함수

console.log(fruit.slice(2))
//0에서부터 2까지 있는 데이터들을 잘라버림
console.log(fruit.slice(1,3))
//1에서부터 2까지 있는 데이터들을 잘라버림 => 3번째이전까지!!!

fruit.splice(2,1)
//2부터 시작해서 1개의 아이템을 제거
console.log(fruit)

//slice는 기존의 배열을 건드리지않고 새로운배열을 만듬
//splice는 기존의 배열을 건드림