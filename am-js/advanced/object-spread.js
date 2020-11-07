let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
}

let newHouse = {
  basement: true,
  ...house,
  bedrooms: 3
}



console.log((house))
console.log((newHouse))

const person = {
  name: 'brandon',
  age: 30
}

const location = {
  city: 'Seattle',
  country: 'USA'
}

const overview = {
  ...person,
  ...location,
}

console.log(overview)