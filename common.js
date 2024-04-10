const main = document.querySelector('main');
const URL = "https://dummyjson.com/products";

let temp = serverHit()

temp.then((res)=>{
  console.log("After ===>>")
  main.innerHTML= res
});


function serverHit(){
  console.log("insdie serer hit function")
 return new Promise((resolve, reject)=>{
  fetch(URL)
  .then(res => res.json())
  .then(data =>{
    let limit = data['limit']
    let total = data['total']
    let products = data['products']
  
    console.log("====Data limit ===>>"+limit)
    console.log("====Data total Length ===>>"+total)
    
    
    let htmlString = "";
    for(let i=0; i<limit; i++){
  
      console.log("====products ===>>"+products[i]['title']);
  
      htmlString += `<div>${products[i]['title']}</div>  <img src=${products[i]['thumbnail']}>`;
    }
    resolve(htmlString)
  });
  
 })
}





