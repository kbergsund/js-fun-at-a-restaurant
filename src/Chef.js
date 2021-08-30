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
    if (this.restaurant.menus.breakfast.length === 0) {
      return `Sorry, we aren't serving ${item.name} today.`
    } else {
      for (var i = 0; i < this.restaurant.menus.breakfast.length; i++) {
        if (this.restaurant.menus.breakfast[i].name === item.name) {
          return `Yes, we're serving ${item.name} today!`
        }
      }
    }
  }
}


module.exports = Chef;
