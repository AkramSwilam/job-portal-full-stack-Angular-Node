import { Router } from "express";
import * as jobsController from "./jobs.controller.js"
import { checkUserToken } from "../../middelwares/chcek_user_token.js";
import { allowedTo } from "../../middelwares/authorization.js";
import { appValidator } from "../../middelwares/app.validation.js";
import {  addJobValidationSchema, updateJobValidationSchema } from "./jobs.validation.js";
export const jobsRouter=Router()


jobsRouter.post("/",appValidator(addJobValidationSchema),jobsController.addJob)

jobsRouter.get("/",jobsController.getJobs)

jobsRouter.get("/job/:id",jobsController.getJob)

jobsRouter.get("/active",jobsController.getActiveJobs)

jobsRouter.get("/employer/:employerId",jobsController.getJobsByEmployerId)


jobsRouter.put("/",appValidator(updateJobValidationSchema),jobsController.updateJob)

jobsRouter.delete("/:id",jobsController.deleteJob)