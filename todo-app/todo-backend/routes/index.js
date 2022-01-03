const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async(req, res) => {
  const count = await redis.getAsync('todoCounter')
  res.send({
    'added_todos': count || 0
  })
})

module.exports = router;
