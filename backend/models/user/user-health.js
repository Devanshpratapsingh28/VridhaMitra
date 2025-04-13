
import { mongoose } from "mongoose";
import { config } from "dotenv";

config({ path: "../../config.env" });

mongoose.connect(process.env.mongodbConnect)

const healthSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : String,
        required : true,
    },
    mobileNumber : {
        type : Number,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    emergencyContact: {
        type : Number,
        required : true,
    },
    bloodGroup: {
        type: String,
    },
    medicalHistory: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    }
    
})

export const Health = mongoose.model("Health", healthSchema)