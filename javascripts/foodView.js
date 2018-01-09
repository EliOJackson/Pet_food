'use strict';

const $ = require('jquery');
const _startCase = require('lodash.startcase');

    //loop through each brand
    module.exports.displayFood = (dogData) => {
    dogData.forEach( (brand, index) =>{
        console.log(`brands${index}`, brand);
        let $dogFood = $("#dogFood");
        $dogFood.append(`<h3>${_startCase(brand.name)}</h3>`);
       
        //loop through each brand's type array
        brand.types.forEach( (brandType => {
            $dogFood.append(`<h4>${_startCase(brandType.type)}</h4>`);
            
            //loop through the brand types Volumes array 
            brandType.volumes.forEach( (vol => {
                $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
            }));
        }));
    });
};