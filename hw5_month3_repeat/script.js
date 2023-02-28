const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const cny = document.querySelector("#cny")


const convert = (elem, target, target2,isTrue) => {
     elem.oninput = () => {
          const request = new XMLHttpRequest()
          request.open("GET", "data.json")
          request.setRequestHeader("Content-type", "application/json")
          request.send()
          request.onload = () => {
               const response = JSON.parse(request.response)
               console.log(response);
               if (isTrue) {
                    target.value = ( elem.value / response.usd ).toFixed(2)
                    target2.value = ( elem.value / response.cny ).toFixed(2)

               } else if ( elem === usd) {
                     target.value = ( elem.value * response.usd ).toFixed(2)
                    target2.value = ( target.value / response.cny ).toFixed(2)
               
               } else if ( elem === cny) {
                    target.value = (elem.value * response.cny ).toFixed(2)
                    target.value = (elem.value * response.usd ).toFixed(2)
               } 
               
                    elem.value === "" && (target.value = "")
                    elem.value === "" && (isTrue.value = "")    
          }
     }
}
convert(som, usd, cny, true)
convert(usd, som, cny, false)
convert(cny, som, usd, false)



// const convert = (elem, target ,isTrue) => {
//      elem.oninput = () => {
//           const request = new XMLHttpRequest()
//           request.open("GET", "data.json")
//           request.setRequestHeader("Content-type", "application/json")
//           request.send()
//           request.onload = () => {
//                const response = JSON.parse(request.response)
//                console.log(response);
//                if (elem === som) {
//                     target.value = ( elem.value / response.usd ).toFixed(2)
//                     isTrue.value = ( elem.value / response.cny ).toFixed(2)

//                } else if ( elem === usd) {
//                      target.value = ( elem.value * response.usd ).toFixed(2)
//                     isTrue.value = ( elem.value * response.usd ).toFixed(2)
               
//                } else if ( elem === cny) {
//                     target.value = (elem.value * response.cny ).toFixed(2)
//                     isTrue.value = (elem.value * response.cny / response.usd ).toFixed(2)
//                }
//                     elem.value === "" && (target.value = "")
//                     elem.value === "" && (isTrue.value = "")    
//           }
//      }
// }
// convert(som, usd, cny, true)
// convert(usd, som, cny, false)
// convert(cny, som, usd, false)


// const som = document.querySelector('#som')
// const usd = document.querySelector('#usd')
// const eur = document.querySelector('#eur')

// const convert = (elem, target, isTrue) => {
//      elem.addEventListener('input', () => {
//           const request = new XMLHttpRequest()
//           request.open("GET", "data.json")
//           request.setRequestHeader("Content-type", "application/json")
//           request.send()
//           request.onload = () => {
//                const response = JSON.parse(request.response)
//                console.log(response);
//                if (elem === som) {
//                     target.value = (elem.value / response.usd).toFixed(2)
//                     isTrue.value = (elem.value / response.eur).toFixed(2)
//                } else if (elem === usd) {
//                     target.value = (elem.value * response.usd).toFixed(2)
//                     isTrue.value = (elem.value * response.usd / response.eur).toFixed(2)
//                } else if (elem === eur) {
//                     target.value = (elem.value * response.eur).toFixed(2)
//                     isTrue.value = (elem.value * response.eur / response.usd).toFixed(2)
//                }
//                elem.value === '' && (target.value = '')
//                elem.value === '' && (isTrue.value = '')
//           }
//      })
// }

// convert(som, usd, eur, true)
// convert(usd, som, eur, false)
// convert(eur, som, usd, false)
