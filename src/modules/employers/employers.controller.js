import { User } from "../../database/models/user.js";
import { asyncHandler } from "../../utils/error_handling.js";
import jwt, { decode } from "jsonwebtoken"
import { crudOps } from "../../utils/crud_ops.js";
import { Employer } from "../../database/models/employer.js";

export const addEmployer = asyncHandler(
    async(req,res,nxt)=>{
        const {Password,EmailId}=req.body
        delete req.body["Password"]
        const doc = await Employer.create(req.body)
        if(doc) User.create({Password,EmailId,UserRole:'Employer',EmployerId:doc._id})
        
        return res.json({Result:true,doc})
    }
)

export const updateEmployer = asyncHandler(
    async (req, res, nxt) => {
        const { EmployerId } = req.body
        delete req.body['EmployerId']
        console.log(req.body);
        const doc = await Employer.findByIdAndUpdate(EmployerId, req.body,{new:true})
        return res.json({ Result: true, doc })
    }
)

export const deleteEmployer = crudOps.deleteModel(Employer)

export const getEmployers = crudOps.getAll(Employer)

export const getEmployer = crudOps.getOne(Employer)
