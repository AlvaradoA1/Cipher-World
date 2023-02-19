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


function atBash(rightGuessString){
    const stringArray = rightGuessString.split("");
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', ' ', '.', '?', '\''];
    var alphabetsShifted = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A', ' ', '.', '?', '\''];

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


function patristocrat(rightGuessString){

    const stringArray = rightGuessString.split("");
    var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var alphabetsShifted = [];  
    do {
        var randomNumber = Math
            .floor(Math.random() * 26) + 65
        var letter = String.fromCharCode(randomNumber);
        if (!alphabetsShifted.includes(letter)) {
            alphabetsShifted.push(letter);
        }
  
    } while (alphabetsShifted.length <= 25);

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












const allsentences  = ["WHILE OTHERS ARE BROADCASTING BE LISTENING", 
"I HAVE NO ONE TO LEAVE THE MONEY TO IM A SINGLE MAN I LIKE SPENDING MY MONEY", 
"ART IS THE EFFORT TO APPRECIATE AND EXPRESS THE GOD WHO IS ITS BEAUTY", 
"INTUITION IS THE LIFEBLOOD OF A WOMAN AND THE ESSENTIAL CHARACTER OF A MANSERENA JADE", 
"NO MATTER WHERE I RUN I MEET MYSELF THERE", 
"ITS LIKE KILLING EACH OTHER IS THE ONLY THING WE KNOW HOW TO DO", 
"LONDON IS A ROOST FOR EVERY BIRD",
"THINGS THAT LOOK IMPOSSIBLE SUDDENLY SEEM A LOT BETTER ONCE YOU GET GOD ON BOARD",
"THE ULTIMATE ACT OF HEROISM SHOULDNT BE DEATH",
"ILLUSIONS CONNECTED WITH RELIGION ARE GENERALLY MOST DIFFICULT TO REMOVE",
"TIME IS THAT WHICH MAN IS ALWAYS TRYING TO KILL BUT WHICH ENDS IN KILLING HIM",
"I WONDER HOW MUCH OF THE DAY I SPEND JUST CALLIN AFTER YOU",
"FOR ADVENTURE IS NOT OUTSIDE A MAN IT IS WITHIN",
"HOW CAN THE DAUGHTER OF A WENCH EVER THINK TO HOLD THE HEART OF A KING",
"WHY DONT YOU GET A HAIRCUT YOU LOOK LIKE A CHRYSANTHEMUM",
"YOU CANT ARGUE WITH THE DEAD NO MATTER WHAT YOU SAY THEY ALWAYS HAVE THE LAST WORD",
"I SUPPOSE WHAT ONE WANTS REALLY IS IDEAL COMPANY AND BOOKS ARE IDEAL COMPANY",
"THE GLORY OF GOD IS THE ETERNAL HEARTBEAT OF GOD",
"LIFE IS THE ART OF DRAWING WITHOUT AN ERASER",
"HE IS HAPPIEST BE HE KING OR PEASANT WHO FINDS PEACE IN HIS HOME",
"WHAT PLACE THEN FOR A CREATOR",
"DREAMS DONT COME TRUE THEY ARE TRUE",
"FRAUD IS THE DAUGHTER OF GREED",
"YOU SMELL LIKE A FRESH FLOWER AND SURROUND ME LIKE SPRING AIR",
"YOU ARE RESPONSIBLE FOR YOUR CALLING AND YOU MUST GIVE ACCOUNT",
"THE MORE YOU RESIST CHANGE THE MORE IT WILL BE PAINFUL FOR YOU TO ACCEPT IT",
"FEAR IS MORE PAIN THAN IS THE PAIN IT FEARS",
"WITH YOU IT IS ALWAYS THE LAW NEVER EQUITY",
"NOW AS TO POLITENESS I WOULD VENTURE TO CALL IT BENEVOLENCE IN TRIFLES",
"IMPOSSIBILITY IS A SUBSET OF THE UNIVERSE",
"AN INEXHAUSTIBLE IMAGINATION IS THE FOUNTAIN OF YOUTH",
"I ALWAYS HAVE THE TIME THE ROOM AND THE ENERGY FOR MORE LOVE",
"WITHOUT THE FEAR OF GOD IT IS IMPOSSIBLE TO SAY NO TO TEMPTATIONS AND EVIL",
"TO DATE A GIRL FOR HER LOOK IS LIKE EATING A BIRD FOR IT SONG",
"LIFE ISNT FAIR ITS JUST FAIRER THAN DEATH THATS ALL",
"THE ONLY WEAPON YOU HAVE GOT TO CONQUER FEARIT IS WILL NOT TO FAIL",
"I WANT IN YOUR LIFE ELLE ALL THE WAY IN",
"YOU LOOK AS SCARY AS A BUTTERED MUFFIN",
"IT ISNT AN IDEA UNTIL ITS CREATED IRRESPECTIVE OF ITS RESULT",
"HUMOR CAN GIVE YOU THE EDGE YOU ARE LOOKING FOR",
"THE POET IS MUCH MORE THE ONE WHO INSPIRESTHAN THE ONE WHO IS INSPIRED",
"YOU CAN SAVE TIME WITH WRITING BUT YOU CAN SAVE A LIFE BY READING",
"EVERY TRUE ARTIST IS AT WAR WITH THE WORLD",
"WE KIND OF FELL INTO ONE ANOTHER NOT EVEN REALIZING IT WAS HAPPENING",
"SUCCESS ISNT ABOUT THE END RESULT ITS ABOUT WHAT YOU LEARN ALONG THE WAY"]
const allcodes = new Array(allsentences.length);


/*for (let i = 0; i < allsentences.length; i++) {
        allcodes[i]= caesarEncrypt(allsentences[i]);
    }
*/




    for (let i = 0; i < allsentences.length; i++) {
            allcodes[i]= atBash(allsentences[i]);
        }





let randomIndex = Math.floor(Math.random() * allsentences.length);

let sentence = allsentences[randomIndex];
let code= allcodes[randomIndex];

let sentenceLetters = sentence;

let guessedLetters = new Array(sentence.length);

for (let i = 0; i < guessedLetters.length; i++) {
    if (sentence[i] === " ") {
        guessedLetters[i] = " ";
    }
}

let incorrectGuesses = 0;

const squares = document.getElementById("sentence");


for (let i = 0; i < sentence.length; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("data-index", i);
    square.addEventListener("click", handleSquareClick);
    
    square.textContent = code[i];
    if(sentenceLetters[i]==' ')
        square.style.backgroundColor = "black";

    squares.appendChild(square);
}

const guess = document.getElementById("guess");

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

const newButton = document.getElementById("new_word");
newButton.addEventListener("click", newWord);

const checkButton = document.getElementById("Check_answer");
checkButton.addEventListener("click", checkAnswer);

function handleSquareClick(event) {
    const index = parseInt(event.target.getAttribute("data-index"));

    if(sentenceLetters[index]==" ")
        return;

    let letter = prompt("Guess a letter");

    if (letter === null) {
        return;
    }

    letter = letter.toLowerCase();

    if (letter.length !== 1) {
        alert("Please enter a single letter.");
        return;
    }

    if (!letter.match(/[a-z]/)) {
        alert("Please enter a letter.");
        return;
    }

    

    if (letter != sentenceLetters[index]) {
        incorrectGuesses++;
		
		
    }
	guessedLetters[index] = letter.toUpperCase();
    

    updateSquares();
    updateGuess();
    //checkWin();
}

function updateSquares() {
    const squares = document.getElementsByClassName("square");

    for (let i = 0; i < squares.length; i++) {
        if(!(guessedLetters[i]==undefined) && !(code[i]==" "))
            squares[i].textContent = guessedLetters[i]+"\u2665" +code[i] ;
    }
}

function updateGuess() {
    const incorrect = "Incorrect guesses: " + incorrectGuesses;
    const correct = "Correct guesses: " + guessedLetters.filter(l => l.match(/[a-z]/)).length;
    guess.textContent = incorrect + " " + correct;
}

function checkWin() {
    if (incorrectGuesses) {
        const message = (incorrectGuesses < 6) ? "You win!" : "You lose! The sentence was: " + sentence;
        alert(message);
    }
}

function resetGame() {
    
    guessedLetters = new Array(sentence.length);

    for (let i = 0; i < guessedLetters.length; i++) {
        if (sentence[i] === " ") {
            guessedLetters[i] = " ";
        }
        else
            guessedLetters[i]="";
    }

    incorrectGuesses = 0;

    for (let i = 0; i < squares.childNodes.length; i++) {
        const square = squares.childNodes[i];
        square.textContent = code[i];
    }

    updateGuess();
}

function newWord(){
   
    location.reload();
}

function checkAnswer(){
    //sentenceNoSpaces=sentenceLetters.toString().remove(" ");
    if(guessedLetters.join("")===sentenceLetters.toString()){
        alert("Congratulations, you have cracked the code!");
        newWord();
    }
    else
        alert("Sorry, you are incorrect." );

}