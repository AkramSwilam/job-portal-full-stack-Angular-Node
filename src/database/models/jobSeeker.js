import mongoose from "mongoose";


const JobSeekerSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true
  },
  EmailId: {
    type: String,
    required: true
  },
  MobileNo: {
    type: String,
    required: true
  },
  ExperienceStatus: {
    type: String,
    required: true
  },
  ResumeUrl: {
    type: String,
    required: true
  },
  JobSeekerSkills: [{
    SkillName: {
      type: String,
      required: true
    },
    DurationOfSkill: {
      type: String
    }
  }],
  JobSeekerWorkExperiences: [{
    CompanyName: {
      type: String,
      required: true
    },
    IsCurrentCompany: {
      type: Boolean,
      default: false
    },
    Profile: {
      type: String,
      required: true
    },
    StartDate: {
      type: Date,
      required: true
    },
    EndDate: {
      type: Date,
    },
    JobDescription: {
      type: String,
      required: true
    }
  }]
},{timestamps:true});

export const JobSeeker = mongoose.model('JobSeeker', JobSeekerSchema);


