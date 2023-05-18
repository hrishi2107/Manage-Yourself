require('../src/db/mongoose')
const Task=require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('63c06a640f4ff12c9a566ad7').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskandCount= async (id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count
}

deleteTaskandCount('63c05b68b8b71bd61ba6703b').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})