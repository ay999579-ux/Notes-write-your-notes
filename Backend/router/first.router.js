const express = require('express')
const {  allUsers, created, updated, deleted } = require('../controller/first.controller')

//here is require the express in another way like express.Router()
const router = express.Router()

// router.get('/') this is called view
router.get('/',allUsers) // first is import from the controller
router.post('/created',created)
router.put('/updated/:id',updated)
router.delete('/deleted/:id',deleted)

module.exports = router
