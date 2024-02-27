function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }
    return count;
}

let myString = "An example string with some 'a's and 'A's.";
let numberOfAs = countLetterA(myString);
console.log("Number of 'a's in the string:", numberOfAs);
