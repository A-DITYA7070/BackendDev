import mongoose from "mongoose";

const productSchema = mongoose.Schema({
      name:{
        type:String,
        required:[true,"Enter prod name "],
        trim:true
      },
      description:{
        type : String ,
        required:[true,"Enter prod desc "]
      },
      price:{
        type:Number,
        required:[true,"Enter price"],
        maxLength:[8,"price cannot exceed 8 chars "]
      },
      rating:{
        type:Number,
        default:8
      },
      images:[ 
        {
            public_id:{
                type:String,
                required:true,
             },
             url:{
                 type:String,
                 required:true,
             }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter category "]
    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"stock can't exceed 4 digit"],
        default:1
    },
    noOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:[true,"Enter the comment"]
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

export default new mongoose.model("Product",productSchema);