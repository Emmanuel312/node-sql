const User = require('../models/User')
const Address = require('../models/Address')

module.exports = 
{
    async store(req,res)
    {
        const { user_id } = req.params
        const { zipcode,street, number } = req.body

        const user = await User.findByPk(user_id)

        if(!user) return res.status(400).json({ error: 'User not found' })

        const addresses = await Address.create({ zipcode,street,number,user_id })

        res.json(addresses)
    },

    async index(req,res)
    {
        const { user_id } = req.params

        
        const user = await User.findByPk(user_id, 
        {
            include: { association: 'addresses' }
        })

        if(!user) return res.status(400).json({ error: 'User not found' })

       
        res.json(user)
    }
}