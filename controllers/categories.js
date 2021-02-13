let express = require('express')
let db = require('../models')
let router = express.Router()

router.get('/', async(req, res)=> {
  const categories = await db.category.findAll()
  res.render('categories/index', { categories })
})

router.get('/:id', async(req, res)=> {
  const category = await db.category.findOne({
    where: {
      id: req.params.id
    },
    include: [db.project]
  })
  res.render('categories/show', { category })
})

module.exports = router
