const recipes=[
    {
        "name": "Crock Pot Roast",
        "ingredients": [
            {
                "quantity": "1",
                "name": " beef roast",
                "type": "Meat"
            },
            {
                "quantity": "1 package",
                "name": "brown gravy mix",
                "type": "Baking"
            },
            {
                "quantity": "1 package",
                "name": "dried Italian salad dressing mix",
                "type": "Condiments"
            },
            {
                "quantity": "1 package",
                "name": "dry ranch dressing mix",
                "type": "Condiments"
            },
            {
                "quantity": "1/2 cup",
                "name": "water",
                "type": "Drinks"
            }
        ],
       
        "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg",
     
    },
    {
        "name": "Roasted Asparagus",
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": " asparagus",
                "type": "Produce"
            },
            {
                "quantity": "1 1/2 tbsp",
                "name": "olive oil",
                "type": "Condiments"
            },
            {
                "quantity": "1/2 tsp",
                "name": "kosher salt",
                "type": "Baking"
            }
        ],
      
        "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
        
    },
    {
        "name": "Curried Lentils and Rice",
        "ingredients": [
            {
                "quantity": "1 quart",
                "name": "beef broth",
                "type": "Misc"
            },
            {
                "quantity": "1 cup",
                "name": "dried green lentils",
                "type": "Misc"
            },
            {
                "quantity": "1/2 cup",
                "name": "basmati rice",
                "type": "Misc"
            },
            {
                "quantity": "1 tsp",
                "name": "curry powder",
                "type": "Condiments"
            },
            {
                "quantity": "1 tsp",
                "name": "salt",
                "type": "Condiments"
            }
        ],
       
        "imageURL": "https://thevietvegan.com/wp-content/uploads/2012/05/img_5947-720x540.jpg"
    },
   
]


    const demo =document.getElementById("demo");

    recipes.map(x=>{
        demo.innerHTML +=`  
        <div class="m-3 card" style="width: 18rem;">
  <img src=${x.imageURL} class="card-img-top"  alt="..." style="height: 300px;">
  <div class="card-body">
  <h5 class="card-title">${x.name}</h5>
  <h6>Ingredients:</h6>
  <ol class="card-text">${x.ingredients.map(x=>`<li>${x.name}</li>`).join('')}</ol>
  </div>
  </div>
  
  `     
    })
