const tabs = document.querySelectorAll(".tabheader__item")
const tabContent = document.querySelectorAll(".tabcontent")
const tabsParent = document.querySelector(".tabheader__items")

const hideTabContent = () => {
     tabContent.forEach(item =>{
          item.style.display = "none"
     })
     tabs.forEach(item => {
          item.classList.remove("tabheader__item_active")
     })
}


const showTabContent = (i = 0) => {
     tabContent[i].style.display = "block"
     tabs[i].classList.add("tabheader__item_active")
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
     if(event.target.classList.contains("tabheader__item")){
          tabs.forEach((item, i)=>{
               if (event.target === item){
                    hideTabContent()
                    showTabContent(i)
                    q = i
               }
          })
     }
}
const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const modalClose = document.querySelector(".modal__close")
const modalTrigger2 = document.querySelector(".btn_dark")

const openModal = () => {
modal.classList.add("show")
modal.classList.remove("hide")
document.body.style.overflow = "hidden"
}
const closeModal = ()=>  {
     modal.classList.add("hide")
modal.classList.remove("show")
document.body.style.overflow = ""

};


modalTrigger.onclick = () => openModal()
modalClose.onclick = () => closeModal()

modal.onclick = event => event.target === modal ? closeModal() : false
modal.onkeydown = event => event.code === "Escape" ? closeModal() : false


// dz1
let q = 0;
function slider () {
     const sl = setInterval(()=>{
          q++
          if (q > 3) {
               q = 0
          }
          hideTabContent()
          showTabContent(q)
     }, 2000)
}
slider()


// dz2

const int = () => {
     let page = document.documentElement
     if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
     openModal()
     document.body.style.overflow = "hidden"
     }
}
     window.addEventListener("scroll", int)
     modalTrigger2.onclick = () => openModal()



















// 
// 
// 
