/*Some vars*/
let a = 0;
let b = 0;
let result = 0;
let operator = 0;
let lastOperator = 0;

/*The main function*/
function operate(x) {
    b = parseFloat(document.getElementById('display').textContent);
    
    /*Allows operators to be changed after pressing them */
    if (document.getElementById('display').textContent==''){changeOp(x)}else{

    /*Applying the calculation from the previous operator*/
    if (lastOperator==1) {result=add(a,b)};
    if (lastOperator==2) {result=subtract(a,b)};
    if (lastOperator==3) {result=multiply(a,b)};
    if (lastOperator==4) {result=divide(a,b)};
    
    /*Updating the screen depending on the operator pressed*/
    /*ADD*/
    if (x==1) {
        if (lastOperator==0){result=add(a,b)};
        lastOperator = 1;
        operator = ' +';
        a = result;
        document.getElementById('displayResult').textContent=result+operator;
        document.getElementById('display').textContent='';
    }

    /*SUBTRACT*/
    if (x==2) {
        if (lastOperator==0){result=add(a,b)};
        lastOperator = 2;
        operator = ' -';
        a = result;
        document.getElementById('displayResult').textContent=result+operator;
        document.getElementById('display').textContent='';
    }

    /*MULTIPLY*/
    if (x==3) {
        if (lastOperator==0){result=add(a,b)};
        lastOperator = 3;
        operator = ' ×';
        a = result;
        document.getElementById('displayResult').textContent=result+operator;
        document.getElementById('display').textContent='';
    }

    /*DIVIDE*/
    if (x==4) {
        if (lastOperator==0){result=add(a,b)};
        lastOperator = 4;
        operator = ' ÷';
        a = result;
        document.getElementById('displayResult').textContent=result+operator;
        document.getElementById('display').textContent='';
    }

    /*EQUALS*/
    if (x==5) {
        /*bugfix*/
        if (document.getElementById('displayResult').textContent != ''){
        document.getElementById('display').textContent=result;
        document.getElementById('displayResult').textContent='';
        /*bugfix: prevents dividing by 0*/
        if (result == Infinity){document.getElementById('displayResult').textContent='You cannot divide by 0.'; 
                                document.getElementById('display').textContent='Press AC.'}
        a = 0;
        b = 0;
        operator = 0;
        lastOperator = 0;
        } else return;
    }
}
}

/*AC*/
function deleteAll() {
    document.getElementById('display').textContent='';
    document.getElementById('displayResult').textContent='';
    a = 0;
    b = 0;
    result = 0;
    operator = 0;
    lastOperator = 0;
}

/*Back*/
function deleteLast() {
    let string = document.getElementById('display').textContent;
    let newString = string.slice(0,-1)
    document.getElementById('display').textContent=newString;
}

/*Updating display*/
function enterNumber(n) {
    if (n != 10){document.getElementById('display').textContent+=n}
    /*Floating point*/
    else {if (document.getElementById('display').textContent.includes('.')) {return} else document.getElementById('display').textContent+='.'}
    
}

/*Function that allows operators to be changed after pressing them */
function changeOp (x) {
    let lastSymbol = document.getElementById('displayResult').textContent.slice(-1);
    if (lastSymbol == '+' || lastSymbol == '-' || lastSymbol == '×' || lastSymbol == '÷')
    {   lastOperator = x;
        if (x==1) {document.getElementById('displayResult').textContent=document.getElementById('displayResult').textContent.slice(0,-1)+' +'}
        if (x==2) {document.getElementById('displayResult').textContent=document.getElementById('displayResult').textContent.slice(0,-1)+' -'}
        if (x==3) {document.getElementById('displayResult').textContent=document.getElementById('displayResult').textContent.slice(0,-1)+' ×'}
        if (x==4) {document.getElementById('displayResult').textContent=document.getElementById('displayResult').textContent.slice(0,-1)+' ÷'}
    } else return;
}

/*Basic math functions + Rounding*/
const add = function(a,b){return Math.round( (a+b) * 1000 + Number.EPSILON ) / 1000}
const subtract = function(a,b){return Math.round( (a-b) * 1000 + Number.EPSILON ) / 1000}
const multiply = function(a,b){return Math.round( (a*b) * 1000 + Number.EPSILON ) / 1000}
const divide = function(a,b){return Math.round( (a/b) * 1000 + Number.EPSILON ) / 1000}

/*Keyboard Support*/
document.addEventListener('keydown', (event) => {
    if (event.key == '1') {enterNumber(1)};
    if (event.key == '2') {enterNumber(2)};
    if (event.key == '3') {enterNumber(3)};
    if (event.key == '4') {enterNumber(4)};
    if (event.key == '5') {enterNumber(5)};
    if (event.key == '6') {enterNumber(6)};
    if (event.key == '7') {enterNumber(7)};
    if (event.key == '8') {enterNumber(8)};
    if (event.key == '9') {enterNumber(9)};
    if (event.key == '0') {enterNumber(0)};
    if (event.key == '.') {enterNumber(10)};
    if (event.key == '+') {operate(1)};
    if (event.key == '-') {operate(2)};
    if (event.key == '*') {operate(3)};
    if (event.key == '/') {operate(4)};
    if (event.key == 'Enter') {operate(5)}
    if (event.key == 'Backspace') {deleteLast()}
    if (event.key == 'Escape') {deleteAll()}
})