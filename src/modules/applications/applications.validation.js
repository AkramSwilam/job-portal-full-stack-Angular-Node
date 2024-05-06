import Joi from "joi";


export const addApplicationValidationSchema = Joi.object({
  JobId: Joi.string().required(),
  JobSeekerId: Joi.string().required(),
  AppliedDate: Joi.date().iso().required(),
  ApplicationStatus: Joi.string().required()
});


export const updateApplicationValidationSchema = Joi.object({
  ApplicationId: Joi.string(),
  JobId: Joi.string(),
  JobSeekerId: Joi.string(),
  AppliedDate: Joi.date().iso(),
  ApplicationStatus: Joi.string()
});

