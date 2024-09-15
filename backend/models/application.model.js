import mongoose from "mongoose";
//for applicants -- should knew they have already applied or not
const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    status:{
        type:String,
        enum: ['pending','accepted','rejected'],
        default:'pending'
    }
},{timestamps:true});

export const Job = mongoose.model("Application", applicationSchema);
