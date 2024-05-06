import { Router } from "express";
import * as jobSeekerController from "./jobSeeker.controller.js"
import * as jobSeekerValidation from "./jobSeeker.validation.js"
import { appValidator } from "../../middelwares/app.validation.js";

export const jobSeekerRouter = Router()


jobSeekerRouter.get("/", jobSeekerController.getJobSeekers)

jobSeekerRouter.get("/:id", jobSeekerController.getJobSeeker)

jobSeekerRouter.post("/", appValidator(jobSeekerValidation.addJobSeekerValidationSchema),
    jobSeekerController.addJobSeeker)

// jobSeekerRouter.put("/", appValidator(jobSeekerValidation.updateJobSeekerValidationSchema),
//     jobSeekerController.updateJobSeeker)

jobSeekerRouter.delete("/:id", jobSeekerController.deleteJobSeeker)
