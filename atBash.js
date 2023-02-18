function atBash(rightGuessString){
    const stringArray = rightGuessString.split("");
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' ', '.', '?'];
    var alphabetsShifted = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A', ' ', '.', '?'];

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
function nextChar(c, i) {
    return String.fromCharCode(c.charCodeAt(0)+i);
}
console.log(atBash("ABCDEFGHIJKL. MNOPQRSTU VWX YZ?"));