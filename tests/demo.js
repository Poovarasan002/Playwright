// Task - 1 

//const { reverse } = require("node:dns")

// let task1 = "Hello JavaScript World";

// console.log(task1.includes("JavaScript"));
// console.log(task1.indexOf("World"));
// console.log(task1.lastIndexOf("o"));

// //task 2

// let task2 = "FrontendDeveloper"

// console.log(task2.slice(0,8))
// console.log(task2.slice(8))
// console.log(task2.slice(0,5))
// console.log(task2.slice(12))

// //Task - 3

// let task3 = "apple,banana,orange";
// let arr = task3.split(',');
// console.log(arr);
// console.log(arr.length);

// let arrjoin = arr.join(' ');
// console.log(arrjoin);


// let a = "50"
// console.log(a)
// console.log(typeof(a));

// let b = Number(a)
// console.log(typeof(b));
// console.log("hello","world",a)

//reverse the string
// let a = "JavaScript"
// let rev = a.split('').reverse().join('')
// console.log(rev)

//grade system task


// let tot = 0
// for(let i=1; i<=10;i++){
//     tot=i+
// }

// console.log(tot)

/* - Task demo
*
**
***
****
*****
*/
// let row = 5;

// for (let n = 1; n <= row; n++) {

//     let task = ''
//     for (let b = 1; b <= n; b++) {
//         task += '*'
//     }
//     console.log(task)

// }

// console.log("------------------")

// let row1 = 5;

// for (let m = 1; m <= row1; m++) {

//     let task = ''
//     for (let a = 1; a <= m; a++) {
//         task += a
//     }
//     console.log(task)

// }

// console.log("------------------")

// let row3 = 0;

// for (let y = 1; y >= row3; y++) {

//     let task = ''
//     for (let d = 1; d <= y; d--) {
//         task += d
//     }
//     console.log(i)

// }

// console.log("------------------")

// let row2 = 0;

// for (let x = 5; x >= row2; x--) {

//     let task = ''
//     for (let c = 1; c <= x; c++) {
//         task += c
//     }
//     console.log(task)

// }

console.log("------------------")

let str = 5

for (let w = 1; w<=str; w++){

    let tex = ""

    for (let q=1; q<=str-w; q++){
        tex += " "
    }

    for (let e=1; e<=(2*w-1);e++){
        tex += "*"
    }


    console.log(tex)
}


// let rows = 4;

// for (let i = 0; i <= rows; i++) {
//     let spaces = " ".repeat(i);
//     let stars = "*".repeat(7 - (i * 2));

//     console.log(spaces + stars);
// }
