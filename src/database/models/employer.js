import { Schema, model } from "mongoose";

const employerSchema = new Schema({
    CompanyName: {
        type: String,
        required: true
    },
    EmailId: {
        type: String,
        required: true
    },
    MobileNo: {
        type: String,
        required: true
    },
    PhoneNo: {
        type: String
    },
    CompanyAddress: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    PinCode: {
        type: String
    },
    LogoURL: {
        type: String
    },
    GstNo: {
        type: String
    }
}, { timestamps: true });

export const Employer = model("Employer", employerSchema);
