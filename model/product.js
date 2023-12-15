const Sequelize=require('sequelize')
const sequelize=require('../util/product')

const product=sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    title:{
        type:Sequelize.STRING,    
        allowNull:false,      
       
    },   
    
    imageUrl:{
        type:Sequelize.STRING,      
        allowNull:false,

    },
    price:{
        type:Sequelize.INTEGER,          
        allowNull:false, 
    } 

})

module.exports=product;