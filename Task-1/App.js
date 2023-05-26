// importing the module I created in CalcModule.js
const Calc = require('./CalcModule');

// These are the values that will be used to calculate the distance the car can travel feel free to test them
// liters the car uses per hundred kilometers
const Eco = 6; 
// liters of feul the tank can hold
const Tank = 25; 

// Calculating the distance using the CalcModule,js module
const Dist= Calc.CalcDist(Eco, Tank);
// Rounding the distance to 2 decimal places
const FinalDist = Dist.toFixed(2);

// Printing the distance to console
console.clear();
console.log(`The car will travel for ${FinalDist} KM.`);
