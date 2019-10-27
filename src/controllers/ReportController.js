const User = require('../models/User')
const { Op } = require('sequelize')

module.exports = 
{
    async show(req,res)
    {
        const users = await User.findAll(
        {
            attributes: ['name','email'],
            where:
            {
                email:
                {
                    [Op.iLike] : '%@cin.ufpe.br'
                }
            },
            include:
            [
                { association: 'addresses', where: { street: 'rua' }},
                { association: 'techs', required: false , where: { name : { [Op.iLike] : 'React%' } } }
            ]

        })

        return res.json(users)

    }
}