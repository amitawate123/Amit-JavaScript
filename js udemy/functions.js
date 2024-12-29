// function sayHello(){
//     console.log("Hello")
// }

// sayHello()

// function counting(){
//     for(let i=1; i<=50; i++){
//         console.log(i)
//     }
// }
// counting()

// function printNumber(Number){
//     console.log("Printing number", Number)
// }
// printNumber(10)

// function average(num1, num2){
//     let avg = (num1 + num2)/2
//     console.log("Average is :", avg)
// }
// average(3,7)


//RETURN FUNCTIONS

// function getSum(a,b,c){
//     let sum = a + b + c
//     return sum
// }
// let ans = getSum(1,2,3);
// console.log("Printing sum", ans)

// function myName(firstname,lastname){
//     let fullname = firstname +" "+ lastname
//     return fullname
// }
// let fullname = myName("Amit", "Awate");
// console.log("Fullname", fullname)

function fullname(firstname,lastname){
    let fullname = firstname + " "+ lastname
    return fullname
}

let ans = fullname("Amit" , "Awate");
console.log("Fullname", ans)