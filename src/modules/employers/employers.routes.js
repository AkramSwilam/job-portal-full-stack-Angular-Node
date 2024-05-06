import { Router } from "express";
import * as employersController from "./employers.controller.js"
import * as employersValidationSchemas from "./employers.validation.js"
import { appValidator } from "../../middelwares/app.validation.js";

export const employersRouter = Router()


employersRouter.get("/", employersController.getEmployers)

employersRouter.get("/:id", employersController.getEmployer)

employersRouter.post("/", appValidator(employersValidationSchemas.addEmployerValidationSchema),
    employersController.addEmployer)

employersRouter.put("/", appValidator(employersValidationSchemas.updateEmployerValidationSchema),
    employersController.updateEmployer)

employersRouter.delete("/:id", employersController.deleteEmployer)
