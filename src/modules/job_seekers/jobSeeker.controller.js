import { User } from "../../database/models/user.js";
import { asyncHandler } from "../../utils/error_handling.js";
import jwt, { decode } from "jsonwebtoken"
import { crudOps } from "../../utils/crud_ops.js";
import { JobSeeker } from "../../database/models/jobSeeker.js";

export const addJobSeeker = asyncHandler(
    async(req,res,nxt)=>{
        const {Password,EmailId}=req.body
        delete req.body["Password"]
        const doc = await JobSeeker.create(req.body)
        if(doc) User.create({Password,EmailId,UserRole:'JobSeeker',JobSeekerId:doc._id})
        
        return res.json({Result:true,doc})
    }
)



export const deleteJobSeeker = crudOps.deleteModel(JobSeeker)

export const getJobSeekers = crudOps.getAll(JobSeeker)

export const getJobSeeker = crudOps.getOne(JobSeeker)
