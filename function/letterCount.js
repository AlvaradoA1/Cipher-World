function letterCount(rightGuessString){
    var result = [...rightGuessString].reduce((alphabets, i) => { alphabets[i] = alphabets[i] ? alphabets[i] + 1 : 1; return alphabets }, {});
    return result
}
console.log(letterCount("HELLO ARE. YOU GOOD?"));
