const express=require('express')
const router=express.Router()
const path=require('path')
const userController = require('../controller/user');
const bodyParser=require('body-parser')
router.use(express.json());
const cors=require('cors');
router.use(cors())
router.use(express.static(path.join(__dirname,'public')))
router.use(express.static(path.join(__dirname, '..', 'views')));
router.use(bodyParser.urlencoded({extended:false}))

router.post('/signup', userController.signup);


router.post('/login', userController.login)


module.exports = router;