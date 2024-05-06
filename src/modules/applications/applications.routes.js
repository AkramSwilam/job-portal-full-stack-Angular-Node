import { Router } from "express";
import * as appsController from "./applications.controller.js"
import { checkUserToken } from "../../middelwares/chcek_user_token.js";
import { allowedTo } from "../../middelwares/authorization.js";
import { appValidator } from "../../middelwares/app.validation.js";
import { addApplicationValidationSchema } from "./applications.validation.js";
export const applicationsRouter=Router()


applicationsRouter.post("/",appValidator(addApplicationValidationSchema),appsController.addApplication)

applicationsRouter.get("/",appsController.getApplications)

applicationsRouter.get("/Application/:id",appsController.getApplication)

applicationsRouter.get("/jobSeeker/:jobSeekerId",appsController.getApplicationsBySeekerId)

applicationsRouter.get("/job/:jobId",appsController.getApplicationsByJobId)


