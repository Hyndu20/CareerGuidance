const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { authenticate } = require('../middlewares/userauth')
const { createUser, updateUserById, displaySkill } = require('../controllers/userController')
const { login } = require('../controllers/userController')
const { userbyId } = require('../controllers/userController')

//post & get
router.post('/adduser', createUser)
router.post('/userlogin', login)
router.get('/myprofile',authenticate,userbyId)
router.get('/getskills',authenticate, displaySkill)
router.put('/updateuser/:id',authenticate,updateUserById)


module.exports = router;