import mongoose from "mongoose";


const ApplicationSchema = new mongoose.Schema({
  JobId: {
    type: String,
    required: true
  },
  JobSeekerId: {
    type: String,
    required: true
  },
  AppliedDate: {
    type: Date,
    required: true
  },
  ApplicationStatus: {
    type: String,
    required: true
  }
},{timestamps:true});

export const Application = mongoose.model('Application', ApplicationSchema);

