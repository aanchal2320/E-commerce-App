import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   products : [
    {
         type: mongoose.ObjectId,
         ref: "Product",
   },
],
payment:{},
buyer:{
    type:mongoose.ObjectId,
    ref: 'User'
},
status:{
    type:'string',
    default:'Not process',
    enum:["Not process","processing","shipped","delivered","cancel"],
},
},
{timestamps:true}
);

export default mongoose.model("Order",orderSchema)