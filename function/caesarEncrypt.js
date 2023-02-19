function caesarEncrypt(rightGuessString){
    const stringArray = rightGuessString.split("");
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' ', '.', '?', '\''];
    let shift = Math.floor(Math.random()*24)+1;
    var alphabetsShifted = [];
    for (let i =0; i<alphabets.length; i++){
        if(alphabets[i].charCodeAt(0) == 32){
            alphabetsShifted.push(' ');
        }
        else if(alphabets[i].charCodeAt(0) == 46){
            alphabetsShifted.push('.');
        }
        else if(alphabets[i].charCodeAt(0) == 63){
            alphabetsShifted.push('?');
        }
         else if(alphabets[i].charCodeAt(0) == 39){
            alphabetsShifted.push('\'');
        }
        else if(alphabets[i].charCodeAt(0)<=90-shift){
            alphabetsShifted.push(nextChar(alphabets[i],shift));
        }
        else{
            alphabetsShifted.push(editedNextChar(alphabets[i], shift))
        }
    }

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
function editedNextChar(c,i) {
    return String.fromCharCode(c.charCodeAt(0)-26+i);
}
console.log(caesarEncrypt("ABCDEFGHIJKL. MNOPQRSTU VWX YZ?"));
