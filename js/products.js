
import { filteringAnArray } from "./libs/filterArray.js";
async function getAllProducts() {
    const response = await fetch('https://sem-project-api.herokuapp.com/api/products/');
    const data = await response.json();
    const result = data.data;

    
    // const resultpath = result;
console.log(result)

const searchInput = document.querySelector("#searchBar")

function prodCards(array){
    for (let i = 0; i < array.length; i++) {
        document.querySelector('.all__products').innerHTML += `
            <div class="all-products__card">
                <img class ="cardImg" src="${array[i].attributes.imgurl}"></img>
                <h2>${array[i].attributes.title}</h2>
                <p>${array[i].attributes.description}</p>
                <div class="shop_btn">
                <a href="details.html?id=${array[i].id}">Read More</a>
                </div>
            </div>
            `;
          }
}
prodCards(result)

searchInput.onkeyup = (()=>{
    document.querySelector(".all__products").innerHTML = ""
    let searchArray = filteringAnArray(result, searchInput.value)
    prodCards(searchArray)
})
 }

   

getAllProducts();


