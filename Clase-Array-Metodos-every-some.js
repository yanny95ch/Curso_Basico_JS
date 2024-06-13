//Methods that DO NOT modify the original array (inmutability)

const ages = [21, 25, 19, 30, 22];
//every()

const allAgesAdults = ages.every(age => age > 20)

console.log(ages);
 console.log(allAgesAdults);

 //some 
  
 const someAges = ages.some(age => age > 29)

 console.log(ages);
 console.log(someAges);