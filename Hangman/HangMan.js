// see README for details
const bush = document.getElementById('bush')
const sign = document.getElementById('categories')
const gallows = document.getElementById('gallows')
const menuSign = document.getElementById('menu')
const keys = document.getElementById('keys')
const keyboard = document.getElementById('keyboardSub')
const game = document.getElementById('gameSub')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const head = document.getElementById('head')
const body = document.getElementById('body')
const arms = document.getElementById('arms')
const wholeBody = document.getElementById('wholeBody')
const result = document.getElementById('resultSub')
const Win = document.getElementById('win')
const Loose = document.getElementById('loose')
const correct = document.getElementById('correct')
const score = document.getElementById('score')
const lives = document.getElementById('lives')
// x is used as the main variable

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let wrongAnswer = 0;

// Question List will be added from a different file
var HistoryQuestions = [{
    Question: 'Who is the king of the Greeks at the time of Trojan Horse built?',
    Answer: 'Agamemnon'
},
{
    Question: 'What is the name of the legendary sword of King Arthur? ',
    Answer: 'Excalibur'
}
]
var ArtQuestions = [{
    Question: 'Who is the famous painter cut his ear?',
    Answer: 'Van Gogh'
},
{
    Question: 'Which European sculptor created the statue “David”?',
    Answer: 'Michelangelo'
}
]
var GeographyQuestions = [{
    Question: 'The Golden Gate is the symbol of what city?',
    Answer: 'San Francisco'
},
{
    Question: 'On which sea does Romania have a coastline?',
    Answer: 'Black Sea'
}
]
var SportQuestions = [{
    Question: 'Dolphin style is related to what sport?',
    Answer: 'Swimming'
},
{
    Question: 'What do you score in American and Canadian football',
    Answer: 'Touchdown'
}
]
var ScienceQuestions = [{
    Question: 'How are the holes of Swiss cheese made?',
    Answer: 'Carbon dioxide'
},
{
    Question: 'What science studies the weather? ',
    Answer: 'Meteorology'
}
]
// Bush passing through background
setTimeout(Bush, 5000) // firts bush passes in 5 second
function Bush() {
    bush.style.left = '1700px' // final point at right side
    bush.style.transform = 'rotate(3600deg)'// passing while turning around
    setInterval(Bush, 40000) // run the Bush function every 40 second
    setTimeout(function () { show(bush); }, 39000) // make the bush visible

    setTimeout(bushReturn, 15000) // after reaching to the right side (15 second) run return function
}
// Bush returns to the left side 
function bushReturn() {
    hide(bush) // goes back while its hidden
    bush.style.left = '-100px' // left point
    bush.style.transform = 'rotate(0deg)'// turns back to be able to turn again

}
// new Object for the questions
function Query(q, a) {
    this.question = q
    this.answer = a
}
// Object prototype to create word
Query.prototype.word = function (a) {
    x = a
    x = x.toUpperCase()
    x = x.split('')
    for (i = 0; i < x.length; i++) {
        var parent = document.createElement('DIV')
        var text = document.createElement('span')
        parent.style.margin = '0'
        text.style.opacity = '0'
        text.style.transition = '1s'
        parent.classList.add('key')
        text.innerText = x[i]
        parent.appendChild(text)
        answer.appendChild(parent)

        if (text.innerText == '') { // if there is space in the word, hides
            parent.style.opacity = '0'
            parent.classList.add('done')
        }
    }
}
// mainly used hide and show functions
function hide(x) {
    x.classList.add('hide')
}
function show(x) {
    x.classList.remove('hide')
}

// buttons runs on clicked to the category
function historyButton() {
    hideSignButtons()
    Game('history')
}
function artButton() {
    hideSignButtons()
    Game('art')
}
function geographyButton() {
    hideSignButtons()
    Game('geography')
}
function sportButton() {
    hideSignButtons()
    Game('sport')
}
function scienceButton() {
    hideSignButtons()
    Game('science')
}

// Button click functions
function hideSignButtons() { // starts the game / hide the categories menu
    lives.innerText = 5
    sign.style.right = '-400px' // slide the categories
    setTimeout(function () { hide(sign); }, 1000) //hide the categories

    // shows the game blocks
    show(gallows)
    setTimeout(function () { gallows.style.left = '0px'; }, 500)

    show(menuSign)
    setTimeout(function () { menuSign.style.right = '-70px'; }, 500)

    show(game)
    setTimeout(function () { game.style.opacity = '1'; }, 1000)

    show(keyboard)
    setTimeout(function () { keyboard.style.opacity = '1'; }, 1000)

    show(score)
    setTimeout(function () { score.style.left = '1200px'; }, 500)


}
// runs when a key clicked
function Game(x) {
    r = Math.floor(Math.random() * 2) //random number (0-1)

    // checks the category
    if (x === 'history') {
        q = HistoryQuestions[r].Question
        a = HistoryQuestions[r].Answer
    }
    if (x === 'art') {
        q = ArtQuestions[r].Question
        a = ArtQuestions[r].Answer
    }
    if (x === 'geography') {
        q = GeographyQuestions[r].Question
        a = GeographyQuestions[r].Answer
    }
    if (x === 'sport') {
        q = SportQuestions[r].Question
        a = SportQuestions[r].Answer
    }
    if (x === 'science') {
        q = ScienceQuestions[r].Question
        a = ScienceQuestions[r].Answer
    }
    // correct will be appear in case of loosing 
    correct.innerText = 'Answer: ' + a
    // question will be shown at the main page
    question.innerText = q

    // answer will be created
    x = new Query(q, a)
    x.word(a)

}
// this will run in case of the end (loosing or winning)or returning by using the side menu
function Return(x) {
    if (x) {  // if returned from the side menu or OK clicked after win or loose this will work
        show(sign)
        setTimeout(function () { sign.style.right = '35px'; }, 1000)

    }
    else { // in case of win or loose this will work right away then the above after hitting the OK
        show(result)
        setTimeout(function () { result.style.opacity = '1'; }, 1000)

    }
    //hide the game figures and areas
    gallows.style.left = '-550px';
    setTimeout(function () { hide(gallows); }, 1000)
    menuSign.style.right = '-400px';
    setTimeout(function () { hide(menuSign); }, 1000)
    game.style.opacity = '0';
    setTimeout(function () { hide(game); }, 1000)
    keyboard.style.opacity = '0';
    setTimeout(function () { hide(keyboard); }, 1000)
    score.style.left = '1500px';
    setTimeout(function () { hide(score); }, 1000)
    setTimeout(function () { hide(head); }, 1000)
    setTimeout(function () { hide(arms); }, 1000)
    setTimeout(function () { hide(body); }, 1000)
    setTimeout(function () { hide(wholeBody); }, 1000)

    clear()
}
NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach; // to be able to for Each method at html (I found out at the end of the code)

function showAnswer() { // if show answer at the side menu clicked, this will run
    for (i = 0; i < answer.children.length; i++) {
        answer.children[i].children[0].style.opacity = '1'
    }
    keys.children.forEach(child =>
        child.classList.add('disabled') // disable all the keys
    )


}
function clear() { // reset everything 

    wrongAnswer = 0;
    answer.innerHTML = ''

    keys.children.forEach(child =>
        child.classList.remove('disabled')
    )

}

//Create keyboard
CreateKeys()
function CreateKeys() {
    for (i = 0; i < alphabet.length; i++) {
        var key = document.createElement('div')
        key.classList.add('key')
        x = alphabet[i].toUpperCase()

        key.innerText = x

        keys.appendChild(key)
    }
}


keys.onclick = function (e) { // click function for the keyboard
    x = e.target.innerText
    y = x.length
    if (y < 2) {

        if (e.target.classList[1] != 'disabled') {
            Play(x)
            win()

        }
        e.target.classList.add('disabled')

    }

}
function Play(x) {
    var respond = false

    // check if the word includes clicked letter 
    for (i = 0; i < answer.children.length; i++) {
        if (x == answer.children[i].children[0].innerText) { // shows the letter 
            answer.children[i].children[0].style.opacity = '1'
            respond = true
            answer.children[i].classList.add('done')
            //adds done to check in case of winning
        }
    }
    // if letter is correct, respond will change to true so the wrong answer will not increase
    if (respond === false) {
        wrongAnswer++;
        lives.innerText = Number(lives.innerText) - 1
    }
    // if its increase, shows the proper body part
    if (wrongAnswer == 1) {
        show(head)
    }
    if (wrongAnswer == 2) {
        show(body)
    }
    if (wrongAnswer == 3) {
        show(arms)
    }
    if (wrongAnswer == 4) {
        show(wholeBody)
    }
    if (wrongAnswer == 5) {
        loose()
        setTimeout(function () { Loose.style.opacity = '1'; }, 1500)
    }

}
function win() { // checks for done class
    var letters = []

    for (i = 0; i < answer.children.length; i++) {
        if (answer.children[i].classList.length > 1) {
            letters.push(answer.children[i])
            //if letter includes done class adds to an array

        }
    }
    // checks if the array has same length with the letters of the word 
    if (letters.length == answer.children.length && letters.length > 0) {
        x = false

        setTimeout(function () { Return(x); }, 1000)
        setTimeout(function () { Win.style.opacity = '1'; }, 1500)

    }
}

function loose() {

    x = false
    Return(x)

    setTimeout(function () { correct.style.opacity = '1'; }, 2500)

}
function OK() {
    Win.style.opacity = '0';
    Loose.style.opacity = '0';
    result.style.opacity = '0';
    setTimeout(function () { hide(result); }, 1000)
    Return(x = true)
    setTimeout(function () { correct.style.opacity = '0'; }, 1000)

}
