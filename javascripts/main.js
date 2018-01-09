'use strict';

const $ = require('jquery');

$.ajax({
    url: '../data/dogfood.json'
}).done((dogData) => {
    console.log(dogData.dog_brands);
    //loop through each brand
    dogData.dog_brands.forEach( (brand, index) =>{
        console.log(`brands${index}`, brand);
        let $dogFood = $("#dogFood");
        $dogFood.append(`<h3>${brand.name}</h3>`);
       
        //loop through each brand's type array
        brand.types.forEach( (brandType => {
            $dogFood.append(`<h4>${brandType.type}</h4>`);
            
            //loop through the brand types Volumes array 
            brandType.volumes.forEach( (vol => {
                $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
            }));
        }));
    });
})
.fail( (error) => {
    console.log('Oops', error.statusText);
});


