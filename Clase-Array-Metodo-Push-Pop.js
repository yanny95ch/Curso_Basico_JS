//Metodo que modifican el array original(Mutability)
//methods that modify the original Array

//Push

const countries = ['USA', 'Canada','UK'];
const newCountries = countries.push('Germany','Australia');
console.log(countries);
console.log(newCountries);

//pop

const removeCountry = countries.pop();
console.log(countries);
console.log(removeCountry);