//reverse the string
let a = "This is Poovarasan from Hire Nexa"
let rev = a.split('').reverse().join('')
console.log(rev)

//repeat words count

let str1 = "apple banana orange apple mango apple mango banana apple";

let words = str1.split(" ");
console.log(words);
let count = {};
for (let wrd of words) {
    //console.log(wrd);
    if (count[wrd]) { 
        count[wrd]++; 
    }
    else {
        count[wrd] = 1;
    }
};
console.log(count);


//Prime number


for (let i = 1; i <= 100; i++) {

    let count = 0

    for (p = 1; p <= i; p++) {
        if (i % p == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log(i) 
    }
}


let a = 4
let count = 0

for (let i = 1; i <= 100; i++) {
    if (a % i == 0) {
        count++
    }
}
if (count == 2) {
    console.log(a, "is a Prime Number")
}
else {
    console.log(a, "is not a Prime Number")
}
