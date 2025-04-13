
import { mongoose } from "mongoose";
import { config } from "dotenv";

config({ path: "../../config.env" });

mongoose.connect(process.env.mongodbConnect)

const travelSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
    },
    age : {
        type : String,
        required : true,
    },
    gender : {
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
    photo: {
        data: Buffer,
        contentType: String
    },
    medicalConditions: {
        type: String,
    },
    source:{
        type: String,
        required: true,
    },
    destination:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    travelMode:{
        type: String,
        required: true,
    },
    specialRequirements:{
        type: String,
        required: true,
    },
    estimatedTravelCost:{
        type: Number,
        required: true,
    },
    reimbursement:{
        type: Boolean,
        required: true,
    },
    reimbursementAmount: {
        type: Number,
    },
})

export const Travel = mongoose.model("Travel", travelSchema)