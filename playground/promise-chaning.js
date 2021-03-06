require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60fc7c309a08a31e90b285e4', { age: 1 }).then((user) => {
//     console.log(user)

//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAge = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAge('60fc7c309a08a31e90b285e4', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

