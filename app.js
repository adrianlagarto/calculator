function highlightGreyBtn(type, value){
  const glowGrey = document.querySelector(`${type}`)
    glowGrey.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      glowGrey.style.backgroundColor = 'rgb(149,149,149)';
    }, 1000);

    if(value ==='ac'){
      console.log(storeSignValue);
      console.log(defaultNum);
      console.log(storeDefaultNum);
      console.log()
      console.log('work ac')
      defaultNum = '';
      storeDefaultNum = '';
      storeSignValue = '';
      aboutToCompute = false
      ready = 0;
      return output.innerText = defaultNum
    }
}

const output = document.querySelector('#output');

let defaultNum = '';
let storeDefaultNum = '';
let storeSignValue = '';
let previousStoreSignValue = ''
let aboutToCompute = false;
let oneDot = 0;

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
    console.log(previousStoreSignValue)

    if(defaultNum!=='' && storeDefaultNum!==''){//this only works once
      total = compute(storeDefaultNum, storeSignValue, defaultNum);
      output.innerText = total;
      storeDefaultNum = total;
      defaultNum = ''
    }
    storeSignValue = signValue;

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
    }, 400);
    //^color hightlights when buttons are pressed ^

    if(value === '.' && defaultNum.includes('.')){
      console.log('dot');
      return ;
    }

    defaultNum += `${value}`;
    output.innerText = defaultNum;
}

function equalOperator(sign, value){
  const equalYellow = document.querySelector(`${sign}`)
  equalYellow.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      equalYellow.style.backgroundColor = 'rgb(239,154,58)';
    }, 2000);

    console.log(storeSignValue);
    console.log(defaultNum);
    console.log(storeDefaultNum);

    if(storeSignValue !=='' && (storeDefaultNum !== '' && defaultNum === '')){
      console.log('bug?')
      total = compute(storeDefaultNum, storeSignValue, storeDefaultNum);
      storeDefaultNum = total;
      return output.innerText = total;
    }

    if(defaultNum !== '' && storeSignValue === ''){
      console.log('equal')
      return;
    }

    highlightYellow('#equal', 'total');
}

function compute(storeNum, sign, newNum){
  a = parseFloat(storeNum);
  b = parseFloat(newNum);

  if(sign === '/') return a / b;
  if(sign === '*') return a * b;
  if(sign === '-') return a - b;
  if(sign === '+') return a + b;
}


