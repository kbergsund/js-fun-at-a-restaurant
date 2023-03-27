
function createRestaurant(nameInput) {
  var restaurant = {
    name: nameInput,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

function addMenuItem(restaurant, menuItem) {
  var menuType = menuItem.type;
  if(restaurant.menus[menuType].includes(menuItem)) {
    return restaurant.menus[menuType];
  } else {
    restaurant.menus[menuType].push(menuItem);
  }
}

function removeMenuItem(restaurant, itemToRemove, menuType) {
  var removeMessage = `No one is eating our ${itemToRemove} - it has been removed from the ${menuType} menu!`;
  var errorMessage = `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`;

  for (var i = 0; restaurant.menus[menuType].length; i++) {
    if (restaurant.menus[menuType][i].name === itemToRemove) {
      restaurant.menus[menuType].splice(i, 1)
      return removeMessage
    } else {
      return errorMessage
    }
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
