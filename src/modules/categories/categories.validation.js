import Joi from "joi";

export const addCategoryValidation=Joi.array().items(
    Joi.object(
        {
            CategoryName:Joi.string().required()
        }
    ).required()
).required()





