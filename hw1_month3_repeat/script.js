// dz 1  часть

const input = document.querySelector(".input")
const button = document.querySelector(".button")
const span = document.querySelector(".result")
const regExp = /^\d{14}$/

// input.value.trim();
const onclick = function ()  {
     if (regExp.test(input.value)) {
          span.innerHTML = "КОРЕКТНО";
          span.style.color = "green";
          input.value = ""
     }else{
          span.innerHTML = "Введите ИНН: длина должна быть 14";
          span.style.color = "red";
          // input.value = ""
     }
}
button.addEventListener("click", onclick);
input.addEventListener("keydown", (e) => e.keyCode === 13 ? onclick() : false);

// dz 2 часть 

const block = document.querySelector('.small__block')


let possitionX = 0
let possitionY = 0

const move = () => {
     if(possitionX <= 440 && possitionY <= 0) {
          possitionX += 8
          block.style.left = `${possitionX}px`
          setTimeout(move, 1)
     }else if (possitionX >= 440 && possitionY <= 440){
          possitionY +=8
          block.style.top =  `${possitionY}px`
          setTimeout(move, 1)
     }else if (possitionY === 448 && possitionX !== 0){
          possitionX -= 8
          block.style.left =  `${possitionX}px`
          setTimeout(move, 1)
     }else {
          possitionY -=8
          block.style.top =  `${possitionY}px`
          setTimeout(move, 1)
     }
}
move()

