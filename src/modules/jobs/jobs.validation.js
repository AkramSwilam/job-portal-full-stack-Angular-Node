import Joi from "joi";

export const addJobValidationSchema = Joi.object({
  JobName: Joi.string().required(),
  CreatedDate: Joi.date().iso().required(),
  EmployerId: Joi.string().required(),
  CategoryId: Joi.string().required(),
  Experience: Joi.string().required(),
  Package: Joi.string().required(),
  Location: Joi.string().required(),
  JobDescription: Joi.string().required(),
  IsActive: Joi.boolean().required()
});


export const updateJobValidationSchema = Joi.object({
    JobId: Joi.string(),
    JobName: Joi.string(),
    CreatedDate: Joi.date().iso(),
    EmployerId: Joi.string(),
    CategoryId: Joi.string(),
    Experience: Joi.string(),
    Package: Joi.string(),
    Location: Joi.string(),
    JobDescription: Joi.string(),
    IsActive: Joi.boolean()
  });


