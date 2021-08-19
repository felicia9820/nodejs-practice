//Object shorthand: when key name equals varialbe name
const nam = 'Andrew'
const userAge = 27

const user = {
    nam,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { label:productLabel, price, stock, rating=5 } = product

console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)

transaction('order')