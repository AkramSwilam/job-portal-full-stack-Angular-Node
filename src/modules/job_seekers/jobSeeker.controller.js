import { User } from "../../database/models/user.js";
import { asyncHandler } from "../../utils/error_handling.js";
import jwt, { decode } from "jsonwebtoken"
import { crudOps } from "../../utils/crud_ops.js";
import { JobSeeker } from "../../database/models/jobSeeker.js";

export const addJobSeeker = crudOps.addModel(JobSeeker)



export const deleteJobSeeker = crudOps.deleteModel(JobSeeker)

export const getJobSeekers = crudOps.getAll(JobSeeker)

export const getJobSeeker = crudOps.getOne(JobSeeker)
