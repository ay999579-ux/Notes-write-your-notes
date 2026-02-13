//this is use to replace the function(req,res){....}
// function(req,res){...} this is called the controller

const user = require("../modul/user.schema")


module.exports.allUsers = async function (req, res) {
    try {
        const User = await user.find()
        res.json({
            message: 'Here is all users',
            User
        })

    } catch (error) {
            console.log('❌ error from all user ', error)
            res.status(500).json({ error: 'Failed to fetch users' })
    }
}

module.exports.created = async function (req, res) {
    try {
        const formData = req.body
        const userCreated = await user.create({
            title: formData.title,
            content: formData.content
        })

        res.json({
            message: '✔ user Created',
            User: userCreated
        })

    } catch (error) {
        console.log('❌ error from second', error)
        res.status(500).json({ error: 'Failed to create user' })
    }
}

module.exports.updated = async function(req,res){
     try {
           const id = req.params.id
           const data = req.body
           const UserData = await user.findByIdAndUpdate(id,{
                 title: data.title,
                 content: data.content
           },{new: true})

           res.json({
              message: '👍 user detail is  updated Successfuly 🎉',
              UserData
           })


     } catch (error) {
            console.log('❌ error from  Update', error)
            res.status(500).json({ error: 'Failed to update user' })
     }
}

module.exports.deleted = async function(req,res){
    try {
            const id = req.params.id
            const deleted =  await user.findByIdAndDelete(id)
            res.json({
                message: 'user remove successfuly ',
                deleted
            })
    } catch (error) {
           console.log('❌ error from  Delete', error)
           res.status(500).json({ error: 'Failed to delete user' })
    }
}
