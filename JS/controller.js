function thirstDown() {
    thirstWidth -= 6;
    if(thirstWidth <= 0) thirstWidth = 0;
    updateView();
    if(thirstWidth <= 0 && hungerWidth <= 0){
        clearInterval(thirstTimer)
        clearInterval(foodTimer)
        window.alert('You lost and the game has stopped. Please refresh to restart.')
    }

}

function foodDown() {
    hungerWidth -= 8;
    if(hungerWidth <= 0) hungerWidth = 0;
    updateView();
    if(thirstWidth <= 0 && hungerWidth <= 0){
        clearInterval(thirstTimer)
        clearInterval(foodTimer)
        window.alert('You lost and the game has stopped. Please refresh to restart.')
    }


}

function feedBunny() {
    hungerWidth += 16
    if(hungerWidth >= 240){
        hungerWidth = 240;
    }
    updateView();
    randomMinigame();
}

function hydrateBunny() {
    thirstWidth += 12;
    if( thirstWidth >= 240){
         thirstWidth = 240;
    }
    updateView();
    randomMinigame();
}


function getRandomMath() {
    rN = Math.floor(Math.random() * 100)
    return rN;

}

function getRandomEquation() {
    leftNum = Math.floor(Math.random() * 10)
    rightNum = Math.floor(Math.random() * 10)
    operator = Math.floor(Math.random() * 3)

    equation = `${leftNum} ${operatorChoices[operator]} ${rightNum}`

    equationCheck = {
        leftNum: leftNum,
        rightNum: rightNum,
        operator: operator
    }

    return equation;

}

function randomMinigame() {
getRandomMath();
console.log(rN)
    if(rN < 20){
clearInterval(foodTimer);
clearInterval(thirstTimer);
let div = document.createElement('div');
div.id = 'blur-for-game';

document.getElementById('app').appendChild(div);

let p = document.createElement('p');
p.id = 'equation-text';
p.textContent = `${getRandomEquation()}`

document.getElementById('blur-for-game').appendChild(p);


let input = document.createElement('input');
input.type = 'text';
input.id = 'equation-answer';

document.getElementById('blur-for-game').appendChild(input);

let button = document.createElement('button');
button.id = 'submit-answer';
document.getElementById('blur-for-game').appendChild(button);
button.onclick = function(){
checkMath(document.getElementById('equation-answer').value);
};

let answer = document.getElementById("equation-answer");

answer.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById('submit-answer').click()

    }

})

} else {
    return
}

}

function checkMath(inputValue) {

    let userInput = parseFloat(inputValue) // Nytt for meg, parseFloat tar en string, og omgjør det til et nummer istedenfor. (Må bruke mer før jeg fult forstår meg på den)
                                           // Den kan også ta en string med tall og bokstaver, og fortsatt gjøre det om til et nummer hvis riktige forhold er tilstede. (Også usikker på hvordan dette virker 100%.)
    let correctAnswer   
    switch(equationCheck.operator) {       // Var vel på tide å prøve seg på en switch også. (Fikk en rask innføring i uke 2 eller noe slikt på første Teamoppgave av team medlem.) 
        case 0:                            // Sjekker opp hvilken operatør som er i regne stykke, og velger riktig case utifra operatør. 
            correctAnswer = equationCheck.leftNum - equationCheck.rightNum;
            break;
        case 1: 
            correctAnswer = equationCheck.leftNum + equationCheck.rightNum;
            break;
        case 2: 
            correctAnswer = equationCheck.leftNum * equationCheck.rightNum;
            break;
        case 3: 
            correctAnswer = equationCheck.leftNum / equationCheck.rightNum;
            break;
        default:
            window.alert('Error, try again'); // Error hvis operatør ikke er tilstede av en eller annen grunn.
            updateView();         // Resetter og later som ingenting skjedde :D
    }


    if(userInput === correctAnswer){        // Legger så riktig svar i en variabel, og sjekker mot bruker input.
        awardEgg();
        console.log('true dat');

    } else {
        updateView();
    }

    }

function awardEgg() {
    let div = document.createElement('div');
    div.id = 'egg';
    div.classList.add('egg-view');
    totalEggs++;

    document.getElementById('egg-holder').appendChild(div);
    updateScoreView();
    startSubTimers();
    updateView();

    if(totalEggs >= 10){
        window.alert('You won! You can continue playing, or stop. Up to you.')
    }
}


function startSubTimers() {
    foodTimer = setInterval(foodDown, 4000)
    thirstTimer = setInterval(thirstDown, 2000)

}


foodTimer = setInterval(foodDown, 4000)
thirstTimer = setInterval(thirstDown, 2000)










