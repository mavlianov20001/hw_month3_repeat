const get = document.querySelector(".get__btn")
const divX = document.querySelector(".data")

get.onclick = () =>{
const zapros = new XMLHttpRequest()
zapros.open("GET","data.json")
zapros.setRequestHeader("Content-type", "application/json")
zapros.send()
zapros.addEventListener("load", () => {
     const data = JSON.parse(zapros.response)
     data.forEach(item => {
          const div = document.createElement("div")
          div.setAttribute("class","block")
          div.innerHTML = `
          <div class="card">
          <img class= "image" src="${item.img}">
          <h2>Name: ${item.name}</h2>
          <h2>Patronymics: ${item.Patronymics}</h2>
          <h2>Surname: ${item.surName}</h2>
          <h2>Age: ${item.age}</h2>
          </div>
          `
divX.append(div)

     });
})

}