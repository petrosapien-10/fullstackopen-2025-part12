const express = require('express')
const redis = require('../redis')
const router = express.Router()

router.get('/', async (req, res) => {
  const addedTodos = await redis.getAsync('added_todos') || 0
  res.json({added_todos: Number(addedTodos)})
})

module.exports = router