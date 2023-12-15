const express=require('express')
const router=express.Router()

const bodyParser=require('body-parser')
const postProductController=require('../controller/product')
router.use(express.json());
const cors=require('cors')
const userauthentication=require('../middleware/auth')
router.use(cors())

router.use(bodyParser.urlencoded({extended:false}))



router.post('/user/add-product',userauthentication.authenticate,postProductController.postProduct );

router.get('/user/get-product',userauthentication.authenticate,postProductController.getProduct)

router.delete('/user/delete-product/:id',userauthentication.authenticate,postProductController.deleteProduct)

module.exports=router;