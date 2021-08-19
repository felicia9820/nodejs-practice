// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.toHexString())
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    } 

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Alice',
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Miley',
    //         age: 28
    //     },
    //     {
    //         name: 'Taylor',
    //         age: 31
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     } 

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'clean',
    //         completed: true
    //     },
    //     {
    //         description: 'eat',
    //         completed: false
    //     },
    //     {
    //         description: 'run',
    //         completed: false
    //     }

    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ name: 'Miley' }, (error, user) =>{
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("60fc2c5dcc98ad091cfc51bc")}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("60fc28f31ad93a46c04396e9")},
    //     {
    //         $inc: {
    //             age: 1
    //         }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 20
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(result)
    // })

    db.collection('tasks').deleteOne({
        description: "clean"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    
})
