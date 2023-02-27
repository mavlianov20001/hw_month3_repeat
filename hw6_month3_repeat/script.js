const block = document.querySelector('.card')
const btnNazad = document.querySelector('.btn-prev')
const btnPered = document.querySelector('.btn-next')
let count = 1

const fetchingData = () => {
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

btnPered.onclick = () => {
    count++
    fetchingData()
}


btnNazad.onclick = () => {
    if (count > 1 ) {
        count--
        fetchingData()
    } else{
        console.log('false ')
    }
}

fetchingData()



