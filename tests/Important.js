//repeat words count

// let str1 = "java is easy and java is powerfull";

// let words = str1.split(" ");
// let Repeat_words = {};
// for (let i of words) {
//     if (Repeat_words[i]) {
//         Repeat_words[i]++;
//     }
//     else {
//         Repeat_words[i] = 1;
//     }
// };
// console.log(Repeat_words);
// for (let con in Repeat_words) {
// console.log(con);
// if (Repeat_words[con] > 1) {
//     console.log(con, "=", Repeat_words[con]);
// }
// };


//reverse the purticular word in a string
// let string = "This is Poovarasan from Hire Nexa"
// let array = string.split(' ').reverse();
// let arr1 = []


// console.log(string);
// for (let str of array){
//     arr1.push(str.split('').reverse().join(''));
// }
// let reversed_string = arr1.join(" ")
// console.log(reversed_string);


//Prime number


for (let i = 1; i <= 100; i++) {

    let count = 0

    for (p = 2; p < i; p++) {
        if (i % p == 0) {
            count++
        }
    }
    if (count == 0) {
        console.log(i)
    }
}
