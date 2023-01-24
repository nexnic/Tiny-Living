// This is script for the home page 

// using strict mode
    'use strict';

// Check if get to object 
// using console.log()
// console.log(tl)

// Function for adding product to the page 
function addProduct() {
    
    // This is forEach loop
    // This will loop through entire array
    // now going to test add it to html side. 
   tldb.forEach(tiny => {
    mainsection.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${tiny.img[0]}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${tiny.name}</h5>
      <p class="card-text">${tiny.short_desciption}</p>
      <a href="#" class="btn btn-primary">Read more</a>
    </div>
  </div>
    
    `
   })
}
