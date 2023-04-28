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

const increment = (state, id) => {
    return [...state].map((product) => {
        if (product.id == id) return {...product, quantity: product.quantity+1}
        return product
    })
}

const decrement = (state, id) => {
    return [...state].map((product) => {
        if (product.id == id) return {...product, quantity: product.quantity-1}
        return product
    }).filter((product) => product.quantity > 0)
}

let array = []

array = addToCart(array, "123", 100)
array = addToCart(array, "123", 100)
array = addToCart(array, "456", 150)

array = decrement(array, "123")
array = decrement(array, "123")
array = decrement(array, "123")

console.log(array)

const summary = array.map((product) => product.price).reduce((a, b) => a + b, 0)

console.log(summary)


a = prompt()
b = prompt()

console.log(a + b)
