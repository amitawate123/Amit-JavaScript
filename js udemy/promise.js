// function sayName(){
//     console.log("Hello")
// }

// setTimeout(sayName, 5000)


// let firstPromise = new Promise((resolve, reject)=> {
//     console.log("Hello");
//     resolve(1001)
// })



// setTimeout(function sayName(){
//     console.log("Hello")
// }, 10000)

// // let firstPromise = new Promise()
// sayName()



// setTimeout(function sayName(){
//     console.log("Hello")
// }, 10000)

// let firstPromise = new Promise((resolve, reject)=>{
//     setTimeout(function sayName(){
//         console.log("Hello")
//     }, 10000)
// })

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise fulfilled");
//     }
//     else {
//         reject("Promise Rejected");
//     }
// });

let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "First")
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second")
})

let promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 3000, "Third")
})