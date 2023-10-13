function highlightGreyBtn(type){
  const glowGrey = document.querySelector(`${type}`)
    glowGrey.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      glowGrey.style.backgroundColor = 'rgb(149,149,149)';
    }, 1000)
}

let storeNewNum = 0 ;
let sign_Value = ''
let newNum = '';
let aboutToCompute = false

function highlightYellow(sign, signValue){
  const yellow = document.querySelector(`${sign}`)
  yellow.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      yellow.style.backgroundColor = 'rgb(239,154,58)';
    }, 2000)

    if(storeNewNum!=='' && newNum!=='' && signValue.includes('+','-','*','/',)){
      console.log('its compute time')
      result = compute(storeNewNum, sign_Value, newNum)
      newSum = result;
      console.log(newSum)
      output.innerHTML = result;
    }

    if(signValue){//compute everything
      console.log('using sign')
      console.log(signValue)
      console.log(storeNewNum)
      console.log(newNum);
      aboutToCompute = true;
    }
  
    return sign_Value = signValue;
}

//storeNewNum  signvalue__  newNum



const output = document.querySelector('#output');

function highlightNum(num,value){
  const number = document.querySelector(`${num}`)
  number.style.backgroundColor = 'rgb(100,100,100)';
    setTimeout(function(){
      number.style.backgroundColor = 'rgb(50,50,50)';
    }, 400)
    //^color hightlights when buttons are pressed ^

    if(aboutToCompute){
      storeNewNum += newNum;
      console.log('got two number')
      newNum = '';
      newNum += value
      aboutToCompute = false
      console.log(storeNewNum)
      console.log(newNum)
      return output.innerText = newNum;
      //^clears the display when doing computation^
    }

    
    newNum += `${value}`
    output.innerText = newNum;
    newNumInt = parseInt(newNum)
    console.log(newNum)
    console.log(newNumInt)
    return newNum;
    //^display number^
}

function combine(storeNewNum, sign, newNum){

}

function compute(storeNum, sign, newNum){
  let total = 0;

  a = parseInt(storeNum);
  b = parseInt(newNum);

  if(sign === '/') return a / b;
  if(sign === '*') return a * b;
  if(sign === '-') return a - b;
  if(sign === '+') return a + b;
  
}

