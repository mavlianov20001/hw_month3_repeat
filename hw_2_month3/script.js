const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const number = document.querySelector(".num")

let intervalCount

start.addEventListener('click', secund)


function prizrak () {
     number.innerHTML++
}

function secund (){
     if(!intervalCount){
          intervalCount = setInterval (prizrak, 1000)
     }
}


stop.addEventListener('click', clear )


function clear (){
     clearInterval(intervalCount)
     intervalCount = null
}

// setInterval(() => {
     //      number.innerHTML++
     // }, 1000)

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

     