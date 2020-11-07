const products = [{name: 'computer mouse'}];
const product = products[0];

// Every single value in javascript resolves to truthy or falsy - evaluated in a boolean 
// Truthy - Values that resolve to true in boolean context
// Truthy - even empty arrays or empty objects will evaluate to truthy

// Falsy - Values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined

if (product) {
  console.log('Product found')
} else {
  console.log('Prodcut not found')
}