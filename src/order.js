
function takeOrder(order, ordersArray) {
  if (ordersArray.length < 3) {
    ordersArray.push(order)
  }
  return ordersArray;
}

function refundOrder(orderToRemove, ordersArray) {
  for (var i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].orderNumber === orderToRemove) {
      ordersArray.splice(i, 1)
    }
  }
}

function listItems(ordersArray) {
  listArray = []
  for (var i = 0; i < ordersArray.length; i++) {
    listArray.push(ordersArray[i].item)
  }
  //.join() converts to a new string & concatenates array contents, separating  each element with whatever is within the parentheses (defaults to commas, must manually add space)
  return listArray.join(", ")
}

function searchOrder(ordersArray, item) {
  var inList = false
  for (var i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].item === item) {
      inList = true
    }
  }
  return inList
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
