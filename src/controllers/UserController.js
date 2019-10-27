const User = require('../models/User')

module.exports =
{
    async store(req,res)
    {
        const { email,name } = req.body
        const user = await User.create({ email, name })

        res.json(user)
    },

    async index(req,res)
    {
        const users = await User.findAll()

        res.json(users)
    }
}