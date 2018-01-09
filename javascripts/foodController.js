'use strict';


let test = require('./foodFactory');
let foodView = require('./foodView');

module.exports.outputFood = () => {
test.fetchDogFood() //this is running the promise, below it will run dogData after the promise has been resolved.
.then( (dogData) => {
    foodView.displayFood(dogData.dog_brands);
});
};