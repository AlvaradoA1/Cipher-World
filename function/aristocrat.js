function aristocrat(rightGuessString){

    const stringArray = rightGuessString.split("");
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' ', '.', '?'];
    var alphabetsShifted = [];  
    do {
        var randomNumber = Math
            .floor(Math.random() * 26) + 65
        var letter = String.fromCharCode(randomNumber);
        if (!alphabetsShifted.includes(letter)) {
            alphabetsShifted.push(letter);
        }
  
    } while (alphabetsShifted.length <= 25);
    alphabetsShifted.push(' ');
    alphabetsShifted.push('.');
    alphabetsShifted.push('?');

    var encodedString = []; 
    for(let i =0; i<rightGuessString.length; i++){
        for (let j = 0; j<alphabets.length; j++){
            if (stringArray[i] == alphabets[j]){
                encodedString.push(alphabetsShifted[j]);
            }
        }
    }
    return encodedString.join("");
}
function letterCount(rightGuessString){
    var result = [...rightGuessString].reduce((alphabets, i) => { alphabets[i] = alphabets[i] ? alphabets[i] + 1 : 1; return alphabets }, {});
    return result
}
