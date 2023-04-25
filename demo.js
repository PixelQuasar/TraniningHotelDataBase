const addToCart = (state, id, price) => {
    let array = [...state]

    let hasThisProduct = false
    for (let i = 0;  i < array.length; i++) {
        const element = array[i]
        if (element.id == id) { 
            array[i].quantity += 1
            hasThisProduct = true
        }
    }
    if (!hasThisProduct) array.push({
        id: id,
        quantity: 1,
        price: price
    })
    return array
}

let array = []

array = addToCart(array, "123", 100)
array = addToCart(array, "123", 100)
array = addToCart(array, "456", 150)


console.log(array)

return {
    ...state,
    cart: state.cart ? addToCart(state.cart, action.id, action.price) : [{id: action.id, quantity: 1, price: action.price}]
}