import { Category } from "../../database/models/category.js";
import { crudOps } from "../../utils/crud_ops.js";
import { asyncHandler } from "../../utils/error_handling.js";


export const addCategory = asyncHandler(
    async(req,res,nxt)=>{
        console.log(req.body);
       const docs=await Category.insertMany(req.body)
       return res.json({Result:true,docs})
    }
)

export const getCategories = crudOps.getAll(Category)

export const getCategory = crudOps.getOne(Category)

export const updateCategory = crudOps.updateModel(Category)

export const deleteCategory = crudOps.deleteModel(Category)


