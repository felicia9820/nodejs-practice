require('../../task-manager/src/db/mongoose')
const Task = require('../../task-manager/src/models/task')

// Task.findByIdAndDelete('60fc40b8bde7804e982029a8').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const del = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60fc7ebd08913a0c88e3174f').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})