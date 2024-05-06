import { Router } from "express";
import * as categoriesController from "./categories.controller.js"
import { checkUserToken } from "../../middelwares/chcek_user_token.js";
import { allowedTo } from "../../middelwares/authorization.js";
import { appValidator } from "../../middelwares/app.validation.js";
import { addCategoryValidation } from "./categories.validation.js";
export const categoriesRouter=Router()

//,appValidator(addCategoryValidation)
categoriesRouter.post("/",categoriesController.addCategory)

categoriesRouter.get("/",categoriesController.getCategories)


//categoriesRouter.put("/update/:id",appValidator(updateCategoryValidation),categoriesController.updateCategory)

categoriesRouter.delete("/:id",categoriesController.deleteCategory)