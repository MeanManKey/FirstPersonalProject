let patient = {
    name : "Jimin",
    age : 17,
    disease : "cold"
}
//객체 : 관련된 정보를 묶어서 하나의 데이터로 저장을 하게 해주는 것
//키값을 통해 안의 값을 가져다 쓸수있다
//키값: name, age, disease
//값: "Jimin", 17, "cold"

console.log(patient)
console.log(patient.name)
console.log(patient["name"])
patient.name="jk"
console.log(patient)

let patientList = [{name:"Jimin",age:13},{name:"JK",age:25},{name:"jhope",age:40}]
console.log(patientList)
console.log("첫번째 환자는: ",patientList[0])
console.log("첫번째 환자의 나이는? ",patientList[0].age)