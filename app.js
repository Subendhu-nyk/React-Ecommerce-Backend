const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const userRoutes = require('./routes/user')
const Product=require('./model/product')
const sequelize=require('./util/product')
const User=require('./model/user')
const productRouter=require('./routes/product')
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))



app.use('/user', userRoutes)
app.use(productRouter)

User.hasMany(Product);
Product.belongsTo(User);

sequelize.sync()
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    })