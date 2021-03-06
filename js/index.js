async function getMeData() {
    const response = await fetch('https://sem-project-strapi-nathalie.herokuapp.com/api/featuredimgs/1');
    const data = await response.json();
    const result = data.data;
   
	// console.log('All results from data', jsonArray);
// console.log(result)

document.querySelector('.hero__img').innerHTML += `
<img class ="hero" src="${result.attributes.imgurl}">
`
}


getMeData();


async function getHeroProduct() {
    const response = await fetch('https://sem-project-strapi-nathalie.herokuapp.com/api/featuredimgs/2');
    const data = await response.json();
    const result = data.data;
   
// console.log(result)
   
        document.querySelector('.hero__product').innerHTML += `
        <img class ="hero__display" src="${result.attributes.imgurl}">
        
        `
    }


getHeroProduct();

async function getFeaturedProducts() {
    const response = await fetch('https://sem-project-strapi-nathalie.herokuapp.com/api/products');
    const data = await response.json();
    const result = data.data;

    
    // const resultpath = result;
console.log(result)


      for (let i = 0; i < result.length; i++) {

        if (result[i].attributes.featured === true) {
            console.log(result[i].attributes.featured)

        document.querySelector('.featured__products').innerHTML += `
          <div class="featured-products__card">
          <div class="row align-items-center">
    <div class="col">
    <img class ="cardImg" src="${result[i].attributes.imgurl}"></img>
    <h2>${result[i].attributes.title}</h2>
    <p>${result[i].attributes.description}</p>
    <div class="shop_btn">
    <a href="details.html?id=${result[i].id}">Read More</a>
    </div>
    </div>
    </div>
  <div class="row align-items-end">
        `;
      }
}
   
        
    }


getFeaturedProducts();

