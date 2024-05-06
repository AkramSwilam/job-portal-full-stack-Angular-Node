import { Router } from "express";
import * as usersController from "./users.controller.js"
import * as usersValidationSchemas from "./users.validation.js"
import { appValidator } from "../../middelwares/app.validation.js";
import { allowedTo } from "../../middelwares/authorization.js";
import { checkUserToken } from "../../middelwares/chcek_user_token.js";
import Joi from "joi";
import { PasswordLimiter, signInLimiter } from "./users.middelwares.js";
export const usersRouter=Router()

usersRouter.post("/signup",appValidator(usersValidationSchemas.addUserSchema),usersController.signup)

usersRouter.post("/login",usersController.signin)

usersRouter.get("/",usersController.getUsers)


usersRouter.get("/:id",usersController.getUserData)

// usersRouter.get("/confirmEmail/:token",usersController.confirmEmail)
// usersRouter.get("/newConfirmEmail/:token",usersController.newConfirmEmail)

/*usersRouter.put("/",checkUserToken,
appValidator(usersValidationSchemas.updateUserValidation),usersController.updateUserFromUser)
*/





usersRouter.delete("/",checkUserToken,usersController.deleteUserFromUser)




