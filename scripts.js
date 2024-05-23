// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },

];
// 1. ForEach Basics
// Log each name and each province to the console
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase Transformation
// Use map to create a new array of province names in all uppercase
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// 3. Name Lengths
// Create a new array using map that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
// Use sort to alphabetically sort the provinces
const sortedProvinces = [...provinces].sort(); // Use spread operator to avoid mutating the original array
console.log(sortedProvinces);

// 5. Filtering Cape
// Use filter to remove provinces containing "Cape". Log the count of remaining provinces
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// 6. Finding 'S'
// Create a boolean array using map to determine if a name contains the letter 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// 7. Creating Object Mapping
// Use reduce to transform the names array into an object mapping names to their respective provinces
const nameToProvince = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvince);

// Advanced Exercises (Single console.log Execution)

// 1. Log Products
// Iterate over the products array, logging each product name
console.log(products.forEach(product => console.log(product.product)));

// 2. Filter by Name Length
// Filter out products with names longer than 5 characters
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation
// Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce
console.log(products
  .filter(product => String(product.price).trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((total, product) => total + product.price, 0)
);

// 4. Concatenate Product Names
// Use reduce to concatenate all product names into a single string
console.log(products.reduce((acc, product) => acc + product.product, ''));

// 5. Find Extremes in Prices
// Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const validProducts = products.filter(product => String(product.price).trim() !== '').map(product => ({ ...product, price: Number(product.price) }));
const highestPricedProduct = validProducts.reduce((max, product) => product.price > max.price ? product : max);
const lowestPricedProduct = validProducts.reduce((min, product) => product.price < min.price ? product : min);
console.log(`Highest: ${highestPricedProduct.product}. Lowest: ${lowestPricedProduct.product}.`);

// 6. Object Transformation
// Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values
console.log(Object.entries(products).reduce((acc, [key, product]) => {
  acc[key] = { name: product.product, cost: product.price };
  return acc;
}, {}));
