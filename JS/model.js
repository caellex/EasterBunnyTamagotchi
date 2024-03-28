let app = document.getElementById('app');
let html;

let hungerWidth = 240;
let thirstWidth = 240;

let spawnEgg = `<div id="egg-wrap><img id="egg-image" src="egg.png"></img>`

let foodTimer;
let thirstTimer;

let rN;

let leftNum;
let rightNum;
let operatorChoices = ['-', '+', '*', '/']
let operator;
let equation;
let equationCheck = {
    leftNum: leftNum,
    rightNum: rightNum,
    operator: operator
}

let points = 0;