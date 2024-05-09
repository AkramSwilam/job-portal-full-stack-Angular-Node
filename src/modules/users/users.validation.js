import Joi from "joi";

export const addUserSchema = Joi.object({
    EmailId: Joi.string().required(),
    Password: Joi.string().required(),
    //pattern(new RegExp("^(?=.{6,})")).required(),//RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})")).required(),

}).required()

export const updateUserValidation = Joi.object({
    EmailId: Joi.string(),
    //email: Joi.string().alphanum().email(),
    Password: Joi.string().min(6),
    oldPassword: Joi.string().min(6),
})




