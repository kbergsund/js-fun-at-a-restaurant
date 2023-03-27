class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant
  }

  greetCustomer(customer, time) {
    if (time === true) {
      return `Good morning, ${customer}!`
    } else {
      return `Hello, ${customer}!`
    }
  }

  checkForFood(item) {
    // Another solution that only works if 'length === 0'. Struggling with working empty arrays.
    var itemType = item.type;
    if (this.restaurant.menus[itemType].includes(item)) {
      return `Yes, we're serving ${item.name} today!`
    } else {
      return `Sorry, we aren't serving ${item.name} today.`
    }
  }
}


module.exports = Chef;
