function highlightGreyBtn(type){
  const glowGrey = document.querySelector(`${type}`)
    glowGrey.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      glowGrey.style.backgroundColor = 'rgb(149,149,149)';
    }, 1000)
}

const output = document.querySelector('#output');

let defaultNum = '';
let storeDefaultNum = '';
let storeSignValue = '';
let aboutToCompute = false
let ready = 0;

function highlightYellow(sign, signValue){
  const yellow = document.querySelector(`${sign}`)
  yellow.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      yellow.style.backgroundColor = 'rgb(239,154,58)';
    }, 2000)
    //^color hightlights when buttons are pressed ^
    console.log(storeSignValue)
    console.log(defaultNum);
    console.log(storeDefaultNum);
    console.log(ready)

    if(defaultNum!=='' && storeDefaultNum!==''){//this only works once
      total = compute(storeDefaultNum, storeSignValue, defaultNum)
      output.innerText = total
      storeDefaultNum = total
      defaultNum = ''
    }
    storeSignValue = signValue

    if(defaultNum !==''){
      storeDefaultNum += defaultNum;
      defaultNum = '';
    }
}

//storeNewNum  signvalue__  newNum



function highlightNum(num,value){
  const number = document.querySelector(`${num}`)
  number.style.backgroundColor = 'rgb(100,100,100)';
    setTimeout(function(){
      number.style.backgroundColor = 'rgb(50,50,50)';
    }, 400)
    //^color hightlights when buttons are pressed ^

    defaultNum += `${value}`;
    output.innerText = defaultNum
}

function compute(storeNum, sign, newNum){
  a = parseInt(storeNum);
  b = parseInt(newNum);

  if(sign === '/') return a / b;
  if(sign === '*') return a * b;
  if(sign === '-') return a - b;
  if(sign === '+') return a + b;
}

//console.log(compute('2','*','2'))

