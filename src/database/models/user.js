import { Schema, Types, model } from "mongoose";
// import bcrypt from "bcrypt"

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    },

}, { timestamps: true })

// userSchema.pre("findOneAndUpdate", function () {
//     if (this._update.password) {
//         this._update.password = bcrypt.hashSync(this._update.password, parseInt(process.env.SALT_ROUNDS))
//     }


// })
// userSchema.pre("save", function () {
//     console.log(this);
//     this.password = bcrypt.hashSync(this.password, parseInt(process.env.SALT_ROUNDS))
// })
export const User = model("User", userSchema)