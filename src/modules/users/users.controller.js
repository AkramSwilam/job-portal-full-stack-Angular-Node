import { User } from "../../database/models/user.js";
import { asyncHandler } from "../../utils/error_handling.js";
import jwt, { decode } from "jsonwebtoken"
import { crudOps } from "../../utils/crud_ops.js";

export const signup = asyncHandler(
    async (req, res, nxt) => {
        /* const { userName } = req.body
        //  const userExisit = await User.findOne({ userName })
        //  if (userExisit) return res.status(409).json({ message: "userName already exisits" })
*/
        const user = await User.create(req.body)

        return res.status(201).json({Result:true, doc: user })
    }
)

export const signin = asyncHandler(
    async (req, res, nxt) => {
        const { userName, Password } = req.body
        const userExisit = await User.findOne({ userName,Password })
        console.log(userExisit);
        if (!userExisit) return res.status(402).json({ message: "wrong name or password" })

        const token = jwt.sign({
            id: userExisit._id,
            userName: userExisit.userName
        }, process.env.SECRET_KEY)

        return res.status(200).json({Result:true, doc: userExisit, token })
    }
)


export const getUsers = crudOps.getAll(User)



export const updateUserFromUser = crudOps.updateFromReq('user')





export const deleteUserFromUser=crudOps.deleteFromReq('user')

export const getUserData = crudOps.getOne(User)

