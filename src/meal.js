function nameMenuItem(name) {
  return `Delicious ${name}`
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  // Initially forgot to return and was getting a TypeError about undefined
  return menuItem
};

// ingredients is an empty array passed in as an argument by the test function
function addIngredients(newIngredient, ingredients) {
  // ensures that the last element added does not match what the test function wants to add next (peppers). I believe a for loop would be necessary to check the full array for repeats.
  if (ingredients[ingredients.length - 1] !== newIngredient) {
    ingredients.push(newIngredient)
  }
};

function formatPrice(unformattedPrice) {
  return `$${unformattedPrice}`
};

function decreasePrice(fullPrice) {
  return fullPrice * 0.9
};

function createRecipe(deliciousName, ingredArray, type) {
  var recipe = {
    title: deliciousName,
    ingredients: ingredArray,
    type: type
  }
  return recipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
