const Sequelize = require('../model/product');

exports.postProduct=async (req, res) => {
  console.log("id fetch>>>>>>>>>>"+ req.user.id)
    try {
        console.log("req.body",req.body)
      const title = req.body.items.title;
      const imageUrl = req.body.items.imageUrl;
      const price=  req.body.items.price;
      
     console.log(title,imageUrl,price)
      
      const data = await Sequelize.create({
        title: title,
        price: price,
        imageUrl:imageUrl,       
        userId:req.user.id      
      });        
      res.status(201).json({ newProductDetail: data });
    } catch (err) { 
      console.log("error"+err)      
    res.status(500).json({ error: err }) 
    }
  }
  // {where:{userId:req.user.id}}

  exports.getProduct=async(req,res)=>{
    try{
    const products=await Sequelize.findAll({where:{userId:req.user.id}});
    console.log(req.user.id)
    res.status(200).json({allProduct:products});
    }catch(err){
        console.log('get user is failing', JSON.stringify(err))
        res.status(500).json({error:err })
    }
}


exports.deleteProduct=async(req,res)=>{
    try{
      const uId=req.params.id
        if(uId=='undefined'|| uId.length === 0){
            console.log('ID is missing')
            return res.status(400).json({success: false, })
        }
    ;
   const noofrows= await Sequelize.destroy({where:{id:uId,userId:req.user.id}})
   console.log("noofrows",noofrows)
   if(noofrows === 0){     
    return res.status(404).json({success: false, message: 'Product doenst belong to the user'})
}
return res.status(200).json({ success: true, message: "Deleted Successfuly"})     

    }
    catch(err){
      console.log(err);
        return res.status(500).json({ success: true, message: "Failed"})
    }
  }