import mongoose, { Types } from "mongoose";

const JobSchema = new mongoose.Schema({
    JobName: {
      type: String,
      required: true
    },
    CreatedDate: {
      type: Date,
      required: true
    },
    EmployerId: {
      type: Types.ObjectId,
      required: true,
      ref:"Employer"
    },
    CategoryId: {
      type: String,
      required: true
    },
    Experience: {
      type: String,
      required: true
    },
    Package: {
      type: String,
      required: true
    },
    Location: {
      type: String,
      required: true
    },
    JobDescription: {
      type: String,
      required: true
    },
    IsActive: {
      type: Boolean,
      default: true
    }
  },{timestamps:true});
  
  export const Job = mongoose.model('Job', JobSchema);