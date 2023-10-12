function highlightGreyBtn(type){
  const glowGrey = document.querySelector(`${type}`)
    glowGrey.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      glowGrey.style.backgroundColor = 'rgb(149,149,149)';
    }, 1000)
}

function highlightYellow(sign){
  const yellow = document.querySelector(`${sign}`)
  yellow.style.backgroundColor = 'rgb(220,220,220)';
    setTimeout(function(){
      yellow.style.backgroundColor = 'rgb(239,154,58)';
    }, 400)
}

function highlightNum(num,value){
  const number = document.querySelector(`${num}`)
  number.style.backgroundColor = 'rgb(100,100,100)';
    setTimeout(function(){
      number.style.backgroundColor = 'rgb(50,50,50)';
    }, 400)
    //^color hightlights when buttons are pressed ^

    const output = document.querySelector('#output');
    output.innerText = `${value}`
}


const output = document.querySelector('#output');


function numberStorage(number){
  console.log(`${number}`)
  output.innerText = `${number}`
}

const button = document.querySelector('.line')

button.addEventListener("click", e =>{
  console.log();
})