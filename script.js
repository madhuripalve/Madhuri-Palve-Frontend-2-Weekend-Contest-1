/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(arr=>{
    if (arr.marks>50){
   console.log(arr);
  }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr=>{
    if (arr.marks > 50){
      console.log(arr);
    
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newData = {
    id: 4,
    name: "susan",
    age: 20,
    marks: 45
  };
  console.log(arr)
  arr.push(newData);
  console.log(newData);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student => student.marks <= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    {id: 4, name: "maddy", age: 19, marks: 50},
    {id: 5, name: "ram",   age: 20, marks: 60},
    {id: 6, name: "sham",  age: 21, marks: 70}
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
