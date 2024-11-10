import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    answer:{
        type:{},
        required:true,
    },
    role:{
        type:Number,
        default:0  //0 means customer and 1 means admin
    }

},{timestamps:true})

export default mongoose.model('customers',userSchema);