function pyramid(row) {
    for (let index = 0; index < row; index++) {
        let space = " ".repeat(row -index);
        let star = "*".repeat(index * 2 + 1);
        console.log(space + star);
    }
}

pyramid(5);


function isPalindrome(word) {
    let reverseWord = ' ';
    for (let index = word.length - 1; index >= 0; index--) {
        reverseWord += word[index];
    } 
    return reverseWord === word;
}

console.log(isPalindrome('racecar'));