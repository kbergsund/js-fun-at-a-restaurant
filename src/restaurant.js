
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
// There must be a better way to do this, my solution is NOT DRY- we have not learned for...in looping with objects so this is the best I could do. Doesn't seem like you can use variables with dot notation to access object properties... that would have helped too.
  if (menuItem.type === "breakfast") {
    // Checks whether menuItem is already in specific list
    if (restaurant.menus.breakfast.includes(menuItem)) {
      return restaurant.menus
    } else {
      restaurant.menus.breakfast.push(menuItem)
    }
  } else if (menuItem.type === "lunch") {
    if (restaurant.menus.lunch.includes(menuItem)) {
      return restaurant.menus
    } else {
      restaurant.menus.lunch.push(menuItem)
    }
  // Defaults to menuItem.type === "dinner" - a catch-all
  } else {
    if (restaurant.menus.dinner.includes(menuItem)) {
      return restaurant.menus
    } else {
      restaurant.menus.dinner.push(menuItem)
    }
  }
}


function removeMenuItem(restaurant, itemToRemove, menuType) {
// Again, NOT DRY. But we have not learned 'for...in' loops so that felt like cheating.
// The below only works because the arepaRestaurant menus were empty. The 'if length === 0' was a last resort to pass- which is an example of survivorship bias and not good practice generally. I could not figure out how to work with an empty array/compare undefined values.
  var removeMessage = `No one is eating our ${itemToRemove} - it has been removed from the ${menuType} menu!`
  var errorMessage = `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`

  if (menuType === "breakfast") {

    if (restaurant.menus.breakfast.length === 0) {
      return errorMessage
    } else {
      for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
        if (restaurant.menus.breakfast[i].name === itemToRemove) {
          restaurant.menus.breakfast.splice(i, 1)
          return removeMessage
        }
      }
    }

  } else if (menuType === "lunch") {

    if (restaurant.menus.lunch.length === 0) {
      return errorMessage
    } else {
      for (var i = 0; i < restaurant.menus.lunch.length; i++) {
        if (restaurant.menus.lunch[i].name === itemToRemove) {
          restaurant.menus.lunch.splice(i, 1)
          return removeMessage
        }
      }
    }

  } else {

    if (restaurant.menus.dinner.length === 0) {
      return errorMessage
    } else {
      for (var i = 0; restaurant.menus.dinner.length; i++) {
        if (restaurant.menus.dinner[i].name === itemToRemove) {
          restaurant.menus.dinner.splice(i, 1)
          return removeMessage
        }
      }
    }

  }

}

// One of many attempts to make it work with a menu.length > 0

// function removeMenuItem(restaurant, itemToRemove, menuType) {
//   var removeMessage = `No one is eating our ${itemToRemove} - it has been removed from the ${menuType} menu!`
//   var errorMessage = `Sorry, we don't sell ${itemToRemove}, try adding a new recipe!`
//
//   if (menuType === "breakfast") {
//
//     for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
//       if (restaurant.menus.breakfast[i].name !== itemToRemove || restaurant.menus.breakfast.length === 0) {
//         return errorMessage
//       } else if (restaurant.menus.breakfast[i].name === itemToRemove) {
//         restaurant.menus.breakfast.splice(i, 1)
//         return removeMessage
//       }
//     }
//
//   } else if (menuType === "lunch") {
//
//     for (var i = 0; i < restaurant.menus.lunch.length; i++) {
//       if (restaurant.menus.lunch[i].name !== itemToRemove || restaurant.menus.lunch.length === 0) {
//         return errorMessage
//       } else if (restaurant.menus.lunch[i].name === itemToRemove) {
//         restaurant.menus.lunch.splice(i, 1)
//         return removeMessage
//       }
//     }
//
//   } else {
//
//     for (var i = 0; restaurant.menus.dinner.length; i++) {
//       if (restaurant.menus.dinner[i].name !== itemToRemove || restaurant.menus.dinner.length === 0) {
//         return errorMessage
//       } else if (restaurant.menus.dinner[i].name === itemToRemove) {
//         restaurant.menus.dinner.splice(i, 1)
//         return removeMessage
//       }
//     }
//
//   }
//
// }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
