import Joi from 'joi';

export const addJobSeekerValidationSchema = Joi.object({
  Password:Joi.string().required(),
    FullName: Joi.string().required(),
    EmailId: Joi.string().email().required(),
    MobileNo: Joi.string().required(),
    ExperienceStatus: Joi.string().required(),
    ResumeUrl: Joi.string().uri().required(),
    JobSeekerSkills: Joi.array().items(Joi.object({
      SkillName: Joi.string().required(),
      DurationOfSkill: Joi.string()
    })),
    JobSeekerWorkExperiences: Joi.array().items(Joi.object({
      CompanyName: Joi.string().required(),
      IsCurrentCompany: Joi.boolean(),
      Profile: Joi.string().required(),
      StartDate: Joi.date().iso().required(),
      EndDate: Joi.date().iso().allow(null),
      JobDescription: Joi.string().required()
    }))
  });

export const updateJobSeekerValidationSchema = Joi.object({
    JobSeekerId: Joi.number(),
    FullName: Joi.string(),
    EmailId: Joi.string().email(),
    MobileNo: Joi.string(),
    ExperienceStatus: Joi.string(),
    ResumeUrl: Joi.string().uri(),
    JobSeekerSkills: Joi.array().items(Joi.object({
      SkillName: Joi.string(),
      DurationOfSkill: Joi.string()
    })),
    JobSeekerWorkExperiences: Joi.array().items(Joi.object({
      CompanyName: Joi.string(),
      IsCurrentCompany: Joi.boolean(),
      Profile: Joi.string(),
      StartDate: Joi.date().iso(),
      EndDate: Joi.date().iso(),
      JobDescription: Joi.string()
    }))
  });


