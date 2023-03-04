const btn = document.querySelector(".btn")
const main = document.querySelector(".block")




const url = "https://jsonplaceholder.typicode.com/posts"


     const fetchZapros = async () => {
          try {
               // await d(3000)
              const resp = await fetch(url)
              const data = await resp.json()
              console.log(data);
              data.slice(0, 5).map(i => {
               const div = document.createElement('div')
               div.innerHTML = `
               <p class="main__p__des">TITLE: ${i.title}</p>
               <img class="img" src='../img/putin.jpg'/>
               <p class="main__p__des" >Description: ${i.body}</p>
               <div class="main__p__wrapper" >
               <p class="main__p" >TITLE: ${i.title}</p>
               </div>
               <img class="img" src='../img/Zelensky.jpg'/>
               <p class="main__p__des" >Description:    ${i.body}</p>
               <img class="img" src='../img/byden.jpg'/>
               <p>${i.id}</p>
              `
              main.append(div)
              })
          }  catch {
               console.log(error);
          }
     }
      
      fetchZapros()

