import mongoose from "mongoose";
import validator from "validator"
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    mobileNumber: {
        type: String,
        trim: true,
        required: [true, "Please enter a phone number"],
        unique:[true,"mobile Number already in exist"],
        maxlength: [11, "Maximum length must be 10"],
      },
      email:{
        type:String,
        required:[true,"Email address is required"],
        unique:[true,"Email already in use"],
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
})