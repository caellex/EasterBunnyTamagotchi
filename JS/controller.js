function thirstDown() {
    thirstWidth -= 6;
    updateView();

}

function foodDown() {
    hungerWidth -= 8;
    updateView();


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
    leftNum = Math.floor(Math.random() * 60)
    rightNum = Math.floor(Math.random() * 50)
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
    if(rN < 30){
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

    let userInput = parseFloat(inputValue)

    let correctAnswer
    switch(equationCheck.operator) {
        case 0: 
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
            window.alert('Error')
    }


    if(userInput === correctAnswer){
        points++;
        updateView();
        console.log('correct!')

    } else {
        updateView();
    }


}

function awardEgg() {


}


function startSubTimers() {
    foodTimer = setInterval(foodDown, 4000)
    thirstTimer = setInterval(thirstDown, 2000)

}


foodTimer = setInterval(foodDown, 4000)
thirstTimer = setInterval(thirstDown, 2000)










