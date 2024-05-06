import mongoose from "mongoose";

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
      type: String,
      required: true
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