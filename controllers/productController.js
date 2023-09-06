import Product from "../models/productModel.js";


export const createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
       success:true,
       product
    })
}

// get all products ...

export const getAllProducts = async(req,res)=>{
    try{
        const product = await Product.find();
        res.status(201).json({
            success:true,
            product
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"false"
        })
    }
}

// update products... Admin

export const updateProducts = async(req,res,next)=>{
     try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"prod not found "
            });
        }

        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAnaModify:false
        });

        res.status(201).json({
            success:true,
            product
        })


     }catch(err){

     }
};

// delete products...

export const deleteProduct = async(req,res,next)=>{
     try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"prod not found"
            })
        }

        await product.deleteOne();

        res.status(201).json({
            success:true,
            message:"deleted success"
        })

     }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error "
        })
     }
};

// get single product details...

export const getProductDetails = async(req,res,next)=>{
    try{

        const product = await Product.findById(req.params.id);

        if(!product){
            return res.status(500).json({
                success:false,
                message:'product not found'
            });
        }
        
        res.status(201).json({
            success:true,
            product
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error "
        })
    }
}
