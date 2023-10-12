function highlightGreyBtn(type){
  const glowGrey = document.querySelector(`${type}`)
    glowGrey.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      glowGrey.style.backgroundColor = 'rgb(149,149,149)';
    }, 1000)
}

let sign_Value = ''

function highlightYellow(sign, signValue){
  const yellow = document.querySelector(`${sign}`)
  yellow.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      yellow.style.backgroundColor = 'rgb(239,154,58)';
    }, 2000)

    if(signValue==='total'){//compute everything
  
    }
    if(signValue){//store the initial number and create a newNum to compute
      
      console.log('sign');
    }


    sign_Value = `${signValue}`
    return console.log(sign_Value)


}


let newNum = '';
const output = document.querySelector('#output');

function highlightNum(num,value){
  const number = document.querySelector(`${num}`)
  number.style.backgroundColor = 'rgb(100,100,100)';
    setTimeout(function(){
      number.style.backgroundColor = 'rgb(50,50,50)';
    }, 400)
    //^color hightlights when buttons are pressed ^
    newNum += `${value}`
    output.innerText = newNum;
    return newNum;
    //^display number^
}

function compute(num, sign, num){
  let total = 0;
  return total
}

