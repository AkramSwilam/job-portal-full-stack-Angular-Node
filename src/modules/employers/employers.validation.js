import Joi from 'joi';

export const addEmployerValidationSchema = Joi.object({
    Password:Joi.string().required(),
    CompanyName: Joi.string().required(),
    EmailId: Joi.string().email().required(),
    MobileNo: Joi.string().required(),
    PhoneNo: Joi.string().allow('').optional(),
    CompanyAddress: Joi.string().allow('').optional(),
    City: Joi.string().allow('').optional(),
    State: Joi.string().allow('').optional(),
    PinCode: Joi.string().allow('').optional(),
    LogoURL: Joi.string().allow('').optional(),
    GstNo: Joi.string().allow('').optional()
});

export const updateEmployerValidationSchema = Joi.object({
    EmployerId:Joi.string().required(),
    CompanyName: Joi.string(),
    EmailId: Joi.string().email(),
    MobileNo: Joi.string(),
    PhoneNo: Joi.string().allow('').optional(),
    CompanyAddress: Joi.string().allow('').optional(),
    City: Joi.string().allow('').optional(),
    State: Joi.string().allow('').optional(),
    PinCode: Joi.string().allow('').optional(),
    LogoURL: Joi.string().allow('').optional(),
    GstNo: Joi.string().allow('').optional()
});


