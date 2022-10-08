const { Item } = require('../models')

module.exports = {
    // get all room
    async index(req, res) {
        try {
            const items = await Item.findAll()
            res.send(items)
        } catch (err) {
            res.status(500).send({
                error: 'The rooms information was incorrect'
            })
        }
    },

    // create Item
    async create(req, res) {
        try {
            const item = await Item.create(req.body)
            res.send(item.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create room incorrect'
            })
        }
    },

    // edit Item, suspend, active
    async put(req, res) {
        try {
            await Item.update(req.body, {
                where: {
                    id: req.params.itemId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Item incorrect'
            })
        }
    },

    // delete Item
    async remove(req, res) {
        try {
            const item = await Item.findOne({
                where: {
                    id: req.params.itemId
                }
            })

            if (!item) {
                return res.status(403).send({
                    error: 'The item information was incorrect'
                })
            }

            await item.destroy()
            res.send(item)
        } catch (err) {
            res.status(500).send({
                error: 'The item information was incorrect'
            })
        }
    },

    // get room by id
  async show (req, res) {
    try {
      const item = await Item.findByPk(req.params.itemId)
      res.send(item)
    } 
    catch (err) {
        res.status(500).send({
            error: 'The item information was incorrect'
        })
    }
  }
}