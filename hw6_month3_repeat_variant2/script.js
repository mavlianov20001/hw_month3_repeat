const block = document.querySelector('.card')
const btnNazad = document.querySelector('.btn-prev')
const btnPered = document.querySelector('.btn-next')
let count = 1

btnPered.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(dannye => {
        block.innerHTML = `
        <h2>${dannye.title}</h2>
        <span>${dannye.id}</span>
        <h3>${dannye.completed}</h3>
    `
    })
}


btnNazad.onclick = () => {
    if (count > 1 ) {
        count--
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
    .then(response => response.json())
    .then(dannye => {
        block.innerHTML = `
        <h2>${dannye.title}</h2>
        <span>${dannye.id}</span>
        <h3>${dannye.completed}</h3>
    `
    })
    } else{
        console.log('false ')
    }
}





