import { User } from "../../database/models/user.js";
import { asyncHandler } from "../../utils/error_handling.js";
import jwt, { decode } from "jsonwebtoken"
import { crudOps } from "../../utils/crud_ops.js";
import { Employer } from "../../database/models/employer.js";

export const addEmployer = crudOps.addModel(Employer)

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
